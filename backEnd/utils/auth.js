const jwt = require("jsonwebtoken");

exports.generateToken = (userData) => {
  const token = jwt.sign(
    {
      _id: userData._id,
      username: userData.username,
      email: userData.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};
