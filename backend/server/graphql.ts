import { ApolloServer, ApolloServerExpressConfig } from "apollo-server-express";
import graphQLConfig from "./api";
import * as middleware from "./services/middleware";
import { Application } from "express";
import logger from "./services/logger";

// TODO: Apply custom middleware to log Queries from GraphQl (only in dev enviroment)

const apolloConfig: ApolloServerExpressConfig = {
  // TypeDefs and Resolvers
  ...graphQLConfig,
  debug: true, // true by default
  tracing: true,
};
const server: ApolloServer = new ApolloServer(apolloConfig);

export const setupGraphQLServer = (app: Application) => {
  // app.use(server.graphqlPath, middleware.logQuery);

  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: true,
    },
    path: "/",
    // onHealthCheck: () => do_something()
  });

  return server;
};
