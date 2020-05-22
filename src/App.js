import React, {useState} from "react";
import JumboComp from './jumboTron';
import ItemContainer from './itemsContainer';




const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <p>Lambs and chops</p>
      <ItemContainer />
    </div>
  );
};
export default App;
