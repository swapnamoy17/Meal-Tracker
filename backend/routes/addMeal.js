var express = require('express');
var router = express.Router();
var addMealController = require("../controllers/addMeal");

router.get("/:date", addMealController.getMealPage);

router.post("/:date", addMealController.postMealPage);

module.exports = router;
