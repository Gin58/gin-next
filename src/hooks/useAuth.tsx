import { createContext, ReactNode, useContext, useState } from "react";
import firebase from "firebase";
import { auth, db } from "../config/firebase";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

const useAuthProvider = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const createUser = (user: any) => {
    return db
      .collection("users")
      .doc(user.uid)
      .set(user)
      .then(() => setUser(user))
      .catch((error) => {
        return { error };
      });
  };

  const signUp = (data: SignUpData) => {
    const { name, email, password } = data;
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        return createUser({ uid: response.user?.uid, email, name });
      })
      .catch((err) => {
        return { err };
      });
  };

  const signIn = (data: SignInData) => {
    const { email, password } = data;
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      })
      .catch((err) => {
        return { err };
      });
  };
  return {
    user,
    signUp,
    signIn,
  };
};
type User = firebase.User;
type AuthContextProps = {
  user: User | null | undefined;
};

const authContext = createContext<AuthContextProps>({ user: undefined });
const { Provider } = authContext;

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const auth = useAuthProvider();
  return <Provider value={auth}>{props.children}</Provider>;
}

export const useAuth: any = () => {
  return useContext(authContext);
};
