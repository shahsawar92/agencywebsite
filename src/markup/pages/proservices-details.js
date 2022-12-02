import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import 'react-circular-progressbar/dist/styles.css';
import { listOfFreeZones } from '../../data/listofFreeZones';
import { useState } from 'react';
import { useEffect } from 'react';

const aboutbg = require('./../../assets/images/background/image-11.jpg');


const ProServicesDetails = ()=> {
    const [singlezone, setsinglezone] = useState(listOfFreeZones[0]);

    
        
    const state = useParams();   
     console.log(state);
        useEffect(() => {
            for (let index = 0; index < listOfFreeZones.length; index++) {
                if(listOfFreeZones[index].slug===state.slug){
                    setsinglezone(listOfFreeZones[index])
                }
        }
        

        }, [state])
        

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
                <div className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="services-details pl-lg-5">
                                    <div className="image-box"><img src={require('../../assets/images/resource/service-1.jpg')} alt=""/></div>
                                    <div className="content">
                                        <div className="sec-title">
                                            <div className="sub-title text-dark">Financial Planning</div>
                                            <h2>{singlezone.title}</h2>
                                        </div>
                                        <div className="text-dark">{singlezone.content}</div>
                                        <div className='row'>
                                            <ul className='col-lg-6 style-ul list-group'> 
                                            <li className='heading-li'>Benifits</li>
                                            {singlezone.binifits.map((benifit,key)=>(
                                            
                                            <li className='list-group-item'>
                                            <div className='text-css' key={key}>{benifit}</div> 
                                            </li>
                                             
                                    ))}
                                            </ul>
                                           
                                            <ul className="col-lg-6 style-ul">
                                                {console.log(singlezone.BusinessActivities)}
                                              {singlezone.BusinessActivities && <li className='heading-li'>Business Activities</li> }  
                                            {singlezone.BusinessActivities?.map((benifit,key)=>(
                                            
                                            <li className='list-group-item'>
                                            <div key={key} className="col-lg-6 text-css">{benifit}</div> 
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
export default ProServicesDetails;