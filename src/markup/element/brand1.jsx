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
        thumb: partners.dmcc,

    },
    {
        thumb: partners.ifza,

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
        Slides=2;
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
                <section class="sponsors-section pt-0">
                    <div class="container-fluid">
                        {/* <!--Sponsors Carousel--> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <Slider {...settings} className="theme_carousel">
                                    {Brand1_content.map((item, id) => (
                                        <div class="slide-item" key={id}><figure class="image-box"><Link to={'/#'}><img style={{height:"160px", width:"160px"}} src={item.thumb} alt="" /></Link></figure></div>
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