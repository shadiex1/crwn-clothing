import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const PublishableKey= "pk_test_AVVgZkraeaDFnfUm28yp5leT00Eq5nZPXy"
    const onToken=token=>{
        alert("payment Succesful")
        console.log(token)
    }
 return(

        <StripeCheckout 
        laebl="pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description= {`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={PublishableKey}/>
    )
}



export default StripeCheckoutButton