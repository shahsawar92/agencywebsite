import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { offers_img } from "./../../assets/images/offers";

const gallerybg = require('./../../assets/images/background/image-14.jpg');

export const offers = [
    {
        id: 1,
        name: "freezone",
        freezone: true,
        imgUrl: offers_img.offer1,
        title:"Ecommerce Package",
        Price:"AED 5,750",
        issueTime:"License will be issued in 3 to 5 working days",
        LicenseIssuedfrom:"DSO - IFZA",
        Inclusions:["Physical presence not required","License issued from Dubai IFZA Free zone", "License will be issued in 3 to 5 working days."],
        Deliverables:["Business License Memorandum of Association."," Share Certificate. ","Certificate of Formation."," Lease Agreement."],
        whatYouDo:["Can do 3 activities under the same group Can do trading of any product (import/export).", "Can import to UAE & export to other country. ","Can do business outside UAE. ","Can sell goods inside UAE through local distributors"],
        Notes: ["License renewal – AED 12,500","This package does not include any residence visa.","However, you can get up to 6 visas by paying additional fees for each quota approved.","Commercial & Service activities can be combined under the same license by paying the related cost involved."]
    },
    {
        id: 2,
        name: "freezone",
        freezone: true,
        imgUrl: offers_img.offer2,
        title:"General Trading Package",
        Price:"AED 7,745",
        issueTime:"License will be issued in 3 to 5 working days.",
        LicenseIssuedfrom:"SHAMS",
        Inclusions:["Physical presence not required","License issued from Sharjah Media City Free Zone (SHAMS)", "License will be issued in 3 to 5 working days."],
        Deliverables:["BGeneral Trading License along with 2 additional activities. "," Share Certificate or Memorandum of Association. ","Certificate of Formation."],
        whatYouDo:["Can do trading of any product (import/export).", "Can import to UAE & export to other country. ","Can do business outside UAE.","Can sell goods inside UAE through local distributors.", "Can add service related activities."],
        Notes: ["However, if you wish you can upgrade the package and get up to 6 visas by paying additional fees for desk facility and each quota approved"]
    },
    {
        id: 3,
        name: "freezone",
        img:offers_img.offer3,
        freezone: true,
        imgUrl:offers_img.offer3 ,
        title:"Freelancer Package",
        Price:"AED 15,520",
        issueTime:"License will be issued in 3 to 5 working days.",
        LicenseIssuedfrom:"SHAMS",
        Inclusions:["Physical presence not required.","License issued from Sharjah Media City Free Zone (SHAMS)", "License will be issued in 3 to 5 working days."],
        Deliverables:["Freelance License. "," 1 Investor visa for 3 years (Medical, Emirates ID & Status change not included). ","Share Certificate or Memorandum of Association.","Certificate of Formation.","Occupancy Agreement for the share desk facility"],
        whatYouDo:["Advertising","Digital Marketing","Events Organizing","Computer Programming & Consultancy,","Media Productions","Photography","Web Portals","Printing","Market Research","Graphic Design","Fashion Design","Interior Design","Publishing","Translation Services"],
        Notes: ["However, if you wish you can upgrade the package and get up to 6 visas by paying additional fees for desk facility and each quota approved"]
    },
    {
        id: 4,
        name: "IFZA",
        img:offers_img.offer4,
        IFZA: true,
        imgUrl: offers_img.offer4,
        title:"Dubai Trading License",
        Price:"AED 11,900",
        issueTime:"License will be issued in 3 to 5 working days.",
        LicenseIssuedfrom:"DSO - IFZA",
        Inclusions:["Physical presence not required","License issued from Dubai IFZA Free zone.", "License will be issued in 3 to 5 working days."],
        Deliverables:["Business License "," Memorandum of Association. ","Share Certificate.","Certificate of Formation.","Lease Agreement."],
        whatYouDo:["Can do 3 activities under the same group", "Can do trading of any product (import/export). ","Can import to UAE & export to other country.","Can do business outside UAE.","Can sell goods inside UAE through local distributors"],
        Notes: ["License renewal – AED 12,500", "This package does not include any residence visa. ","However, you can get up to 6 visas by paying additional fees for each quota approved.","Commercial & Service activities can be combined under the same license by paying the related cost involved."]
    },
    {
        id: 5,
        name: "Mainland",
        img:offers_img.offer5,
        Mainland: true,
        imgUrl:offers_img.offer5,
        title:"Convert Existing License Without Sponsor",
        Price:"AED 3,000",
        issueTime:"License will be issued in 3 to 5 working days.",
        LicenseIssuedfrom:"SHAMS",
        Inclusions:["Physical presence not required","Initial Approval from DED", "Assistance in Notarization of Share transfer Agreement & Amendment to MOA","License will be issued in 3 to 5 working days","Fee payable to DED & expenses towards notarization shall be additional"],
        Deliverables:["Business License."," Notarised Amendment to Memorandum of Association. ","Notarised Share Transfer Agreement"],
    
    },
    {
        id: 6,
        name: "MainLand",
        img:offers_img.offer6,
        Mainland: true,
        imgUrl:offers_img.offer6,
        title:"Professional license / Instant License",
        Price:"AED 12,500",
        content:"A Professional Service License is granted to professionals who offer professional services in the United Arab Emirates, such as an architect offering architecture services, a product design expert or an interior designer offering his/her services, a web designer or UI/UX designer offering his/her professional services, and so on. Sometimes, it may be possible that a group of professionals want to offer their services jointly, such as two attorneys wanting to open a law firm together. In such a case, the company would be known as a civil corporation.",
        Inclusions:["Trade License.","Local Agent Agreement.", "MOA"],
        whatYouDo:["Accountants, Auditors and Financial Advisors", "Accounting and Auditing Companies ","Advertising professionals and Entertainment Artists","Architectural Consultants", "Beauty Salons"],
       
    },
    // {
    //     id: 7,
    //     name: "girl",
    //     family: true,
    //     imgUrl: require('../../assets/images/gallery/gallery-11.jpg'),
    //     title:"Professional license with Visa",
    //     Price:"AED 17,500",
    //     content:"A Professional Service License is granted to professionals who offer professional services in the United Arab Emirates, such as an architect offering architecture services, a product design expert or an interior designer offering his/her services, a web designer or UI/UX designer offering his/her professional services, and so on. Sometimes, it may be possible that a group of professionals want to offer their services jointly, such as two attorneys wanting to open a law firm together. In such a case, the company would be known as a civil corporation.",
    //     issueTime:"License will be issued in 3 to 5 working days.",
    //     Inclusions:["Trade License.","Local Agent Agreement", "MOA","Medical, Emirates ID, Change Status","Residency Visa for Investor"],
    
    //     whatYouDo:["Accountants, Auditors and Financial Advisors.", "Accounting and Auditing Companies","Advertising professionals and Entertainment Artists","Architectural Consultants", "Beauty Salons","Business Consultants","Carpentry and Artisan Activities"],
        
    // },
    // {
    //     id: 8,
    //     name: "man",
    //     family: true,
    //     imgUrl: require('../../assets/images/gallery/gallery-13.jpg'),
    //     title:"General Trading Package",
    //     Price:"AED 7,745*",
    //     issueTime:"License will be issued in 3 to 5 working days.",
    //     LicenseIssuedfrom:"SHAMS",
    //     Inclusions:["Physical presence not required","License issued from Sharjah Media City Free Zone (SHAMS)", "License will be issued in 3 to 5 working days."],
    //     Deliverables:["BGeneral Trading License along with 2 additional activities. "," Share Certificate or Memorandum of Association. ","Certificate of Formation."],
    //     whatYouDo:["Can do trading of any product (import/export).", "Can import to UAE & export to other country. ","Can do business outside UAE.","Can sell goods inside UAE through local distributors.", "Can add service related activities."],
    //     Notes: ["However, if you wish you can upgrade the package and get up to 6 visas by paying additional fees for desk facility and each quota approved"]
    // },
    // {
    //     id: 9,
    //     name: "woman",
    //     family: true,
    //     imgUrl: require('../../assets/images/gallery/gallery-14.jpg'),
    //     title:"General Trading Package",
    //     Price:"AED 7,745*",
    //     issueTime:"License will be issued in 3 to 5 working days.",
    //     LicenseIssuedfrom:"SHAMS",
    //     Inclusions:["Physical presence not required","License issued from Sharjah Media City Free Zone (SHAMS)", "License will be issued in 3 to 5 working days."],
    //     Deliverables:["BGeneral Trading License along with 2 additional activities. "," Share Certificate or Memorandum of Association. ","Certificate of Formation."],
    //     whatYouDo:["Can do trading of any product (import/export).", "Can import to UAE & export to other country. ","Can do business outside UAE.","Can sell goods inside UAE through local distributors.", "Can add service related activities."],
    //     Notes: ["However, if you wish you can upgrade the package and get up to 6 visas by paying additional fees for desk facility and each quota approved"]
    // },
    // {
    //     id: 10,
    //     name: "girl",
    //     family: true,
    //     imgUrl: require('../../assets/images/gallery/gallery-17.jpg'),
    //     title:"General Trading Package",
    //     Price:"AED 7,745*",
    //     issueTime:"License will be issued in 3 to 5 working days.",
    //     LicenseIssuedfrom:"SHAMS",
    //     Inclusions:["Physical presence not required","License issued from Sharjah Media City Free Zone (SHAMS)", "License will be issued in 3 to 5 working days."],
    //     Deliverables:["BGeneral Trading License along with 2 additional activities. "," Share Certificate or Memorandum of Association. ","Certificate of Formation."],
    //     whatYouDo:["Can do trading of any product (import/export).", "Can import to UAE & export to other country. ","Can do business outside UAE.","Can sell goods inside UAE through local distributors.", "Can add service related activities."],
    //     Notes: ["However, if you wish you can upgrade the package and get up to 6 visas by paying additional fees for desk facility and each quota approved"]
    // },
    // {
    //     id: 11,
    //     name: "man",
    //     business: true,
    //     imgUrl: require('../../assets/images/gallery/gallery-11.jpg')
    // },
    // {
    //     id: 12,
    //     name: "woman",
    //     business: true,
    //     imgUrl: require('../../assets/images/gallery/gallery-15.jpg')
    // }
];

const FILTER_DEFS = {
    Freezone: image => image.freezone,
    IFZA: image => image.IFZA,
    Mainland: image => image.Mainland,
    // Pro: image => image.business,
    NONE: image => image
};

const ServiceFilter1 = props => {
    const [state, setState] = useState({
        list: offers,
        filterKey: "NONE"
    });

    const { list, filterKey } = state;
    const filteredList = list.filter(FILTER_DEFS[filterKey]);
    return (
        <>
            <section class="gallery-section">
                <div class="sec-bg" style={{ backgroundImage: "url(" + gallerybg + ")" }}></div>
                <div class="sortable-masonry">

                    <div class="auto-container">
                        <div class="sec-title light text-center mb-5 " style={{marginTop:"150px"}} >
                            <h2 className="mt-5">See What Kind Of <br />Work We Have Done</h2>
                        </div>
                        {/* <!--Filter--> */}   
                        <div class="filters text-center light">
                            <ul class="filter-tabs filter-btns">
                                <li class={`${state.filterKey==="NONE"? "active":""} filter`} onClick={() => setState({ ...state, filterKey: "NONE" })}><span>All</span></li>
                                <li class={`${state.filterKey==="Freezone"? "active":""} filter`} onClick={() => setState({ ...state, filterKey: "Freezone" })}><span>Freezone Offers</span></li>
                                <li class={`${state.filterKey==="IFZA"? "active":""} filter`} onClick={() => setState({ ...state, filterKey: "IFZA" })}><span>IFZA </span></li>
                                <li class={`${state.filterKey==="Mainland"? "active":""} filter`} onClick={() => setState({ ...state, filterKey: "Mainland" })}><span>Mainland Offers</span></li>
                                {/* <li class="filter" onClick={() => setState({ ...state, filterKey: "Pro" })}><span>Pro Services Offers</span></li> */}
                            </ul>
                        </div>
                    </div>
                    <div class="auto-container">
                        <div class="items-container row">
                            {/* <!-- Gallery Block One --> */}
                            {filteredList.map(image => (
                                <div class="col-lg-4 col-md-6 gallery-block-one" key={image.id}>
                                    <div class="inner-box">
                                        <div class="image">
                                            <img src={image.imgUrl} alt="" />
                                        </div>
                                        <div class="caption-title">
                                            <h5>{image.name}</h5>
                                            <h3><Link to={`/singleoffer/${image.id}`}>{image.title}</Link></h3>
                                            <div class="view-project"><Link data-fancybox="example gallery" to="assets/images/gallery/gallery-10.jpg" class="zoom-btn"><span>+</span></Link></div>
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

export default ServiceFilter1;
