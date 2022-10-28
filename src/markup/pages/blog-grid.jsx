import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { blogdata } from '../../data/blogdata';

const aboutbg = require('./../../assets/images/background/image-11.jpg');


const Blog=()=> {
    useEffect (() => {
        document.title = "Visa | BLZ";
     }, []);

   
        return (
            <>
                <Header />


                {/* <!--Search Popup--> */}
                <div id="search-popup" className="search-popup">
                    <div className="close-search theme-btn"><span className="flaticon-cancel"></span></div>
                    <div className="popup-inner">
                        <div className="overlay-layer"></div>
                        <div className="search-form">
                            <form method="post" action="javascript:void(0)">
                                <div className="form-group">
                                    <fieldset>
                                        <input type="search" className="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" className="theme-btn"/>
                                    </fieldset>
                                </div>
                            </form>
                            <br/>
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
                
                {/* <!-- Page Banner Section --> */}
                <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Blog</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Blog</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}

                {/* <!-- News Section --> */}
                <section className="news-section">
                    <div className="auto-container">
                        <div className="row">
                            {/* <!-- News Block One --> */}
                            
                            {blogdata.map((blog)=>(
                            
                            <div className="news-block-one col-lg-4 mt-5 mb-5" >
                            <div className="inner-box "  style={{height:"22rem"}}>
                                <div className="image">
                                    <Link to={`/blog-details/${blog.slug}`}><img src={blog.blog_image} alt=""/></Link></div>
                                <div className="lower-content">
                                    <div className="category">{blog.tag}</div>
                                    <ul className="post-meta">
                                        <li><i className="far fa-calendar-alt"></i>{blog.date}</li>
                                        <li><i className="far fa-user"></i>{blog.author.author_name}</li>
                                    </ul>
                                    <h3><Link to={`/blog-details/${blog.slug}`}>{blog.blog_title}</Link></h3>
                                    <div className="text-dark">{blog.blog_content.substring(0,100).trimEnd() + '...'}</div>
                                </div>
                            </div>
                        </div>

                            ))}

                            </div>
                    </div>
                </section>


                <Footer />
            </>
        )

}
export default Blog;