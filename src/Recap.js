import React from "react";
import "./App.css";


const RecapPage = () => {

return(    
    <>
    

    <div>
        <h1 class='panier'> Create your account to confirm your order </h1>
        <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"></input>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"></input>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"></input>
        <input type="submit" value="Submit"/>

        </form>
    </div>

    <div class='panier'>
        <h1> Your order is </h1>
        
    </div>
    </>
)

}


export default RecapPage;