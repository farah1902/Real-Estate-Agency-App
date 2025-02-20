'use client'

import React, {useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import HeroSlide from './HeroSlide';
import './hero.css';

export default function Hero() {

    const [slides, setSlides] = useState([]);  /* stock data into local state variable and map it into slide comp */

    const fetchData = () => {
        fetch('http://localhost:4000/slides')
        .then(response => response.json())
        .then(data => {
            setSlides(data);
        })
        .catch(error => console.log(error.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <Swiper
      spaceBetween={0}  
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        type: 'bullets',
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      loop={true}
      className="intro intro-carousel swiper position-relative"
      >
        {slides && 
            slides.length > 0 &&
            slides.map(slide => (
            <SwiperSlide key={slide.id}>
                <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
