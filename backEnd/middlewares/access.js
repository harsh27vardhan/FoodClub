const { getUser } = require("../services/auth");

function giveAccess(roles = []) {
  return (req, res, next) => {
    // const userRole = req.user.role;
    const userRole = getUser(req.cookies.token).role;
    console.log(userRole);
    if (roles.includes(userRole)) {
      console.log("Going to next");
      next();
    } else {
      res.status(403).send({ message: "Not allowed to access this route." });
    }
  };
}

module.exports = giveAccess;
