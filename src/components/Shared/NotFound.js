import React from 'react';
import userCry from '../../assets/images/image-asset.jpeg'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="mt-20">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="">
                    <img src={userCry} width="300" alt="" />
                </div>
                <div>
                    <h1 className="text-7xl font-mono">Aww...Don't <br /> cry</h1>
                    <p className="text-xl font-thin font-mono md:w-[400px] mt-4">The page you're looking for might have been removed had it's name changed or it't temporary unavilable.</p>
                    <button className="p-3 px-6 bg-blue-600 rounded-full text-lg font-bold text-white font-mono my-8">
                        <Link to="/">GO TO HOME PAGE</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;