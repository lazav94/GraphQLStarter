import { gql } from "apollo-server-express";

export default gql`
  type BillingTransaction {
    id: ID!
    payment: String!
  }
  extend type Query {
    getBillingTransactionById(id: ID!): BillingTransaction
    getBillingTransactions: [BillingTransaction!]!
  }
  extend type Mutation {
    createBillingTransaction(payment: String!): BillingTransaction
  }
`;

// export default {
//   Types: `
//     type BillingTransaction {
//       id: ID!
//       payment: String!
//     }
//   `,
//   Query: `
//     getBillingTransactionById(id: ID!): BillingTransaction
//     getBillingTransactions: [BillingTransaction!]!
//   `,
//   Mutation: `
//     createBillingTransaction(payment: String!): BillingTransaction
//   `,
// };
