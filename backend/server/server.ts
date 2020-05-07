// import trace, { tracer } from "dd-trace";
// trace.init({ plugins: false });
// tracer.init({});
import express, { Application } from "express";
import logger from "./services/logger";
import { startDB } from "./services/db";
import { setupGraphQLServer } from "./graphql";

// Constant variables
// TODO: put this in config.json
const port = process.env.PORT || "4000";

const app: Application = express();
// app.use('datatrans/', )
// app.use(cors());
// app.use(express.json());
// TODO: Configure better (resticted) cors settings

// Starting Sever
(async () => {
  // Apply middleware and return graphql apollo server
  const graphQLServer = setupGraphQLServer(app);

  // Start DB - If connection failed don't start server
  await startDB();

  app.listen(port, (error: Error) => {
    if (error) {
      logger.error(error);
      process.exit(-1);
    }
    logger.info(
      `📦 GraphQL API server is 🏃‍ at http://localhost:${port}/${graphQLServer.graphqlPath}`
    );
  });
})();
