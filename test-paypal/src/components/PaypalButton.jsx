import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButtonInterface={
    totalValue:"",
    invoice:""
}

const PaypalButton = (props)=>{
    return(
        <div>
            <PayPalButtons/>
        </div>
    )
}

export default PaypalButton;