import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const OurEngineers = () => {
    const { pathname } = useLocation();
    return (
        <div>
            {pathname === '/' && <h1 className="text-center font-extrabold uppercase text-4xl mt-20">Know about our Crew</h1>}
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
            </div>
        </div>
    );
};

export default OurEngineers;