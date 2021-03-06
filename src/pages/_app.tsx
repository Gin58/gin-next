import "src/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import { AuthProvider } from "../context/Auth";
import store from "../reducks/store/store";

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      <Provider store={store}>
        <AuthProvider>
          <props.Component {...props.pageProps} />
        </AuthProvider>
      </Provider>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
