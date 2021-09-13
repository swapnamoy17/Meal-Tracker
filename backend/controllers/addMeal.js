const mealDAO = require('../DAO/meal');

module.exports = {
  getMealPage(req,res){
    const fullDate = req.params.date;
    //console.log(window.location.pathname + window.location.search);
    console.log("Inside get add/:date\nFull Date received from home page to which meal will be added :",fullDate);

    const date = parseInt(fullDate.split("-")[0]);
    const month = parseInt(fullDate.split("-")[1]);
    const year = parseInt(fullDate.split("-")[2]);

    console.log("Inside /add/:date year=",year);

    mealDAO.findOneByDate(date, month, year)
           .then( day => {
             res.json({day_entry:day,date:date,month:month,year:year});
           });

  },
  postMealPage(req,res){
    const fullDate = req.params.date;

    const date = parseInt(fullDate.split("-")[0]);
    const month = parseInt(fullDate.split("-")[1]);
    const year = parseInt(fullDate.split("-")[2]);

    console.log("date:",date,"month:",month,"year:",year,"meal.ejs post");

    var meal = new Meal({
      food: [req.body.food_item]
    });

    mealDAO.findOneByDateAndUpdate(date, month, year)
           .then( () => console.log("Page updated with added meals."));
         }
       }
       
    // Day.findOne({date:date,month:month,year:year},
    //   else if(!day){
    //     const a = new Day({
    //       date: date,
    //       month: month,
    //       year: year,
    //       items: .push(req.body.food_item)
    //     });
    //
    //     a.save(function(err){
    //       if(err)
    //         console.log("Error in saving a new entry for the requested date.",err);
    //       else{
    //         console.log("New entry saved.").
    //         res.redirect("/add/"+date.toString()+"-"+month.toString()+"-"+year.toString());
    //       }
    //     });
    //   }
    //   else{
    //     Day.findOneAndUpdate({date: date,month:month,year:year},{items_done:item_no+1},function(err,asd){
    //       if(err)
    //         console.log("Error in finding and updating the requested day entry:",err);
    //       else{
    //         asd.entries.push(item);
    //         asd.save();
    //         console.log("Requested day entry updated.");
    //         res.redirect("/add/"+date.toString()+"-"+month.toString()+"-"+year.toString());
    //         }
    //       });
    //     }
    // });
