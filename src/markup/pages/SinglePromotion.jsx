import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { useEffect } from "react";
import { offers } from "./promotions";

const aboutbg = require("./../../assets/images/background/image-11.jpg");

const SinglePromotion = () => {
  const [offer, setoffer] = useState({});

  const { slug } = useParams();

  useEffect(() => {
    for (let index = 0; index < offers.length; index++) {
      if (Number(offers[index].id) === Number(slug)) {
        console.log("from use effect");
        setoffer(offers[index]);
      }
    }
  }, [slug]);
  console.log("slug here dynamic: ", offer);

  return (
    <>
      <Header />

      {/* <!-- Page Banner Section --> */}
      <section className="page-banner">
        <div
          className="page-banner-bg"
          style={{ backgroundImage: "url(" + aboutbg + ")" }}
        ></div>
        <div className="bottom-rotten-curve alternate"></div>

        <div className="auto-container">
          <h1> Promotion Details</h1>
          <ul className="bread-crumb clearfix">
            <li>
              <Link to={"/#"}>Home</Link>
            </li>
            <li className="active">Promotions</li>
          </ul>
        </div>
      </section>
      {/* <!--End Banner Section --> */}

      {/* <!-- Sidebar Page Container --> */}
      <div
        className="sidebar-page-container"
        style={{ background: "black", color: "white" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="services-details ">
                <div className="image-box">
                  <img className="w-100" src={offer?.imgUrl} alt="" />
                </div>
                <div className="content col">
                  <div className="row">
                    <div className="sec-title col-lg-12">
                      <div className="sub-title">{offer?.name}</div>
                      <h2>{offer?.title}</h2>
                    </div>
                   
                  </div>


                  {offer?.content && <div className="text">{offer?.content}</div> }
                  <br />
                  {offer?.content2 && <div className="text">{offer?.content2}</div> }
                  <br />
                  {offer?.content3 && <div className="text">{offer?.content3}</div> }

                  
                  {offer?.whatincluded &&   <div className="row">
                <ul className="col-lg-6 style-ul list-group">
                      <li className="heading-li">What is Included in this Offer: </li>
                      {offer?.whatincluded?.map((eachinc, key) => (
                        <li className="list-group-item">
                          <div className="text-css" key={key}>
                            {eachinc}
                          </div>
                        </li>
                      ))}
                    </ul> 

                    
                  </div>}

                  
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
export default SinglePromotion;
