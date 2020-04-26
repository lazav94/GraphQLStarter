import * as winston from "winston";

// User better loger or better configuration
const logger: winston.Logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.simple()
  ),
  level: "debug",
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({ filename: "error.log", level: "error" }),
    // new winston.transports.File({ filename: "all.log" })
  ],
});

export default logger;
