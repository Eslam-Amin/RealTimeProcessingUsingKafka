require("dotenv").config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  MONGO_URI_LOCAL: process.env.MONGO_URI_LOCAL,
  KAFKA_BROKER: process.env.KAFKA_BROKER,
  KAFKA_TOPIC: process.env.KAFKA_TOPIC,
  PORT: process.env.PORT
};
