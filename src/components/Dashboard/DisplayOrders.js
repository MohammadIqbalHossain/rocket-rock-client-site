import React from 'react';

const DisplayOrders = ({ order, index, myOrders, setMyOrders }) => {


    const { name, email, address, _id } = order;



    const handleDelete = () => {

        const confirmation = window.confirm("Are you sure?")
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
                <button className="btn btn-success btn-sm">pay</button>
            </td>
        </tr>



    );
};

export default DisplayOrders;