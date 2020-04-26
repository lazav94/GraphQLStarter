import mongoose from "mongoose";
import logger from "./logger";

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/graphQLDB";
logger.debug(`🔗 MongoURI: ${mongoURI}`);

const dbOptions: object = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connection.on("error", (err: any) => {
  logger.error("🚨 Mongoose error:", err);
  process.exit(-2);
});

mongoose.connection.on("connected", () =>
  logger.info(`✅ Connection to DB established successfully`)
);

mongoose.Promise = global.Promise;

//
// mongoose.set("debug", true);

mongoose.set(
  "debug",
  (
    Collection: string,
    Method: string,
    Query: object,
    Document: object,
    Options: object
  ) => {
    console.table([
      {
        Collection,
        Method,
        Query: JSON.stringify(Query),
        Document: JSON.stringify(Document),
        // Options: JSON.stringify(Options),
      },
    ]);
  }
);

// TODO Add param local: boolean to conect to local db if it's true
export const startDB = async () => {
  try {
    await mongoose.connect(mongoURI, dbOptions);
  } catch (error) {
    logger.error(error);
    process.exit(-2);
  }
};
