import React from "react";


function Toppings(){
    const toppings  = ['sausage', 'pepperoni', 'ham', 'green peppers', 'roma tomatoes', 'red peppers', 'pineapple','meatballs'];
toppings.map(element =>{

return(
<label for={element}>{ element} 
<input type="checkbox" id={element} name="toppings" value={element} />
</label>


)})


    
}




export default Toppings