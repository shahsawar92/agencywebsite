import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Brand1 from "../element/brand1";
import { useState } from "react";
import { listOfFreeZones } from "../../data/listofFreeZones";
import { facticons } from "../../assets/images/icons/funfacts/index";


const aboutbg = require("./../../assets/images/background/image-11.jpg");

const Services2 = () => {
  const [showZone, setshowZone] = useState(listOfFreeZones[0]);

  const handlezone = (e) => {
    for (let index = 0; index < listOfFreeZones.length; index++) {
      if (listOfFreeZones[index].id === e) {
        setshowZone(listOfFreeZones[index]);
      }
    }
  };
  useEffect (() => {
    document.title = "Company Setup | BLZ";
 }, []);
  return (
    <>
      <Header />
      {/* <!--Search Popup--> */}
      

      {/* <!-- Page Banner Section --> */}
      <section className="page-banner">
        <div
          className="page-banner-bg"
          style={{ backgroundImage: "url(" + aboutbg + ")" }}
        ></div>
        <div className="bottom-rotten-curve alternate"></div>

        <div className="auto-container">
          <h1>Company Making</h1>
          <ul className="bread-crumb clearfix">
            <li>
              <Link to={"/#"}>Home</Link>
            </li>
            <li className="active">Company</li>
          </ul>
        </div>
      </section>
      {/* <!--End Banner Section --> */}

      {/* <!-- Services Section Five --> */}
       
        
          <Tab.Container defaultActiveKey="first" className="mb-0">
          <section className="services-section-five graybackground" >
            <div className="auto-container">
              <Nav className="nav-tabs tab-btn-style-one d-flex justify-content-around ">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <div className="icon-box">
                      <div className="icon">
                        <span className="flaticon-team"></span>
                      </div>
                      <h5>Freezone Company Setup</h5>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <div className="icon-box">
                      <div className="icon">
                        <span className="flaticon-money"></span>
                      </div>
                      <h5>Mainland Company Setup </h5>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="third">
                    <div className="icon-box">
                      <div className="icon">
                        <span className="flaticon-assets"></span>
                      </div>
                      <h5>PRO Services </h5>
                    </div>
                  </Nav.Link>
                </Nav.Item> */}

              </Nav>
            </div>
          </section>
            <Tab.Content>
              <Tab.Pane eventKey="first" className=" fadeInUp animated">
              <section className="pb-5 pt-5 whitebackground">
                <div className="row align-items-center auto-container">
                  <div className="col-lg-6">
                    <div className="image">
                      <img
                        src={require("../../assets/images/resource/image-18.jpg")}
                        alt="resourse"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content pl-lg-4">
                      <div className="sec-title">
                        <div className="sub-title text-dark">Free Zones</div>
                        <h2 className="text-white text-dark">About Free Zones</h2>
                      </div>
                      <div className="text">
                      Freezones are special economic zones set up with the objective of offering tax concessions and customs duty benefits to expatriate investors. There are more than 30 Free Zones operating in the UAE. Free Zones in the UAE are governed pursuant to a special framework of rules and regulations. <br />
                      A Free Zone Authority offers business licenses designed around one or more industry categories. Most of the free zones in Dubai broadly offer trading, professional, and industrial licenses to investors looking to set up their businesses.

                      </div>
                      {/* <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div> */}
                    </div>
                  </div>


                  {/* <div className="col-lg-2"></div> */}
                 
                </div>
              </section>
              <section className="section-guidance pt-5 pb-5" style={{background:"#fff"}}>
                <div className="col-lg-12 text-center auto-container">
                    <div className="content">
                      <div className="sec-title">
                        <div className="sub-title text-dark">Free Zones</div>
                        <h2 className="text-dark">Advantages:</h2>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className=" " >100% Ownership</li>
                        <li className="list-group-item whitebackground text-dark " >
                          No NOC (No Objection Certificate) is required from the
                          current employer
                        </li>
                        <li className="list-group-item whitebackground text-dark " >
                          No paid-up share capital required
                        </li>
                        <li className="list-group-item whitebackground text-dark " >
                          Option to incorporate a company under common law
                        </li>
                        <li className="list-group-item whitebackground text-dark " >
                          0% corporate and income tax
                        </li>
                        <li className="list-group-item whitebackground text-dark " >
                          Option to incorporate remotely
                        </li>
                        <li className="list-group-item whitebackground text-dark " >
                          Flexibility to incorporate in jurisdictions where
                          employee health insurance is not mandatory
                        </li>
                        <li className="list-group-item whitebackground text-dark"></li>
                      </ul>
                    </div>
                  </div>
              </section>
              <section className="pb-5 pt-5 graybackground text-dark" >
                <div className="row align-items-center auto-container">
                  <div className="col-lg-12">
                    <div className="content ">
                      <div className="sec-title">
                        <div className="sub-title mt-lg-5 text-dark">Free Zones</div>
                        {/* <h2 className="text">
                          Steps to Set Up a Company in a UAE Free Zone
                        </h2> */}
                        <h3 >
                          Starting a business in Dubai is simple with BLZ.
                          We can help you set up in a free zone, on mainland or
                          offshore.
                        </h3>
                      </div>

                      {/* <div className="row col-lg-12 justify-content-between">
                        <div className="card border-muted mb-3 col-lg-4 -mx-5 " style={{margin:"0px -5px", backgroundColor:"#282828"}}>
                          <div className="card-header bg-transparent border-muted text-center" >
                            <img
                              src={facticons.awardsvg}
                              alt="award"
                              style={{
                                width: "30px",
                                height: "30px",
                                textAlign: "center",
                              }}
                            />
                          </div>
                          <div className="card-body text-white">
                            <h5 className="card-title">Guidance to Startup</h5>
                            <p className="card-text">
                              You will be guided through the process
                              step-by-step in a very transparent manner that
                              gives you a full overview of exactly where you are
                              at any given time of the setup journey.
                            </p>
                          </div>
                        </div>

                        <div className="card border-muted mb-3  col-lg-4 -mx-5" style={{margin:"0px -5px", backgroundColor:"#282828"}}>
                          <div className="card-header bg-transparent border-muted text-center">
                            <img
                              src={facticons.customer}
                              alt="customer"
                              style={{
                                width: "30px",
                                height: "30px",
                                textAlign: "center",
                              }}
                            />
                          </div>
                          <div className="card-body text-white">
                            <h5 className="card-title">
                              We will Take Responsibality
                            </h5>
                            <p className="card-text">
                              We do all the heavy lifting for you so that you
                              don’t have to give anything a second thought, but
                              we make sure you are well-informed along the way.
                            </p>
                          </div>
                        </div>

                        <div className="card border-muted mb-3  col-lg-4 -mx-5" style={{margin:"0px -5px", backgroundColor:"#282828"}}>
                          <div className="card-header bg-transparent border-muted text-center">
                            <img
                              src={facticons.awards}
                              alt="award"
                              style={{
                                width: "30px",
                                height: "30px",
                                textAlign: "center",
                              }}
                            />
                          </div>
                          <div className="card-body text-white">
                            <h5 className="card-title">Sucess</h5>
                            <p className="card-text">
                              While the entire process can take as little as
                              seven working days, BLZ is doing a lot behind the
                              scenes to ensure your UAE free zone company setup
                              is a complete success.
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <div className="col-lg-2"></div>
                  <div className="col-lg-10 text-center">
                    <div className="content pl-lg-4"></div>
                  </div>
                </div>
              </section>
              <section className=" pb-5 pt-5 whitebackground" >
                  <div className="sortable-masonry auto-container">
                    <div className="">
                      <div className="sec-title light text-center">
                        <div className="sub-title text-dark">UAE Free Zones</div>
                        <h2 className="text-dark">List of UAE free zones</h2>
                      </div>

                      <div
                        className="row align-items-center"
                        // style={{ backgroundColor: "black" }}
                      >
                        <div className="col-lg-12 text-center">
                          <div className="content ">
                            <Tab.Container defaultActiveKey="first">
                              <ul className="list-group list-group-style" >
                              <li 
                                  className="list-group-item whitebackground text-dark d-flex justify-content-between"
                                  style={{ cursor: "pointer", backgroundColor:"#fff"}}
                                >
                                  <div
                                    id="zone0"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    {" "}
                                    International Free Zone Authority (IFZA)

                                  </div>
                                  <div
                                    id="zone1"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    <Link
                                      id="zone2"
                                      to={`/services-details/International_Free_Zone_Authority`}
                                    >
                                      open
                                    </Link>
                                  </div>
                                </li>
                                <li 
                                  className="list-group-item whitebackground text-dark d-flex justify-content-between"
                                  style={{ cursor: "pointer", backgroundColor:"#fff"}}
                                >
                                  <div
                                    id="zone1"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    {" "}
                                    SHARJAH MEDIA CITY FREE ZONE (SHAMS)
                                  </div>
                                  <div
                                    id="zone1"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    <Link
                                      id="zone2"
                                      to={`/services-details/Sharjah_Media_City_Free_Zone`}
                                    >
                                      open
                                    </Link>
                                  </div>
                                </li>
                                <li
                                  className="list-group-item whitebackground text-dark d-flex justify-content-between"
                                  style={{ cursor: "pointer", backgroundColor:"#fff"}}
                                >
                                  <div
                                    id="zone2"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    {" "}
                                    RAS AL KHAIMAH ECONOMIC ZONE (RAKEZ)
                                  </div>
                                  <div
                                    id="zone2"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    {" "}
                                    <Link
                                      id="zone2"
                                      to={`/services-details/Ras_Al_Khaimah_Economic_Zone`}
                                    >
                                      open
                                    </Link>
                                  </div>
                                </li>
                                <li
                                  className="list-group-item whitebackground text-dark d-flex justify-content-between"
                                  style={{ cursor: "pointer", backgroundColor:"#fff"}}
                                >
                                  <div
                                    id="zone3"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    {" "}
                                    DUBAI MULTI COMMODITIES CENTRE FREE ZONE
                                    (DMCC)
                                  </div>
                                  <div
                                    id="zone3"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    <Link
                                      id="zone2"
                                      to={`/services-details/Ajman_Free_Zone`}
                                    >
                                      open
                                    </Link>
                                  </div>
                                </li>
                                <li
                                  className="list-group-item whitebackground text-dark d-flex justify-content-between"
                                  style={{ cursor: "pointer", backgroundColor:"#fff"}}
                                >
                                  <div
                                    id="zone4"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    {" "}
                                    SHARJAH PUBLISHING CITY FREE ZONE (SPCFZ)
                                  </div>
                                  <div
                                    id="zone4"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    <Link
                                      id="zone2"
                                      to={`/services-details/Dubai_Multi_Commodities_Centre_Free_Zone`}
                                    >
                                      open
                                    </Link>
                                  </div>
                                </li>
                                <li
                                  className="list-group-item whitebackground text-dark d-flex justify-content-between"
                                  style={{ cursor: "pointer", backgroundColor:"#fff"}}
                                >
                                  <div
                                    id="zone5"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    {" "}
                                    MEYDAN FREE ZONE (MFZ)
                                  </div>
                                  <div
                                    id="zone5"
                                    onClick={(e) => {
                                      handlezone(e.target.id);
                                    }}
                                  >
                                    <Link
                                      id="zone2"
                                      to={`/services-details/Sharjah_Publishing_City_Free_Zone`}
                                    >
                                      open
                                    </Link>
                                  </div>
                                </li>
                              </ul>
                            </Tab.Container>

                            <Tab.Pane
                              eventKey="1"
                              className=" fadeInUp animated"
                            >
                              <div
                                className="card w-100 text-left"
                                style={{ marginTop: "100px" }}
                              >
                                <div className="card-body whitebackground text-dark " style={{ border:"none"}}>
                                  <h2 className="card-title">{showZone.title}</h2>
                                  <p className="card-text">{showZone.content}</p>
                                  <h3>Benefits</h3>
                                  <ul className="b">
                                    {showZone.Benefits.map((benifit, key) => (
                                      <li>
                                        <div key={key} className="col-lg-6">
                                          {benifit}
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </Tab.Pane>
                            {/* <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="second" className=" fadeInUp animated">
                <section  className="pb-5 pt-5 whitebackground" >
                    <div className="row align-items-center auto-container">
                      <div className="col-lg-6">
                        <div className="image">
                          <img
                            src={require("../../assets/images/resource/image-18.jpg")}
                            alt="resource"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="content pl-lg-4">
                          <div className="sec-title">
                            <div className="sub-title text-dark">Mainland</div>
                            <h2 className="text-dark">Mainland Company Setup</h2>
                          </div>
                          <div className="text-dark">
                            Mainland is the area outside of the free zones with the
                            Department of Economic Development (DED) being the
                            regulatory authority for the issuance of mainland
                            licenses. Mainland companies are allowed to carry out
                            business without restrictions throughout the UAE and
                            internationally.
                            <br /> A local sponsor is no longer needed to get a
                            Dubai mainland license for around 1000 commercial and
                            industrial activities.
                          </div>
                        </div>
                      </div>
                    </div>
                </section>
                <section className="pb-5 pt-5 graybackground">
                    <div className="col-lg-12 text-center auto-container">
                      <div className="content">
                      <div className="sec-title">
                            <div className="sub-title text-dark">About</div>
                          <h3 className="text-dark">Department of Economic Development – Dubai (DED):</h3>
                        </div>
                       <div>
                        <p className="text-dark">
                        Dubai Mainland comes under the Department of Economic Development – Dubai (DED) and DED is responsible for processing the trade licenses to corporate individuals and entities intending to start a business in the Dubai mainland. DED trade license allows companies to trade without restrictions within the local markets and globally.
                        </p>
                       </div>
                      </div>
                    </div>
                </section>
                <section className="pb-5 pt-5 whitebackground">
                    <div className="col-lg-12 text-center auto-container">
                      <div className="content">
                      <div className="sec-title">
                            <div className="sub-title text-dark">Advantages</div>
                          <h3 className="text-dark">Benefits:</h3>
                        </div>
                        <ul className="list-group list-group-style">
                          <li className="list-group-item whitebackground text-dark">
                          -	100% Foreign Ownership 
                          </li>
                          <li className="list-group-item whitebackground text-dark">
                          -	Wide Range Of Business Activities
                          </li>
                          <li className="list-group-item whitebackground text-dark">
                          -	Fewer Nationalities Restrictions
                          </li>
                          <li className="list-group-item whitebackground text-dark">
                          -	Unlimited Number Of Visas 
                          </li>
                          <li className="list-group-item whitebackground text-dark">
                          -	Hassle-free Bank Account Processing
                          </li>
                          <li className="list-group-item whitebackground text-dark">
                          -	Freedom Of Choosing Office Premises Anywhere In Dubai
                          </li>
                        </ul>
                      </div>
                    </div>
                </section>
                <section className="pt-5 pb-5 our-blog p-0 m-0 bg-silver graybackground" >
                      <div className="container work-process  pb-5 pt-5">
                        <div className="title mb-5 text-center">
                          <h3 className="text-dark">
                            Our <span className="text-dark">Trade license Process </span>
                          </h3>
                        </div>

                        <div className="row">
                          <div className="col-md-5">
                            <div
                              className="process-box process-left"
                              data-aos="fade-right"
                              data-aos-duration="1000"
                            >
                              <div className="row">
                                <div className="col-md-5">
                                  <div className="process-step">
                                    <p className="m-0 p-0">Step</p>
                                    <h2 className="m-0 p-0">01</h2>
                                  </div>
                                </div>
                                <div className="col-md-7">
                                  <h5>Select Business Activity</h5>
                                  <p>
                                    <small>
                                    Business activities include any activity a business engages in for the primary purpose of starting your own business                                    </small>
                                  </p>
                                </div>
                              </div>
                              <div className="process-line-l"></div>
                            </div>
                          </div>
                          <div className="col-md-2"></div>
                          <div className="col-md-5">
                            <div className="process-point-right"></div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-5">
                            <div className="process-point-left"></div>
                          </div>
                          <div className="col-md-2"></div>
                          <div className="col-md-5">
                            <div
                              className="process-box process-right"
                              data-aos="fade-left"
                              data-aos-duration="1000"
                            >
                              <div className="row">
                                <div className="col-md-5">
                                  <div className="process-step">
                                    <p className="m-0 p-0">Step</p>
                                    <h2 className="m-0 p-0">02</h2>
                                  </div>
                                </div>
                                <div className="col-md-7">
                                  <h5>Secure Trade Name & Initial Approval</h5>
                                  <p>
                                    <small>
                                    If you want to protect your business's intellectual property, the first step is to register and trademark your brand name.
                                    </small>
                                  </p>
                                </div>
                              </div>
                              <div className="process-line-r"></div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-5">
                            <div
                              className="process-box process-left"
                              data-aos="fade-right"
                              data-aos-duration="1000"
                            >
                              <div className="row">
                                <div className="col-md-5">
                                  <div className="process-step">
                                    <p className="m-0 p-0">Step</p>
                                    <h2 className="m-0 p-0">03</h2>
                                  </div>
                                </div>
                                <div className="col-md-7">
                                  <h5>Sign Memorandum of Association</h5>
                                  <p>
                                    <small>
                                    A Memorandum of Association (MoA) represents the charter of the company. It is a legal document prepared during the formation and registration process of a company to define its relationship with shareholders and it specifies the objectives for which the company has been formed.
                                    </small>
                                  </p>
                                </div>
                              </div>
                              <div className="process-line-l"></div>
                            </div>
                          </div>
                          <div className="col-md-2"></div>
                          <div className="col-md-5">
                            <div className="process-point-right"></div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5">
                            <div className="process-point-left"></div>
                          </div>
                          <div className="col-md-2"></div>
                          <div className="col-md-5">
                            <div
                              className="process-box process-right"
                              data-aos="fade-left"
                              data-aos-duration="1000"
                            >
                              <div className="row">
                                <div className="col-md-5">
                                  <div className="process-step">
                                    <p className="m-0 p-0">Step</p>
                                    <h2 className="m-0 p-0">04</h2>
                                  </div>
                                </div>
                                <div className="col-md-7">
                                  <h5>Issue Trade License</h5>
                                  <p>
                                    <small>
                                    It is a service requested by the customer to obtain an official approved document through which he can start practicing business activities legally in the emirate. 
                                    </small>
                                  </p>
                                </div>
                              </div>
                              <div className="process-line-r"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                <section className="pb-5 pt-5 mb-5 whitebackground">
                    <div className="col-lg-12 auto-container">
                      <div className="content ">
                      <div className="sec-title text-dark">
                            <div className="sub-title text-dark">Activities</div>
                          <h3 className="text-dark">License types and activities:</h3>
                          <h5 className="text-dark"> <br />
                            A Mainland company formation offers more than 3000
                            business activities listed in the UAE. The business
                            activity, company structure and jurisdiction of
                            operation will determine the license and other
                            applicable requirements. 
                          </h5>
                        </div>

                        <div className=" ">
                          <div className="card border-muted mb-3 whitebackground"
                          >
                          
                            <div className="card-body text-white" >
                              <h3 className="card-title text-dark">Industrial License</h3>
                              <h5 className="text-dark">
                                An Industrial license is required in the UAE for
                                manufacturing or other types of industrial
                                activities such as:
                              </h5>

                              <ul className="list-group mt-3 item-1 whitebackground" >
                                <li className="list-group-item whitebackground text-dark">
                                  Garments, uniforms manufacturing
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Meat, dairy products manufacturing
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Animal & birds feed manufacturing, fishing net
                                  making
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Pastry & sweets manufacturing, mineral water
                                  bottling
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Fabrics & textiles embroidery, carpets
                                  manufacturings
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="card border-muted mb-3 text-dark whitebackground">
                            
                            <div className="card-body text-white">
                              <h3 className="card-title text-dark">Professional License</h3>
                              <h5 className="text-dark">
                                A Professional License is required in the UAE for
                                individuals or business groups that deliver
                                expertise as a service to the public such as:
                              </h5>

                              <ul className="list-group mt-3 item-1 whitebackground">
                                <li className="list-group-item whitebackground text-dark ">
                                  Computer, IT infrastructure consultancies
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Insurance, tax, legal consultancies 
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Marketing consultancies, public relations
                                  management
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Auditing & accounting
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Waste management & recycling consultancy
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="card border-muted mb-3 text-dark whitebackground">
                            
                            <div className="card-body text-white ">
                              <h3 className="card-title text-dark">Commercial License</h3>
                              <h5 className="text-dark">
                                A Commercial License is required in the UAE for
                                businesses involved in trading and supplying of
                                goods such as:
                              </h5>

                              <ul className="list-group mt-3 item-1 whitebackground">
                                <li className="list-group-item whitebackground text-dark">
                                  Mobile phones & accessories trading
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Building material, cleaning and safety equipment
                                  trading
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Oil & gas, chemicals trading
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Automobiles, spare parts trading
                                </li>
                                <li className="list-group-item whitebackground text-dark">
                                  Gold & precious metals trading
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>
              </Tab.Pane>
              {/* <Tab.Pane eventKey="third" className=" fadeInUp animated">
          <section className="pt-5 pb-5" style={{background:"#282828"}}>
                <div className="row align-items-center auto-container">
                  <div className="col-lg-6">
                    <div className="image">
                      <img
                        src={require("../../assets/images/resource/image-18.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content pl-lg-4">
                      <div className="sec-title">
                        <div className="sub-title">Go Pro</div>
                        <h2 className="text-white">
                          Hassle-Free <br /> Business Setup
                        </h2>
                      </div>
                      <div className="text">
                        Establishing a business in Dubai is an exciting but
                        tedious prospect. At BLZ, we aim to eliminate the
                        hassles of setting up a company as you embark on your
                        entrepreneurial journey in the UAE. Company formation is
                        an intricate process, comprising incorporation which
                        involves registering your company as a legal entity
                        separate from you. In Dubai, the Government has certain
                        laws and regulations in place to evaluate company
                        formations and incorporations. Our team of highly
                        experienced and knowledgeable professionals are
                        committed to help you streamline the processes of
                        company formation and business setups, in addition to
                        offering you virtual services to support the growth and
                        establishment of your business.
                      </div>
                    </div>
                  </div>
                </div>
                </section>
                <section className="pt-5 pb-5 mb-5" style={{background:"#000000"}}>
                <div
                  className="auto-container ">
                    <div className="sec-title">
                        <div className="sub-title">Services</div>
                        <h2 className="text-white text-center">
                        Key Services
                        </h2>
                      </div>
                  <h2 className="text-center"></h2>

                  <div className="row align-items-center mt-lg-5 col-lg-12 justify-content-between">
                    <div
                      className="card "
                      style={{ maxWidth: " 22rem", height: "32rem" }}
                    >
                      <img
                        className="card-img-top"
                        style={{ height: "12rem", objectFit: "contain" }}
                        src={require("./../../assets/images/background/image-8.jpg")}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h3 className="card-title">License</h3>
                        <p className="card-text">
                          At BLZ, we help you streamline the process of PRO
                          documentation. Our competent team of experts can
                          assist you in understanding the laws, Arabic
                          translations, and document filings
                        </p>
                        <Link
                          to={"/ProServices/license"}
                          className="btn btn-primary"
                        >
                          More Details
                        </Link>
                      </div>
                    </div>

                    <div
                      className="card"
                      style={{ maxWidth: " 22rem", height: "32rem" }}
                    >
                      <img
                        className="card-img-top"
                        style={{ height: "12rem", objectFit: "contain" }}
                        src={services.visa}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h3 className="card-title">Visa</h3>
                        <p className="card-text">
                          We’re here to make the process of obtaining work visas
                          for you and for your employees easier. BLZ offers PRO
                          services to ensure your company complies with the UAE
                          Government regulations and employment laws.
                        </p>
                        <Link to={"/ProServices/visa"} className="btn btn-primary">
                          More Details
                        </Link>
                      </div>
                    </div>

                    <div
                      className="card"
                      style={{ maxWidth: " 22rem", height: "32rem" }}
                    >
                      <img
                        className="card-img-top"
                        style={{ height: "12rem", objectFit: "contain" }}
                        src={services.finance}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h3 className="card-title">Finance & Banking</h3>
                        <p className="card-text">
                          Let our in-house experts make business bank account
                          opening easy and convenient for you.
                        </p>
                        <Link
                          to={"/ProServices/BankAccount"}
                          className="btn btn-primary"
                        >
                          More Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                </section>
              </Tab.Pane> */}
             
            </Tab.Content>
          </Tab.Container>
        
<section className="pt-5 mt-0 graybackground">
      <Brand1 />
      </section>
      <Footer />
    </>
  );
};
export default Services2;
