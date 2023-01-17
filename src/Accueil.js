import React from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./App.css";


function Accueil() {
    let navigate = useNavigate()
    const [username, setUsername] = useState("")
    const myOrderId = Math.floor(Math.random() * 10000000000)
    const handleInput = (e) => {
    setUsername(e.target.value)
}
    return (
      
      <div className="App">
      <header className="App-header">
          <h1> <i>Saladerie by Rimka</i></h1>
          <form>
            <input
              value={username}
              type='text'
              placeholder='type your username'
              onChange={handleInput} />
          </form>
          <br/>
          Your username is : <h3 class='black'> {username}</h3>
          <button onClick={()=> navigate("/Order")}> GO</button> <br/>
          Your Order ID is : <h3 class='black'>{myOrderId}</h3>
        </header>
      </div>
      
    )
  }

  export default Accueil;