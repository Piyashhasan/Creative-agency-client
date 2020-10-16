import React from 'react';
import Header from '../Header/Header';
import CompanyName from '../CompanyName/CompanyName';
import ProvideService from '../ProvideService/ProvideService';
import Works from '../Works/Works';
import ClientsFeedBack from '../ClientsFeedBack/ClientsFeedBack';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CompanyName></CompanyName>
            <ProvideService></ProvideService>
            <Works></Works>
            <ClientsFeedBack></ClientsFeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;