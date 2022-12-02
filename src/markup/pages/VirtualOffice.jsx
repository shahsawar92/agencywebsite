import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { services } from '../../assets/images/Services';
import Footer from '../layout/footer'
import Header2 from '../layout/header'
const aboutbg = require('./../../assets/images/background/image-11.jpg');

function VirtualOffice() {
    useEffect (() => {
        document.title = "Virtual Office | BLZ";
     }, []);
  return (
    <div>
        <Header2 />

        {/* banner */}
        <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>
                    <div className="auto-container">
                        <h1>Virtual Office Solution</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Virtual Office</li>
                        </ul>
                    </div>

                </section>
        <section className="about-section-two ">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            
                            <div className="col-lg-6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <div className="sub-title text-dark">Mission</div>
                                        <h2>Virtual Office Service</h2><br />
                                        <h4>A virtual office enables employees and business owners to work remotely by affording them a range of business provisions.</h4>
                                        <div className="text">BLZ offer professional virtual offices with a special emphasis on organised phone and mail management services. A fully-trained team of multilingual staff manage all our virtual offices, using the highest standards of professionalism, etiquette, and business ethics. Our virtual office spaces incorporate effective interior design concepts that promote an interactive, spontaneous, positive, and creative work environment. <br /></div>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-wrapper">
                                    <div className="image-one">
                                        <img src={services.vo} alt="" />
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

export default VirtualOffice