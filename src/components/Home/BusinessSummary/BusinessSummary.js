import React from 'react';
import { AiTwotoneFlag } from 'react-icons/ai';
import { AiFillProject } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { GiThumbUp } from 'react-icons/gi';

const BusinessSummary = () => {


    return (
        <div className="md:ml-20 my-10">
            <div className="">
                <h1 className="text-center uppercase text-extrabold text-4xl text-[#28AAA9]">Million Rocek entusisasit trust us</h1>
                <p className="text-center uppercase text-extrabold text-2xl text-[#28AAA9] my-5">Try to understand users expectation</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 mx-auto">
                <div className=" w-52  text-center">
                    <AiTwotoneFlag  className="mx-auto text-8xl text-[#28AAA9] "/>
                    <h1 className="font-extrabold text-4xl">72</h1>
                    <h3 className="text-xl text-[#28AAA9]">Countries</h3>
                </div>

                <div className=" w-52  text-center">
                    <AiFillProject  className="mx-auto text-8xl text-[#28AAA9] "/>
                    <h1 className="font-extrabold text-4xl">535+</h1>
                    <h3 className="text-xl text-[#28AAA9]">Complete projets</h3>
                </div>

                <div className=" w-52 text-center">
                    <IoIosPeople  className="mx-auto text-8xl text-[#28AAA9] "/>
                    <h1 className="font-extrabold text-4xl">273+</h1>
                    <h3 className="text-xl text-[#28AAA9]">Happy clients</h3>
                </div>

                <div className=" w-52  text-center">
                    <GiThumbUp  className="mx-auto text-8xl text-[#28AAA9] "/>
                    <h1 className="font-extrabold text-4xl">432+</h1>
                    <h3 className="text-xl text-[#28AAA9]">Feedback</h3>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;