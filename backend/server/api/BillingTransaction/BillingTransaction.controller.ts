// Contains logic
import BillingTransactionService from "./BillingTransaction.service";
import { IBillingTransaction } from "./BillingTransaction.model";

export default class BillingTransactionController {
  static createBillingTransaction = async (payment: string) =>
    BillingTransactionService.createBillingTransaction(payment);

  static getBillingTransactions = async (offset?: number, limit?: number) =>
    BillingTransactionService.getBillingTransactions();

  static getBillingTransactionById = async (id: string, lean?: boolean) =>
    BillingTransactionService.getBillingTransactionById(id, lean);
}
