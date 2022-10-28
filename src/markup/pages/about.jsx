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
                <section className=" history-section">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="image-wrapper">
                                    <div className="image-one">
                                        <img src={require('../../assets/images/resource/image-10.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <div className="sub-title">About</div>
                                        <h2 style={{color:"white"}}>About Us</h2>
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

                <section className="about-section-two ">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            
                            <div className="col-lg-6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <div className="sub-title">Mission</div>
                                        <h2>Company Mission</h2>
                                        <div className="text">Designed to cater to individuals, startups, and small to medium-sized companies, Decisive Zone is committed to providing bespoke business set-up advice and delivering fantastic customer service, as well as developing trusted, long-term relationships with all its clients - by not only managing the process of company formation from start to finish, but also by providing a supportive ecosystem for those companies to flourish.</div>
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
                <section className=" history-section services-section-four services-section-about" style={{color:"white"}}>
                    <div className="auto-container">
                        <div className="sec-title text-center">
                            <div className="sub-title">Features</div>
                            <h2>Core Features</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6" >
                                <div className="icon-box" >
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-3.png')} alt="" /></div>
                                    <h2  style={{color:"white"}}>Efficient Process</h2>
                                    <div className="text">Process efficiency is the amount of effort required to achieve a business objective. We Provide ease of the work and process. </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-21.png')} alt="" /></div>
                                    <h2  style={{color:"white"}}>Complete disclosure of infomation</h2>
                                    <div className="text">Improving the transparency of corporate information disclosure is a key principle of corporate governance. We assure complete disclosure of information.</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-4.png')} alt="" /></div>
                                    <h2  style={{color:"white"}}>Expert Professionals</h2>
                                    <div className="text">Our team have hands on experience in the industry for many years.  </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-22.png')} alt="" /></div>
                                    <h2  style={{color:"white"}}>Guaranteed Convenience</h2>
                                    <div className="text">We will provide you state of the art service, and 100% surety of convenience  </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-5.png')} alt="" /></div>
                                    <h2  style={{color:"white"}}>Customer Satisfaction</h2>
                                    <div className="text">Customer Satisfaction is our top priority, we keep customers value on top of everything </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-box">
                                    <div className="icon"><img src={require('../../assets/images/icons/icon-23.png')} alt="" /></div>
                                    <h2  style={{color:"white"}}>Ease of Communication</h2>
                                    <div className="text">As we have good grab on many languages so we can provide ease of communication to almost any national arround the world </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sponsors Section */}

<section className='pt-5 ' style={{background:"#000000"}}>
                <Brand1 />
                </section>
                <Footer />
            </>
        )
    }
export default About;