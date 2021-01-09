import type { initialState as initialStateType } from "../store/types";

const initialState: initialStateType = {
  users: {
    authenticated: false,
    uid: "",
    username: "",
    email: "",
  },
};

export default initialState;
