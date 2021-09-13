import React, {useState, useEffect} from "react";
import http from "../http-common";
import Calendar from "./Calendar";
import NavBar from "./NavBar";
import DayEntry from "./DayEntry";

function Home(props){
  const active =["nav-link active","nav-link","nav-link"];
  const [homeData, setHomeData] = useState({calendar:[[1],[1]]});

  useEffect(() => {
    retrieveHomeData();
  }, []);

  const retrieveHomeData = () => {
    console.log("Inside retrieveHomeData");
    http.get('/')
        .then(res => {
           console.log("react=",res);
           console.log("react=",res.data);
           setHomeData(res.data);
        })
        .catch(e => {
          console.log(e);
        });
  }

  return(
    <div className="container">
      <NavBar active={active}/>
      <div className="row">
        <Calendar calendar={homeData.calendar} year_string={homeData.year_string} month_int={homeData.month_int} />
        <DayEntry day_entry={homeData.day_entry} year_string={homeData.year_string} date_int={homeData.date_int} month_int={homeData.month_int}/>
      </div>
    </div>);
}

export default Home;
