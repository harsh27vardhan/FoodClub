const express = require("express");
require("dotenv").config();
const { connectMongoDB } = require("./configs/connections");
const User = require("./models/user");
const userRoute = require("./routes/user");
const foodRoute = require("./routes/food");
const server = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3030;

connectMongoDB("foodclub");

server.use(
  cors({
    origin: "http://localhost:5173/*",
    credentials: true,
  })
);
// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Allow requests from this origin
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow these HTTP methods
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow these headers
//   res.header("Access-Control-Allow-Credentials", "true"); // Allow cookies or credentials
//   next();
// });
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cookieParser());

server.use("/user", userRoute);
server.use("/food", foodRoute);

// server.use(express.cookieParser());

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
