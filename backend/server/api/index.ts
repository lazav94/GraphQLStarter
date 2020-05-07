import logger from "../services/logger";
import User from "./User";
import Contract from "./Contract";
import BillingTransaction from "./BillingTransaction";
import { concatenateTypeDefs, gql } from "apollo-server-express";

// When new API is added import it and add it to this array
const API = [User, BillingTransaction, Contract];

const resolvers = API.reduce(
  (prev, { resolvers }) => {
    prev = {
      ...prev,
      ...resolvers,
      Query: { ...prev.Query, ...resolvers.Query },
      Mutation: { ...prev.Mutation, ...resolvers.Mutation },
    };
    return prev;
  },
  { Query: {}, Mutation: {} }
);

// Just dummy default schema for merging
const defaultSchema = gql`
  type Query {
    _emptyString: String
  }
  type Mutation {
    _emptyString: String
  }
`;
export const typeDefs = concatenateTypeDefs([
  defaultSchema,
  ...API.map((api) => api.schema),
]);

export default {
  typeDefs,
  resolvers,
};

// export const schema = makeExecutableSchema({
//   typeDefs: gql`
//   # Custom types
//   ${API.map(({ schema }) => schema.Types).join("")}
//   # Queries
//   type Query {
//     hello: String!
//     ${API.map(({ schema }) => schema.Query).join("")}
//   }
//   # Mutations
//   type Mutation {
//     ${API.map(({ schema }) => schema.Mutation).join("")}
//   }
// `,
//   resolvers,
// });
