import Contract, { IContract } from "./Contract.model";
import UserService from "../User/User.service";
import logger from "../../services/logger";

export default class ContractService {
  static userPopulate = async (contract: IContract) => {
    const { user } = await new Contract(contract)
      .populate("user")
      .execPopulate();
    return user;
  };
  static getContractById = async (
    id: string,
    lean?: boolean
  ): Promise<IContract | null> => {
    const contract = Contract.findById(id);
    if (lean) contract.lean();
    return contract;
  };

  static getContracts = async (
    state?: string,
    lean?: boolean
  ): Promise<IContract[]> => {
    const contracts = Contract.find(state ? { state } : {});
    if (lean) contracts.lean();
    return contracts;
  };

  static createContract = async (
    userId: string,
    state: string
  ): Promise<IContract> => {
    const user = await UserService.getUserById(userId, false);
    if (!user) {
      throw new Error(`User with ID: ${userId} doesn't exists`);
    }
    const newContract = new Contract({ user, state });
    user.contracts.push(newContract._id);

    const [savedContract] = await Promise.all([
      newContract.save(),
      user.save(),
    ]);
    return savedContract;
  };

  static updateContract = async (
    id: string,
    data: IContract
  ): Promise<IContract | null> =>
    Contract.findByIdAndUpdate(
      id,
      { data },
      { upsert: false, new: true }
    ).lean();

  static deleteContract = async (id: string): Promise<IContract | null> => {
    logger.info("Not implemented");
    // Delete contract
    // Delete contract from user
    return null;
  };
}
