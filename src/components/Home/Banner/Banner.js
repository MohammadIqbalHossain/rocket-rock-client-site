import React from 'react';
import banner from '../../../assets/images/astronut-banner-2.jpg'

const Banner = () => {
    return (
        <div className="h-[90vh] w-full bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="text-white w-10/12">
                <h1 className="text-5xl font-extrabold uppercase my-5">
                    <span className="font-mono">We make parts</span>
                    <br />
                     of a breathing rocket
                </h1>
                <p className="text-xl ">
                    On March 31, Rocekt Rock successfully completed its fourth human spaceflight and 20th overall flight for New Shepard.
                </p>
            </div>
        </div>
    );
};

export default Banner;