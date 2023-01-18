import React from "react";
import "./App.css";
// import Accueil from "./Accueil";

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
        <>
        <input type="submit" value="Submit" onclick={console.log("Votre compte est crée")}/>
        </>
        

        </form>
    </div>

    <div>
        <h1 class='panier'> Your order is </h1>
        Sorry we cannot process your order right now as the site is under maintenance. Thank you for your patience.
    </div>
    </>
)

}


export default RecapPage;