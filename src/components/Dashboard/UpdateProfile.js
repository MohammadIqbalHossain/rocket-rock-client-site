import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    const handleProfileUpdate = (e) => {
        e.preventDefault();


        const profileInfo = {
            email: user.email,
            name: user.displayName,
            photo: e.target.url.value,
            company: e.target.company.value,
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            phone: e.target.phone.value
        }


        fetch(`http://localhost:3000/update/${user?.email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(profileInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast("Your profile is Updated")
                }
                else {
                    toast.error("It seems their something wrong");
                }
            })
    }


    return (
        <div className="flex flex-col justify-center items-center h-[80vh]">
            <div class="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100 mt-20">

                <form class="card-body" onSubmit={handleProfileUpdate}>
                    <h1 className="text-lg">Update your profile.</h1>

                    <div class="flex ">
                        <div>
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" value={user.displayName} disabled class="input input-bordered max-w-sm" />
                        </div>

                        <div className="ml-20">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" value={user.email} disabled class="input input-bordered max-w-sm " />
                        </div>
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Photo</span>
                        </label>
                        <input type="text" name="url" placeholder="Photo URL" class="input input-bordered" />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Company</span>
                        </label>
                        <input type="text" name="company" placeholder="Compnay (optional)" class="input input-bordered" />
                    </div>

                    <div class="flex ">
                        <div>
                            <label class="label">
                                <span class="label-text">Firstname</span>
                            </label>
                            <input type="text" name="firstname" placeholder="Firstname" class="input input-bordered max-w-sm" />
                        </div>

                        <div className="ml-10">
                            <label class="label">
                                <span class="label-text">Lastname</span>
                            </label>
                            <input type="text" name="lastname" placeholder="Lastname" class="input input-bordered max-w-sm" />
                        </div>

                        <div className="ml-10">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input type="text" name="phone" placeholder="Phone" class="input input-bordered max-w-sm" />
                        </div>
                    </div>

                    <div class="form-control mt-6 mx-50">
                        <input class="btn btn-primary block mx-52" type="submit" value="Update" />
                    </div>

                </form>

            </div>
        </div >
    );
};

export default MyProfile;