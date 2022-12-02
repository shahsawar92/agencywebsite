import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { partners } from '../../assets/images/partners';



const Brand1_content = [
    {
        thumb: partners.ifza,

    },
    {
        thumb: partners.dmcc,

    },
    {
        thumb: partners.last,

    },
    {
        thumb: partners.myoffice,

    },
    {
        thumb: partners.rajez,

    },
    {
        thumb: partners.shams,

    },
    {
        thumb: partners.socfz,

    },
]


const Brand1 =()=> {

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
    let Slides =5;
    if(isMobile) {
        Slides=1;
    }
    
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: Slides,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>


                {/* <!-- Sponsors Section --> */}
                <section className="sponsors-section pt-0">
                    <div className="container-fluid">
                        {/* <!--Sponsors Carousel--> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <Slider {...settings} className="theme_carousel">
                                    {Brand1_content.map((item, id) => (
                                        <div className="slide-item" key={id}><figure className="image-box" style={{height:"250", width:"250px"}}><Link to={'/#'}><img  src={item.thumb} alt="" /></Link></figure></div>
                                    ))}
                                </Slider>

                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }

export default Brand1;