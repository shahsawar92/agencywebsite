import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import GoogleMaps from "simple-react-google-maps";
import { useEffect } from 'react';

const aboutbg = require('./../../assets/images/background/image-11.jpg');




const Contact =()=> {

    useEffect (() => {
        document.title = "Contact | BLZ";
     }, []);

        return (
            <>
                <Header />
                {/* <!-- Page Banner Section --> */}
                <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Contact Us</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Contact</li>
                        </ul>
                    </div>

                </section>

                {/* <!-- Map Section --> */}
                {/* <!-- Map Section --> */}
                <section className="map-section" style={{backgroundColor:"black"}}>
                    <div className="map-column">
                        <GoogleMaps
                            apiKey={"AIzaSyBQ5y0EF8dE6qwc03FcbXHJfXr4vEa7z54"}
                            style={{ height: "800px", width: "100%" }}
                            zoom={12}
                            center={{ lat: 37.4224764, lng: -122.0842499 }}
                            markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                        />
                    </div>
                </section>

                {/* <!-- Contact Section Two --> */}
                <section className="contact-section-two" style={{backgroundColor:"black" , color:"white"}}>
                    <div className="auto-container">
                        <div className="contact-info-area">
                            <div className="contact-info">
                                <div className="row">
                                    <div className="info-column col-lg-4">
                                        <div className="icon-box">
                                            <div className="icon"><span className="flaticon-email-6"></span></div>
                                            <h3>Email Address</h3>
                                            <ul>
                                                <li><Link to={'/mailto:info@webmail.com'}>setup@blz.ae</Link></li>
                                                {/* <li><Link to={'/mailto:info@webmail.com'}>jobs@exampleco.com</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="info-column col-lg-4">
                                        <div className="icon-box">
                                            <div className="icon"><span className="flaticon-call-1"></span></div>
                                            <h3>Phone Number</h3>
                                            <ul>
                                                <li><Link to={'/tel:+8976765654654'}>+971 44 44 9444</Link></li>
                                                {/* <li><Link to={'/tel:+908(097)56476576'}>+908(097) 564 765 76</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="info-column col-lg-4">
                                        <div className="icon-box">
                                            <div className="icon"><span className="flaticon-location"></span></div>
                                            <h3>Office Address</h3>
                                            <ul>
                                                <li>Level 14, Boulevard Plaza Tower 1, Downtown, Dubai </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-area">
                            <div className="sec-title text-center">
                                <div className="sub-title">Write Here</div>
                                <h2>Get In Touch</h2>
                            </div>
                            {/* <!-- Contact Form--> */}
                            <div className="contact-form">
                                <form method="post" action="javascript:void(0)" id="contact-form">
                                    <div className="row clearfix">                                    
                                        <div className="col-md-6 form-group">
                                            <label for="name">Enter your name</label>
                                            <input type="text" name="username" id="name" placeholder="Enter name here......" required=""/>
                                            <i className="fas fa-user"></i>
                                        </div>
                                        
                                        <div className="col-md-6 form-group">
                                            <label for="email">Enter your email</label>
                                            <input type="email" name="email" id="email" placeholder="Enter email here......" required=""/>
                                            <i className="fas fa-envelope"></i>
                                        </div>
                
                                        <div className="col-md-12 form-group">
                                            <label for="message">Enter your message</label>
                                            <textarea name="message" id="message" placeholder="Enter message here......"></textarea>
                                            <i className="fas fa-edit"></i>
                                        </div>
                
                                        <div className="col-md-12 form-group">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title button-myclass" style={{color:"white"}}>Get In Touch</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>






                <Footer />
            </>
        )
    
}
export default Contact;