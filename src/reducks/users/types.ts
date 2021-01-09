export interface LoginData {
  email: string;
  password: string;
}

export type userState = {
  authenticated: boolean;
  uid: string;
  username: string;
};
