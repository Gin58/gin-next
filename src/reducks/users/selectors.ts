import { createSelector } from "@reduxjs/toolkit";
import type { initialState } from "src/reducks/store/types";
import type { userState } from "src/reducks/users/types";

export const getUserId = createSelector(
  (state: initialState) => {
    return state.users;
  },
  (users: userState) => {
    return users.uid;
  }
);
