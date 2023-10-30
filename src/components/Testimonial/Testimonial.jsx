import React, { useRef } from 'react';

//  Related to the React Slick

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

//  Related to the React Icons
 
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {MdOutlineArrowBackIos,MdOutlineArrowForwardIos} from "react-icons/md";
import { testimonials } from '../../utils/testimonials';

const Testimonial = () => {
    const sliderRef = useRef();
    
    //   Settings Related to the React Slick
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };
    return (
        <section id='testimonials' className="px-24 pt-40 pb-32 overflow-hidden">
            <div className='text-white'>
                <h2 className="font-bold text-4xl mb-6 leading-normal text-center">
                    What people say about us?
                </h2>
            </div>

            <div className='relative'>
                <Slider {...settings} ref={sliderRef}>
                    {testimonials.map((single, index) => {
                        return (
                            <div key={index} className="h-full">
                                <section className="mx-auto p-5 sm:p-12 grid grid-cols-1 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] items-center gap-5 md:gap-8 rounded-xl overflow-hidden">
                                    {/* Left Section */}
                                    <div className="space-y-5 text-center">
                                        {/* Image */}
                                        <div className="border-8 inline-block rounded-full border-purple-200 p-2.5">
                                            <div className=" mx-auto w-[100px] h-[100px] rounded-full bg-gray-200 overflow-hidden">
                                                <img
                                                    src={single.img}
                                                    alt="Boy"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Other */}
                                        <div>
                                            <h2 className="text-xl font-medium text-white">{single.name}</h2>
                                            <p className="text-gray-400">{single.profession}</p>
                                        </div>
                                    </div>

                                    {/* Right Section */}
                                    <div className="text-[16px] sm:text-[18px] space-y-3">
                                        {/* Testimonial */}
                                        <div className="text-orange-500 text-[40px]">
                                            <FaQuoteLeft />
                                        </div>
                                        <p className="leading-[30px] font-bold text-white">
                                            {single.testimonial}
                                        </p>
                                        <div className="text-orange-500 text-[40px]">
                                            <FaQuoteRight className="ml-auto" />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        );
                    })}
                </Slider>

                {/* Custom Buttons */}
                <button
                    className="absolute top-[50%] left-[10px] z-10 text-2xl text-gray-200"
                    onClick={() => sliderRef?.current?.slickPrev()}
                >
                    <MdOutlineArrowBackIos />
                </button>
                <button
                    className="absolute top-[50%] right-[10px] z-10 text-2xl text-gray-200"
                    onClick={() => sliderRef?.current?.slickNext()}
                >
                    <MdOutlineArrowForwardIos />
                </button>
            </div>

        </section>
    );
};

export default Testimonial;