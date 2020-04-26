import logger from "./logger";
import { Request, Response, NextFunction } from "express";

// Check this https://dev.to/seancwalsh/how-to-write-graphql-middleware-node-apollo-server-express-2h87

// Use context?

// For express (not working the same on Apollo server)
export const logQuery = (req: Request, _: Response, next: NextFunction) => {
  const { query, variables, operationName }: any = req.body;
  if (query?.includes("IntrospectionQuery")) return next();
  logger.debug(
    `🚏 GraphQL query [${operationName}]: ${query
      .split("query")
      .find((q: string) => q.includes(operationName))
      .replace(/\s\s+/g, " ")}`
  );
  logger.debug(`📦 GraphQL variables: ${JSON.stringify(variables)}`);
  next();
};
