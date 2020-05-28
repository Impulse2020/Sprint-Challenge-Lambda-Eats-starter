import React, { useState } from 'react';
import axios from 'axios';
import JumboComp from './jumboTron';
import { Link } from 'react-router-dom';


const initialState ={
    name: "",
    sauce: "",
    size: "",
    special: "",

}
const url = 'https://reqres.in/';

function PizzaMaker() {
    const [formValues, setFormValues] = useState(initialState);
    const onChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
         });

    }
    const onSubmit = (event) => {
        event.preventDefault()
        axios.post(url, {
            name:formValues.name,
            sauce:formValues.sauce,
            special:formValues.size,
            size:formValues.special            
        })
        .then((response) => {
            console.log(response);            
        }, (error) => {
            console.log(error);       
    });
    

}


    return (
        <form class="form">
            <h1> Store Name</h1>
            <h2>Start Your order</h2>
            <label>Name: &nbsp;
            <input
                    name='name'
                    type='text'
                    value={formValues.name}
                    onChange = {onChange}
                />
            </label>


            {/* Pizza size input below v */}


            <label>Pizza Size &nbsp;
                <select id="size" name="size" value={formValues.size} onChange={onChange}>
                    <option value="extra small">extra small</option>
                    <option value="small">small</option>
                    <option value="large">large</option>
                    <option value="giant">Giant</option>
                    <option value="Galactic"> Galactic</option>
                </select>
            </label>


            {/*Pizza sauce options below v */}


            <div className="form sauces">
                <label > <h2>Sauce</h2> &nbsp;
                    <label> Marinara &nbsp;
                    <input
                            type="radio"
                            name="sauce"
                            value="marinara"
                            onChange={onChange}
                        />
                    </label>
                    <label>Chipotle Marinara &nbsp;
                    <input
                            type="radio"
                            name="sauce"
                            value="chipotle-marinara"
                            onChange={onChange}
                        />
                    </label>
                    <label> Barbecue sauce &nbsp;
                    <input
                            type="radio"
                            name="sauce"
                            value="barbecue" 
                            onChange={onChange}/>
                    </label>
                    <label>Pesto &nbsp;
                    <input
                            type="radio"
                            name="sauce"
                            value="pesto"
                            onChange={onChange}
                        />
                    </label>

                </label>

            </div >
            {/*Pizza toppings checkboxes below here v */}




            <input type="checkbox" id="topping1" name="topping1" value="sausage" />
            
            <label for="topping1"> Sausage</label> <br />

            <input type="checkbox" id="topping2" name="topping2" value="pepperoni" />
            
            <label for="topping2"> pepperoni</label><br />
            
            <input type="checkbox" id="topping3" name="topping3" value="ham" />
            
            <label for="topping3"> ham</label><br />
            
            <input type="checkbox" id="topping4" name="topping4" value="bellpeppers" />
            
            <label for="topping4"> bell peppers</label><br />

            <input type="checkbox" id="topping5" name="topping5" value="pineapple" />

            <label for="topping5"> Pineapple</label><br />

            {/*Choice of substitute*/}
            <label className="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
            <br />
            {/*special instructions field*/}
            <label className="instructions">Special instructions
            <input name="special" type="textarea" value={formValues.special} onChange={onChange} />
                <br />



            </label>


            {/*select quantity*/}

            <label> &nbsp;
            <input name="quantity" type="number" min="1" max="10"></input>
            </label>

            {/*submit button */}
            <Link to="/complete" ><button onsubmit="">Add to order</button></Link>
            {console.log(formValues)}
        </form >
        
    )
}

export default PizzaMaker