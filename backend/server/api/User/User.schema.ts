import { gql } from "apollo-server-express";

export default gql`
  input UserInput {
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }
  type User {
    _id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    contracts: [Contract!]!
  }
  extend type Query {
    hello: String
    getUserById(id: ID!): User
    getUserByEmail(email: String!): User
    getUsers: [User!]!
  }
  extend type Mutation {
    createUser(input: UserInput): User
  }
`;

// export default {
//   Types: `
//     input UserInput {
//       firstname: String!
//       lastname: String!
//       email: String!
//       password: String!
//     }

//     type User {
//       _id: ID!
//       firstname: String!
//       lastname: String!
//       email: String!
//       password: String!
//       contracts: [Contract!]!
//     }
//   `,
//   Query: `
//     getUserById(id: ID!): User
//     getUserByEmail(email: String!): User
//     getUsers: [User!]!
//   `,
//   Mutation: `
//     createUser(input: UserInput): User
//   `,
// };
