import React, { useContext, useState } from 'react';
import './Order.css'
import SideBar from '../SideBar/SideBar';
import { UserContext } from '../../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orderInfo, setOrderInfo] = useState({});
    const [fileChange, setFileChange] = useState(null);
    
    const handelBlur = (e) => {
        const newOrderInfo = {...orderInfo};
        newOrderInfo[e.target.name] = e.target.value;
        setOrderInfo(newOrderInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFileChange(newFile);
    };

    const handleSubmit = () => {
        console.log(orderInfo)
        const formData = new FormData()
        formData.append('file', fileChange)
        formData.append('name', orderInfo.name)
        formData.append('email', orderInfo.email)
        formData.append('service', orderInfo.service)
        formData.append('details', orderInfo.details)
        formData.append('number', orderInfo.number)

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <section className="Order">
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-6 mt-5 container order-area" >
                <h5>Order <small style={{float:'right', fontWeight:'bold'}}>{loggedInUser.name}</small></h5>
                <div className="formArea">
                    <form onSubmit={handleSubmit} className="w-75 p-5 pt-5">
                        <div className="form-group">
                            <input onBlur={handelBlur} type="text" name="name" className="form-control p-4" placeholder="Your name / company's name"/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handelBlur} type="email" name="email" className="form-control p-4" placeholder="Your email address"/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handelBlur} type="text" name="service" className="form-control p-4" placeholder="Service name"/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handelBlur} type="text" name="details" className="form-control p-5" placeholder="Project Details"/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handelBlur} type="number" name="number" className="form-control p-4" placeholder="Price"/>
                        </div>
                        <div>
                            <label className="">Upload photo-</label>
                            <input onChange={handleFileChange} type="file" className="" id=""/>
                        </div>
                        <button type="submit" className="btn btn-success mt-3">Send</button>
                    </form>

                </div>
            </div>
        </div>
        </section>
    
    );
};

export default Order;