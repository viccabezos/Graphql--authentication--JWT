import { GraphQLObjectType } from "graphql";
import { IAddUserInput, IUser } from "./user.reslover.spec";

let users: Array<IUser> = [
  {
    name: "Jen",
    password: "jenpassword",
    email: "jen@email.com",
  },
  {
    name: "John",
    password: "johnpassword",
    email: "jown@email.com",
  },
];
export default {
  Query: {
    listUsers: () => users,
  },
  Mutation: {
    addUser: (_: GraphQLObjectType, { addUserInput }: IAddUserInput) => {
      let newUser = { ...addUserInput };
      users = [...users, newUser];
      return newUser;
    },
  },
};
