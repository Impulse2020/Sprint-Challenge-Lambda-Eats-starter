import React from 'react';

function PizzaMaker(){

return(
<div class="form">
    <h1> Store Name</h1>
    <h2>Start Your order</h2>
    <label>Name: &nbsp; 
    <input
        name = 'Name'
        type = 'text'    
    ></input>
    </label>


{/* Pizza size input below v */}


    <label>Pizza Size &nbsp;
    <select id= "size" name ="size">
       <option value="extra small">extra small</option>
       <option value= "small">small</option>
       <option value ="large">large</option>
       <option value ="giant">Giant</option>
       <option value = "Galactic"> Galactic</option>
    ></select>
    </label>


{/*Pizza sauce options below v */}


<div className ="form sauces">
<p>
    <label >Sauce &nbsp;
    
    <p>
    <label> Marinara &nbsp;
    <input 
    type = "radio"
    name = "sauce"
    value = "marinara"
    />
    </label>
    <label>Chipotle Marinara &nbsp;
    <input
    type="radio"
    name = "sauce"
    value = "chipotle-marinara"

    />
    </label>
    <label> Barbecue sauce &nbsp;
    <input
    type="radio"
    name="sauce"
    value = "barbecue" />
    </label>
    <label>Pesto &nbsp;
    <input
    type = "radio" 
    name = "sauce"
    value = "pesto"
    
    
    
    
    />
    </label>
    </p>
    </label>
    </p>
    </div>
{/*Pizza toppings checkboxes below here v */}

    
    
    
    
    <label>
    <input></input>
    </label>
   
 {/*Choice of substitute*/}  
   <label>
    <input></input>


   </label>
   
{/*select quantity*/}
   
   
    <input name="quantity" type="drop-down"></input>


{/*submit button */}
    <button onsubmit = "">Add to order</button>

</div>

)
}

export default PizzaMaker