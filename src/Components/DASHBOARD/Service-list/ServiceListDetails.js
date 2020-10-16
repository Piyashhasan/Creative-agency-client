import React from 'react';

const ServiceListDetails = ({serviceDetail}) => {
    console.log(serviceDetail);
    return (
        <div className="col-md-6 container">
            <img src={serviceDetail.image.img} alt=""/>
            <h4>{serviceDetail.service}</h4>
            <p>{serviceDetail.details}</p>
        </div>
    );
};

export default ServiceListDetails;