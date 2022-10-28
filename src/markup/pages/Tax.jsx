import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { services } from '../../assets/images/Services';
import Footer from '../layout/footer'
import Header2 from '../layout/header'
const aboutbg = require('./../../assets/images/background/image-11.jpg');

function Tax() {
    useEffect (() => {
        document.title = "Tax | BLZ";
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
                            <li className="active">Tax</li>
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
                                        <h2>Tax</h2>
                                        <div className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora tempore accusantium, atque, dicta eos natus expedita saepe, iste voluptas dolorum culpa cupiditate recusandae id maiores adipisci veniam eum eveniet. Assumenda maiores cum sed consequuntur sint sit amet harum expedita sapiente.</div>
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