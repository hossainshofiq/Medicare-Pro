// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../query/authenticationApi";

const store = configureStore({
  reducer: {
    auth: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    authApi.middleware
  ]
});

export default store;