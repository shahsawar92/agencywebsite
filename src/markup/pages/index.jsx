import React from "react";
import { Link } from "react-router-dom";
import HomeSlider2 from "../element/home-slider2";
import Footer from "../layout/footer";
import "../../assets/css/color-2.css";
import Brand1 from '../element/brand1'
import Header2 from "../layout/header";
import { blogdata } from "../../data/blogdata";
import { useState } from "react";
import { useEffect } from "react";
import { services_icons } from "../../assets/images/servicesIcons";


const Index =()=> {
      const [blogToDisplay, setblogToDisplay] = useState([])

      useEffect(() => {
        setblogToDisplay( blogdata.sort(() => Math.random() - Math.random()).slice(0, 3));
      }, [])
      
      console.log(blogToDisplay);
      useEffect (() => {
        document.title = "Home | BLZ";
     }, []);
    return (
      <>
        <Header2 />

        {/* <!--Search Popup--> */}
      

        <HomeSlider2 />

  
        {/* <!-- About Section Two --> */}
        <section className="about-section-two">
          <div className="container-fluid px-5">
            <div className="row align-items-center">
              <div className="col-lg-9 px-5">
                <div
                  className="content-box wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1200ms"
                >
                  <div className="sec-title">
                    <div className="sub-title">About Us</div>
                  
                    <div className="text">
                    We are a corporate services provider with over 10 years of combined industry experience. We help our customers across the globe and UAE successfully register their new company and operate as a business in UAE. We have established start-ups, e-commerce businesses, SMEs, and large companies from every industry imaginable. <br /> <br />
                    Our vast experience as a business consultant, allows us to provide a tailored service that matches your specific requirement. Whether you are setting up in Mainland, Freezones and offshore, we can deliver the right solution that you need.



                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="image-wrapper wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1200ms"
                >
                  <div className="image-one text-center px-4">
                    <img
                      style={{
                        height: "20rem",
                        width: "18rem",
                      }}
                      src={require("../../assets/images/resource/image-10.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* #3D94D9 */}

        {/* <!-- Funfacts Section --> */}
        {/* <section className="funfacts-section">
          <div className="container-fluid">
         
            <div className="fact-counter-two">
              <div className="row">
                <div className="column counter-column col-xl-2 col-lg-6">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                     
                      <div className="count-outer count-box">
                        <CountUp end={11} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span className="count-text" ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </div>
                      <div className="counter-title">Years in Business</div>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-xl-2 col-lg-6">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      
                      <div className="count-outer count-box">
                        <CountUp end={35} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span className="count-text" ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </div>
                      <div className="counter-title">Awards Won</div>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-xl-2 col-lg-6">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon">
                    
                      </div>
                      <div className="count-outer count-box">
                        <CountUp end={4500} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span className="count-text" ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </div>
                      <div className="counter-title">Clients</div>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-xl-2 col-lg-6">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon">
                     
                      </div>
                      <div className="count-outer count-box">
                        <CountUp end={180} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span className="count-text" ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </div>
                      <div className="counter-title">Team Members</div>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-xl-2 col-lg-6">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon">
                    
                      </div>
                      <div className="count-outer count-box">
                        <CountUp end={24} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span className="count-text" ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </div>
                      <div className="counter-title">Languages Spoken</div>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-xl-2 col-lg-6">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="900ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon">
                   
                      </div>
                      <div className="count-outer count-box">
                        <CountUp end={90} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span className="count-text" ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                        <span>%</span>
                      </div>
                      <div className="counter-title">Customer Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- Services Section --> */}

      {/*    <section className="services-section-three style-img style-two">
         <div className="auto-container ">
            <div className="sec-title light text-center">
          <div className="sub-title">Services</div>
                  <h2>
                  Our Services
                  </h2>
                </div>
            <div className="row"> */}
              
              {/* block of single service */}
              {/* <div className="service-block-one col-lg-4" >
                <Link to={'/ProServices/license'} style={{color:"black"}}>
                <div className="inner-box" style={{height:"28rem"}}>
                  <div className="icon">
                    <span className="">
                    <img src={services.icon4} alt="" />
                    </span>
                    <span className="round-shape"></span>
                  </div>
                  <h3>License</h3>
                  <div className="text-dark">
                  A Professional License is required in the UAE for individuals or business groups that deliver expertise as a service
                  </div>
                </div>
                </Link>
              </div> */}

              {/* block of single service */}
              {/* <div className="service-block-one col-lg-4" >
              <Link to={'/ProServices/visa'} style={{color:"black"}}>
                <div className="inner-box" style={{height:"28rem"}}>
                  <div className="icon">
                    <span className="">
                    <img src={services.icon5} alt="" />
                    </span>
                    <span className="round-shape"></span>
                  </div>
                  <h3>Visa</h3>
                  <div className="text-dark">
                  A residence visa or permit is a type of visa that certifies the legitimacy of an expat to reside in any emirate of the country.
                  </div>
                </div>
                </Link>
              </div> */}

              {/* block of single service */}
              {/* <div className="service-block-one col-lg-4">
              <Link to={'/ProServices/bankaccount'} style={{color:"black"}}>
                <div className="inner-box" style={{height:"28rem"}}>
                  <div className="icon">
                    <span className="">
                    <img src={services.icon6} alt="" />
                    </span>
                    <span className="round-shape"></span>
                  </div>
                  <h3>Finance & Banking</h3>
                  <div className="text-dark">
                  it can be hassle-free with the right know-how and support and we at BLZ  are at your service for your banking needs.
                  </div>
                </div>
                </Link>
              </div> */}
            {/* </div>
          </div>
        </section> */}
          {/* services-section-three style-img style-two */}
        
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
                                    <div className="icon"><img className="servivce-icon-img" src={services_icons.it} alt="" /></div>
                                    <h2  ><Link style={{color:"white"}} to={'./it-service'} >IT Services</Link></h2>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img className="servivce-icon-img" src={services_icons.business} alt="" /></div>
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

          {/* Businesss e book */}
          {/* <section className="about-section-two" style={{paddingBottom:"0px",marginBottom:"0px"}}>
          <div
            className="content-box wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1200ms"
          >
            <div className="sec-title text-center">
              <div className="sub-title">Our Guideline</div>
              <h2>
                Our Business Guideline Book
              </h2>
            </div>
          </div>
          <div
            className="content-box wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1200ms"
          >
            <div
              style={{
                backgroundImage: `url(${images.brouchure})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "40rem",
                margin: "0 !important",
              }}
              className="align-items-center"
            >
              <div
                style={{
                  
                }}
                className="ebook-text-style"
              >
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                deleniti aliquam, excepturi adipisci quidem quas ex fugit qui
                voluptatum inventore distinctio amet? Earum numquam iusto
                repellat et modi reiciendis libero repellendus inventore, rem
                cum facere excepturi laborum, eaque, doloribus blanditiis aut.
                Aut qui soluta esse tempora officiis sit maiores eveniet eos.
                Repudiandae accusantium molestias quisquam, quae nam autem
                voluptatibus! Eos tempora ab eligendi, ipsum magnam totam.
                Provident delectus, voluptatibus quis unde dicta labore!
                <button
                  className="no-borderRadiusImportant style-download-btn"
                  style={{
                    
                  }}
                  variant="light"
                  size="lg"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </section> */}
        
             {/* Contact numbers */}
        <section
          className="about-section-two"
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <div className="container-fluid px-5 ">
            <div className="row align-items-center">
              <div className="col-lg-12 px-5">
                <div
                  className="content-box wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1200ms"
                >
                  <div className="sec-title">
                    <div className="sub-title">Contacts</div>
                    <h2>
                      If You Need <br />
                      Any Help We Are Here
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 px-5 linehieght"
              
              >
                <div >Phone Number: {'   '}04 444 9444</div>
                <div>Whattsapp:{'   '}</div>
                <div>Email:{'   '}setup@blz.ae</div>
              </div>
              <div className="col-lg-6 px-5 text-style">
                <div className="py-4">
                  <span className="font-weight-bold">Dubai DownTown Address</span> :{'   '} Level 14, Boulevard Plaza Tower 1, Downtown, Dubai
<br />
                  <span className="font-weight-bold">Dubai Marina Address </span> :{'   '} Level 27, Marina Plaza, Dubai Marina, U.A.E.

                </div>
                <div>
                  <span className="font-weight-bold">Working hours</span>:{'   '} <div>Monday to Friday 8:30 am – 5:30 pm</div>

                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* <!-- Contact Form --> */}
        <section className="services-section-two" style={{backgroundColor:"#282828", color:"#d1d1d1"}}>
          <div className="auto-container">
            <div className="wrapper-box">
              <div
                className="left-column"
              >
                
                {/* <!-- Contact Form--> */}
                <div className="contact-form">
                  <form
                    method="post"
                    action="javascript:void(0)"
                    id="contact-form"
                  >
                    <div className="row clearfix">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Enter name......"
                          required=""
                        />
                        <i className="fas fa-user"></i>
                      </div>

                      <div className="col-md-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email......"
                          required=""
                        />
                        <i className="fas fa-envelope"></i>
                      </div>

                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone number......"
                          required=""
                        />
                        <i className="fas fa-phone"></i>
                      </div>

                      <div className="col-md-12 form-group">
                        <textarea
                          name="message"
                          placeholder="Enter message......"
                        ></textarea>
                        <i className="fas fa-edit"></i>
                      </div>

                      <div className="col-md-12 form-group">
                        <button
                          className="theme-btn latest-btn btn-style-one"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="btn-title light" style={{text:"white", background:"#000000"}}>Get In Touch</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="right-column">
                <div className="services-content">
                  <div className="sec-title">
                    <div className="sub-title light">Get in touch</div>
                    <h2 style={{color:"#f5f5f5 "}}>
                      Need any <br />
                      Consultation.
                    </h2>
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quis temporibus consequatur exercitationem sequi
                    error, fugit soluta impedit vitae provident beatae sint
                    libero iste cum magnam labore eius. Nihil modi mollitia
                    dolores maxime corrupti. Harum qui nulla rem, maiores
                    suscipit sed distinctio, nisi libero, neque dignissimos
                    tempore ut minus. Veniam iste dignissimos accusantium
                    praesentium facere non ut accusamus assumenda eveniet hic.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* .............................................................................................................................  */}

                                                        {/* <!-- Video Section --> */}

        {/* <VideoPopup2 /> */}
        {/* .............................................................................................................................  */}
    
        {/* our awards */}

        {/* <section
          className=" style-img1"
        >
          <div className="container-fluid px-5">
            <div className=" d-flex mx-0 align-items-center">
              <div className="col-lg-4 px-5">
                <div
                  className="content-box wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1200ms"
                >
                  <div className="sec-title">
                    <div className="sub-title">Awards</div>
                    <h2 style={{ color: "white" }}>
                      Our <br />
                      Awards
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-8 px-5 text-white py-lg-30 style-img2">
                
                <div className="col-lg-4 col-md-6">
                  <div>
                    <div
                      className="image"
                      style={{
                        padding: "0 0 0 0px",
                      }}
                    >
                      <img src={images.logo1} alt="" />
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "30px 0px",
                    }}
                  >
                    Most Trusted Business <br />
                    startup Advoisery 2021
                  </div>
                </div>
                 
                   <div className="col-lg-4 col-md-6">
                  <div>
                    <div
                      className="image"
                      style={{
                        padding: "0 0 0 0px",
                      }}
                    >
                      <img src={images.logo3} alt="" />
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "30px 0px",
                    }}
                  >
                    Most Trusted Business <br />
                    startup Advoisery 2021
                  </div>
                </div>
              
                <div className="col-lg-4 col-md-6">
                  <div>
                    <div
                      className="image"
                      style={{
                        padding: "0 0 0 0px",
                      }}
                    >
                      <img src={images.logo2} alt="" />
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "30px 10px",
                    }}
                  >
                    Most Trusted Business <br />
                    startup Advoisery 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       */}

        {/* <!-- Team Section --> */}
        {/* <section className="team-section bg-custom">
          <div className="container-fluid px-5">
            <div className="sec-title text-right">
              <div className="sub-title">Our Team</div>
              <h2 style={{color:"white"}}>Our Leadership Team</h2>
            </div>
            <div className="row justify-content-center">
              
              <div
                className="col-lg-2 team-block-one wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1200ms"
              >
                <div className="inner-box">
                  <div className="image" style={
                    {
                      borderRadius:"50%",
                    }
                  }>
                    <img
                      src={team.team1}
                      alt=""
                    />
                  </div>
                 
                  <div className="" style={{
                    textAlign:"center",
                    marginTop:"30px"
                  }}>
                    <div className="designation" style={{color:"#c23028"}}>Founder</div>
                    <h3 style={{color:"white"}}>Muhammad Hilal</h3>
                    <ul className="social-links">
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-facebook-f"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-twitter"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-behance"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-youtube"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div
                className="col-lg-2 team-block-one wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1200ms"
              >
                <div className="inner-box">
                  <div className="image" style={
                    {
                      borderRadius:"50%",
                    }
                  }>
                    <img
                      src={team.team2}                      
                      alt=""
                    />
                  </div>
                
                  <div className="" style={{
                    textAlign:"center",
                    marginTop:"30px"
                  }}>
                    <div className="designation" style={{color:"#c23028"}}>CTO</div>
                    <h3 style={{color:"white"}}>Hameed Ullah Jan</h3>
                    <ul className="social-links">
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-facebook-f"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-twitter"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-behance"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-youtube"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div
                className="col-lg-2 team-block-one wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1200ms"
              >
                <div className="inner-box">
                  <div className="image" style={
                    {
                      borderRadius:"50%",
                    }
                  }>
                    <img
                      src={team.team3}
                      alt=""
                    />
                  </div>
                  
                  <div className="" style={{
                    textAlign:"center",
                    marginTop:"30px"
                  }}>
                    <div className="designation" style={{color:"#c23028"}}>Developer</div>
                    <h3 style={{color:"white"}}>Muqadass Saleem</h3>
                    <ul className="social-links">
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-facebook-f"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-twitter"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-behance"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span className="fab fa-youtube"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- Testimonial Section --> */}
        {/* <Testimonial1 /> */}

        {/* <!-- blog Section --> */}
        {/* <section className="news-section1">
          <div className="auto-container">
            <div className="sec-title text-center">
              <div className="sub-title">Blog</div>
              <h2>Journey For Your Growth</h2>
            </div>
            <div className="row">
                {blogToDisplay.map((blog,key)=>(
                                  <div key={key}
                                  className="news-block-one col-lg-4 wow fadeInUp"
                                  data-wow-delay="200ms"
                                  data-wow-duration="1200ms"
                                  >
                                  <div className="inner-box">
                                    <div className="image">
                                      <Link to={`/blog-details/${blog?.slug}`}>
                                        <img
                                          src={blog?.blog_image}
                                          data-src="assets/images/resource/news-1.jpg"
                                          alt=""
                                        />
                                      </Link>
                                    </div>
                                    <div className="lower-content">
                                      <div className="category">{blog?.tag}</div>
                                      <ul className="post-meta">
                                        <li>
                                           <Link to={`/blog-details/${blog?.slug}`}>
                                            <i className="far fa-calendar-alt"></i>{blog?.date}
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to={"/#"}>
                                            <i className="far fa-user"></i>{blog?.author?.author_name}
                                          </Link>
                                        </li>
                                      </ul>
                                      <h3>
                                      <Link to={`/blog-details/${blog?.slug}`}>
                                          {blog?.blog_title}
                                        </Link>
                                      </h3>
                                      <div className="text-dark">
                                       {blog?.blog_content.slice(0,55).trim() + "..."}
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                ))}

              
            </div>
          </div>
        </section> */}

      {/* trusted partners */}
        <section style={{backgroundColor:"#000000", color:"#d1d1d1"}}>
          <div className="container-fluid">
            <div className="sec-title text-center">
              <div className="sub-title">Partners</div>
              <h2>Our Trusted Partners</h2>
            </div> <Brand1 />
            
              
              </div>
              </section>
              
        <Footer />
      </>
    );
  }
 
export default Index;
