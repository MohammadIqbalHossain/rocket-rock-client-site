import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner';

const CheckoutForm = ({ orders }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [stripeError, setStripeError] = useState("");
    const [success, setSuccess] = useState("");
    const [clientSecret, setClinetSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessig] = useState(false);



    const { _id, price, name, address } = orders;
    const priceNum = parseInt(price);
    console.log(priceNum)





    useEffect(() => {
        fetch('http://localhost:3000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ priceNum })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.clientSecret) {
                    setClinetSecret(data.clientSecret)
                }
            })
    }, [price])


    // if(processing){
    //     return <Spinner />
    // }


    const handleSubmit = async (event) => {
        event.preventDefault();



        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setStripeError(error?.message || "")
        setSuccess("");
        setProcessig(true)

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        address: address
                    },
                },
            },
        );

        if (intentError) {
            setStripeError(intentError?.message)
            setProcessig(false)
        }
        else {
            setStripeError("")
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent)
            setSuccess("Congrats! Your payment is successfull")


            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }


            console.log(_id)
            console.log(payment)
            fetch(`http://localhost:3000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProcessig(false)
                })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-accent btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

            {
                stripeError && <p className="text-red-500">{stripeError}</p>
            }
            {
                success && <div className="text-green-500">
                    <p>{success}</p>
                    <p className=" text-bold">
                        <span className="text-orange-500">Your TransjactionId: {transactionId}</span>
                    </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;