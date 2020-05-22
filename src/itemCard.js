import React from 'react';
import { Link } from 'react-router-dom';



function ItemCard(props){
return(
<div className= "card">
    <h3>Store Name</h3>
    <img src="/" />
    <p>Delivery Fee $0.00 - $20.00</p>
    <Link to="/pizza"><button name="add"> Go to store </button></Link>
    </div>
)
}



export default ItemCard