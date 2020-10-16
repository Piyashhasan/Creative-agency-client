import React from 'react';
import SideBar from '../SideBar/SideBar';
import './AddService.css';

const AddService = () => {
    return (
        <section className="AddService">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-6 container">
                    <h5>Add Service</h5>
                    <div className="formArea addService">
                        <form action=""  className="w-75 p-5 pt-5 mt-5">
                            <div className="form-group">
                                <label>Service Title</label>
                                <input  type="text" name="title" className="form-control p-4" placeholder="Enter the title"/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input  type="text" name="description" className="form-control p-4" placeholder="Enter the Designation"/>
                            </div>

                            <div>
                                <label className="p-1">Upload icon--</label>
                                <input  type="file" className="" id=""/>
                            </div>
                            <button type="submit" className="btn btn-success mt-2">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;