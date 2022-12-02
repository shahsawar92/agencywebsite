import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu'



class Header2 extends Component {
    state = {
        scrolled: false
    };

    componentDidMount() {
        var btn = document.querySelector('.mobile-nav-toggler');
        var closeBtn = document.querySelector('.close-btn');
        var body = document.getElementsByTagName('body')[0];

        function addFunc() {
            return body.classList.add("mobile-menu-visible");
        }
        function closeFunc() {
            return body.classList.remove("mobile-menu-visible");
        }

        btn.addEventListener('click', addFunc);
        closeBtn.addEventListener('click', closeFunc);

        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = event => {
        if (window.scrollY > 100) {
            this.setState({ scrolled: true });
        }
        else {
            this.setState({ scrolled: false });
        }
    };

    render() {
        const { scrolled } = this.state;
       
        return (
            <>

                <header className={scrolled ? "main-header header-style-two fixed-header" : "fixed-header main-header header-style-two"}>
                    
                    {/* <div className="header-top-two">    
                        <div className="auto-container">
                            <div className="inner blackinner">
                                <div className="top-left">
                                    <ul className="contact-info text light clearfix py-2">
                                    

                                        <li  ><a href="mailto:setup@blz.ae"className="text light" ><i className="far fa-envelope"></i> setup@blz.ae</a></li>
                                        
                                        <li><a href="tel:+97144449444" className="text light" ><i className="far fa-phone"></i>+97144449444</a></li>
                                    </ul>
                                </div>

                                <div className="top-middile">
                                </div>
                
                                <div className="top-right">
                                  
                                    
                                </div>
                            </div>
                        </div>
                    </div> */}


                    {/* <div className="header-upper">
                        <div className="auto-container">
                            <div className="inner-container">
                                
                                <div className="nav-outer clearfix">
                                    <div className="pull-left">
]                                    <div  style={{background:"#005ca5", width:"12.3rem", padding:"7px",height:""}}><Link to={'/'}  >
                                            <img  style={{}} src={require('../../assets/images/Images/logo/BLz-Logo-23.png')} alt=""/></Link></div>
                                    </div>
                                    


                                    <nav className="main-menu navbar-expand-md navbar-light">
                                    <Menu />
                                    </nav>
                                    <div className="link-btn">
                                        <Link to={'/contact'} className="theme-btn btn-style-one" style={{backgroundColor:"#282828"}}>
                                            <span className="btn-title">Get A Quote</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    


                    <div className={scrolled ? "sticky-header animated slideInDown" : "sticky-header"}>
                        <div className="auto-container nav-outer clearfix">
                            <div className=''>
                            <div className=" pull-left"><div style={{
                                    width:"12.3rem",
                                    padding:"7px",
                                    height:"auto",
                                    objectFit:"contain"
                                }}>
                                <Link to={'/#'} title="" ><img  src={require('../../assets/images/Images/logo/BLZ-logo.png')} alt="" title=""/></Link>
                                </div>
                            </div>
                            <div className="mobile-nav-toggler"><span className="icon fal fa-bars"></span></div>

                            </div>
                            <div className="d-flex justify-content-end menu-class">
                                
                                <nav className="main-menu clearfix ">
                                <Menu />
                                </nav> <span>
                                    <div className="link-btn ml-4 pt-3 ">
                                        <Link to={'/contact'} className="theme-btn remove-redus btn-style-one bluebackground">
                                            <span className="btn-title">Get A Quote</span>
                                        </Link>
                                        </div>
                                         </span>
                                
                            </div>
                        </div>
                    </div>
                    


                    <div className="mobile-menu">
                        <div className="menu-backdrop"></div>
                        <div className="close-btn"><span className="icon flaticon-cancel"></span></div>
                        
                        <nav className="menu-box">
                            <div className="nav-logo"><Link to={'/#'}><img src={require('../../assets/images/Images/logo/BLz-Logo-23.png')} alt="" title=""/></Link></div>
                            <div className="menu-outer">
                            <Menu />
                            </div>
                            
                            <div className="social-links">
                                <ul className="clearfix">
                                    {/* <li><Link to={'/#'}><span className="fab fa-twitter"></span></Link></li>
                                    <li><Link to={'/#'}><span className="fab fa-facebook-square"></span></Link></li>
                                    <li><Link to={'/#'}><span className="fab fa-pinterest-p"></span></Link></li>
                                    <li><Link to={'/#'}><span className="fab fa-instagram"></span></Link></li>
                                    <li><Link to={'/#'}><span className="fab fa-youtube"></span></Link></li> */}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
                

            </>
        )
    }
}
export default Header2;


