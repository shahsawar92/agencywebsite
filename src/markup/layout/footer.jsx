import axios from 'axios';
import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleMaps from "simple-react-google-maps";

// const markers={
//     [
//       {lat: 37.4224764, lng: -122.0842499},
//       {lat: 37.5224764, lng: -121.0842499},
//       {lat: 37.3224764, lng: -120.0842499}
//     ]
//   }

const Footer = ()=> {
    const [show, setShow] = useState(false);
    const [ButtonValue, setButtonValue] = useState("GET IN TOUCH");
  
    const handleClose = () => setShow(false);
    
  
        const [blogToDisplay, setblogToDisplay] = useState([])
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
    const markers={
       marker:[
          {},
          {}
        ]
      }
    const [buttonopen, setbuttonopen] = useState(false)
     const buttonFtn=()=>{
        setbuttonopen(!buttonopen);


     }
        return (
            <>
                <footer class="main-footer bluebackground">
                    <div class="auto-container">

                        <div class="widgets-section">
                            <div class="row clearfix">


                                <div class="column col-lg-4">
                                    <div class="footer-widget logo-widget">
                                        <div class="widget-content">
                                            <div class="footer-logo">
                                                <Link to="/#">
                                                    <img class="" src={require('../../assets/images/Images/logo/BLZ-logo.png')} alt="" />
                                                    </Link>
                                            </div>
                                            <div className="contact-form">
                  <form
                    method="post"
                    action="javascript:void(0)"
                    id="contact-form"
                  >
                    <div className="row clearfix">
                      <div className="col-md-12  inp">
                        <input
                          onChange={(e)=>{onNameChange(e) }}
                          type="text"
                          name="username"
                          placeholder="Name"
                          required
                        />
                        
                      </div>

                      <div className="col-md-12 inp">
                        <input onChange={(e)=>{onEmailChange(e) }}
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                       
                      </div>

                      <div className="col-md-12 inp">
                        <input 
                        onChange={(e)=>{onPhoneChange(e) }}
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          required
                        />
                       
                      </div>

                      <div className="col-md-12 inp">
                        <textarea
                          onChange={(e)=>{onMessageChange(e) }}
                          name="message"
                          placeholder="Message"
                        ></textarea>
                        
                      </div>

                      <div className="col-md-12 form-group">
                        <button
                          onClick={(e)=>handleSubmit(e)}
                          className="theme-btn latest-btn btn-style-one"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="btn-title  bluebackground remove-redus" >{ButtonValue}</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                                            <ul class="social-links clearfix">
                                                {/* <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-vimeo-v"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div class="column col-lg-4 pl-5">
                                    <div class="footer-widget links-widget">
                                        <div class="widget-content">
                                            <h3 className='mb-3'>Links</h3>
                                            <div class="row">
                                                <div class="col-md-6 pl-4">
                                                    <ul>
                                                        <li><Link to={'/#'}>Home</Link></li>
                                                        <li><Link to={'/about'}>About</Link></li>
                                                        <li><Link to={'/contact'}>Contact</Link></li>
                                                        <li><Link>Blog</Link></li>
                                                        
                                                        {/* <li><Link to={'/#'}>Services</Link></li>
                                                        <li><Link to={'/#'}>Portfolio</Link></li>
                                                        <li><Link to={'/#'}>Pricing</Link></li> */}
                                                    </ul>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='footer-widget links-widget'>
                                    <div class="widget-content mt-3">
                                    <h3 className='mb-3'>Contact</h3>
                                    <address>
                                    <ul>
                                                        <li >Phone Number: <a href="tel:+97144449444">+971 4 444 9444</a></li>
                                                        <li>WhatsApp: <a href="https://wa.me/+971554151858"  target="_blank"> +971554151858</a></li>
                                                        <li>Email:<a href="mailto:setup@blz.ae">  setup@blz.ae</a></li>
                                                    </ul>
                                                    </address>
                                    </div>
                                    <div class="widget-content mt-2">
                                    <h3 className='mb-3'>Address</h3>
                                    <ul>
                                        <li>Address: Level 14, Boulevard Plaza Tower 1, Downtown, Dubai</li>
                                        <li>Address: Level 27, Marina Plaza, Dubai Marina, U.A.E.
</li>
                                    </ul>
                                    
                                    
                                    </div>
                                    </div> */}
                                </div>


                                <div class="column col-lg-4">
                                    <div class="footer-widget instagram-widget">
                                        <h3>Google Map</h3>
 
                                            <section class="map-section">
                                                <div class="map-column">
                                                    <GoogleMaps 
                                                        apiKey={"AIzaSyBfO-GpDk242xCCq5YFCG2yy3kmq7ueS_8"}
                                                        style={{ height: "160px", width: "100%" }}
                                                        zoom={9}
                                                        center={{ lat: 25.075591952892545, lng: 55.139793013491044 }}
                                                        markers={[
                                                        {lat: 25.075591952892545, lng: 55.139793013491044},
                                                        {lat:25.200331993103134, lng: 55.27511084232737},
                                                        ]} 
                                                    />
                                                    
                                                </div>
                                            </section>
                                           
                                            </div>
                                            
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="auto-container">
                        <div class="footer-bottom">
                            <div class="copyright">Copyright - <Link to={'/#'}>BLZ</Link> - 2020</div>
                        </div>
                    </div>

                    {/* <a  class="whats-app" href="/#" target="_blank">
                    <i class="fa fa-whatsapp my-float"></i>
                    </a>

                    <a  class="phone" href="/#" target="_blank">
                    <i class="fa fa-whatsapp my-float" aria-hidden="true"></i>
                    </a>

                    <a  class="chat" href="/#" target="_blank">
                    <i class="fa fa-commenting my-float"></i>
                    </a> */}

                    <div class="fab-container" onClick={()=>{buttonFtn()}}>
                    <div className={`button iconbutton`}>
                    <i   className={`fa fa-plus ${buttonopen? "rotateicon":""}`}></i>
                    
                    </div>
                    </div>
                    <ul className={`options ${buttonopen? " visiableclass":"nonvisiable"}`}>
                            <li>
                            <span class="btn-label"><a href='https://wa.me/044449444' target='_blank'>Whatsapp</a></span>
                            <div class="iconbutton iconbuttonw">
                            <a href='https://wa.me/044449444' target='_blank'>
                            <i class="fab fa-whatsapp light" style={{color:"white"}}></i>
                            </a>
                            </div>
                            </li>
                            {/* <li>
                            <span class="btn-label">Facebook</span>
                            <div class="iconbutton iconbuttonf" >
                            <i class="fab fa-facebook" style={{color:"white"}}></i>
                                                        </div>
                            </li> */}
                            
                            </ul>
                </footer>


            </>
        );
    
}

export default Footer;