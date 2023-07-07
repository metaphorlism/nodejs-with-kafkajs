const { Kafka } = require("kafkajs");

const clientId = "nodejs-kafka-metaphorlism";
// kafka broker
const brokers = ["localhost:9092"];
// define topic name
const topic = "messages-topic";

const kafka = new Kafka({ clientId, brokers });

const consumer = kafka.consumer({ groupId: clientId });

// listening to events of messages-topic
const consume = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    eachMessage: ({ message }) => {
      console.log(`message received : ${message.value}`);
    },
  });
};

module.exports = consume;
