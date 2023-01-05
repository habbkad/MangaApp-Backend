const express = require("express");
const env = require("dotenv");
const route = require("./src/routes/routes");
const bodyParser = require("body-parser");

env.config({ path: "/config/.env" });

const app = express();

//middle-wares
app.use(bodyParser.json());
//routes
app.use("/manga-app/api/v1", route);

//port declearation
const PORT = process.env.PORT || 5001;

//starting server
app.listen(PORT, () => {
  console.log("server started");
});
