import React from 'react';
import { PaystackButton } from 'react-paystack';

const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_521d89aa0fcf83e56190c164c164de74810eb110',
};

const Paystack = () => {
    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
    };
  
    // you can call this function anything
    const handlePaystackClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Submit',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackClose,
    };

    return (
        <div>
            <header>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
            <PaystackButton 
                style = {{
                    border: 'none'
                }}
            {...componentProps} />
        </div>
    )

}

export default Paystack;