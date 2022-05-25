import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import './Blogs.css';

const Blogs = () => {
    return (
       
        <div className="blog-cover ">
            <div className="flex justify-around items-center md:flex-row flex-col ">
                <div className="md:text-left flex-col md:flex-row flex uppercase md:w-[600px] items-center mt-24">
                    <h1 className="text-4xl font-extralight text-orange-600">The Blog</h1>
                    <p className="text-sm text-gray-600 ml-5">Essays, Answers of the four qustions, and also tips from daddy. This Essay is for assignment answers.</p>
                </div>
                <div className="flex flex-col mx-10 items-center md:mt-24 mt-9">

                    <input
                        className="rounded-sm p-2"
                        type="text"
                        placeholder="Find something"
                    />


                    <div className="flex gap-10 my-5 mx-10 justify-center ">
                        <FaFacebook />

                        <MdMarkEmailRead />

                        <BsTwitter />
                    </div>


                </div>
            </div>

            {/* <img src={blogCover} height="10" className="h-80 w-full bg-none" alt=""/> */}


            <div className="flex justify-center ">
                <div className="text-left md:w-[600px] m-5 md:order-2 order-1">
                    <h1 className="text-3xl text-gray-500 mt-[200px]">When should  we use mongoDB and and when node.js</h1>
                    <p className="text-lg font-serif">
                        <strong >JavaScript : </strong> JavaScript  is programming language thay is used for making website. JavaScript is high-level programming language, javaScript is a updated version of the ecmaScript, ES6 is the latest version of the javaScript. javaScript also called by js.  It world most plooular Language.
                        <br />
                        <br />
                        <strong >Node.js : </strong> Node.js is not a programming language it's a javaScript runtime, it's developed by Ryan Dhal,  node.js written on c# and c++, with the help of node.js javaScript can run in the server-site.
                    </p>

                    <h1 className="text-3xl text-gray-500 my-4"> What areDifference between SQL and noSQL database?</h1>
                    <p className="text-lg font-serif">
                        <strong >SQL : </strong>
                        SQL database vertically steuctured, SQl database has are table based, it's primarily called as a relational database. SQL database are most used and powerful in in the globe, it gives diffrent quers and safely stored data, but SQl database diffrent kind of schemas,  that's why using SQL databse is hard, rather than NOSQL dtabase,
                        <br />
                        <br />
                        <strong >noSQL : </strong>
                        noSQL dtabse arw different than SQL database, it sotes dta like an objects, it a horizontally scallable database, usually noSQL databse are called non-relational database. Using noSQL database are easier than SQL database.
                    </p>

                    <h1 className="text-3xl text-gray-500 my-4">When should  we use mongoDB and and when node.js?</h1>
                    <p className="text-lg font-serif">Node.js is a javaScript runtime, that can run javaScript code without browsers, most commonly node.js useed as server to get data from the server,
                        on the other hand MongoDB is database that can store data for a website, and display them into the website, MongoDB offeres some API to get data, post, put,  patch etc, through node.js.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;