import { useContext } from "react";
import { Layout } from "src/components/layout";
import { AuthContext } from "src/context/Auth";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Layout>
      <button
        className="btn-blue"
        onClick={() => {
          window.alert("Hello, World!");
        }}
      >
        Button
      </button>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
