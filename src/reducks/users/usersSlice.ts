import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userState } from "src/reducks/users/types";

const initialState: userState = {
  authenticated: false,
  uid: "",
  username: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signInAction: (state, action: PayloadAction<{ uid: string; username: string }>) => {
      return {
        ...state,
        ...action.payload,
        authenticated: true,
      };
    },
  },
});

export const { signInAction } = usersSlice.actions;
