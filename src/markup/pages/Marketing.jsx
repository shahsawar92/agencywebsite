import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../assets/images/Services';
import Footer from '../layout/footer'
import Header2 from '../layout/header'
const aboutbg = require('./../../assets/images/background/image-11.jpg');

function Marketing() {
    useEffect (() => {
        document.title = "Marketing | BLZ";
     }, []);
  return (
    <div>
        <Header2 />
        {/* banner */}
        <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Marketing Service </h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Marketing</li>
                        </ul>
                    </div>

                </section>
        <section className="about-section-two ">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            
                            <div className="col-lg-6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <div className="sub-title">Marketing</div>
                                        <h2>Marketing Service</h2>
                                        <div className="text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt porro nesciunt veniam? Veniam, a pariatur quibusdam laboriosam natus repellendus at illum doloremque, iste, praesentium modi reiciendis nihil voluptatem. Deleniti tenetur, voluptate ducimus provident magnam quia? Voluptatum incidunt debitis quasi architecto!</div>
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