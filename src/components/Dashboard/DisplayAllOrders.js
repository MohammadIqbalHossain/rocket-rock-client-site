import React from 'react';
import { toast } from 'react-toastify';

const DisplayAllOrders = ({ order, refetch }) => {
    const { paid, name, email, price, _id: id, status } = order;


    const handleDelete = () => {
        fetch(`https://rocket-rock-server-site-production.up.railway.app/unpaidOrder/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                toast("Successfully deleted")
            })
    }

    const handleShipped = () => {
        fetch(`https://rocket-rock-server-site-production.up.railway.app/shipped/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "shipped" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast("Product is shipped")

                }
            })

    }

    return (
        <tr>
            <th>1</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{price}</td>
            <td>
                {
                    !paid && <button onClick={handleDelete} className="btn btn-error btn-sm">Cencel</button>
                }
            </td>
            <td>
                {
                    !paid ? <p>Unpaid</p> :
                        <button
                            onClick={handleShipped}
                            className="btn btn-success btn-sm">
                            {status ? <button className="disabled">Shipped</button> : <p>Pending</p>}
                        </button>
                }

            </td>
        </tr>
    );
};

export default DisplayAllOrders;