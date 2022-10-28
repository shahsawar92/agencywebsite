import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { offers } from '../element/service-filter1';

const aboutbg = require('./../../assets/images/background/image-11.jpg');


const SingleOffer = ()=> {
    const [offer, setoffer] = useState({});

    
        
    const {slug} = useParams();   
     
        useEffect(() => {
            for (let index = 0; index < offers.length; index++) {
                if(Number(offers[index].id)===Number(slug)){
                  console.log("from use effect");
                    setoffer(offers[index])
                }
        }
        

        }, [slug])
        console.log("slug here dynamic: ", offer);


        return (
            <>
                <Header/>

         
                {/* <!-- Page Banner Section --> */}
                <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Services Details</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Services Details</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}


                {/* <!-- Sidebar Page Container --> */}
                <div className="sidebar-page-container" style={{background:"black", color:"white"}}>
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="services-details ">
                                    <div className="image-box"><img  className="w-100" src={offer?.imgUrl} alt=""/></div>
                                    <div className="content col">
                                      <div className="row">
                                        <div className="sec-title col-lg-9">
                                            <div className="sub-title" >{offer?.name}</div>
                                            <h2 >{offer?.title}</h2>

                                            <h3>License Issued from: {offer?.LicenseIssuedfrom}</h3>
                                        </div>
                                        <div className="sec-title col-lg-3 mt-4 float-right">
                                          <div className="row">
                                            <h3 >{offer?.Price}</h3>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="text-dark">{offer?.content}</div>
                                        <div className='row'>
                                            <ul className='col-lg-6 style-ul list-group'> 
                                            <li className='heading-li'>Inclusions</li>
                                            {offer?.Inclusions?.map((eachinc,key)=>(
                                            
                                            <li className='list-group-item'>
                                            <div className='text-css' key={key}>{eachinc}</div> 
                                            </li>
                                             
                                    ))}
                                            </ul>
                                           
                                            <ul className="col-lg-6 style-ul">
                                                {console.log(offer?.Deliverables)}
                                              {offer?.Deliverables && <li className='heading-li'>Deliverables
</li> }  
                                            {offer?.Deliverables?.map((each,key)=>(
                                            
                                            <li className='list-group-item'>
                                            <div key={key} className=" text-css">{each}</div> 
                                            </li>
                                             
                                    ))}

                                            </ul>
                                        </div>

                                        <div className='row'>
                                            <ul className='col-lg-6 style-ul list-group'> 
                                            <li className='heading-li'>What can you do?</li>
                                            {offer?.whatYouDo?.map((each,key)=>(
                                            
                                            <li className='list-group-item'>
                                            <div className='text-css' key={key}>{each}</div> 
                                            </li>
                                             
                                    ))}
                                            </ul>
                                           
                                            <ul className='col-lg-6 style-ul list-group'> 
                                            {offer?.Notes && <li className='heading-li'>Notes</li> }
                                            {offer?.Notes?.map((each,key)=>(
                                            
                                            <li className='list-group-item'>
                                            <div className='text-css' key={key}>{each}</div> 
                                            </li>
                                             
                                    ))}
                                            </ul>
                                        </div>      


                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <Footer/>
            </>
        )
    
}
export default SingleOffer;