import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../assets/images/Services';
import Footer from '../layout/footer'
import Header2 from '../layout/header'
const aboutbg = require('./../../assets/images/background/image-11.jpg');

function Marketing() {
    useEffect (() => {
        document.title = "Marketing Services | BLZ";
     }, []);
  return (
    <div>
        <Header2 />
        {/* banner */}
        <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Marketing Services </h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Marketing Services</li>
                        </ul>
                    </div>

                </section>
        <section className="about-section-two ">
                    <div className="auto-container">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <div className="sub-title text-dark">Marketing Services</div>
                                        <h2 className='text-dark'>Marketing Service</h2>
                                        <div className="text">Marketing your products and services in this highly competitive market is not an easy job and it can take so much of the time which can be spent on your operations. We are able to provide the services ranging from SEO, social media advertising and newsletters with proven results.
</div>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-wrapper">
                                    <div className="image-one">
                                        <img src={services.marketing} alt="" />
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

export default Marketing