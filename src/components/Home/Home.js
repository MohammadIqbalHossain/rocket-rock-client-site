import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Parts from './Parts/Parts';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Review />
            <BusinessSummary />
        </div>
    );
};

export default Home;