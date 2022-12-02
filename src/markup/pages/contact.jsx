import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import GoogleMaps from "simple-react-google-maps";
import { useEffect } from 'react';
import axios from 'axios';
import Model from '../layout/model';

const aboutbg = require('./../../assets/images/background/image-11.jpg');




const Contact =()=> {
    const [ButtonValue, setButtonValue] = useState("GET IN TOUCH");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect (() => {
        document.title = "Contact | BLZ";
     }, []);


     const [formData, setformData] = useState({
        name:"",
        email:'',
        phone:"",
        msg:""
      });
     const onNameChange=(e) =>{
        setformData({...formData, name: e.target.value})
      }

      const onEmailChange=(e) =>{
        setformData({...formData, email: e.target.value})
      }
      const onPhoneChange=(e) =>{
        setformData({...formData, phone: e.target.value})
      }

      const onMessageChange=(e) =>{
        setformData({...formData, msg: e.target.value})
      }
    
      const handleSubmit= (e)=> {
        e.preventDefault();
        if(formData.email=="" || formData.phone=="" || formData.name=="" || formData.msg=="" ){
          alert("Please fill the form Completely")
        } else{
        setButtonValue("Sending ...")
        axios({
          method: "GET",
          mode: 'no-cors',
          headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
        },
          url:`/project/index.php?name=${formData.name}&email=s${formData.email}&phone=${formData.phone}&message=${formData.msg}`,
        }).then((response)=>{
       
           setButtonValue("Sucessfull");
           setShow(true);
           setButtonValue("GET IN TOUCH");
           console.log("sucessfull operation, response: ", response);
           resetForm();
          
           
          
        })
      }
        }
const resetForm=()=>{
  setformData(
    {
      name:"",
      email:'',
      phone:"",
      msg:""
    }
  )
  setButtonValue("GET IN TOUCH");
}
useEffect(() => {
    var bd = document.getElementsByTagName('body')[0];
         bd.classList.remove("mobile-menu-visible");
 
   
 }, []);

        return (
            <>
        {show &&   <Model handleClose={handleClose} show={show} /> }
                <Header />
                {/* <!-- Page Banner Section --> */}
                <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Contact Us</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Contact</li>
                        </ul>
                    </div>

                </section>

                {/* <!-- Map Section --> */}
                {/* <!-- Map Section --> */}
                {/* <section className="map-section" style={{backgroundColor:"black"}}>
                  <div className="row">
                    <div className="map-column">
                        <GoogleMaps
                            apiKey={"AIzaSyBfO-GpDk242xCCq5YFCG2yy3kmq7ueS_8"}
                            style={{ height: "800px", width: "100%" }}
                            zoom={12}
                            center={{ lat: 25.07565997633205, lng: 55.139793013491044 }}
                            markers={{ lat: 25.075591952892545, lng: 55.139793013491044 }} //optional
                        />
                    </div>

                    
                    </div>
                </section> */}
            

                {/* <!-- Contact Section Two --> */}
                <section className="contact-section-two whitebackground" style={{paddingTop:"300px"}}>
                    <div className="auto-container">
                        <div className="contact-info-area">
                            <div className="contact-info">
                                <div className="row">
                                    <div className="info-column col-lg-4" >
                                        <div className="icon-box" style={{height:"23rem"}}>
                                            <div className="icon"><img src={require('../../assets/images/icons/image-1.png')} alt="" /></div>
                                            <h3>Email Address</h3>
                                            <ul>
                                            <li><a href="mailto:setup@blz.ae">  setup@blz.ae</a></li>
                                                {/* <li><Link to={'/mailto:info@webmail.com'}>jobs@exampleco.com</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="info-column col-lg-4">
                                        <div className="icon-box" style={{height:"23rem"}}>
                                            <div className="icon"><img src={require('../../assets/images/icons/image-2.png')} alt="" /></div>
                                            <h3>Phone Number</h3>
                                            <ul>
                                            <li ><a href="tel:+97144449444">+971 4 444 9444</a></li>
                                                {/* <li><Link to={'/tel:+908(097)56476576'}>+908(097) 564 765 76</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="info-column col-lg-4">
                                        <div className="icon-box" style={{height:"23rem"}}>
                                            <div className="icon"><img style={{height:"180px"}} src={require('../../assets/images/icons/image-3.png')} alt="" /></div>
                                            <h3>Office Address</h3>
                                            <ul>
                                                <li>Level 14, Boulevard Plaza Tower 1, Downtown, Dubai </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-area">
                            <div className="sec-title text-center">
                                <div className="sub-title text-dark" >Write Here</div>
                                <h2>Get In Touch</h2>
                            </div>
                            {/* <!-- Contact Form--> */}
                            <div className="contact-form">
                                <form method="post" action="javascript:void(0)" id="contact-form">
                                    <div className="row clearfix">                                    
                                        <div className="col-md-6 form-group">
                                            <label for="name">Enter your name</label>
                                            <input  onChange={(e)=>{onNameChange(e) }} type="text" name="username" id="name" placeholder="Enter name here" required=""/>
                                            
                                        </div>

                                        <div className="col-md-6 form-group">
                                            <label for="email">Enter your Phone</label>
                                            <input  onChange={(e)=>{onPhoneChange(e) }} type="text" name="phone" id="phone" placeholder="Enter phone here" required=""/>
                                           
                                        </div>
                                        
                                        <div className="col-md-6 form-group">
                                            <label for="email">Enter your email</label>
                                            <input  onChange={(e)=>{onEmailChange(e) }} type="email" name="email" id="email" placeholder="Enter email here" required=""/>
                                            
                                        </div>
                
                                        <div className="col-md-12 form-group">
                                            <label for="message">Enter your message</label>
                                            <textarea onChange={(e)=>{onMessageChange(e) }} name="message" id="message" placeholder="Enter message here"></textarea>
                                        </div>
                
                                        <div className="col-md-12 form-group">
                                            <button  onClick={(e)=>handleSubmit(e)} className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title button-myclass text-white bluebackground remove-redus">{ButtonValue}</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>






                <Footer />
            </>
        )
    
}
export default Contact;