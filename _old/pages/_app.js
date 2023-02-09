import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counter from "../reducers/counter";
import bookmarks from "../reducers/bookmark";
import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";

const store = configureStore({
  reducer: { counter, bookmarks },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
