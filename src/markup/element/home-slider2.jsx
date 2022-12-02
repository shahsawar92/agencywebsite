import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider.css';
import { useState } from 'react';
import { useEffect } from 'react';

const slides = [
    {
        title: '',
        btnLearn: "-- Learn More --",
        finan: " Corporate Services Solutions",
        dox: " Made Easy",
        btnService: "Our Services",
        image: require('./../../assets/images/Images/slide1.jpg'),    },
    {
        title: '',
        btnLearn: "-- Learn More --",
        finan: "Corporate Services Solutions ",
        dox: "Made Easy",
        btnService: "Our Services",
        image: require('./../../assets/images/Images/slide2.jpg'),    },
    {
        title: '',
        btnLearn: "-- Learn More --",
        finan: "Corporate Services Solutions ",
        dox: "Made Easy",
        btnService: "Our Services",
        image: require('./../../assets/images/Images/slide3.jpg'),    },

];


const HomeSlider2 =()=> {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 768;
    
       
        return (
            <>
                <Slider className={!isMobile ? "slider-wrapper" : "slider-wrapper-hidden"}  >
                    {slides.map((slide, index) =>
                        <div key={index} className="slider-content" style={{ background: `url('${slide.image}') no-repeat center center` }}>
                            <div className="inner text-center inner-2">
                             
                                <h2>{slide.finan} <span className='bluecolor'>{slide.dox} </span></h2>
                                <div className="btn-box">
                                    <Link to={'/Services2'} className="theme-btn btn-style-one whitebackground bluecolor "><span className="btn-title">{slide.btnService}</span>
                                    </Link>
                                    </div>
                            </div>
                        </div>)}
                </Slider>
                        <div className={isMobile? "slider-wrapper bg-img-upper":"slider-wrapper-hidden"} >
                <div className="slider-content bg-img"  >
                            <div className="inner text-center inner-2 " >
                                <h1>{slides[0].title}</h1>
                                <h2>{slides[0].finan} <span className='bluecolor'>{slides[0].dox} </span></h2>
                                <div className="btn-box">
                                    <Link to={'/Services2'} className="theme-btn  btn-style-one bluebackground "><span className="btn-title bluebackground">{slides[0].btnService}</span>
                                    </Link>
                                    {/* <Link to={'/#'} className="theme-btn btn-style-two"><span className="btn-title">{slide.btnLearn}</span></Link> */}
                                    </div>
                            </div>
                        </div>
                        </div>
                    
                {/* <section className="banner-section style-two">
                    <div className="banner-carousel theme_carousel owl-theme owl-carousel" data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'>

                        <div className="slide-item">
                            <div className="image-layer lazy-image" data-bg="url('assets/images/main-slider/2.jpg')"></div>

                            <div className="auto-container">
                                <div className="content-box">
                                    <h3>Making Your Business Idea</h3>
                                    <h2>Prosper In This <br />Volatile Fund</h2>
                                    <div className="btn-box"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">-- Our Services --</span></Link><Link to={'/#'} className="theme-btn btn-style-two"><span className="btn-title">-- Learn More --</span></Link></div>
                                </div>
                            </div>
                        </div>

                        <div className="slide-item">
                            <div className="image-layer lazy-image" data-bg="url('assets/images/main-slider/6.jpg')"></div>

                            <div className="auto-container">
                                <div className="content-box">
                                    <h3>Making Your Business Idea</h3>
                                    <h2>Prosper In This <br />Volatile Fund</h2>
                                    <div className="btn-box"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">-- Our Services --</span></Link><Link to={'/#'} className="theme-btn btn-style-two"><span className="btn-title">-- Learn More --</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                



            </>
        )
    }
export default HomeSlider2;