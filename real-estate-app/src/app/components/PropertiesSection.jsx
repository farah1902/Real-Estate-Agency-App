'use client'

import React, { useState, useEffect } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import PropertyCard from './PropertyCard';
import Link from 'next/link';

export default function PropertiesSection() {

    const [properties, setProperties] = useState([]); // stock data into local state variable and map it into slide comp

    const fetchData = () => {
        fetch('http://localhost:4000/properties')
        .then(response => response.json())
        .then(data => {
            setProperties(data);
        })
        .catch(error => console.log(error.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <section className="section-property section-t8">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title-wrap d-flex justify-content-between">
                        <div className="title-box">
                            <h2 className="title-a">Latest Properties</h2>
                        </div>
                        <div className="title-link">
                            <Link href="/properties">All Property
                                <span className="bi bi-chevron-right"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={'auto'}
                speed={600}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.propery-carousel-pagination', // pagination class
                    type: 'bullets',
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                className="swiper"
                >
                {properties &&
                    properties.length > 0 &&
                    properties.slice(0,4).map(property => ( // display only 4 properties
                    <SwiperSlide key={property.id}>
                        <PropertyCard property={property} />
                    </SwiperSlide>
                ))}
                <div className="propery-carousel-pagination carousel-pagination"></div>
            </Swiper>
        </div>
    </section>
  );
}
