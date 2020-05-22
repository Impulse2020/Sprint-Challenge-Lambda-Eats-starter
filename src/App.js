import React, {useState} from "react";
import { Route, Link } from 'react-router-dom';
import JumboComp from './jumboTron';
import ItemContainer from './itemsContainer';
import PizzaMaker from './pizza';





const App = () => {
  


  const [error, setError] = useState(``);
  const [isFetching, setIsFetching] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [pizza, setPizza] = useState({});
  const [formValues] = useState({});












  return (
    <div>
      <Route exact path ="/">
      <JumboComp />
      <ItemContainer />
      </Route>
      <Route path="/pizza/">
      <PizzaMaker />
      </Route>
      <Route path="/complete">
      <div>
        <h1>Your order is coming up!</h1>
        <img src="pizza.jpg" alt="" />
       
        <p>Topsail keelhaul haul wind Barbary Coast ye scallywag line furl schooner lugsail. Main sheet sheet mizzen Sail ho holystone parrel Sink me case shot quarterdeck scuppers. </p>
        <Link to="/"><button>Go home</button></Link>
      </div>
      </Route>
    </div>
  );
};
export default App;
