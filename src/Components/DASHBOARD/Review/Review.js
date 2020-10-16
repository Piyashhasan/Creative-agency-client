import React from 'react';
import './Review.css'
import SideBar from '../SideBar/SideBar';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [review, setReview] = useState({organization:'', description:''})

    const handelChange = (e) =>{
        setReview({...review, [e.target.name] : e.target.value})
    }
    
    const handelReviewInfo = (e) => {
        e.preventDefault()
        const data={...loggedInUser, ...review}
        fetch('http://localhost:5000/addReview',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            
        } )
    }

    return (
        <section className="Review">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-6 mt-5 container">
                    <h5>Review <small style={{float:'right', fontWeight:'bold'}}>{loggedInUser.name}</small></h5>
                    <div className="reviewArea">
                        <form onSubmit={handelReviewInfo} className="w-75 p-5 pt-5">
                        <div className="form-group">
                            <input  type="text" value={loggedInUser.name} name="name" className="form-control p-4" placeholder="Your name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" value={review.organization} onChange={(e) => handelChange(e)} name="organization" className="form-control p-4" placeholder="Company's name . Designation"/>
                        </div>
                        <div className="form-group">
                            <input type="text" value={review.description} onChange={(e) => handelChange(e)} name="description" className="form-control p-5"  placeholder="Description"/>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;