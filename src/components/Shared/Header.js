import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {


    const [navbarOpen, setNavbarOpen] = useState(false);
    const [user] = useAuthState(auth);

    const { pathname } = useLocation();



    return (
        <>

            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                            to="/"
                        >
                            RocketRock
                        </Link>
                        <div className="flex ">
                            <button
                                className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-red-200 block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <AiOutlineMenu color="red" />
                            </button>
                            <button className="navLink ml-5">
                                {pathname === "/dashboard" || "/dashboard/dashboard/add-a-review" || "/dashboard/dashboard/my-profile" ? <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden text-black">
                                    open modal
                                </label>

                                    : ""}
                            </button>
                        </div>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                                    to="/"
                                >
                                    <span className="ml-2">Home</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                                    to="/dashboard"
                                >
                                    <span className="ml-2">Dashboard</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                                    to="/blogs"
                                >
                                    <span className="ml-2">Blogs</span>
                                </Link>
                            </li>
                            <li className="nav-item">

                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                                    to="/myPortfolio"
                                >
                                    <span className="ml-2">My Portfolio</span>
                                </Link>
                            </li>


                            <li className="nav-item">
                                {user ? <button onClick={() => signOut(auth)}
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                                >Sign Out
                                </button>
                                    : <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                        to="/login"
                                    >
                                        <span className="ml-2">Login</span>
                                    </Link>}
                            </li>
                            <li className="nav-item">

                                <p
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"

                                >
                                    <span className="ml-1  text-xs rounded">
                                        {user?.email.slice(0, 5)}
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;