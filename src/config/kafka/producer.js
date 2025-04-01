const { Kafka } = require("kafkajs");
const { KAFKA_BROKER, KAFKA_TOPIC } = require("../../env");

const kafka = new Kafka({
  clientId: "activity-logs-producer",
  brokers: [KAFKA_BROKER]
});

const producer = kafka.producer();

const sendLog = async (log) => {
  await producer.connect();
  await producer.send({
    topic: KAFKA_TOPIC,
    messages: [{ value: JSON.stringify(log) }]
  });
  await producer.disconnect();
};

module.exports = sendLog;
