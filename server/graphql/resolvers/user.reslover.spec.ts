export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IAddUserInput {
  addUserInput: {
    name: string;
    email: string;
    password: string;
  };
}
