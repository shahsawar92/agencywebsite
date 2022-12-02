import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';



const aboutbg = require('./../../assets/images/background/image-11.jpg');



const Error404=()=> {

    useEffect (() => {
        document.title = "404 | BLZ";
     }, []);
        return (
            <>
                <Header />

                <div id="search-popup" className="search-popup">
                    <div className="close-search theme-btn"><span className="flaticon-cancel"></span></div>
                    <div className="popup-inner">
                        <div className="overlay-layer"></div>
                        <div className="search-form">
                            <form method="post" action="javascript:void(0)">
                                <div className="form-group">
                                    <fieldset>
                                        <input type="search" className="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" className="theme-btn" />
                                    </fieldset>
                                </div>
                            </form>
                            <br />
                            <h3>Recent Search Keywords</h3>
                            <ul className="recent-searches">
                                <li><Link to={'/#'}>Finance</Link></li>
                                <li><Link to={'/#'}>Idea</Link></li>
                                <li><Link to={'/#'}>Service</Link></li>
                                <li><Link to={'/#'}>Growth</Link></li>
                                <li><Link to={'/#'}>Plan</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>


                <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>404</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">404</li>
                        </ul>
                    </div>

                </section>

                {/* Error Page */}
                <section className="error-section">
                    <div className="auto-container">
                        <div className="inner-section">
                            <h1>404</h1>
                            <h2>OOPPS! THE PAGE YOU WERE LOOKING FOR, COULDN'T BE FOUND.</h2>
                            <div className="text">Try the search below to find matching pages:</div>
                            
                            {/* Search */}
                            <div className="error-search-form">
                                <form method="post" action="javascript:void(0)">
                                    <div className="form-group">
                                        <input type="search" name="search-field" value="" placeholder="Search..." required=""/>
                                        <button type="submit"><span className="icon fas fa-search"></span></button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </section>

	            {/* Error Page */}

                <Footer />

            </>
        )
    }
export default Error404;