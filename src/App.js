import './App.css';
import { Routes, Route } from 'react-router-dom'
import  OrderStart  from './order';
import React from 'react'
import Accueil from './Accueil';


function App() {
  
  return (
    
    
       <>
       <Routes>
        <Route path='/' element = {<Accueil/>} />
        <Route path='/Order' element = {<OrderStart/>} />

      </Routes>
      </>
      
  )
}

//     <Route path='/Recap' element = {<RecapPage/>} />


export default App;
