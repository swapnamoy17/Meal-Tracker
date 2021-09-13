const db = require("../models/models");
const Day = db.Day;
const Meal = db.Meal;

module.exports = {
  findOneByDate(date_int, month_int, year_int){
    return Day.findOne({date:date_int,month:month_int,year:year_int})
       .then( day => {
         if(!day)
           console.log("No entries for the day (home.ejs).", day);
         else
           console.log("Entry for the day found(home.ejs).", day);
         return day;
       })
       .catch( err => {
        console.log("Error while finding the current date in database (home.ejs).", err);
      });
},
 findOneByDateAndUpdate(date, month, year, meal){
   Day.findOneAndUpdate({date:date,month:month,year:year},
  {"$set": { "date": date},
   "$set": { "month": month},
   "$set": { "year": year},
   "$push": { "meals": meal }},
  { "new": true, "upsert": true })
    .then( day => console.log("Updated or inserted day=", day))
    .catch( err => console.log("Error in finding the requested day entry (meal.ejs post).",err));
}
}
