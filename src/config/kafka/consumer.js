const { Kafka } = require("kafkajs");
const Log = require("../../models/userActivityLog.model");
const { KAFKA_BROKER, KAFKA_TOPIC } = require("../../env");

const kafka = new Kafka({
  clientId: "activity-logs-consumer",
  brokers: [KAFKA_BROKER]
});

const consumer = kafka.consumer({ groupId: "logs-group" });

const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({
    topic: KAFKA_TOPIC,
    fromBeginning: false
  });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const logData = JSON.parse(message.value.toString());
      let SavedLogData = await Log.create(logData);
      console.log("Log saved:", SavedLogData);
    }
  });
};

startConsumer().catch(console.error);

module.exports = startConsumer;
