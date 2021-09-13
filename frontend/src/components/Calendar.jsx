import React from "react";
import month_string from "../month_string";

function Calendar(props){

var month = month_string[props.month_int];

 return(
   <div className="columns col-lg-6 col-sm-12">
     <div className="calendar-container container">
         <div className="month-container container" id={month}>
             <h3> {month}, {props.year_string} </h3>
             <div className="day-of-week">
                 <span>Sun</span><span>Mon</span><span>Tue</span><span>
                     Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
             </div>
             {props.calendar.map((week) => {
                return(<div className="week">
                         {week.map((date) => {
                           return(
                             <div className="date">
                              <div id={date+"/"+toString(props.month_int)+"/"+props.year_string}>
                                <form className="" action="/" method="get">
                                    <button  className="btn btn-outline-dark date-button" type="submit" name="date-button" value="{date}">{date}</button>
                                </form>
                              </div>
                             </div>
                           );
                         })}
                       </div>);
             })}
             </div>
         </div>
   </div>
);
}

export default Calendar;
