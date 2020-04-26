// Contains queryes only
import User, { IUser } from "./User.model";

export default class UserService {
  static contractsPopulate = async (user: IUser) => {
    const { contracts } = await new User(user)
      .populate("contracts")
      .execPopulate();
    return contracts;
  };

  static createUser = async (user: IUser): Promise<IUser> =>
    new User(user).save();

  static getUsers = async (lean?: boolean): Promise<IUser[]> => {
    const users = User.find();
    if (lean) users.lean();
    return users;
  };

  static getUserById = async (
    id: string,
    lean?: boolean
  ): Promise<IUser | null> => {
    console.log("DEBUG", id, lean);
    const user = User.findById(id);
    if (lean) user.lean();
    return user;
  };

  static getUserByEmail = async (email: string, lean?: boolean) => {
    const user = User.findOne({ email });
    // if (lean) user.lean();
    return await user;
  };
}
