const Redis = require("ioredis");

// Create a Redis instance.
// By default, it will connect to localhost:6379.
// We are going to cover how to specify connection options soon.
const redis = new Redis("redis://:ginlink@127.0.0.1:6380");

redis.set("mykey", "value");

redis.get("mykey").then((res) => {
  console.log("[res]:", res);
});
