import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { promotions } from "../../assets/images/promotions";

const gallerybg = require('./../../assets/images/background/image-14.jpg');

export const offers = [
    {
        id: 1,
        name: "We’ve got you covered! ",
        singleoffer: true,
        imgUrl: promotions.promotion1,
        title:"Free Zone Trade License Media and E-Commerce Licenses",
        Price:"AED 5,750 Only",
        content:"UAE’s largest Business Setup Consultancy, Creative Zone offers end-to-end solutions, right from setting up a business to help growing and sustaining them. Sharjah is home to one of the best media Free Zones in the UAE. It issues Free Zone business licenses to companies, freelancers, and entrepreneurs wishing to embark on their entrepreneurial journey.",
        subtitle:"Explore our new FREE VISA FOR LIFE offer with Standard Free Zone Visa Packages!",
        whatincluded: ["Standard Trade License and 1 Visa Package (3 Years Residency) for just AED 16,750 from Sharjah Media City Free Zone (Shams)","Standard package includes General Trading, Specific Trading, Services, Consulting, and more","Trade License with one visa allocation / quota","Immigration card service and cost","Free visa can be utilized for either investor or employee","A one-time E-Channel Registration fee of AED 2,525 to be paid in addition to the above-mentioned price"],
    },
    {
      id: 2,
      name: "We’ve got you covered! ",
      otherOffers: true,
      imgUrl: promotions.promotion2,
      title:"Get your complimentary 15-minute VAT Consultation with CZ Tax & Accounting",
      content:"Creative Zone Tax & Accounting is an integral part of a much larger network of specialised business services, focused on providing professional end-to-end advice and support to business owners in the UAE.",
      content2:"Our parent company – Creative Zone established in 2010, is now recognised as Dubai’s largest and most trusted company formation specialist firm, boasting more than 44,000 successful company registrations to date. The vision of Creative Zone, is to go beyond the company formation process and provide dedicated support and practical advice for the lifetime of our client’s business. To this end, Creative Zone Tax & Accounting was launched.",
      
  },
  {
    id: 3,
    name: "We’ve got you covered! ",
    otherOffers: true,
    imgUrl: promotions.promotion3,
    title:"Refer a FRIEND to Creative Zone and get up to AED 3,500* cash reward",
    content:"Introducing our REFERRAL REWARDS PROGRAM—allowing you to enjoy cash rewards for referring your friends, family, and colleagues to Creative Zone.",
    content2:"More than 70% of our business comes directly from referrals. As a ‘thank you’ we are giving away a cash reward up to AED 3,500* for every successful business setup referral to Creative Zone.",
    content3:"If you know anyone wanting to start their own business, please register yourself below and get cash prizes on every successful setup.",
},
    
    
];

const FILTER_DEFS = {
  singleoffer: image =>image.singleoffer,
    otherOffers: image => image.otherOffers,
    NONE: image => image
};

const Promotions = () => {
    const [state, setState] = useState({
        list: offers,
        filterKey: "NONE"
    });

    const { list, filterKey } = state;
    const filteredList = list.filter(FILTER_DEFS[filterKey]);
    return (
        <>
            <section className="gallery-section">
                <div className="sec-bg" style={{ backgroundImage: "url(" + gallerybg + ")" }}></div>
                <div className="sortable-masonry">
                    <div className="auto-container">
                        <div className="sec-title light text-center mb-5 " style={{marginTop:"150px"}} >
                            <h2 className="mt-5">See What Kind Of <br />Work We Have Done</h2>
                        </div>
                        {/* <!--Filter--> */}   
                        <div className="filters text-center light">
                            <ul className="filter-tabs filter-btns">
                                <li className={`${state.filterKey==="NONE"? "active":""} filter`} onClick={() => setState({ ...state, filterKey: "NONE" })}><span>All</span></li>
                                <li className={`${state.filterKey==="singleoffer"? "active":""} filter`} onClick={() => setState({ ...state, filterKey: "singleoffer" })}><span>License Offers</span></li>
                                {/* <li className={`${state.filterKey==="IFZA"? "active":""} filter`} onClick={() => setState({ ...state, filterKey: "IFZA" })}><span>IFZA </span></li> */}
                                <li className={`${state.filterKey==="otherOffers"? "active":""} filter`} onClick={() => setState({ ...state, filterKey: "otherOffers" })}><span>Other Offers</span></li>
                                {/* <li className="filter" onClick={() => setState({ ...state, filterKey: "Pro" })}><span>Pro Services Offers</span></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="auto-container">
                        <div className="items-container row">
                            {/* <!-- Gallery Block One --> */}
                            {filteredList.map(image => (
                                <div className="col-lg-4 col-md-6 gallery-block-one" key={image.id}>
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src={image.imgUrl} alt="" />
                                        </div>
                                        <div className="caption-title">
                                            <h5>{image.name}</h5>
                                            <h3><Link to={`/singlePromotion/${image.id}`}>{image.title}</Link></h3>
                                            <div className="view-project"><Link data-fancybox="example gallery" to="assets/images/gallery/gallery-10.jpg" className="zoom-btn"><span>+</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Promotions;
