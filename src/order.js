import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";


const OrderStart = () => {
    let navigate = useNavigate();
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
    <h2> Your ingredients are: </h2>
    <h3> Your price is <span>{count}</span> euros</h3>
    {cart.map((ingredient, index) => (
        <div key={ingredient.id} class='magie'>
            
            <p>{ingredient} <button class='removebutton' onClick={()=>{removeItem(index);setCount(count - 0.5)}}>x</button></p>
        </div>
    ))}
{/*         
        <div class='magie div2'>
            <h2> Your proteins are: </h2>
        </div>
        <div class='magie div3'> 
            <h2> Your sauces are: </h2>
    </div> */}

    

    <div>
        <div class='div1'>
        <h2> Choose your greens </h2>
        <button class='vegebutton button' onClick={()=> {addToCart("Lettuce");setCount(count + 0.5)}}> Lettuce  </button><br/>
        <button class='vegebutton button' onClick={()=>{addToCart("Tomato");setCount(count + 0.5)}}> Tomato </button><br/>
        <button class='vegebutton button' onClick={()=>{addToCart("Cucumber");setCount(count + 0.5)}}> Cucumber </button><br/>
        <button class='vegebutton button' onClick={()=>{addToCart("Olives");setCount(count + 0.5)}}> Olives </button><br/>
        <button class='vegebutton button' onClick={()=>{addToCart("Avocado");setCount(count + 0.5)}}> Avocado </button><br/>
        <button class='vegebutton button' onClick={()=>{addToCart("Corn");setCount(count + 0.5)}}> Corn </button><br/>
        <button class='vegebutton button' onClick={()=>{addToCart("Carrot");setCount(count + 0.5)}}> Carrot </button><br/>
        <button class='vegebutton button' onClick={()=>{addToCart("Radish");setCount(count + 0.5)}}> Radish </button>
        </div>

        <div class='div2'>
        <h2> Choose your protein</h2>
        <button class='protbutton button' onClick={()=>{addToCart("Eggs");setCount(count + 0.5)}}> Eggs </button> <br/>
        <button class='protbutton button' onClick={()=>{addToCart("Bacon");setCount(count + 0.5)}}> Bacon </button><br/>
        <button class='protbutton button' onClick={()=>{addToCart("Sliced Turkey");setCount(count + 0.5)}}> Sliced Turkey </button><br/>
        <button class='protbutton button' onClick={()=>{addToCart("Crab");setCount(count + 0.5)}}> Crab </button><br/>
        <button class='protbutton button' onClick={()=>{addToCart("Salmon");setCount(count + 0.5)}}> Salmon </button><br/>
        <button class='protbutton button' onClick={()=>{addToCart("Chicken strips");setCount(count + 0.5)}}> Chicken strips </button><br/>
        <button class='protbutton button' onClick={()=>{addToCart("Tuna");setCount(count + 0.5)}}> Tuna </button><br/>
        <button class='protbutton button' onClick={()=>{addToCart("Shrimp");setCount(count + 0.5)}}> Shrimp </button>
        </div>

        <div class='div3'> <br/>
        <h2> Choose your sauce </h2>
        <button class='saucebutton button' onClick={()=>{addToCart("Sesame Ginger");setCount(count + 0.5)}}> Sesame Ginger </button><br/>
        <button class='saucebutton button' onClick={()=>{addToCart("Honey Mustard");setCount(count + 0.5)}}> Honey Mustard </button><br/>
        <button class='saucebutton button' onClick={()=>{addToCart("Balsalic Vinaigrette");setCount(count + 0.5)}}> Balsamic Vinaigrette </button><br/>
        <button class='saucebutton button' onClick={()=>{addToCart("Ranch");setCount(count + 0.5)}}> Ranch </button><br/>
        <button class='saucebutton button' onClick={()=>{addToCart("Ceasar");setCount(count + 0.5)}}> Ceasar </button><br/>
        <button class='saucebutton button' onClick={()=>{addToCart("Italian Dressing");setCount(count + 0.5)}}> Italian Dressing </button><br/>
        <button class='saucebutton button' onClick={()=>{addToCart("French Dressing");setCount(count + 0.5)}}> French Dressing </button><br/>
        </div>
        <div class='mid'>
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
        <button class='magie button reset' onClick={()=>{resetOrder();setCount(5)}}> RESET ORDER </button>
        <button class='magie button checkout' onClick={()=> navigate("/Recap")}>CHECKOUT</button>
        </div>
    
    </div>

    </div>




    </>
    )
}








export default OrderStart;