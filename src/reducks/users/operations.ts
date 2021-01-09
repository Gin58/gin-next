import type { Dispatch } from "redux";
import { auth, db, now } from "src/config/firebase";
// import { initialState } from "src/reducks/store/types";
import type { LoginData, SignUpData } from "src/reducks/users/types";
import { signInAction } from "src/reducks/users/usersSlice";

export const signIn = (data: LoginData) => {
  const { email, password } = data;
  return async (dispatch: Dispatch) => {
    await auth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;

      if (user) {
        const uid = user.uid;

        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                uid: uid,
                username: data?.username,
              })
            );
          });
      }
    });
  };
};

export const signUp = (data: SignUpData) => {
  const { username, email, password } = data;
  return async () => {
    if (username === "" || email === "" || password === "") {
      alert("必須項目が未入力です");
      return false;
    }

    return auth.createUserWithEmailAndPassword(email, password).then((result) => {
      const { user } = result;
      if (user) {
        const { uid } = user;
        const timestamp = now;

        const userInitialData = {
          created_at: timestamp,
          email,
          role: "customer",
          uid,
          updated_at: timestamp,
          username,
        };

        db.collection("users").doc(uid).set(userInitialData);
      }
    });
  };
};
