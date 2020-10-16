import React, { useEffect } from 'react';
import ClientFeedBackDetails from './ClientFeedBackDetails/ClientFeedBackDetails';
import './ClientsFeedBack.css';
import { useState } from 'react';

const ClientsFeedBack = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/collectReviewInfo')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className="ClientFeedBack container">
            <h3 className="text-center">Clients <span style={{color: '#7AB259'}}>Feedback</span> </h3>
            <div className="row">
                {
                    review.map(review => <ClientFeedBackDetails review={review}></ClientFeedBackDetails>)
                }
            </div>
            
        </div> 
    );
};

export default ClientsFeedBack;