import {Switch, Route, Link} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MealPage from "./components/MealPage";

function App() {

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/add/:date" component={MealPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
