import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <section className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="text">
                            <h1>Let us handle your </h1>
                            <h1>project, professionally.</h1>
                            <div className="paragraph">
                                <small><p>With well written codes, we build amazing apps for all</p>
                                <p>platforms, mobile and mobile web app in general</p></small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="form-area">
                            <form>
                                <div className="form-group ">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="" placeholder="Your name/ company's name"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control p-4" id="exampleFormControlTextarea1" placeholder="Your message" rows="10"></textarea>
                                </div>
                                <button type="submit" className="btn ">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Footer;