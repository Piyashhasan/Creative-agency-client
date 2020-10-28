import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import AdminServiceDetails from './AdminServiceDetails';
import './AdminServiceList.css'

const AdminServiceList = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        fetch('https://nameless-anchorage-32987.herokuapp.com/collectOrderInfo')
        .then(response => response.json())
        .then(data => setServiceDetails(data))
    }, [])
    return (
        <section className="AdminServiceList">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-6 mt-5  container ">
                    <h5>All service list </h5>
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service</th>
                                <th scope="col">Details</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="formArea row container AdminServiceArea">
                        {
                            serviceDetails.map(serviceDetail => <AdminServiceDetails serviceDetail={serviceDetail}></AdminServiceDetails>)
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminServiceList;