import React from 'react';
import { toast } from 'react-toastify';

const DisplayALLUsers = ({ users }) => {
    const { name, email, indexes, _id, phone, address } = users;


    const handlMakeAdmin = () => {
        fetch(`https://rocket-rock.onrender.com/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    console.log("res", res)
                    toast.error("You can't make an admin")
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("Succesfully made an admin")
                }
                console.log(data)
            })
    }

    return (
        <tr>
            <th>{indexes}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>
                <button onClick={handlMakeAdmin} className="btn btn-success btn-sm">Make admin</button>
            </td>
        </tr>
    );
};

export default DisplayALLUsers;