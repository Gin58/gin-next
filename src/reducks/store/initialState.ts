import { initialState as initialStateType } from "../store/types";

const initialState: initialStateType = {
  users: {
    authenticated: false,
    uid: "",
    username: "",
  },
};

export default initialState;
