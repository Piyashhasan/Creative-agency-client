

import React from 'react';
import WorkCarousels from './WorkCarousels/WorkCarousels';
import './Works.css';

const Works = () => {
    return (
        <section className="Works">
            <h3 className="text-center">Here are some of <span style={{color: '#7AB259'}}>our works</span> </h3>
            <WorkCarousels></WorkCarousels>
        </section>
    );
};

export default Works;