const { createClient } = require("redis");

const client = createClient({
  username: "default",
  password: "WUmy6bLPCIF7XQr2iKYRXL0PQPyxmQAs",
  socket: {
    host: "redis-17322.c16.us-east-1-3.ec2.redns.redis-cloud.com",
    port: 17322,
  },
});

client
  .on("error", (err) => console.log("Redis Client Error", err))
  .on("connect", () => console.log("Redis connected!"));
client.connect();
module.exports = client;
