import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const OurEngineers = () => {
    return (
        <div>

            <div className="flex justify-center my-20 gap-8">

                <Link to="/ourEngineers">
                    <button className="btn btn-primary">Mission specialist</button>
                </Link>
                <Link to="/ourEngineers/system-enginner">
                    <button className="btn btn-primary">System Engineer</button>
                </Link>

            </div>

            <div>
                <Outlet />
                {/* <h2 className="text-4xl text-center font-extrabold uppercase mt-20 text-blue-300">About Our Crew</h2> */}
            </div>
        </div>
    );
};

export default OurEngineers;