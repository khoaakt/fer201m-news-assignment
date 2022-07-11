import { combineReducers, configureStore } from "@reduxjs/toolkit";

import navigationReducer from './navigation-slice'
import newsReducer from './news-slice'
import readerReducer from './reader-slice'
import historyReducer from './history-slice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, 
         PAUSE, PERSIST, PURGE, REGISTER, 
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// save state into local storage
const rootReducer = combineReducers({
  history: historyReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    persistedReducer,
    reader: readerReducer,
    navigation: navigationReducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // skip theses action because we are using localStorage and don't want the data will be purged randomly
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export default store;
