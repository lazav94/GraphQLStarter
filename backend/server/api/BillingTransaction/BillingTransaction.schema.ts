export default {
  Types: `
    type BillingTransaction {
      id: ID!
      payment: String!
    }
  `,
  Query: `
    getBillingTransactionById(id: ID!): BillingTransaction
    getBillingTransactions: [BillingTransaction!]!
  `,
  Mutation: `
    createBillingTransaction(payment: String!): BillingTransaction
  `,
};
