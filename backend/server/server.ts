// import trace, { tracer } from "dd-trace";
// trace.init({ plugins: false });
// tracer.init({});
import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import logger from "./services/logger";
import { startDB } from "./services/db";
import { schema } from "./api";
import * as middleware from "./services/middleware";

// Constant variables
// TODO: put this in config.json
const port = process.env.PORT || "4000";

// Express (apollo) setup
const server = new ApolloServer({
  // typeDefs,
  schema,
  debug: true, // Its true by default
  tracing: true,
});
const app: Application = express();
// app.use(cors());
// app.use(express.json());

// TODO: Apply custom middleware to log Queries from GraphQl (only in dev enviroment)
// app.use(server.graphqlPath, middleware.logQuery);
// TODO: Configure better (resticted) cors settings
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
