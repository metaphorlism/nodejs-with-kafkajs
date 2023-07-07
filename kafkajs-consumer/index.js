const consume = require("./kafka-config/consumer");

consume().catch((err) => {
  console.error("Consumer error: ", err);
});
