import { gql } from "apollo-server-express";

export default gql`
  type Contract {
    _id: ID!
    state: String!
    user: User!
  }
  extend type Query {
    getContractById(id: ID!): Contract
    getContracts(state: String): [Contract!]!
  }
  extend type Mutation {
    createContract(userId: ID!, state: String!): Contract!
    updateContract(id: ID!, state: String!): Contract!
    #deleteContract(id: ID): Contract!
  }
`;

// export default {
//   Types: `
//     type Contract {
//       _id: ID!
//       state: String!
//       user: User!
//     }
//   `,
//   Query: `
//     getContractById(id: ID!): Contract
//     getContracts(state: String): [Contract!]!
//   `,
//   Mutation: `
//     createContract(userId: ID!, state: String!): Contract!
//     updateContract(id: ID!, state: String!): Contract!
//     #deleteContract(id: ID): Contract!
//   `,
// };
