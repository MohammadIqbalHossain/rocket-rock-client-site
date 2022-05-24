import React from 'react';
import AboutRocketRock from './AboutRocketRock/AboutRocketRock';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import OurEngineers from './OurEngineers/OurEngineers';
import Parts from './Parts/Parts';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Review />
            <BusinessSummary />
            <OurEngineers />
            <AboutRocketRock />
        </div>
    );
};

export default Home;