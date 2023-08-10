import React from 'react'
import ReactDOM from 'react-dom/client'
import {PayPalScriptProvider} from '@paypal/react-paypal-js'  //!Importar Paypal luego de instalarlo con $ npm install @paypal/react-paypal-js
import App from './App.jsx'
import './index.css'

let clientID='AZH5o8tGZvoYHy7nDEAWrPsyeVw_b1KpSCCiw9m2HAqadaMyFjX4gE8BBC8oc8leLkInFuoGGUpufo2_'   //! ID del usuario

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PayPalScriptProvider options={{
      "client-id":clientID
    }}>
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>,
)
