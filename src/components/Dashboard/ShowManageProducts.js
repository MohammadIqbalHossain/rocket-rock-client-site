import React from 'react';

const ShowManageProducts = ({ product, refetch }) => {

    const handleDelete = () => {

        const id = product._id;
        const confirmation = window.confirm("Are you sure?")
        if (confirmation) {
            fetch(`http://localhost:3000/manageProdutc/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch()
                })
        }
    }

    console.log(product);
    return (
        <tr>
            <th>1</th>
            <td>{product.Name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
                <button onClick={handleDelete} class="btn btn-sm btn-error">Delete</button>
            </td>
        </tr>
    );
};

export default ShowManageProducts;