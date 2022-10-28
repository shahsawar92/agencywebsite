import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { services } from '../../assets/images/Services';
import Footer from '../layout/footer'
import Header2 from '../layout/header'
const aboutbg = require('./../../assets/images/background/image-11.jpg');

function BusinessCenter() {
    useEffect (() => {
        document.title = "Business | BLZ";
     }, []);
  return (
    <div>
        
        <Header2 />
        {/* banner */}
        <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Business Center Service</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Business</li>
                        </ul>
                    </div>

                </section>
        <section className="about-section-two ">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            
                            <div className="col-lg-6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <div className="sub-title">Mission</div>
                                        <h2>Business Set Up</h2>
                                        <br />
                                        <h4>Thousands of firms worldwide are dismissing their long-term leases in favor of serviced offices and co-working spaces.</h4>
                                        <div className="text">With 100% versatility, our Businenss setup can transform and evolve your business growth. Entirely unbranded, you can choose from our unparalleled selection of Business strategies to suit the needs and nature of your business.</div>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-wrapper">
                                    <div className="image-one">
                                        <img src={services.business} alt="" />
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

export default BusinessCenter