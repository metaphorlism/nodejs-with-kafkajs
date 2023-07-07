const { Kafka } = require("kafkajs");

const clientId = "nodejs-kafka-metaphorlism";
// kafka broker
const brokers = ["localhost:9092"];
// define topic name
const topic = "messages-topic";

const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

const produce = async () => {
  await producer.connect();
  let i = 0;

  // send a message to a kafka topic every 1000ms(1s)
  setInterval(async () => {
    try {
      await producer.send({
        topic,
        messages: [
          {
            key: String(i),
            value: "Hello from Metaphorlism: " + i,
          },
        ],
      });
      console.log("message produced: ", i);
      i++;
    } catch (err) {
      console.error("error: " + err);
    }
  }, 1000);
};

module.exports = produce;
