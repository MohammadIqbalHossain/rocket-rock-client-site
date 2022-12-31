import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51L14yAFnm89k40kTV81n5y1mxhYzTDPoLJFDlT6lCT8p7q7nPpjVX03MKdq1YfK5us5BzYrVUL2cil7uJu0z2Vp500ZCg165BM');


const Payment = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/payment/${id}`;

    const { data: orders, isLoading, refetch } = useQuery(['orders', id], () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="flex flex-col justify-center items-center h-[90vh]">
            <div class="card max-w-sm  bg-base-100 shadow-xl">
                <div class="card-body">

                    <h1 class="card-title uppercase">Pay for confirm order</h1>
                    <p>Pay for Your order we will contact you at <span className="text-green-500">{orders.email}</span> or <span className="text-green-500">{orders.phone}</span>, Please pay
                        {orders.price}</p>

                </div>
            </div>
            <div class="w-[400px] bg-white my-10 p-20 rounded-lg">


                <Elements stripe={stripePromise}>
                    <CheckoutForm orders={orders} />
                </Elements>


            </div>
        </div>
    );
};

export default Payment;