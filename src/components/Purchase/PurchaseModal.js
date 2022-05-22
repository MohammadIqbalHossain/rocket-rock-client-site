import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const PuarchaseModal = () => {

    const [user] = useAuthState(auth);

    



    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">

                <form className="modal-box" >
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
                        <input type="text" placeholder="Phone" className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Adress" className="input input-bordered " />
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