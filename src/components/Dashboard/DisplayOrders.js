import React from 'react';
import { Link } from 'react-router-dom';

const DisplayOrders = ({ order, index, myOrders, setMyOrders }) => {


    const { name, email, address, _id, paid, transjactionId } = order;

    console.log(order);

    const handleDelete = () => {

        const confirmation = window.confirm("Are You sure?")
        if (confirmation) {
            fetch(`https://nameless-reaches-54875.herokuapp.com/orders/${_id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const exists = myOrders.filter(rest => rest._id !== _id)
                        setMyOrders(exists)
                    }
                })
        }
    }

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>
                {paid ? "" : <button onClick={handleDelete} className="btn btn-error btn-sm">Cencel</button>}
            </td>
            <td>
                <Link to={`/dashboard/payment/${_id}`}>
                    {(!paid) && <button className="btn btn-success btn-sm">pay</button>}
                    {paid && <div>
                        <p>Paid</p>
                        <p className="text-orange-400">TransactionId: {transjactionId}</p>
                    </div>}
                </Link>
            </td>

        </tr>



    );
};

export default DisplayOrders;