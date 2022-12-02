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
import axios from "axios";
import PopUpModal from "../layout/model";


const Index =()=> {
  const [show, setShow] = useState(false);
  const [ButtonValue, setButtonValue] = useState("GET IN TOUCH");

  const handleClose = () => setShow(false);
  

      const [blogToDisplay, setblogToDisplay] = useState([])
      const [formData, setformData] = useState({
        name:"",
        email:'',
        phone:"",
        msg:""
      });
      
     const onNameChange=(e) =>{
        setformData({...formData, name: e.target.value})
      }

      const onEmailChange=(e) =>{
        setformData({...formData, email: e.target.value})
      }
      const onPhoneChange=(e) =>{
        setformData({...formData, phone: e.target.value})
      }

      const onMessageChange=(e) =>{
        setformData({...formData, msg: e.target.value})
      }
    
      const handleSubmit= (e)=> {
        e.preventDefault();
        if(formData.email=="" || formData.phone=="" || formData.name=="" || formData.msg=="" ){
          alert("Please fill the form Completely")
        } else{
        setButtonValue("Sending ...")
        axios({
          method: "GET",
          mode: 'no-cors',
          headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
        },
          url:`/project/index.php?name=${formData.name}&email=s${formData.email}&phone=${formData.phone}&message=${formData.msg}`,
        }).then((response)=>{
       
           setButtonValue("Sucessfull");
           setShow(true);
           setButtonValue("GET IN TOUCH");
           console.log("sucessfull operation, response: ", response);
           resetForm();
          
           
          
        })
      }
        }
  const resetForm=()=>{
    setformData(
      {
        name:"",
        email:'',
        phone:"",
        msg:""
      }
    )
    setButtonValue("GET IN TOUCH");
  }

      

      console.log("form data:",formData);
      useEffect(() => {
        setblogToDisplay( blogdata.sort(() => Math.random() - Math.random()).slice(0, 3));
      }, [])
      
      console.log(blogToDisplay);
      useEffect (() => {
        document.title = "Home | BLZ";
     }, []);
     useEffect(() => {
      var bd = document.getElementsByTagName('body')[0];
           bd.classList.remove("mobile-menu-visible");
   
     
   }, []);
    return (
      <>

{show &&   <PopUpModal handleClose={handleClose} show={show} /> }
        <Header2 />     

        <HomeSlider2 />

  
        {/* <!-- About Section Two --> */}
        <section className="about-section-two">
          <div className="container-fluid px-5">
            <div className="row align-items-center">
            <div className="col-lg-4">
                <div
                  className="image-wrapper wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1200ms"
                >
                  <div className="image-one text-center px-4 imagesizing">
                    <img
                      // style={{
                      //   height: "20rem",
                      //   width: "18rem",
                      // }}
                      src={require("../../assets/images/resource/image10.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 px-5">
                <div
                  className="content-box wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1200ms"
                >
                  <div className="sec-title">
                    <div className="sub-title  text-dark">About Us</div>
                    <h2>
                  We Work With <br />You To <span className="bluecolor"> Address</span>
                    </h2>
                    <div className="text">
                    We are a corporate services provider with over 10 years of combined industry experience. We help our customers across the globe and UAE successfully register their new company and operate as a business in UAE. We have established start-ups, e-commerce businesses, SMEs, and large companies from every industry imaginable. Our vast experience as a business consultant, allows us to provide a tailored service that matches your specific requirement. Whether you are setting up in Mainland, Freezones and offshore, we can deliver the right solution that you need.
                    </div>
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
        
             {/* Contact Numbers */}
        <section
          className="about-section-two graybackground"
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
                    <div className="sub-title text-dark">Contacts</div>
                    <h2>
                  If You Need  <br />Help <span className="bluecolor"> We Are Here</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 px-5 linehieght"
              
              >
                 <ul>
                    <li className="font-weight-bold" >Phone Number: <a className="text" href="tel:+97144449444">+97144449444</a></li>
                    <li   className="font-weight-bold">WhatsApp: <a className="text" href="https://wa.me/+971554151858"  target="_blank"> +971554151858</a></li>
                    <li  className="font-weight-bold">Email:<a className="text" href="mailto:setup@blz.ae">  setup@blz.ae</a></li>
                </ul>
              </div>
              <div className="col-lg-6 px-5 text-style">
                <div className="py-4">
                  <span className="font-weight-bold">Dubai DownTown Address</span> :{'   '} Level 14, Boulevard Plaza Tower 1, Downtown, Dubai
<br />
                  <span className="font-weight-bold">Dubai Marina Address </span> :{'   '} Level 27, Marina Plaza, Dubai Marina, U.A.E.

                </div>
                <div>
                  <span className="font-weight-bold">Working hours</span>:{'   '} Monday to Friday 8:30 am – 5:30 pm

                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* <!-- Contact Form --> */}
        {/* <section className="services-section-two" style={{backgroundColor:"#282828", color:"#d1d1d1"}}>
          <div className="auto-container">
            <div className="wrapper-box">
              <div
                className="left-column"
              >
                
                
                <div className="contact-form">
                  <form
                    method="post"
                    action="javascript:void(0)"
                    id="contact-form"
                  >
                    <div className="row clearfix">
                      <div className="col-md-12 form-group">
                        <input
                          onChange={(e)=>{onNameChange(e) }}
                          type="text"
                          name="username"
                          placeholder="Enter name......"
                          required
                        />
                        <i className="fas fa-user"></i>
                      </div>

                      <div className="col-md-12 form-group">
                        <input onChange={(e)=>{onEmailChange(e) }}
                          type="email"
                          name="email"
                          placeholder="Enter email......"
                          required
                        />
                        <i className="fas fa-envelope"></i>
                      </div>

                      <div className="col-md-12 form-group">
                        <input 
                        onChange={(e)=>{onPhoneChange(e) }}
                          type="text"
                          name="phone"
                          placeholder="Phone number......"
                          required
                        />
                        <i className="fas fa-phone"></i>
                      </div>

                      <div className="col-md-12 form-group">
                        <textarea
                          onChange={(e)=>{onMessageChange(e) }}
                          name="message"
                          placeholder="Enter message......"
                        ></textarea>
                        <i className="fas fa-edit"></i>
                      </div>

                      <div className="col-md-12 form-group">
                        <button
                          onClick={(e)=>handleSubmit(e)}
                          className="theme-btn latest-btn btn-style-one"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="btn-title light" style={{text:"white", background:"#000000"}}>{ButtonValue}</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="right-column">
                <div className="services-content">
                  <div className="sec-title">
                    <div className="sub-title light">Get In Touch</div>
                   
                  </div>
                  <div className="text">
                  We will provide you state of the art services in any of our domain as our mission is To be your preferred business setup partner offering end to end corporate solutions by way of transparency and investment of time to develop trusted relationships, ensuring success of our partners and stakeholders.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
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
        <section style={{paddingTop:"86px"}}>
          <div className="container-fluid">
            <div className="sec-title text-center">
              <div className="sub-title text-dark">Partners</div>
              <h2>Our Trusted Partners</h2>
            </div> <Brand1 />
            
              
              </div>
              </section>
              
        <Footer />
      </>
    );
  }
 
export default Index;
