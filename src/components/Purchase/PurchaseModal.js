import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const PuarchaseModal = () => {

    const [user] = useAuthState(auth);


    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle ">

                <form class="modal-box" >
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="form-control ">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" value={user?.email} disabled class="input input-bordered text-black" />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" value={user?.displayName} disabled class="input input-bordered text-black" />
                    </div>


                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Phone" class="input input-bordered " />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Adress" class="input input-bordered " />
                    </div>

                    <div class="">
                        <input className="btn btn-primary w-full my-5" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default PuarchaseModal;