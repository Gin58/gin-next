type User = userState;
import type { FC } from "react";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "src/config/firebase";
import { userState } from "src/reducks/users/types";

type AuthContextProps = {
  currentUser: User | undefined;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            if (data) {
              const { uid, username, email } = data;
              setCurrentUser({ uid, username, authenticated: true, email });
            } else {
              setCurrentUser(undefined);
            }
          });
      }
    });
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
