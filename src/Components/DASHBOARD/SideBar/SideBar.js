import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus, faList,} from '@fortawesome/free-solid-svg-icons';
import { faStickyNote } from '@fortawesome/free-regular-svg-icons';
import logo from '../../../images/logos/logo.png';


const SideBar = () => {
    return (
        <div className="Sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <Link to="/"><img src={logo} alt=""/></Link>
                <li>
                    <Link className="link" to="/order">
                        <FontAwesomeIcon icon={faCartPlus} />  <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/serviceList">
                        <FontAwesomeIcon icon={faList} /> <span>Service list</span>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/review">
                        <FontAwesomeIcon icon={faStickyNote} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/adminService">
                        <FontAwesomeIcon icon={faList} /> <span>All Service list</span>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/addService">
                        <FontAwesomeIcon icon={faStickyNote} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/makeAdmin">
                        <FontAwesomeIcon icon={faStickyNote} /> <span>Make Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;