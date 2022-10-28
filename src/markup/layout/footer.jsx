import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleMaps from "simple-react-google-maps";

const Footer = ()=> {
    const [buttonopen, setbuttonopen] = useState(false)
     const buttonFtn=()=>{
        setbuttonopen(!buttonopen);
     }
        return (
            <>
                <footer class="main-footer">
                    <div class="auto-container">

                        <div class="widgets-section">
                            <div class="row clearfix">


                                <div class="column col-lg-4">
                                    <div class="footer-widget logo-widget">
                                        <div class="widget-content">
                                            <div class="footer-logo">
                                                <Link to="/#">
                                                    {/* <img class="" src={require('../../assets/images/footer-logo.png')} alt="" /> */}
                                                    <h1>BLZ</h1>
                                                    </Link>
                                            </div>
                                            <div class="text-dark">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</div>
                                            <ul class="social-links clearfix">
                                                <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-vimeo-v"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div class="column col-lg-4">
                                    <div class="footer-widget links-widget">
                                        <div class="widget-content">
                                            <h3 className='mb-3'>Links</h3>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <ul>
                                                        <li><Link to={'/#'}>Home</Link></li>
                                                        <li><Link to={'/about'}>About</Link></li>
                                                        {/* <li><Link to={'/#'}>Services</Link></li>
                                                        <li><Link to={'/#'}>Portfolio</Link></li>
                                                        <li><Link to={'/#'}>Pricing</Link></li> */}
                                                    </ul>
                                                </div>
                                                <div class="col-md-6">
                                                    <ul>
                                                        {/* <li><Link to={'/blog'}>Blog</Link></li> */}
                                                        <li><Link to={'/contact'}>Contact</Link></li>

                                                        {/* <li><Link to={'/#'}>Press Release</Link></li>
                                                        <li><Link to={'/#'}>Case Study</Link></li> */}
                                                        {/* <li><Link to={'/#'}>Terms</Link></li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='footer-widget links-widget'>
                                    <div class="widget-content mt-3">
                                    <h3 className='mb-3'>Contact</h3>
                                    <ul>
                                                        <li >Phone Number: 04 444 9444</li>
                                                        <li>Whattsapp: </li>
                                                        <li>Email: setup@blz.ae</li>
                                                    </ul>
                                    </div>
                                    <div class="widget-content mt-2">
                                    <h3 className='mb-3'>Address</h3>
                                    <ul>
                                        <li>Address: Level 14, Boulevard Plaza Tower 1, Downtown, Dubai</li>
                                        <li>Address: Level 27, Marina Plaza, Dubai Marina, U.A.E.
</li>
                                    </ul>
                                    {/* <h3>Working hours:</h3>
                                    <ul>
                                        <li>Monday to Friday 8:30 am – 5:30 pm</li>
                                        <li>Saturday 10:00 am to 2:00 pm</li>
                                    </ul> */}
                                    </div>
                                    </div>
                                </div>


                                <div class="column col-lg-4">
                                    <div class="footer-widget instagram-widget">
                                        <h3>Google Map</h3>
                                        
                                            <section class="map-section">
                                                <div class="map-column">
                                                    <GoogleMaps 
                                                        apiKey={"AIzaSyBQ5y0EF8dE6qwc03FcbXHJfXr4vEa7z54"}
                                                        style={{ height: "180px", width: "100%" }}
                                                        zoom={12}
                                                        center={{ lat: 37.4224764, lng: -122.0842499 }}
                                                        markers={{ lat: 37.4224764, lng: -122.0842499 }} 
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
                            <span class="btn-label"><a href='https://wa.me/0233456778' target='_blank'>Whatsapp</a></span>
                            <div class="iconbutton iconbuttonw">
                            <a href='https://wa.me/0233456778' target='_blank'>
                            <i class="fab fa-whatsapp light" style={{color:"white"}}></i>
                            </a>
                            </div>
                            </li>
                            <li>
                            <span class="btn-label">Facebook</span>
                            <div class="iconbutton iconbuttonf" >
                            <i class="fab fa-facebook" style={{color:"white"}}></i>
                                                        </div>
                            </li>
                            
                            </ul>
                </footer>


            </>
        );
    
}

export default Footer;