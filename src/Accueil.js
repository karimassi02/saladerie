import React from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


function Accueil() {
    let navigate = useNavigate()
    const [username, setUsername] = useState("")
    const myOrderId = Math.random() * 10000000000000000
    const handleInput = (e) => {
    setUsername(e.target.value)
}
    return (
      
      <div className="App">
      <header className="App-header">
          <h1> Saladerie by Rimka </h1>
          <form>
            <input
              value={username}
              type='text'
              placeholder='type your username'
              onChange={handleInput} />
          </form>
          <br/>
          Your username is : <h3> {username}</h3>
          <button onClick={()=> navigate("/Order")}> GO</button>
          {myOrderId}
        </header>
      </div>
      
    )
  }

  export default Accueil;