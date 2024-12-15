const Food = require("../models/food");
const { getUser } = require("../services/auth");

function foodFilteration(food, payload) {
  const {
    searchStr = "",
    maxPrice = Infinity,
    rating = 0,
    discount = 0,
    isVeg = false,
  } = payload;
  const search = searchStr.toLowerCase();
  return food.filter(
    (item) =>
      (item.name.toLowerCase(),
      includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search)) &&
      item.price <= maxPrice &&
      item.rating >= rating &&
      item.discount >= discount &&
      (!Boolean(isVeg) ? true : Boolean(item.isVeg))
  );
}

// exports.getAllFoodItems = (req, res) => {
//   const search = req.params.searchStr.toLowerCase();
//   Food.find({})
//     .then((food) => {
//       foodFilteration(food, req.params);
//       res.send({ status: "success", food: filteredData });
//     })
//     .catch((err) => {
//       res.send({ status: "error", message: err.message });
//     });
// };

// exports.getAllFoodItemsByRestro = (req, res) => {
//   //   const {
//   //     restroId,
//   //     searchStr = "",
//   //     maxPrice = Infinity,
//   //     rating = 0,
//   //     discount = 0,
//   //     veg = false,
//   //   } = req.params; //It is a search request so we're getting a get request that's why we're using req.params, if it was a post request, we'll use req.body
//   const search = req.params.searchStr.toLowerCase();
//   Food.find({ restroId })
//     .then((food) => {
//       foodFilteration(food, req.params);
//       res.send({ status: "success", food: filteredData });
//     })
//     .catch((err) => {
//       res.send({ status: "error", message: err.message });
//     });
// };

exports.getFoodItem = (req, res) => {
  // console.log(req.cookie);
  // console.log(req.user);
  // res.cookie("user", req.user.role);
  const { restroId = null } = req.params;
  if (restroId) {
    Food.find({ restroId })
      .then((food) => {
        const data = foodFilteration(food, req.params);
        res.send({ status: "success", food: data });
      })
      .catch((err) => {
        res.send({ status: "error", message: err.message });
      });
  } else {
    Food.find({})
      .then((food) => {
        // const data = foodFilteration(food, req.params);
        res.send({ status: "success", food });
      })
      .catch((err) => {
        res.send({ status: "error", message: err });
      });
  }
};

exports.addFoodItem = (req, res) => {
  // console.log(req.user); //undefined
  const {
    name,
    description,
    details,
    category,
    isVeg,
    image,
    price,
    availableQty,
    discount,
  } = req.body;
  const restroId = getUser(req.cookies.token)._id;
  console.log(restroId);
  Food.create({
    name,
    description,
    details,
    category,
    isVeg,
    image,
    price,
    availableQty,
    discount,
    restroId,
  })
    .then((food) => {
      res.status(201).send({
        food,
        id: food._id,
        status: "success",
        message: "Food item created successfully",
      });
      console.log("Food added");
    })
    .catch((err) => {
      res.status(400).send({
        message: "Food item creation failed",
        ...err,
      });
      console.log("Food item creation failed");
      console.log(err);
    });
};

exports.updateFoodItem = (req, res) => {
  const {
    name,
    description,
    details,
    category,
    isVeg,
    image,
    price,
    availableOty,
    discount,
  } = req.body;
  Food.findByIdAndUpdate(req.params.id, {
    name,
    description,
    details,
    category,
    isVeg,
    image,
    price,
    availableOty,
    discount,
  })
    .then((food) => {
      return res.status(200).send({
        food,
        status: "success",
        message: "Food item updated successfully",
      });
    })
    .catch((err) => {
      return res.status(400).send({
        message: "Food item updation failed",
        ...err,
      });
    });
};

exports.deleteFoodItem = (req, res) => {
  const { id } = req.params;
  console.log(id);
  Food.findByIdAndDelete(id)
    .then((food) => {
      return res.status(200).send({
        food,
        staus: "success",
        message: "Food item deleted successfully",
      });
    })
    .catch((err) => {
      return res.status(400).send({
        message: "Food item deletion failed",
        ...err,
      });
    });
};
