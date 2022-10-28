import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { services } from '../../assets/images/Services';
import Footer from '../layout/footer'
import Header2 from '../layout/header'
const aboutbg = require('./../../assets/images/background/image-11.jpg');

function ItService() {
    useEffect (() => {
        document.title = "IT Services | BLZ";
     }, []);
  return (
    <div>
        <Header2 />
        {/* banner */}
        <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Information Technology Service</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">IT</li>
                        </ul>
                    </div>

                </section>
        <section className="about-section-two ">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            
                            <div className="col-lg-6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <div className="sub-title">Technology</div>
                                        <h2>IT Services</h2>
                                        <div className="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita iure, voluptates, dicta ipsam beatae odio, aliquam saepe soluta nobis est consequatur nesciunt voluptate similique repellat repellendus facilis consectetur quisquam eligendi voluptatum omnis.</div>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-wrapper">
                                    <div className="image-one">
                                        <img src={services.it} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        <Footer />
    </div>
  )
}

export default ItService