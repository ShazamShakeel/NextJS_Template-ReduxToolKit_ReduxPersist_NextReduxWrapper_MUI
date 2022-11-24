import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer from "store/combineReducers";
import storage from "store/persist/sync_storage";
import { inDevEnvironment } from "utils/isDevEnv";

// gotta do this to make sure the store is created before the app is mounted
// https://github.com/fazlulkarimweb/with-next-redux-wrapper-redux-persist/blob/master/store/store.js
const makeStore = ({ isServer }) => {
  if (isServer) {
    //If it's on server side, create a store
    return configureStore({
      reducer,
    });
  } else {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require("redux-persist");

    const persistConfig = {
      key: "persist-store",
      whitelist: ["user"], // only user & counter will be persisted, add other reducers if needed
      storage, // if needed, use a safer storage
    };

    const persistedReducer = persistReducer(persistConfig, reducer); // Create a new reducer with our existing reducer

    const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          // disable serializable check in favor of redux-persist
          // https://github.com/fazlulkarimweb/with-next-redux-wrapper-redux-persist/blob/master/store/store.js
          serializableCheck: false,
        }),
    }); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
  }
};

export const store = makeStore({ isServer: false });

export const wrapper = createWrapper(makeStore, { debug: inDevEnvironment });
