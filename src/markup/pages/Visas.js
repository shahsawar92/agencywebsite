import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
const aboutbg = require("./../../assets/images/background/image-11.jpg");

const Visa = () => {
  useEffect (() => {
    document.title = "Visa | BLZ";
 }, []);
  return (
    <>
   
      <Header />

      {/* Page Banner Section */}
      {/* <section className="pt-5 pb-5 page-banner">
        <div
          className="page-banner-bg"
          style={{ backgroundImage: "url(" + aboutbg + ")" }}
        ></div>
        <div className="bottom-rotten-curve alternate"></div>

        <div className="auto-container">
          <h1>Dubai Work Visas & Permits</h1>
          <h3>Complete tedious visa processes with ease.</h3>
        </div>
      </section> */}

<section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Dubai Work Visas & Permits</h1>
                        <h3>Complete tedious visa processes with ease.</h3>

                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Visa</li>
                        </ul>
                    </div>

                </section>  

      {/* Sidebar Page Container */}
      
              {/* News Block Two */}
              {/* <div className="news-block-two blog-single-post">
                <div className="inner-box">
                  <div className="lower-content"> */}
                    <section className="pt-5 pb-5 text-dark whitebackground" >
                    <div className="auto-container">
                    <ul className="post-meta"></ul>
                    <h2>Immigration and Labor Services in Dubai and UAE</h2>
                    <div >
                      <p>
                      Visa is a requirement to stay in the country and it involves engaging with many government authorities (i.e) ministry of labour and immigration. <br /> <br />
                      Our PROs aid in processing all types of visas including but not limited to, employment visa, partner visa, visit visa, green and golden visa, without any hassle and with concierge services.
{" "}
                      </p>
                    </div>
                    </div>
                    </section>
                    <section className="pt-5 pb-5 whitebackground text-dark">
                    <div className="auto-container">
                      <img  style={{width:"100%"}} src={require("../../assets/images/blogImages/blog1.jpg")} alt="" />
                    </div>
                    </section>
                    <section className="pt-5 pb-5 our-blog p-0 m-0 graybackground " >
                      <div className="container work-process  pb-5 pt-5">
                        <div className="title mb-5 text-center">
                          <h3>
                            <span className="text-dark">The Visa Process</span>
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
                                  <h5>Entry Pemit</h5>
                                  <p>
                                    <small>
                                      The hiring company is responsible for
                                      obtaining work visas for non-UAE nationals
                                      they wish to employ. The application form
                                      is sent to the Ministry of Human Resources
                                      and Emiratisation, who will provide the
                                      entry permit
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
                                    <h2 className="m-0 p-0">02</h2>
                                  </div>
                                </div>
                                <div className="col-md-7">
                                  <h5>Medical Test</h5>
                                  <p>
                                    <small>
                                      The employee
                                      needs to be subjected to a medical test at
                                      a government-approved health center and
                                      accomplish other formalities to receive
                                      documents needed for the application, such
                                      as obtaining their ID from the Emirates ID
                                      Service center.
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
                                  <h5>Employment Visa</h5>
                                  <p>
                                    <small>
                                      After acquiring the necessary documents,
                                      the application can be submitted to the
                                      Ministry of Labor, who can then issue the
                                      employment visa after the application is
                                      reviewed.
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
                      </div>
                    </section>
                    <section className="pt-5 pb-5 whitebackground">
                      <div className="auto-container">
                    <div className="related-post " >
                      <div className="row">
                        {/* single block */}

                        <div className="news-block-five col-md-6">
                          <div className="inner-box">
                            <div className="image">
                              <Link to={""}>
                              <img src={require("../../assets/images/blogImages/blog4.jpg")} alt="" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="news-block-five col-md-6">
                          <div className="inner-box">
                            <div className="lower-content">
                              <h2>Benefits of BLZ</h2>
                              <h4>Security and Efficiency</h4>
                              <div className="text-dark">
                                {" "}
                                <br />
                                The dedicated PRO team of BLZ provides full time and timely backing which reduces the time taken for documents processing.

                                <br /> <br />
                                We manage all paperwork and clearing services required for Visa processing. Concierge services are provided for Medical & Emirates ID Appointments.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    {/* author details */}
                    </section>
                  {/* </div>
                </div>
              </div> */}
          

      <Footer />
    </>
  );
};
export default Visa;
