const express = require("express");
require("dotenv").config();
const { connectMongoDB } = require("./configs/connections");
const User = require("./models/user");
const userRoute = require("./routes/user");
const foodRoute = require("./routes/food");
const server = express();
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3030;

connectMongoDB("foodclub");

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/user", userRoute);
server.use("/food", foodRoute);

// server.use(express.cookieParser());

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});