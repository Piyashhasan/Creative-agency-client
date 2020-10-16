import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import './ClientFeedBackDetails.css';

const ClientFeedBackDetails = ({review}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className="text-center mx-auto">
            <div className="ClientFeedBackDetails Card container col-md-10 text-center mx-auto mt-5 ">
                <img src={loggedInUser.photo} alt="" />
                <p> <strong>{review.name}</strong> </p>
                <p>{review.organization}</p>
                <p className="text-secondary">{review.description}</p>    
            </div>
        </div>
        
    );
};

export default ClientFeedBackDetails;