import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Products from './Products/Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummury/>
            <Reviews/>
        </div>
    );
};

export default Home;