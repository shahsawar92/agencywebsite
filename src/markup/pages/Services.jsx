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
     useEffect(() => {
        var bd = document.getElementsByTagName('body')[0];
             bd.classList.remove("mobile-menu-visible");
     
       
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
      <section className="services-section-four" style={{color:"white", marginBottom:"0px", marginTop:"0px"}}>
                    <div className="container-fluid px-5">
                        <div className="sec-title text-center">
                            <div className="sub-title text-dark">Services</div>
                            <h2 className="text-dark">Our Services</h2>
                        </div>
                        <div className="row">
                        <div className="col-lg-4" >
                                <div className="icon-box" >
                                    <div className="icon" ><img className=""  src={services_icons.company1} alt="" /></div>
                                    <h3 className="pb-2" ><Link  className="link-text"  to={'./Services2'} >Company Formation</Link></h3>
                                    <div className="text">We will be with you from the first step of starting your own business with complete support of our highly skilled experts.</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <div className="icon" style={{width:"35px", height:'50px'}}><img className="" src={services_icons.visa1} alt="" /></div>
                                    <h3 className="pb-2" ><Link className="link-text"  to={'./visa'} >Visa Services </Link></h3>
                                    <div className="text">Visa is a requirement to stay in the country and it involves engaging with many government authorities (i.e) ministry of labour and immigration where BLZ can help. </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <div className="icon"><img className="" src={services_icons.bank} alt="" /></div>
                                    <h3 className="pb-2" ><Link className="link-text"  to={'./bank-account'} >Banking Assistance</Link></h3>
                                    <div className="text">Bank account is important for any company for receiving and making payments for business purpose, but account opening can be a very tedious and we are here to assist you with the process </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <div className="icon"><img className="" src={services_icons.tax1} alt="" /></div>
                                    <h3 className="pb-2" ><Link className="link-text"  to={'./tax'} >Tax and Accounting Services</Link></h3>
                                    <div className="text">Why bother with employing an accountant while you can get the same level of service with minimum monthly fees with us at BLZ </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <div className="icon"><img className="" src={services_icons.marketing} alt="" /></div>
                                    <h3 className="pb-2" ><Link className="link-text"  to={'./marketing'} >Marketing Services</Link></h3>
                                    <div className="text">Marketing your products and services in this highly competitive market is not an easy job and it can take so much of the time which can be spent on your operations.   </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <div className="icon"><img src={services_icons.it1} alt="" /></div>
                                    <h3 className="pb-2" ><Link className="link-text"  to={'./it-service'} >IT Services</Link></h3>
                                    <div className="text">Without IT infrastructure, no company can function and it needs proper maintenance to remain effective and out IT experts can maintain it in a cost effective way</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <div className="icon"><img className="" src={services_icons.business1} alt="" /></div>
                                    <h3 className="pb-2" ><Link className="link-text"  to={'./business-center'} >Business Center Services</Link></h3>
                                    <div className="text">BLZ provides physical office solutions for all types of entrepreneurs and organizations. These spaces offer private or shared office solutions, with all facilities </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <div className="icon"><img className="" src={services_icons.va1} alt="" /></div>
                                    <h3 className="pb-2" ><Link className="link-text"  to={'./virtual-office'} >Virtual Office Solution</Link></h3>
                                    <div className="text">BLZ offer professional virtual offices with a special emphasis on organised phone and mail management services. </div>
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