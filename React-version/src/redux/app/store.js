import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "../features/employeeSlice";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"; // npm install redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root", // key is required
  version: 1, // version is required
  storage, // storage is now required
  blacklist: ["employee"], // blacklist is now required
};

const persistedReducer = persistReducer(persistConfig, employeeSlice.reducer); // Create a new reducer with our existing reducer

export const store = configureStore({
  reducer: { employee: persistedReducer }, // Add the new reducer to our store with any name we want
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] } }), // Add the ignoredActions to our middleware
});
