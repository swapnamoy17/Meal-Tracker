import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NavBar from "./NavBar";
import http from "../http-common";
import MealCard from "./MealCard";
import Meal from "../DBModel";

function MealPage(){

  const [mealData, setMealData] = useState({});
  const [input, setInput] = useState("");

  const handleInput = event => {
    setInput(event.target.value);
  };

  useEffect(() => {
    const retrieveMealData = () => {
      console.log("Inside retrieveMealData",window.location.pathname + window.location.search);
      http.get(window.location.pathname + window.location.search)
          .then(res => {
             console.log("react=",res);
             console.log("react=",res.data);
             setMealData(res.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    retrieveMealData();
  },[mealData]);

  function postMealData(e){
    e.preventDefault();
    console.log("Inside retrieveMealData",window.location.pathname + window.location.search);
    http.post(window.location.pathname + window.location.search, { food_item: input})
        .then( () => { var new_mealData = mealData;
                       new_mealData.day_entry.meals.push(new Meal({ food: input }));
                       setMealData(new_mealData);
                       setInput("");
                       });
  }

  const active = ["nav-link","nav-link","nav-link"];
  const day_entry = mealData.day_entry;

  return(
  <div className="container">
    <NavBar active={active}/>
    <MealCard day_entry={day_entry} />
    <form onSubmit= { postMealData }>
      <label>Enter a food item:</label>
      <input type="text" name="food_item" placeholder="Enter food item" value={input} onChange={handleInput}/>
      <button className="btn btn-outline-dark" type="submit">Add</button>
    </form>
    <a href="/">Home</a>
  </div>
);
}

export default MealPage;
