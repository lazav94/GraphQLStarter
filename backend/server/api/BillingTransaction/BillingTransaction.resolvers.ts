import BillingTransactionController from "./BillingTransaction.controller";

export default {
  Query: {
    getBillingTransactionById: async (_: any, { id }: any) =>
      BillingTransactionController.getBillingTransactionById(id),
    getBillingTransactions: async () =>
      BillingTransactionController.getBillingTransactions(),
  },
  Mutation: {},
};
