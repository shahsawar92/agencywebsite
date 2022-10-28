import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { blogdata } from '../../data/blogdata';
import { useEffect } from 'react';
import { useState } from 'react';
const aboutbg = require('./../../assets/images/background/image-11.jpg');


const BlogDestails =()=> {
     const [blogToDisplay, setblogToDisplay] = useState([])
    const [post, setPost] = React.useState(null);
    const { slug } = useParams();
    useEffect (() => {
        document.title = "Blog | BLZ";
     }, []);


    console.log("slug here: ", slug);
    useEffect( () => {

        for (let index = 0; index < blogdata.length; index++) {
            if(blogdata[index].slug===slug){
                setPost(blogdata[index])
            }
        }
    }, [slug])
    
    useEffect(() => {
        setblogToDisplay( blogdata.sort(() => Math.random() - Math.random()).slice(0, 2));
      }, [slug])

    console.log("log:", post?.author?.author_name);
  
        return (
            <>
                <Header />
                {/* Search Popup */}
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
                {/* Page Banner Section */}
                <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Blog</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active"> <Link to={'/blog'}>All Blogs</Link></li>
                        </ul>
                    </div>

                </section>

                {/* Sidebar Page Container */}
                <div className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12">
                            {/* News Block Two */}
                                <div className="news-block-two blog-single-post">
                                    <div className="inner-box">                            
                                        <div className="lower-content">
                                            <div className="category">{post?.tag}</div>
                                            <ul className="post-meta">
                                                {/* <li><Link to={'/#'}><i className="far fa-eye"></i>332 Views</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-comments"></i>35 Comments</Link></li> */}
                                                <li><i className="far fa-calendar-alt"></i>{post?.date}</li>
                                            </ul>
                                            <h2>{post?.blog_title}</h2>
                                            <div className="text-dark"><p>{post?.blog_content}</p></div>
                                            <div className="image"><img src={post?.blog_content_image} alt=""/></div>
                                            {/* <div className="text-block-wrapper">
                                                <div className="text-block">
                                                    <h3>A cleansing hot shower or bath</h3>
                                                    <div className="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </div>
                                                </div>
                                                <div className="text-block">
                                                    <h3>Setting the mood with incense</h3>
                                                    <div className="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </div>
                                                </div>
                                                <div className="text-block">
                                                    <h3>Excepteur sint occaecat cupidatat</h3>
                                                    <ul className="list">
                                                        <li><i className="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                                        <li><i className="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                                        <li><i className="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                                        <li><i className="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                                        <li><i className="fas fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h5>by Hetmayar</h5>
                                                <div className="text-dark">Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug pitchfork post-ironic.</div>
                                                <div className="quote-icon"><span className="fa fa-quote-left"></span></div>
                                            </blockquote>
                                            <div className="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. </div>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-8.jpg')}  alt=""/></Link></div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
                                                </div>
                                            </div>
                                            <div className="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.  </div> */}
                                            <div className="post-share">
                                              
                                                <div className="right-column">
                                                    <h4>Social Share</h4>
                                                    <ul className="social-links">
                                                        <li><Link to={'/#'}><span className="fab fa-facebook-f"></span></Link></li>
                                                        <li><Link to={'/#'}><span className="fab fa-twitter"></span></Link></li>
                                                        <li><Link to={'/#'}><span className="fab fa-behance"></span></Link></li>
                                                        <li><Link to={'/#'}><span className="fab fa-linkedin-in"></span></Link></li>
                                                        <li><Link to={'/#'}><span className="fab fa-youtube"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        {/* recents posts */}
                                            <div className="related-post">
                                                <div className="group-title">
                                                    <h3>Related Post</h3>
                                                </div>
                                                <div className="row">
                                                
                                                {/* single block */}
                                                {blogToDisplay.map(
                                                    (blog,key)=>(
                                                        <div key={key} className="news-block-five col-md-6">
                                                        <div className="inner-box">
                                                            <div className="image"><Link to={`/blog-details/${blog?.slug}`}><img src={blog?.blog_image} alt=""/></Link></div>
                                                            <div className="lower-content">
                                                                <ul className="post-meta">
                                                                    <li><i className="far fa-calendar-alt"></i>{blog?.date}</li>
                                                                </ul>
                                                                <h3><Link to={`/blog-details/${blog?.slug}`}>{blog?.blog_title}</Link></h3>
                                                                <div className="text-dark">{blog?.blog_content}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    )
                                                )}
                                                    
                                                   
                                                </div>                                        
                                            </div>
                                        {/* author details */}
                                            <div className="author-box-two">
                                                <div className="wrapper-area">
                                                    <div className="img-box">
                                                        <img  style={{width: "200px", height: "150px"}} src={post?.author?.author_image} alt={post?.author?.author_name}/>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Written by</h5>
                                                        <h3>{post?.author?.author_name}</h3>
                                                        <div className="text-dark">{post?.author?.author_details}</div>
                                                    </div>
                                                        
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    
}
export default BlogDestails;