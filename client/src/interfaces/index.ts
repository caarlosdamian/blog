export type iUser = {
  email: string;
  id: number;
  img: string | null;
  username: string;
};

export type iPost = {
  id: number;
  title: string;
  desc: string;
  img?: string;
  date: string;
};

export interface iPostJoint extends iPost {
  username: string;
  userImg: string;
}

export type iInputs = {
  email: string;
  password: string;
};

export interface iAuthContext {
  currentUser: iUser | null | undefined;
  token: string | null | undefined;
  login: (inputs: iInputs) => void;
  logout: () => void;
}
