const express = require("express");
const giveAccess = require("../middlewares/access");
const {
  addFoodItem,
  getFoodItem,
  updateFoodItem,
  deleteFoodItem,
} = require("../controllers/food");
const { checkAuth } = require("../middlewares/auth");

const router = express.Router();

router.get("/", checkAuth, getFoodItem);
router.post("/", giveAccess(["ADMIN", "SUPERADMIN"]), addFoodItem);
router.patch("/:id", giveAccess(["ADMIN", "SUPERADMIN"]), updateFoodItem);
router.delete("/:id", giveAccess(["ADMIN", "SUPERADMIN"]), deleteFoodItem);
//Introduced a inline middleware which gives access to only admin and super admin.

module.exports = router;
