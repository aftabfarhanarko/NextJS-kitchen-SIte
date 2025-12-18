const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DATA_BASE_URL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connect = (names) => {
  const database = process.env.DB_USERNAME;
  return client.db(database).collection(names);
};
