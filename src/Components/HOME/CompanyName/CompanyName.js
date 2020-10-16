import React from 'react';
import './CompanyName.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airBnb from '../../../images/logos/airbnb.png';

const CompanyName = () => {
    return (
        <section className="CompanyName container mt-5 mb-5 text-center ">
            <div className="row">
                <div className="col-md-2 mx-auto mb-3 img-fluid">
                    <img src={slack} alt=""/>
                </div>
                <div className="col-md-2 mx-auto mb-3 img-fluid">
                    <img src={google} alt=""/>
                </div>
                <div className="col-md-2 mx-auto mb-3 img-fluid">
                    <img src={uber} alt=""/>
                </div>
                <div className="col-md-2 mx-auto mb-3 img-fluid">
                    <img src={netflix} alt=""/>
                </div>
                <div className="col-md-2 mx-auto mb-3 img-fluid">
                    <img src={airBnb} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default CompanyName;