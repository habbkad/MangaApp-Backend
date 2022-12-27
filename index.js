const express = require("express");
const env = require("dotenv");
const route = require("./src/routes/routes");

env.config({ path: "/config/.env" });

const app = express();

//middle-wares

//routes
app.use("/manga-app/api/v1", route);

//port declearation
const PORT = process.env.PORT || 5001;

//starting server
app.listen(PORT, () => {
  console.log("server started");
});
