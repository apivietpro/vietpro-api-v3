const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("config");
const cors = require("cors");
const redisClient = require("../common/init.redis");
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  config.get("app.static.urlPath"),
  express.static(config.get("app.static.folderPath"))
);
app.use(
  cors({
    origin: config.get("app.cors.origin"), // Tự động phản hồi đúng origin request đến
    credentials: config.get("app.cors.credentials"), // Cho phép gửi cookie, auth headers
  })
);

app.use(config.get("app.prefixApiVersion"), require("../routers/web"));
module.exports = app;
