// import trace, { tracer } from "dd-trace";
// trace.init({ plugins: false });
// tracer.init({});
import express, { Application } from "express";
import { ApolloServer, gql } from "apollo-server-express";
import logger from "./services/logger";
import { startDB } from "./services/db";
import { resolvers, schemas } from "./api";
import * as middleware from "./services/middleware";

// Constant variables
const port = process.env.PORT || "4000";
// Express (apollo) setup
const server = new ApolloServer({
  typeDefs: gql`
    ${schemas}
  `,
  resolvers,
  debug: true, // Its true by default
  tracing: true,
});
const app: Application = express();
// app.use(cors());
// app.use(express.json());

// Custom middleware to log Query
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

// Starting Sever
(async () => {
  // Start DB - If connection failed don't start server
  await startDB();

  app.listen(port, (error: Error) => {
    if (error) {
      logger.error(error);
      process.exit(-1);
    }
    logger.info(
      `📦 GraphQL API server is 🏃‍ at http://localhost:${port}${server.graphqlPath}`
    );
  });
})();
