import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { services_icons } from '../../assets/images/servicesIcons'
import Footer from '../layout/footer'
import Header2 from '../layout/header'
const aboutbg = require("./../../assets/images/background/image-11.jpg");

function Services() {
    useEffect (() => {
        document.title = "Services | BLZ";
     }, []);
  return (
    <div>
        <Header2 />

        {/* banner */}
        <section className="page-banner">
        <div
          className="page-banner-bg"
          style={{ backgroundImage: "url(" + aboutbg + ")" }}
        ></div>
        <div className="bottom-rotten-curve alternate"></div>

        <div className="auto-container">
          <h1>Corporate Services Solutions</h1>
          <ul className="bread-crumb clearfix">
            <li>
              <Link to={"/#"}>Home</Link>
            </li>
            <li className="active">Company</li>
          </ul>
        </div>
      </section>
      {/* content */}
        <section className=" history-section services-section-four services-section-about" style={{color:"white", marginBottom:"0px"}}>
                    <div className="auto-container">
                        <div className="sec-title text-center">
                            <div className="sub-title">Services</div>
                            <h2>Our Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6" >
                                <div className="icon-box" >
                                    <div className="icon"><img className="servivce-icon-img"  src={services_icons.freezone} alt="" /></div>
                                    <h2  ><Link style={{color:"white"}} to={'./Services2'} >Company Formation</Link></h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img className="servivce-icon-img" src={services_icons.mainland} alt="" /></div>
                                    <h2  ><Link style={{color:"white"}} to={'./visa'} >Visa Services </Link></h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img className="servivce-icon-img" src={services_icons.visa} alt="" /></div>
                                    <h2  ><Link style={{color:"white"}} to={'./bank-account'} >Banking Assistance</Link></h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img className="servivce-icon-img" src={services_icons.license} alt="" /></div>
                                    <h2  ><Link style={{color:"white"}} to={'./tax'} >Tax & Accounting Services</Link></h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img className="servivce-icon-img" src={services_icons.bank} alt="" /></div>
                                    <h2  ><Link style={{color:"white"}} to={'./marketing'} >Marketing Services</Link></h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img className="servivce-icon-img" src={services_icons.business} alt="" /></div>
                                    <h2  ><Link style={{color:"white"}} to={'./it-service'} >IT Services</Link></h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img className="servivce-icon-img" src={services_icons.it} alt="" /></div>
                                    <h2  ><Link style={{color:"white"}} to={'./business-center'} >Business Center Services</Link></h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img className="servivce-icon-img" src={services_icons.pro} alt="" /></div>
                                    <h2  ><Link style={{color:"white"}} to={'./virtual-office'} >Virtual Office Solution</Link></h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              
                <Footer />
    </div>
  )
}

export default Services