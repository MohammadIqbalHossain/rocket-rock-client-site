import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner';
import DisplayAllOrders from './DisplayAllOrders';

const ManageAllOrders = () => {

    const { data: allOrders, isLoading, refetch } = useQuery('allusers', () => fetch('https://rocket-rock-server-site-production.up.railway.app/orders', {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }




    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Cencel</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map(order => <DisplayAllOrders
                                key={order._id}
                                order={order}
                                refetch={refetch}
                            ></DisplayAllOrders>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;