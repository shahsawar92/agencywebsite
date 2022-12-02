import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Brand1 from '../element/brand1';
import { team } from '../../assets/images/team';


const aboutbg = require('./../../assets/images/background/image-11.jpg');



const About=()=> {
    useEffect (() => {
        document.title = "Blog | BLZ";
     }, []);

     useEffect(() => {
        var bd = document.getElementsByTagName('body')[0];
             bd.classList.remove("mobile-menu-visible");
     
       
     }, []);
     
     
        return (
            <>
                <Header />
        


                <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>About Us</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">About Us</li>
                        </ul>
                    </div>

                </section>


                {/* About Section Two */}
                <section className=" history-section whitebackground">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="image-wrapper">
                                    <div className="image-one">
                                        <img src={require('../../assets/images/resource/image-10.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <div className="content-box ">
                                    <div className="sec-title">
                                        <div className="sub-title text-dark">About</div>
                                        <h2 className='text-dark'>About Us</h2>
                                        <div className="text">We are a corporate services provider with over 10 years of combined industry experience. We help our customers across the globe and UAE successfully register their new company and operate as a business in UAE. We have established start-ups, e-commerce businesses, SMEs, and large companies from every industry imaginable. <br />
                                        Our vast experience as a business consultant, allows us to provide a tailored service that matches your specific requirement. Whether you are setting up in Mainland, Freezones and offshore, we can deliver the right solution that you need.</div>
                                    </div>
                                    {/* <div className="author-info">
                                        <div className="wrapper-box">
                                            <h2>Rosalina D. William</h2>
                                            <div className="designation">Founder</div>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div>
                                        </div>
                                        <div className="signature"><img src={require('../../assets/images/resource/signature.png')} alt="" /></div>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* company mmission */}


                <section className="about-section-two  graybackground">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            
                            <div className="col-lg-6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <div className="sub-title text-dark">Mission</div>
                                        <h2>Company Mission</h2>
                                        <div className="text">To be your preferred business setup partner offering end to end corporate solutions by way of transparency and investment of time to develop trusted relationships, ensuring success of our partners and stakeholders.</div>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-wrapper">
                                    <div className="image-one">
                                        <img src={require('../../assets/images/resource/ourmission.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History Section */}
                {/* <section className="history-section">
                    <div className="auto-container">
                        <div className="sec-title text-center light">
                            <div className="sub-title">History</div>
                            <h2>Our Journey</h2>
                        </div>
                        <Tab.Container defaultActiveKey="first">
                            <Nav className="nav-tabs tab-btn-style-one">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">2020</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2015</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">2010</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">2005</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">2000</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className=" fadeInUp animated">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content pl-lg-4">
                                                <div className="sec-title light">
                                                    <div className="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className=" fadeInUp animated">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content pl-lg-4">
                                                <div className="sec-title light">
                                                    <div className="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className=" fadeInUp animated">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content pl-lg-4">
                                                <div className="sec-title light">
                                                    <div className="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth" className=" fadeInUp animated">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content pl-lg-4">
                                                <div className="sec-title light">
                                                    <div className="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth" className=" fadeInUp animated">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content pl-lg-4">
                                                <div className="sec-title light">
                                                    <div className="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </section> */}

                {/* Team Section */}
                {/* <section className="team-section" style={{backgroundColor:"black", color:"white"}}>
                    <div className="auto-container">
                        <div className="sec-title text-center">
                            <div className="sub-title">Our Team</div>
                            <h2 className=''>Leadership Team</h2>
                        </div>
                        <div className="row">
                            
                            <div className="col-lg-4 team-block-one">
                                <div className="inner-box">
                                    <div className="image"><img src={team.team1} alt="" /></div>
                                    <div className="content">
                                        <div className="designation">Founder</div>
                                        <h3 className="text-dark">Muhammad Hilal</h3>
                                        <ul className="social-links">
                                            <li><Link to={'/#'}><span className="fab fa-facebook-f text-dark"></span></Link></li>
                                            <li><Link to={'/#'}><span className="fab fa-twitter text-dark"></span></Link></li>
                                            <li><Link to={'/#'}><span className="fab fa-behance text-dark"></span></Link></li>
                                            <li><Link to={'/#'}><span className="fab fa-youtube text-dark"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 team-block-one">
                                <div className="inner-box">
                                    <div className="image"><img src={team.team2} alt="" /></div>
                                    <div className="content">
                                        <div className="designation">CTO</div>
                                        <h3 className="text-dark">Hameed Ullah Jan</h3>
                                        <ul className="social-links">
                                            <li><Link to={'/#'}><span className="fab fa-facebook-f text-dark"></span></Link></li>
                                            <li><Link to={'/#'}><span className="fab fa-twitter text-dark"></span></Link></li>
                                            <li><Link to={'/#'}><span className="fab fa-behance text-dark"></span></Link></li>
                                            <li><Link to={'/#'}><span className="fab fa-youtube text-dark"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 team-block-one">
                                <div className="inner-box">
                                    <div className="image"><img src={team.team3} alt="" /></div>
                                    <div className="content">
                                        <div className="designation">Developer</div>
                                        <h3 className="text-dark">Muqadass Saleem</h3>
                                        <ul className="social-links">
                                            <li><Link to={'/#'}><span className="fab fa-facebook-f text-dark"></span></Link></li>
                                            <li><Link to={'/#'}><span className="fab fa-twitter text-dark"></span></Link></li>
                                            <li><Link to={'/#'}><span className="fab fa-behance text-dark"></span></Link></li>
                                            <li><Link to={'/#'}><span className="fab fa-youtube text-dark"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Services Section Four */}
                <section className=" history-section services-section-four services-section-about whitebackground" style={{color:"white"}}>
                    <div className="auto-container">
                        <div className="sec-title text-center">
                            <div className="sub-title text-dark">Features</div>
                            <h2 className='text-dark'>Core Features</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6" >
                                <div className="icon-box" >
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-3.png')} alt="" /></div>
                                    <h2  >Efficient Process</h2>
                                    <div className="text">We make the company formation and related work process efficient and hassle-free while consuming very less amount of your time. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-1.png')} alt="" /></div>
                                    <h2  >Complete disclosure of infomation</h2>
                                    <div className="text">Improving the transparency of the client relationship with BLZ, the detailed information is given at the start of the process to enable you of making an informed decision.</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-4.png')} alt="" /></div>
                                    <h2  >Expert Professionals</h2>
                                    <div className="text">We are a team of experts who has industry knowledge and have been in the market for more than a decade dealing with business setup and PRO services. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-5.png')} alt="" /></div>
                                    <h2  >Guaranteed Convenience</h2>
                                    <div className="text">You can be assured of the convenience on every step of your company registration, your visa services and other services including office solutions, virtual offices. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-2.png')} alt="" /></div>
                                    <h2  >Customer Satisfaction</h2>
                                    <div className="text">Customer Satisfaction is our top priority, and our team will go an extra mile for completion and delivering of any service required.</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-6.png')} alt="" /></div>
                                    <h2  >Ease of Communication</h2>
                                    <div className="text">Communication is a key factor in any process and our advisors are well spoken and always available to be communicated via email, WhatsApp and phone call.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sponsors Section */}

<section className='pt-5 '>
                <Brand1 />
                </section>
                <Footer />
            </>
        )
    }
export default About;