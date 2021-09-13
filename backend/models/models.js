const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  food: [String]
});

const Meal = mongoose.model("Meal",mealSchema);

const daySchema = new mongoose.Schema({
  date: Number,
  month: Number,
  year: Number,
  meals: [mealSchema]
});

const Day = mongoose.model("Day",daySchema);

const db = {};
db.mongoose = mongoose;
db.url = "mongodb+srv://swap7:moy15428@gettingstarted.inf7f.mongodb.net/calorieDB?retryWrites=true&w=majority";
db.Day = Day;
db.Meal = Meal;

module.exports = db;
