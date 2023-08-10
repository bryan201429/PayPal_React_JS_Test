import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

//const payPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PaypalButton = (props)=>{

    const handlePay=()=>{
        window.alert('Purchase Complete! Check on myNFTs');
        console.log("orden Exitosa",order);
    }

    return(

            <PayPalButtons
                createOrder={(data,actions)=>{
                    
                    return actions.order.create({
                        purchase_units:[{
                            description: props.invoice,
                            amount:{
                                value:props.totalValue
                            }
                        }]
                    })
                }}
                onApprove={async(data,actions)=>{
                    const order = await actions.order?.capture(handlePay())
                    
                }}
            />

    )
}

export default PaypalButton;

//https://developer.paypal.com/docs/checkout/standard/customize/single-page-app/
//