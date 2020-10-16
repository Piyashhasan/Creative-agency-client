import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({service}) => {
    return (
            <div className="Card container col-md-4 text-center mx-auto mt-5 ">
                    <Link className="Card-link" to="/dashboard"> 
                        <img src={service.img} alt="" />
                        <h5 style={{color: '#565E69'}} className="mt-3">{service.title}</h5>
                        <p className="mt-4 text-secondary">{service.description}</p>
                    </Link> 
            </div>
    );
};

export default Card;