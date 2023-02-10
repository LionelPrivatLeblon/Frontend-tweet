import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Welcome from "../components/Welcome";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookmarks from "../reducers/bookmarks";
import hiddenarticles from "../reducers/hiddenArticles";
import user from "../reducers/user";

//Store Redux persist import
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({ bookmarks, user, hiddenarticles });
const persistconfig = { key: "bestbookmarks", storage };

const store = configureStore({
  reducer: persistReducer(persistconfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Morning News</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
