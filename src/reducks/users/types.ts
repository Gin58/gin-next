export interface LoginData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  username: string;
}

export type userState = {
  authenticated: boolean;
  uid: string;
  username: string;
  email: string;
};
