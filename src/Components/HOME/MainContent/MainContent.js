import React from 'react';
import './MainContent.css';
import bannerImg from '../../../images/logos/Frame.png';

const MainContent = () => {
    return (
        <section className="MainContent container mt-5 mb-5">
            <div className="row">
                <div className="col-md-4 mt-5 p-3 justify-content-center">
                    <h1>Let's Grow Your Brand To the</h1>
                    <h1>Next Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptates incidunt sed accusamus,
                        voluptate exercitationem.
                    </p>
                    <button className="btn mt-3 ">Hire us</button>
                </div>
                <div className="col-md-8  d-flex justify-content-center">
                    <img className="p-3 img-fluid" src={bannerImg} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default MainContent;