import { useContext } from "react";
import { Layout } from "src/components/layout";
import { AuthContext } from "src/context/Auth";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Layout>
      <button>
        { currentUser }
      </button>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
