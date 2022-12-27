const express = require("express");
const env = require("dotenv");

env.config({ path: "/config/.env" });
const app = express();

//middle-wares

//port declearation
const PORT = process.env.PORT || 5001;

//starting server
app.listen(PORT, () => {
  console.log("server started");
});
