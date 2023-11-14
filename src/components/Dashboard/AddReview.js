import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user] = useAuthState(auth)
    const handleSubmitReview = (e) => {
        e.preventDefault();


        const review = {
            review: e.target.review.value,
            ratings: e.target.ratings.value,
            email: user.email,
            name: user.displayName

        }

        fetch('https://rocket-rock.onrender.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
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
        <div className="flex flex-col justify-center items-center h-[70vh] bg-base-200 rounded-lg mt-20">
            <form onSubmit={handleSubmitReview}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What you think abut us?</span>
                    </label>
                    <textarea class="textarea textarea-success" name="review" placeholder="Bio"></textarea>

                    <input className="input input-group-sm mt-5  border-2" placeholder="Ratings" type="number" name="ratings" id="" min="0" max="10" />

                    <input className="btn btn-primary mt-5" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;