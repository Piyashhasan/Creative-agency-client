import React from 'react';
import './WorkCarousels.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import img from '../../../../images/carousel-1.png';
import img2 from '../../../../images/carousel-2.png';
import img3 from '../../../../images/carousel-3.png';
import img4 from '../../../../images/carousel-4.png';
import img5 from '../../../../images/carousel-5.png';

const WorkCarousels = () => {
    return (
        <div className="WorkCarousels">
            <div className="carousel-area">
            <Carousel>
                <div>
                    <img src={img} alt=""/>
                </div>
                <div>
                    <img src={img2} alt=""/>
                </div>
                <div>
                    <img src={img3} alt=""/>
                </div>
                <div>
                    <img src={img4} alt=""/>
                </div>
                <div>
                    <img src={img5} alt=""/>
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default WorkCarousels;