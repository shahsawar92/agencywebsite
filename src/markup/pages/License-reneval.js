import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
const aboutbg = require("./../../assets/images/background/image-11.jpg");

const License = () => {
  useEffect (() => {
    document.title = "License | BLZ";
 }, []);
  return (
    <>
      <Header />

      {/* Page Banner Section */}
      <section className="page-banner">
        <div
          className="page-banner-bg"
          style={{ backgroundImage: "url(" + aboutbg + ")" }}
        ></div>
        <div className="bottom-rotten-curve alternate"></div>

        <div className="auto-container">
          <h1>Trade License Renewal</h1>
          <h3>
            We make sure your license renewal always passes by without a hitch.
          </h3>
        </div>
      </section>

      {/* Sidebar Page Container */}
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12">
              {/* News Block Two */}
              <div className="news-block-two blog-single-post">
                <div className="inner-box">
                  <div className="lower-content">
                    <ul className="post-meta"></ul>
                    <h2>Trade Licenses in The UAE.</h2>
                    <div className="text-dark">
                      <p>
                        Acquiring a trade license is essential when launching a
                        business in the UAE. There are a number of types of
                        licenses to apply for, depending on the type of business
                        being established. The UAE has a thriving business
                        landscape that encourages investors and entrepreneurs to
                        pursue operations in the country.
                      </p>
                    </div>
                    <div className="image">
                    <img src={require("../../assets/images/blogImages/blog2.jpg")} alt="" />
                    </div>
                    <div className="news-block-five col-md-12">
                      <div className="inner-box">
                        <div className="lower-content">
                          <h2>Types of Licenses</h2>
                          <h4>1: Professional Services License</h4>
                          <h4>1: Industrial License</h4>
                          <h4>1: Commercial License</h4>
                        </div>
                      </div>
                    </div>

                    <section className="our-blog p-0 m-0 bg-silver">
                      <div className="container work-process  pb-5 pt-5">
                        <div className="title mb-5 text-center">
                          <h3>
                            Our{" "}
                            <span className="site-color">
                              Application Process And How We Help
                            </span>
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
                                  <h5>Business Outline</h5>
                                  <p>
                                    <small>
                                      In acquiring your trade license, it’s
                                      important to outline your business
                                      activities. Our highly qualified team is
                                      familiar with such permitted activities
                                      and can guide you to those that best align
                                      with your business{" "}
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
                                  <h5>Company Name</h5>
                                  <p>
                                    <small>
                                      There are regulations even in choosing
                                      your company name and we’re happy to make
                                      sure you’re on the right track.{" "}
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
                                  <h5>Submit Application</h5>
                                  <p>
                                    <small>
                                      Our job is to manage your application with
                                      all the required documentation, from its
                                      submission to the proper department to
                                      handling the fees you’ll have to pay.
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
                                  <h5>Trade License</h5>
                                  <p>
                                    <small>
                                      Trade Licenses are valid for 1 year can be
                                      renewed yearly. We’ll make sure your
                                      application is submitted promtly to avoid
                                      any issues for your business operations.
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

                    <div className="related-post">
                      <div className="row">
                        {/* single block */}

                        <div className="news-block-five col-md-6">
                          <div className="inner-box">
                            <div className="image">
                              <Link to={""}>
                              <img src={require("../../assets/images/blogImages/blog9.jpg")} alt="" />
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
                                With multiple types of trade licenses to choose
                                from, myOffice is able to apply for whichever
                                one your company needs and streamlines the
                                process for you.
                                <br /> <br />
                                With the complexity of licensing-related
                                requirements and regulations, our experienced
                                team is here to simplify the process and make
                                sure you can get your license and the benefits
                                that come with it in the easiest way possible.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default License;
