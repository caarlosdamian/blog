export type iUser = {
  email: string;
  id: number;
  img: string | null;
  username: string;
};

export type iInputs = {
  email: string;
  password: string;
};

export interface iAuthContext {
  currentUser: iUser | null | undefined;
  login: (inputs: iInputs) => void;
  logout: () => void;
}
