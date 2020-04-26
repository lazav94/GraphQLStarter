// Contains logic
import UserService from "./User.service";
import { IUser } from "./User.model";

const isEmail = (email: string) => email?.trim();
const validPassword = (password: string) => password?.trim();

export default class UserController {
  static createUser = async (user: IUser) => {
    if (!isEmail(user.email)) throw new Error("Invalid email ✉️");
    if (!validPassword(user.password)) throw new Error("Invalid password 🔑");
    return UserService.createUser(user);
  };
  static resolveContract = async (user: IUser) =>
    UserService.contractsPopulate(user);

  static getUsers = async () => UserService.getUsers();

  static getUserById = async (id: string, lean?: boolean) =>
    UserService.getUserById(id, lean);

  static getUserByEmail = async (email: string, lean?: boolean) =>
    UserService.getUserByEmail(email, lean);
}
