import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "src/components/UIkit/Spinner";
import { auth, db } from "src/config/firebase";
import { AuthContext } from "src/context/Auth";

const DashBoardPage: React.FC = () => {
  const router = useRouter();

  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState<any>(null);

  // useEffect(() => {
  //   if (currentUser) {
  //     db.collection("users")
  //       .doc(currentUser.uid)
  //       .get()
  //       .then((snapshot) => {
  //         const data = snapshot.data();
  //         setUser(data);
  //       });
  //   } else {
  //     router.push("/login");
  //   }
  // }, [user]);

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  return currentUser ? (
    <>
      <div className="min-h-screen flex bg-gray-200">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center mt-24">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{`Welcome ${user?.name}!`}</h2>
            <p className="mt-2 text-center text-md text-gray-600">{`You are logged in with ${user?.email}`}</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          return signOut();
        }}
        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
      >
        Sign out
      </button>
    </>
  ) : (
    <Spinner width="150" fill="black" className="animate-spin" />
  );
};

export default DashBoardPage;
