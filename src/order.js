import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import RecapPage from './Recap';

let navigate = useNavigate;
const OrderStart = () => {
    const [cart, setCart] = useState([]);
    const [count,setCount] = useState(5);
    const addToCart =ingredient =>(setCart([...cart,ingredient])) ;
    const removeItem = index => {
        setCart(cart.filter((_, i) => i !== index));
      }
    function resetOrder() {
        setCart([]);
    }
    return( 
    <>
    <div class='bg'>
    <h1> Start ordering ! </h1> 
    <h2> Your greens are:{count} </h2>
    {cart.map((ingredient, index) => (
        <div key={ingredient.id} class='magie'>
            
            <p>{ingredient} <button onClick={()=>{removeItem(index);setCount(count - 0.5)}}>-</button></p>
        </div>
    ))}
        <div class='magie'>
            <h2> Your proteins are: </h2>
        </div>
        <div class='magie'> 
            <h2> Your sauces are: </h2>
        </div>
        <div>
        <button class='magie' onClick={()=>{resetOrder();setCount(5)}}> RESET ORDER </button>
        <button class='magie' onClick={()=> navigate("/Recap")}>CHECKOUT</button>
        </div>

    

    <div>
        <div>
        <h2> Choose your greens </h2>
        <button onClick={()=> {addToCart("Lettuce,");setCount(count + 0.5)}}> Lettuce  </button><br/>
        <button onClick={()=>{addToCart("Tomato,");setCount(count + 0.5)}}> Tomato </button><br/>
        <button onClick={()=>{addToCart("Cucumber,");setCount(count + 0.5)}}> Cucumber </button><br/>
        <button onClick={()=>{addToCart("Olives,");setCount(count + 0.5)}}> Olives </button><br/>
        <button onClick={()=>{addToCart("Avocado,");setCount(count + 0.5)}}> Avocado </button><br/>
        <button onClick={()=>{addToCart("Corn,");setCount(count + 0.5)}}> Corn </button><br/>
        <button onClick={()=>{addToCart("Carrot,");setCount(count + 0.5)}}> Carrot </button><br/>
        <button onClick={()=>{addToCart("Radish,");setCount(count + 0.5)}}> Radish </button>
        </div>

        <div>
        <h2> Choose your protein</h2>
        <button onClick={()=>{addToCart("Eggs,");setCount(count + 1)}}> Eggs </button> <br/>
        <button onClick={()=>{addToCart("Bacon,");setCount(count + 1)}}> Bacon </button><br/>
        <button onClick={()=>{addToCart("Sliced Turkey,");setCount(count + 1)}}> Sliced Turkey </button><br/>
        <button onClick={()=>{addToCart("Crab,");setCount(count + 1)}}> Crab </button><br/>
        <button onClick={()=>{addToCart("Salmon,");setCount(count + 1)}}> Salmon </button><br/>
        <button onClick={()=>{addToCart("Chicken strips,");setCount(count + 1)}}> Chicken strips </button><br/>
        <button onClick={()=>{addToCart("Tuna,");setCount(count + 1)}}> Tuna </button><br/>
        <button onClick={()=>{addToCart("Shrimp,");setCount(count + 1)}}> Shrimp </button>
        </div>

        <div>
        <h2> Choose your sauce </h2>
        <button onClick={()=>{addToCart("Sesame Ginger,");setCount(count + 1)}}> Sesame Ginger </button><br/>
        <button onClick={()=>{addToCart("Honey Mustard,");setCount(count + 1)}}> Honey Mustard </button><br/>
        <button onClick={()=>{addToCart("Balsalic Vinaigrette,");setCount(count + 1)}}> Balsamic Vinaigrette </button><br/>
        <button onClick={()=>{addToCart("Ranch,");setCount(count + 1)}}> Ranch </button><br/>
        <button onClick={()=>{addToCart("Ceasar,");setCount(count + 1)}}> Ceasar </button><br/>
        <button onClick={()=>{addToCart("Italian Dressing,");setCount(count + 1)}}> Italian Dressing </button><br/>
        <button onClick={()=>{addToCart("French Dressing,");setCount(count + 1)}}> French Dressing </button><br/>
        </div>
    </div>

    </div>




    </>
    )
}








export default OrderStart;