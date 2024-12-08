const User = require("../models/user");
const { setUser } = require("../services/auth");

exports.getAllUsers = (req, res) => {
  User.find({}).then((user) => {
    res.send(user);
  });
};

exports.signUpUser = (req, res) => {
  console.log(req.body);
  const { fullname, username, password, email, role } = req.body;
  User.create({ fullname, username, password, email, role })
    .then((user) => {
      res.status(201).send({
        user,
        status: "success",
        message: "Users created successfully",
      });
    })
    .catch((err) => {
      res.status(400).send({ message: "User created failed", error: err });
    });
};

exports.logInUser = async (req, res) => {
  console.log("Trying...");
  const { username, password } = req.body;
  try {
    await User.findOne({ username, password }).then((user) => {
      console.log(user);
      if (!user || user.length === 0) {
        res
          .status(401)
          .send({ message: "User not found", error: "User not found" });
      }
      const token = setUser(user);
      const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "Lax",
          priority: "High",
          maxAge: 7 * 24 * 60 * 60 * 1000,
          expires,
        })
        .send({
          token,
          status: "success",
          message: "User logged in successfully",
          user,
        });
    });
  } catch {
    return res
      .status(401)
      .send({ message: "Invalid username or password", ...err });
  }
};