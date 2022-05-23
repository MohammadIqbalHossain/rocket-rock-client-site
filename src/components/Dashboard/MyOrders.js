import React, { useEffect, useState } from 'react';
import DisplayOrders from './DisplayOrders';

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:5000/myOrders')
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])

    
    

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Emils</th>
                            <th>Address</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                       {
                           myOrders.map((order, index)=> <DisplayOrders
                           key={order._id}
                           order={order}
                           index={index}
                           myOrders={myOrders}
                           setMyOrders={setMyOrders}
                           ></DisplayOrders> )
                       }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;