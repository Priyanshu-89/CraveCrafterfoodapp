'use client'

import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



function HomeSlider() {
    const slides = [
        {
            url: "/images/sl.png",
           

        },
        {
            url: '/images/s2.png',
            // text:"Delivering Delights, One Bite at a Time!"
        },

        {
            url: '/images/s3.png',
          
        },


    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const preSlide = () => {
        const isFirst = currentSlide === 0;
        const newSlide = isFirst ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    const nextSlide = () => {
        const isLast = currentSlide === slides.length - 1;
        const newSlide = isLast ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const GoTo = (i) => {
        setCurrentSlide(i);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000); 
        return () => clearInterval(interval); 
    }, [currentSlide]);

    return (
        <div className='w-full h-[85vh] rounded-sm shadow-md m-auto py-10  relative group px-4'>
            <div className='w-full h-full rounded-sm bg-cover bg-center duration-500 relative text-3xl text-white' style={{ backgroundImage: `url(${slides[currentSlide].url})` }}>
                {/* Overlay with text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    {slides[currentSlide].text}

                </div>
                {/* 
                
                
                {/* left arrow  */}
                <div className='hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <MdKeyboardArrowLeft onClick={preSlide} size={30} />
                </div>
                {/* right arrow */}
                <div className='hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <MdOutlineKeyboardArrowRight onClick={nextSlide} size={30} />
                </div>
            </div>
           

        </div>
    )
}

export default HomeSlider;
