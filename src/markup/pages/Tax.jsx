import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { services } from '../../assets/images/Services';
import Footer from '../layout/footer'
import Header2 from '../layout/header'
const aboutbg = require('./../../assets/images/background/image-11.jpg');

function Tax() {
    useEffect (() => {
        document.title = " Tax & Accounting Services | BLZ";
     }, []);
  return (
    <div>
        <Header2 />
        {/* bannwer */}
        <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Tax & Accounting Service</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active"> Tax & Accounting Services</li>
                        </ul>
                    </div>

                </section>
        <section className="about-section-two ">
                    <div className="auto-container">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <div className="sub-title text-dark"> Tax & Accounting Services</div>
                                        <h2>T & A Services </h2>
                                        <div className="text">Why bother with employing an accountant while you can get the same level of service with minimum monthly fees while having a support of a whole team of expert tax agents and auditors. Since VAT came into effect in 2018, the role of accountants has increased from just book keeping to have a proper knowledge of IFRS and the local tax laws. Our team has all the appropriate qualification and trainings to maintain any kind of accounts, perform internal and external audits and prepare tax returns. </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-wrapper">
                                    <div className="image-one">
                                        <img src={services.tax} alt="" />
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

export default Tax