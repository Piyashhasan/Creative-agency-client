import React, { useState } from 'react';
import './ServiceList.css'
import SideBar from '../SideBar/SideBar';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useEffect } from 'react';
import ServiceListDetails from './ServiceListDetails';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/collectOrderInfo')
        .then(response => response.json())
        .then(data => setServiceDetails(data))
    }, [])
    return (
        <section className="ServiceList">
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-6 mt-5 container ">
                <h5>Service <small style={{float:'right', fontWeight:'bold'}}>{loggedInUser.name}</small></h5>
                <div className="formArea row container service-list-area">
                    {
                        serviceDetails.map(serviceDetail => <ServiceListDetails serviceDetail={serviceDetail}></ServiceListDetails>)
                    }
                </div>
            </div>
        </div>
    </section>
    );
};

export default ServiceList;