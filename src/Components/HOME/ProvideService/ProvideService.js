import React from 'react';
import './ProvideService.css';
import service from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import Card from './Card';



const card = [
    {
        img: service,
        title:'Web & Mobile design',
        description:'We craft stunning amazing web UI, using a well drrafted ui us to fit your product',
    },
    {
        img: service2,
        title:'Graphic design',
        description:'Amazing flyers , social media posts and brand representations that would make your brand',
    },
    {
        img:service3,
        title:'Web development',
        description:'With well written codes, we build amazing apps for all platforms, mobile and web apps ',
    }, 
];

const ProvideService = () => {
    return (
        <section className="ProvideService container">
            <div className="mb-3">
                <h1 className="text-center mb-5">Provide awesome <span style={{color:'#7AB259'}}>service</span> </h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row ">
                    {
                        card.map(service => <Card service={service}></Card>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ProvideService;