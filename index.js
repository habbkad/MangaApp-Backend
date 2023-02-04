const express = require("express");
const env = require("dotenv");
const route = require("./src/routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");

env.config({ path: "/config/.env" });

const app = express();

//middle-wares
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Max-Age", "1800");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(cors());
//routes
app.use("/manga-app/api/v1", route);

//port declearation
const PORT = process.env.PORT || 5001;

//starting server
app.listen(PORT, () => {
  console.log("server started");
});
