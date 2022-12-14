import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
const aboutbg = require("./../../assets/images/background/image-11.jpg");

const BankAccount = () => {
  useEffect (() => {
    document.title = "Bank Account | BLZ";
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
          <h1>Bank Account Opening</h1>
          <h3>
            Setting up a bank account for your business? We can take care of
            that too!
          </h3>
        </div>
      </section>
    
                    <ul className="post-meta"></ul>
                      <section className="pt-5 pb-5" style={{backgroundColor:"#000000" , color:"#d1d1d1"}}>
                        <div className="auto-container">
                    <h2>How We Make It Easier For You</h2>
                    <div className="text-#d1d1d1">
                      <p>
                        We can help you choose the bank that fits your needs by
                        considering a few factors: The client’s nationality and
                        citizenship, types of transactions involved, investment
                        requirements, and soft currency requirements, among
                        others. <br />
                        There is a long list of requirements for opening
                        corporate bank accounts in the UAE, and no two Emirati
                        banks have the same list. At minimum, you’ll be required
                        to furnish the following documents:
                      </p>
                      </div>
                      </div>
                      </section>
                      <section className="pt-5 pb-5" style={{backgroundColor:"#282828" , color:"#d1d1d1"}} >
                        <div className="text-#d1d1d1 auto-container">
                          <ol className="list-group  list-style-flush " >
                            <li className="list-group-item " style={{backgroundColor:"#282828" , color:"#d1d1d1"}}>
                              Corporate Structure and Ownership
                            </li>
                            <li className="list-group-item" style={{backgroundColor:"#282828" , color:"#d1d1d1"}}>Source of Funds</li>
                            <li className="list-group-item" style={{backgroundColor:"#282828" , color:"#d1d1d1"}}>
                              Trade License and Incorporation Details
                            </li>
                            <li className="list-group-item" style={{backgroundColor:"#282828" , color:"#d1d1d1"}}>
                              Company Memorandum and Articles and Business
                              Activities
                            </li>
                            <li className="list-group-item" style={{backgroundColor:"#282828" , color:"#d1d1d1"}}>
                              Leadership Experience in Related Activities
                            </li>
                          </ol>
                          </div>
                      </section>
                    {/* </div> */}
                    <section className="pt-5 pb-5" style={{backgroundColor:"#282828" , color:"#d1d1d1"}}>
                      <div className="auto-container" >
                    <div className="image contain">
                    <img style={{height:"auto", width:"100%"}} src={require("../../assets/images/blogImages/bank.jpg")} alt="" />
                    </div>
                    </div>
                    </section>
                    <section className="pt-5 pb-5" style={{backgroundColor:"#000000" , color:"#d1d1d1"}}>
                      <div className="auto-container">
                    <div className="news-block-five col-md-12">
                      <div className="inner-box">
                        <div className="lower-content">
                          <h4>
                            There are strict procedures in place when private
                            individuals and businesses open bank accounts in the
                            UAE. There is a considerable amount of paperwork
                            involved and requirements differ from bank to bank
                            and on the type of account being opened.
                            <br /> <br /> Consulting qualified professionals can
                            save you valuable time because of the differing
                            specifications each bank may have. Once banking
                            requirements are met, most UAE banks will permit
                            mainland companies to open accounts relatively
                            quickly.
                          </h4>
                        </div>
                      </div>
                    </div>
                    </div> 
                    </section >
                    <section className="pt-5 pb-5" style={{backgroundColor:"#282828" , color:"#d1d1d1"}}>
                      <div className="auto-container">
                    <div className="related-post">
                      <div className="row">
                        {/* single block */}

                        <div className="news-block-five col-md-6">
                          <div className="inner-box">
                            <div className="image">
                              <Link to={""}>
                              <img src={require("../../assets/images/blogImages/blog3.jpg")} alt="" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="news-block-five col-md-6">
                          <div className="inner-box">
                            <div className="lower-content">
                              <h2>Our Best Qualities</h2>
                              <h4>Security and Efficiency</h4>
                              <div className="text-#d1d1d1 pb-5">
                                {" "}
                                <br />
                                Backed by a team of highly-qualified and
                                experienced specialists, we can help make sure
                                opening your corporate bank account is simple
                                and hassle-free. <br />
                                <br />
                                Our competent team can assist you in
                                understanding the needs and requirements of
                                different banks and which banks can best cater
                                to the needs of you and your company.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 
                    </div>  
                    </section>                
                  {/* </div>
                </div> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}

      <Footer />
    </>
  );
};
export default BankAccount;
