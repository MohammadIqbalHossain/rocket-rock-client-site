import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PuarchaseModal from './PurchaseModal';
import avatar from '../../assets/images/avatar.svg'

const Purchase = () => {

    const { id } = useParams()
    console.log(id)

    const [user] = useAuthState(auth);

    const [purchase, setPurchase] = useState({});
    console.log(purchase)

    useEffect(() => {
        fetch(`https://rocket-rock-server-site-production.up.railway.app/parts/${id}`, {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])


    // const minQuantity = purchase.quantity
    // console.log(minQuantity)
    // const [minOrder, setMinOrder] = useState(0);
    // console.log(minOrder)

    // const decreseQuntity = () => {
    //     let quantity = parseInt(minOrder) - 1
    //     if (quantity < purchase.minOrderQuantity) {
    //         toast.error("You can't decrease more!")

    //     }
    //     setMinOrder(quantity)
    // }


    return (
        <div>
            <section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
                <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">

                    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">

                        <div className="flex justify-center">
                            <img className=" transform hover:scale-105 transition duration-700 ease-out" src={purchase.picture} width="300" height="300" alt="Details About Books" />
                        </div>
                        <div>
                            <header>
                                <div className="mb-3">
                                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                                        <li className="m-1">
                                            <Link className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" to="#0">Quabtity:{purchase.quantity} </Link>
                                        </li>
                                        <li className="m-1">
                                            <Link className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" to="#0">
                                                Minimum quantity:{purchase.minOrderQuantity}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="text-xl md:text-left lg:text-xl font-bold leading-tight my-2">
                                    Hello, {user.displayName}
                                </h3>

                                <p className="text-sm ">Would You like to buy this engine, place order we will contact you at {user.email}</p>

                                <h3 className="text-2xl md:text-left lg:text-3xl font-bold leading-tight mb-2">
                                    <p className="hover:text-gray-100 transition duration-150 ease-in-out text-3xl text-bold" >
                                        {purchase.Name}
                                    </p>
                                </h3>
                            </header>
                            <p className="text-lg md:text-left text-gray-400 flex-grow">
                                {purchase.des}
                            </p>
                            <footer className="flex items-center mt-4">

                                {/* this is for updating supplier image */}
                                <a href="https://web.facebook.com/iqbal.abdullah.927543/">
                                    <img className="rounded-full flex-shrink-0 mr-4"
                                        src={avatar} width="40" height="5" alt="Author 04" />
                                </a>
                                <div>
                                    <p className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out inline">
                                        Made in
                                    </p>

                                    <span className="text-gray-700"> - </span>
                                    <span className="text-gray-500">Jan 19, 2020</span>
                                </div>

                            </footer>
                            <div className="flex justify-start my-5">
                            </div>
                            <div className="flex justify-start my-5">
                                <label for="my-modal-6" className="btn modal-button">Place order</label>
                            </div>


                        </div>
                        <PuarchaseModal
                            minQuantity={purchase.minOrderQuantity}
                            quantity={purchase.quantity}
                            priceNum={purchase.price}
                            Name={purchase.Name}
                        />
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Purchase;