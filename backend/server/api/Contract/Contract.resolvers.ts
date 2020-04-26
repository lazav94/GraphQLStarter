import ContractController from "./Contract.controller";
import { IContract } from "./Contract.model";

export default {
  Contract: {
    user: ContractController.resolveUser,
  },
  Query: {
    getContractById: (parent: any, { id }: any): Promise<IContract | null> =>
      ContractController.getContractById(id),
    getContracts: (parent: any, { state }: any): Promise<IContract[]> =>
      ContractController.getContracts(state),
  },
  Mutation: {
    createContract: (parent: any, { userId, state }: any): Promise<IContract> =>
      ContractController.createContract(userId, state),
  },
};
