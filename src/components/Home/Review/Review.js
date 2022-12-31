import React, { useEffect, useState } from 'react';
import DisplayReviews from './DisplayReviews';

const Review = () => {
    const [allReviews, setReviews] = useState([]);

    const reviewForHome = allReviews.slice(0, 4);

    useEffect(() => {
        fetch('http://localhost:3000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    return (
        <div>
            <h1 className="text-center font-bold text-black text-4xl uppercase">Our Customers says</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {
                    reviewForHome.map(review => <DisplayReviews
                        key={review._id}
                        reviews={review}
                    ></DisplayReviews>)
                }

            </div>
            <button className="btn btn-primary my-10 block mx-auto">See all reviews</button>
        </div>
    );
};

export default Review;