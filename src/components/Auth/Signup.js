import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);


    const [
        updateProfile,
        updating,
        updatingError,
    ] = useUpdateProfile(auth);

    const navigate = useNavigate()
    if (user || googleUser) {
        navigate("/")
    }

    if (loading || googleLoading || updating) {
        return <Spinner />
    }

    let authError;
    if (error || googleError || updatingError) {
        authError = <p className="text-sm text-red-600">
            {error?.message || googleError?.message}
        </p>

    }


    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
        updateProfile({ displayName: data.name });

        const email = data.email
        const url = `https://rocket-rock.onrender.com/login`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('accessToken', data?.accessToken);
            })
    };



    return (
        <div className="flex w-full flex-col justify-center items-center h-screen">
            <div className="md:w-[400px] shadow-xl">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Your name?</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                },
                            })}
                        />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="email"
                            className="input input-bordered"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /(.+)@(.+){2,}\.(.+){2,}/,
                                    message: 'Your email is not valid'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Password is too short"
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <label className="label">
                            <Link to="#" className="label-text-alt link link-hover">Are you new?</Link>
                        </label>
                    </div>

                    <input
                        className="form-control mt-4 btn btn-primary"
                        type="submit"
                        value="Sign Up"
                    />
                    {authError}
                </form>

                <div className="divider mx-20">OR</div>

                <div className="flex justify-center items-center my-10">
                    <button className="flex items-center border-2 border-black p-3 rounded-lg text-lg hover:bg-primary hover:text-white"
                        onClick={() => signInWithGoogle()}
                    >
                        <FcGoogle className="mx-5 text-2xl" />
                        Continue with google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;