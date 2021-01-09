import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { usersSlice } from "../users/usersSlice";

const reducer = {
  users: usersSlice.reducer,
};

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});
