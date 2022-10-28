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

                <header class={scrolled ? "main-header header-style-two fixed-header" : "main-header header-style-two"}>
                    
                    <div class="header-top-two">    
                        <div class="auto-container">
                            <div class="inner blackinner">
                                <div class="top-left">
                                    <ul class="contact-info text light clearfix py-2">
                                        <li  ><Link class="text light" to={'/mailto:info@webmail.com'}><i class="far fa-envelope"></i> setup@blz.ae</Link></li>
                                        <li><Link class="text light" to={'/tel:+98787687676'}><i class="far fa-phone"></i>04 444 9444</Link></li>
                                    </ul>
                                </div>

                                <div class="top-middile">
                                    {/* <div class="text">Welcome To Our Company</div> */}
                                </div>
                
                                <div class="top-right">
                                  
                                    {/* <ul class="clearfix social-links">
                                        <li><Link class="text light" to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                        <li><Link class="text light" to={'/#'}><span class="fab fa-facebook-square"></span></Link></li>
                                        <li><Link class="text light" to={'/#'}><span class="fab fa-pinterest-p"></span></Link></li>
                                        <li><Link class="text light" to={'/#'}><span class="fab fa-instagram"></span></Link></li>
                                        <li><Link class="text light" to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="header-upper">
                        <div class="auto-container">
                            <div class="inner-container">
                                
                                <div class="nav-outer clearfix">
                                {/* logo-box */}
                                    <div class="pull-left">
                                    {/* class="logo" */}
                                        <div  ><Link to={'/'}>
                                        {/* className='logo-style' */}
                                            <img style={{background:"#005ca5", width:"150px" , height:"100px"}} src={require('../../assets/images/Images/logo/logo.png')} alt=""/></Link></div>
                                    </div>
                                    
                                    <div class="mobile-nav-toggler"><span class="icon fal fa-bars"></span></div>


                                    <nav class="main-menu navbar-expand-md navbar-light">
                                    <Menu />
                                    </nav>
                                    <div class="link-btn">
                                        <Link to={'/contact'} class="theme-btn btn-style-one" style={{backgroundColor:"#282828"}}>
                                            <span class="btn-title">Get A Quote</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                    <div class={scrolled ? "sticky-header animated slideInDown" : "sticky-header"}>
                        <div class="auto-container clearfix">
                            <div className=''>
                            <div class=" pull-left">
                                <Link to={'/#'} title="" ><img style={{
                                    width:"140px",
                                    height:"80px",
                                    backgroundColor:"#005ca5"
                                }} src={require('../../assets/images/Images/logo/logo.png')} alt="" title=""/></Link>
                            </div>
                            </div>
                            <div class="pull-right">
                                
                                <nav class="main-menu clearfix">
                                <Menu />
                                </nav>
                                
                            </div>
                        </div>
                    </div>
                    


                    <div class="mobile-menu">
                        <div class="menu-backdrop"></div>
                        <div class="close-btn"><span class="icon flaticon-cancel"></span></div>
                        
                        <nav class="menu-box">
                            <div class="nav-logo"><Link to={'/#'}><img src="assets/images/logo.png" alt="" title=""/></Link></div>
                            <div class="menu-outer">
                            <Menu />
                            </div>
                            
                            <div class="social-links">
                                <ul class="clearfix">
                                    <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-facebook-square"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-pinterest-p"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li>
                                    <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
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


