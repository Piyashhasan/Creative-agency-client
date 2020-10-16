import React from 'react';
import './NavBar.css'
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar container">
            <nav className="navbar navbar-expand-lg navbar-light  pt-4">
                    <Link to="/"><img src={logo} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item active ">
                            <Link to='/' className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ml-4">
                            <Link to="/dashboard"className="nav-link" href="#">Dash Board</Link>
                        </li>
                        <li className="nav-item ml-4">
                            <a className="nav-link" href="#">Our Team</a>
                        </li>
                        <li className="nav-item ml-4">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <Link to="/login"><button className="btn btn-outline-success Button my-2 my-sm-0 ml-5" type="submit">LogIn</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;