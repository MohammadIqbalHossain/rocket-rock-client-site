import React from 'react';
import { Link } from 'react-router-dom';

const DisplayOrders = ({ order, index, myOrders, setMyOrders }) => {


    const { name, email, address, _id, paid } = order;



    const handleDelete = () => {

        const confirmation = window.confirm("Are You sure?")
        if (confirmation) {
            fetch(`http://localhost:5000/orders/${_id}`, {
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
                <button onClick={handleDelete} className="btn btn-error btn-sm">Cencel</button>
            </td>
            <td>
                <Link to={`/dashboard/payment/${_id}`}>
                    {(!paid) && <button className="btn btn-success btn-sm">pay</button>}
                    {paid && <p>Paid</p>}
                </Link>
            </td>

        </tr>



    );
};

export default DisplayOrders;