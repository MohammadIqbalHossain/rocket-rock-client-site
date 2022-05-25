import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile bg-black">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-10">


                <div>
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    {!admin && <li>
                        <Link to="/dashboard/my-orders">My Orders</Link>
                    </li>
                    }

                    {!admin && <li>
                        <Link to="dashboard/add-a-review">Add a review</Link>
                    </li>
                    }

                    {/* dashboard/my-profile */}
                    <li>
                        <Link to="/dashboard">My Profile</Link>
                    </li>
                    {
                        admin && <li>
                            <Link to="dashboard/makeAdmin">Make Admin</Link>
                        </li>
                    }
                    {
                        admin && <li>
                            <Link to="dashboard/add-a-product">Add a product</Link>
                        </li>
                    }
                    {
                        admin && <li>
                            <Link to="dashboard/manage-products">Manage Products</Link>
                        </li>
                    }
                    {
                        admin && <li>
                            <Link to="dashboard/manage-all-orders">Manage All Orders</Link>
                        </li>
                    }
                </ul>


            </div>
        </div>
    );
};

export default Dashboard;