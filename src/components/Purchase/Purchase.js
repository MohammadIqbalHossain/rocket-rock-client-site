import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PuarchaseModal from './PurchaseModal';

const Purchase = () => {

    const { id } = useParams()

    const [purcahse, setPurchase] = useState({});




    return (
        <div>
            <section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
                <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">

                    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">

                        <div className="flex justify-center">
                            <img className=" transform hover:scale-105 transition duration-700 ease-out" src="" width="300" height="300" alt="Details About Books" />
                        </div>
                        <div>
                            <header>
                                <div className="mb-3">
                                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                                        <li className="m-1">
                                            <Link className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" to="#0">For whole sale</Link>
                                        </li>
                                        <li className="m-1">
                                            <Link className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" to="#0">
                                                {/* Some */}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="text-2xl md:text-left lg:text-3xl font-bold leading-tight mb-2">
                                    <h1 className="hover:text-gray-100 transition duration-150 ease-in-out" >
                                        {/* some */}
                                    </h1>
                                </h3>
                            </header>
                            <p className="text-lg md:text-left text-gray-400 flex-grow">
                                {/* some */}
                            </p>
                            <footer className="flex items-center mt-4">

                                {/* this is for updating supplier image */}
                                <a href="https://web.facebook.com/iqbal.abdullah.927543/">
                                    <img className="rounded-full flex-shrink-0 mr-4"
                                        src="" width="40" height="5" alt="Author 04" />
                                </a>
                                <div>
                                    <p className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out inline">
                                        {/* some */}
                                    </p>
                                    <span className="text-gray-700"> - </span>
                                    <span className="text-gray-500">Jan 19, 2020</span>
                                </div>

                            </footer>
                            <div className="flex justify-start my-5">
                                {/* <button onClick={() => handleQuantity(book._id)} className="btn btn-outline text-white px-16">Delevered</button> */}

                            </div>
                            <div className="flex justify-start my-5">
                                <label for="my-modal-6" class="btn modal-button">open modal</label>
                            </div>

                        </div>
                       <PuarchaseModal />
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Purchase;