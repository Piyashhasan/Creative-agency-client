import React from 'react';
import './Header.css'
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';


const Header = () => {
    return (
        <div className="Header mb-5 p-3">
            <NavBar></NavBar>
            <MainContent></MainContent>
        </div>
    );
};

export default Header;