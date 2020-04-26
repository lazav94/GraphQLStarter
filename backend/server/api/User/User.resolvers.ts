import UserController from "./User.controller";

export default {
  User: {
    contracts: UserController.resolveContract,
  },
  Query: {
    getUserById: async (parent: any, { id }: any) =>
      UserController.getUserById(id, true),
    getUsers: async () => UserController.getUsers(),
    getUserByEmail: async (parent: any, { email }: any) =>
      UserController.getUserByEmail(email, true),
  },
  Mutation: {
    createUser: async (parent: any, { input }: any) =>
      UserController.createUser(input),
  },
};
