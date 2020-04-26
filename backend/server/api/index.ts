import fs from "fs";
import logger from "../services/logger";
import User from "./User";
import Contract from "./Contract";
import BillingTransaction from "./BillingTransaction";

// Number on files/folder minus this one (index.ts)
const foldersInAPIFolder: number = fs.readdirSync(__dirname).length - 1;
logger.info(fs.readdirSync(__dirname));
logger.info(foldersInAPIFolder.toString());
// When new API is added import it and add it to this array
const API = [User, BillingTransaction, Contract];

if (foldersInAPIFolder !== API.length) {
  logger.error("Check server/api/index.ts did you import all APIs");
  // TODO see why readdirSync gets deleted files!!!
  // process.exit(-3);
}

export const resolvers = API.reduce(
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

// console.log("Resolvers: ", resolvers);

export const schemas = `
  # Custom types
  ${API.map(({ schema }) => schema.Types).join("")}
  # Queries
  type Query {
    hello: String!
    ${API.map(({ schema }) => schema.Query).join("")}
  }
  # Mutations
  type Mutation {
    ${API.map(({ schema }) => schema.Mutation).join("")}
  }
`;
