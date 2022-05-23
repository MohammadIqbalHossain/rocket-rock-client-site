import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'

const PuarchaseModal = () => {

    const [user] = useAuthState(auth);



    const submitOrder = (e) => {
        e.preventDefault();

        const order = {
            email: user.email,
            name: user.displayName,
            phone: e.target.phone.value,
            address: e.target.address.value
        }

        console.log(order.phone, order.address);

        fetch('http://localhost:5000/orders', {
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
                    toast(`successfull orderd`)
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

                    <div className="">
                        <input className="btn btn-primary w-full my-5" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default PuarchaseModal;