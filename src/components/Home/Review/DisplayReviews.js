import React from 'react';
import { Link } from 'react-router-dom';

const DisplayReviews = ({ reviews }) => {

    const { name, email, review, ratings } = reviews;
    return (
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto mx-3 my-4 w-[500px] ">
                <div class="rounded-3xl absolute inset-0 bg-gradient-to-r from-blue-400 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div class="rounded-3xl relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div class="max-w-md mx-auto">
                        <div>
                            
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <p>{review}</p>
                                <ul class="list-disc space-y-2">
                                    <li class="flex items-start">
                                        <span class="flex items-center h-6 sm:h-7">
                                            <svg class="flex-shrink-0 h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <p class="capitalize ml-2">
                                            {name}
                                            {/* <code class="text-sm font-bold text-gray-900 lowercase">tailwind.config.js</code> file */}
                                        </p>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="flex items-center h-6 sm:h-7">
                                            <svg class="flex-shrink-0 h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <p class="capitalize ml-2">
                                            {email}
                                            {/* <code class="text-sm font-bold text-gray-900 lowercase">@apply</code> file */}
                                        </p>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="flex items-center h-6 sm:h-7">
                                            <svg class="flex-shrink-0 h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <p class="capitalize ml-2">{ratings}</p>
                                    </li>
                                </ul>
                                <p>If You want to give us a review like this please visit reviw page in the dashboard, Your review is matter, it's make us inspires us to make more beautiful engines that you like.</p>
                            </div>
                            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                <p>Please give a review</p>
                                <p>
                                    <Link to="/dashboard/dashboard/add-a-review" class="text-blue-600 hover:text-blue-700"> Go to review page &rarr;</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayReviews;