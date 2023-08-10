import React from 'react'
import ReactDOM from 'react-dom/client'
import {PayPalScriptProvider} from '@paypal/react-paypal-js'  //!Importar Paypal luego de instalarlo con $ npm install @paypal/react-paypal-js
import App from './App.jsx'
import './index.css'


let clientID='Ac5Wfk9nx59rszQBbwzRFTkvK2jKMYdfY_Wf4tlMUWutbnLfMa5PH1ZCQpkxx8kZvSCSYgbfdXIqyTTI'   //! ID del usuario

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PayPalScriptProvider options={{"client-id":clientID}}>
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>,
)
