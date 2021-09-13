const mealDAO = require('../DAO/meal');
const calendar = require("../calendar-config");

module.exports = {
  getHomePage(req,res){

    var today = new Date();
    var options = {
      day: "numeric",
      month: "numeric",
      year: "numeric"
    };

    var date = today.toLocaleDateString('en-GB', options);
    var year_month, date_int, month_int, year, year_int;

    if(req.query.year_month){
      year_month = req.query.year_month;
      console.log("inside 1");
      console.log("Year_month=",year_month);
      date_int = 1;
      month_int = parseInt(year_month.split("-")[1]);
      year = year_month.split("-")[0];
      year_int = parseInt(year);
    }

    else{
      console.log("inside 2");
      year_month = date;
      console.log("Year_month=",year_month);
      date_int = parseInt(year_month.split("/")[0]);
      month_int = parseInt(year_month.split("/")[1]);
      year = year_month.split("/")[2];
      year_int = parseInt(year);
      console.log("year",year_int,"month",month_int,"date",date_int);
    }

    console.log("year",year_int,"month",month_int,"date",date_int);

    mealDAO.findOneByDate(date_int, month_int, year_int)
           .then( day => {
             res.json({day_entry:day,calendar: calendar(year)[month_int-1],year_string:year,date_int:date_int,month_int:month_int});
           });
    }
  }
