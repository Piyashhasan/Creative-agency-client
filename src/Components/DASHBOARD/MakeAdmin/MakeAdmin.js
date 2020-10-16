import React from 'react';
import SideBar from '../SideBar/SideBar';
import './MakeAdmin.css';

const MakeAdmin = () => {
    return (
        <section className="MakeAdmin">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-6 container">
                <h5>Make Admin</h5>
                    <div className="formArea  makeAdmin-area" >
                        <form action="" className="w-75 p-5 pt-5 mt-5">
                            <div className="form-group">
                                <label>Email</label>
                                <input  type="email" name="email" className="form-control p-4" placeholder="email"/>
                                <button className="btn btn-success mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;