import React from "react";
import MealCard from "./MealCard";
import { Button } from 'react-bootstrap';

function DayEntry(props){
  return(
  <div class="columns col-lg-6 col-sm-12">
    <div class="right-side">
      <div class="day-entries">
        <h3>{props.date_int}/{props.month_int}/{props.year_string}</h3>
          <MealCard day_entry={props.day_entry} />
      </div>
      <form class="button-form" action={"/add/"+props.date_int+"-"+props.month_int+"-"+props.year_string} method="get">
           <Button variant="primary" type="submit">Add Meal</Button>
       </form>
    </div>
  </div>);
}

export default DayEntry;
