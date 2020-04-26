import ContractService from "./Contract.service";
import { IContract } from "./Contract.model";

export default class ContractController {
  public static resolveUser = async (contract: IContract) =>
    ContractService.userPopulate(contract);

  public static getContractById = async (
    id: string
  ): Promise<IContract | null> => ContractService.getContractById(id, true);

  public static getContracts = async (state: string): Promise<IContract[]> =>
    ContractService.getContracts(state, true);

  public static createContract = (
    userId: string,
    state: string
  ): Promise<IContract> => ContractService.createContract(userId, state);
}
