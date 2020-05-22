import React, {useState} from "react";
import { Route } from 'react-router-dom';
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
      <h1>Lambda Eats</h1>
      <p>Lambs and chops</p>
      <ItemContainer />
      </Route>
      <Route path="/pizza/:name">
      <PizzaMaker />
      </Route>
    </div>
  );
};
export default App;
