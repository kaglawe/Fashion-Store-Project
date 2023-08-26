import React from 'react'

import HeroSection from '../HeroSection';

const Home = () => {
    const data = {
        name: "Fashion Store",
    };

    return (
        <>
            <HeroSection myData={data} />
           
        </>
    );
};

export default Home
