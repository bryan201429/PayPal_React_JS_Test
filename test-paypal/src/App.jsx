import { useState,useEffect } from 'react'
import './App.css'
import PaypalButton from './components/PaypalButton'

function App() {
  let price=15;



  return (
    <>

      <label>EL precio a pagar es: {price} USD </label>
      <br></br>
      <br></br>
      <PaypalButton totalValue={price} invoice={'Informacion de lo que se compro'}></PaypalButton>
    </>
  )
}

export default App
