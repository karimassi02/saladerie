import './App.css';
import { Routes, Route } from 'react-router-dom'
import  OrderStart  from './order';
import React from 'react'
import Accueil from './Accueil';
import RecapPage from './Recap'


function App() {
  
  return (
    
    
       <>
       <Routes>
        <Route path='/' element = {<Accueil/>} />
        <Route path='/Order' element = {<OrderStart/>} />
        <Route path='/Recap' element = {<RecapPage/>} />
      </Routes>
      </>
      
  )
}

//     <Route path='/Recap' element = {<RecapPage/>} />


export default App;
