const produce = require("./kafka-config/producer");

produce().catch((err) => {
  console.error("Producer error: ", err);
});
