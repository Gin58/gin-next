import { Dispatch } from "redux";
import { auth, db } from "src/config/firebase";
// import { initialState } from "src/reducks/store/types";
import { LoginData } from "src/reducks/users/types";
import { signInAction } from "src/reducks/users/usersSlice";

export const signIn = (data: LoginData) => {
  // const state = getState();
  // console.log(state)
  const { email, password } = data
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
