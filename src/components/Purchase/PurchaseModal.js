import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'

const PuarchaseModal = ({ minQuantity, quantity, priceNum, Name }) => {

    const [quantityError, setQuantityError] = useState(false);

    const [user] = useAuthState(auth);
    const price = parseInt(priceNum)
    console.log(user.displayName);


    const submitOrder = (e) => {
        e.preventDefault();

        const order = {
            email: user.email,
            name: Name,
            price,
            phone: e.target.phone.value,
            address: e.target.address.value,
            quantity: e.target.quantity.value
        }

        // console.log(order.quantity);
        // console.log(quantity);



        if (order.quantity < minQuantity || (order.quantity > quantity)) {
            toast.error("You are out of our range")
            setQuantityError(true);

            return;
        }

        setQuantityError(false)


        // console.log(order.phone, order.address);

        fetch('https://rocket-rock-server-site-production.up.railway.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem("accessToken")}`

            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`successfully orderd`)
                }
                else {
                    toast.error(`Something went wrong`);
                }
            })

    }





    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">

                <form className="modal-box" onSubmit={submitOrder}>
                    <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" value={user?.email} disabled className="input input-bordered text-black" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={user?.displayName} disabled className="input input-bordered text-black" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" name="phone" placeholder="Phone" className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name="address" placeholder="Adress" className="input input-bordered " />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered " />
                    </div>

                    <div className="">
                        <input className="btn btn-primary w-full my-5" type="submit" value="Submit" />
                    </div>

                </form>
            </div>
        </div >
    );
};

export default PuarchaseModal;