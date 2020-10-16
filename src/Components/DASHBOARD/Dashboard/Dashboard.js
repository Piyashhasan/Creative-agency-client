import React from 'react';
import './Dashboard.css';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                <SideBar></SideBar>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;