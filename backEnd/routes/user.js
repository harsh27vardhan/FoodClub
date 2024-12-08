const express = require("express");
const { signUpUser, logInUser, getAllUsers } = require("../controllers/user");
const router = express.Router();

router.get("/all", getAllUsers);
router.get("/", (req, res) => {
  res.send("Welcome to Foodclub API");
});

router.post("/signup", signUpUser);
router.post("/login", logInUser);

module.exports = router;
