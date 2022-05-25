import React from 'react';
import { Link } from 'react-router-dom';

const DisplayParts = ({ part }) => {
    const { Name, picture, des, price, _id, minOrderQuantity, quantity } = part;
    return (
        <div className="flex justify-between items-center md:m-20 flex-col md:flex-row lg-flex-row ">
            <img src={picture} className="md:w-[600px] m-10" alt="" />
            <div className="md:w-[400px] md:m-20 ">
                <h1 className="text-4xl font-bold my-5">{Name}</h1>
                <p className="text-lg my-2">{des}</p>
                <h3>Minimun order quantity: {minOrderQuantity} </h3>
                <h3>avilable quantity: {quantity}</h3>
                <p>Price: ${price}</p>
                <Link to={`/purchase/${_id}`}>
                    <button className="btn btn-primary my-5">Purchase Now</button>
                </Link>
            </div>
        </div>
    );
};

export default DisplayParts;