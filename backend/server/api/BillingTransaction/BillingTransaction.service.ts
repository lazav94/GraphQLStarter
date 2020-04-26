// Contains queryes only
import BillingTransaction, {
  IBillingTransaction,
} from "./BillingTransaction.model";

export default class BillingTransactionService {
  static createBillingTransaction = async (
    payment: string
  ): Promise<IBillingTransaction> => new BillingTransaction({ payment }).save();

  static getBillingTransactions = async (
    offset?: number,
    limit?: number
  ): Promise<IBillingTransaction[]> => BillingTransaction.find();

  static getBillingTransactionById = async (id: string, lean?: boolean) => {
    const billingTransaction = BillingTransaction.findById(id);
    if (lean) billingTransaction.lean();
    return billingTransaction;
  };
}
