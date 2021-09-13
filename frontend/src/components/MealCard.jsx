import React from "react";
import { Card, Button } from 'react-bootstrap';

function MealCard(props){
  return(
    <div>
     {props.day_entry?
       (props.day_entry.meals.map((meal, index) => (
             <Card style={{width:"18rem"}}>
               <Card.Body>
                 <Card.Title>Meal Number {index+1}</Card.Title>
                  {meal.food.map((food_item) => (<Card.Text>{food_item}</Card.Text>))}
                 <Button variant="outline-dark"><a href="/">Delete Meal</a></Button>
               </Card.Body>
             </Card>
           )))
            :(<Card style={{width:"18rem"}}>
               <Card.Body>
                <Card.Title>No meals for this day</Card.Title>
               </Card.Body>
              </Card> )}
    </div>
  );
}

export default MealCard;
