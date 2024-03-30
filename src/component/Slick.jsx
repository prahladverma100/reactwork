import React from 'react'
import Ellips from '../assets/image/png/ellips.png'
import asd from '../assets/image/png/asd.png'
import circle from '../assets/image/png/circle.png'
import img from '../assets/image/png/img.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true, // Ensure center slide on click
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true, // Ensure center slide on click
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };
    return (
        <div>
            {/* <div className='  mx-auto max-864'>
                <Slider {...settings}>
                    <div className=' mx-auto'><img className=' w-100 w-62' src={asd} alt="" /></div>
                    <div className=' mx-auto'><img className=' w-100 w-62' src={img} alt="" /></div>
                    <div className=' mx-auto'><img className=' w-100 w-62' src={Ellips} alt="" /></div>
                    <div className=' mx-auto'><img className=' w-100 w-62' src={img} alt="" /></div>
                    <div className=' mx-auto'><img className=' w-100 w-62' src={asd} alt="" /></div>
                    <div className=' mx-auto'><img className=' w-100 w-62' src={asd} alt="" /></div>
                </Slider>
            </div> */}
            <div className='  mx-auto  max-864 pt-5 mt-5'>
                <Slider {...setting}>
                    <div className=' mx-auto d-flex justify-content-center position-relative imgwe'>
                        <img className=' w_62' src={asd} alt="" />
                    </div>
                    <div className=' mx-auto d-flex justify-content-center position-relative imgwe'><img className=' w_62' src={img} alt="" /></div>
                    <div className=' mx-auto d-flex justify-content-center position-relative imgwe'><img className=' w_62' src={Ellips} alt="" /></div>
                    <div className=' mx-auto d-flex justify-content-center position-relative imgwe'><img className=' w_62' src={img} alt="" /></div>
                    <div className=' mx-auto d-flex justify-content-center position-relative imgwe'><img className=' w_62' src={asd} alt="" /></div>
                    <div className=' mx-auto d-flex justify-content-center position-relative imgwe'><img className=' w_62' src={asd} alt="" /></div>
                </Slider>
               
            </div>
        </div>
    )
}

export default Slick