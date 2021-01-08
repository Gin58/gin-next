import "src/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

// import { AuthProvider } from "../hooks/useAuth";
import { AuthProvider } from "../context/Auth";

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      <AuthProvider>
        <props.Component {...props.pageProps} />
      </AuthProvider>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
