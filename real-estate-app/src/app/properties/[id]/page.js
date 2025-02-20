'use client'; // Mark this as a Client Component

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import './styles.css';

export default function PropertySingle({ params }) {
    // Unwrap the params object using React.use()
    const unwrappedParams = React.use(params);
    const id = unwrappedParams.id;

    const [property, setProperty] = useState({});
    const [agent, setAgent] = useState({}); // Add agent state local variable
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /* const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/properties/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
    
            // Process amenities if they are split into arrays
            const processedAmenities = data.amenities.map(amenity => {
                if (Array.isArray(amenity)) {
                    return amenity.join(' '); // Join words with a space
                }
                return amenity; // If it's already a string, return as is
            });
    
            // Update the property state with processed amenities
            setProperty({
                ...data,
                amenities: processedAmenities,
            });
        } catch (error) {
            console.error('Fetch error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]); */

    const fetchAgentData = async (agentId) => {
        try {
            const response = await fetch(`http://localhost:4000/agents/${agentId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setAgent(data);
        } catch (error) {
            console.error('Fetch agent error:', error);
            setError(error.message);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/properties/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
    
            // Process amenities if they are split into arrays
            const processedAmenities = data.amenities.map(amenity => {
                if (Array.isArray(amenity)) {
                    return amenity.join(' '); // Join words with a space
                }
                return amenity; // If it's already a string, return as is
            });
    
            // Update the property state with processed amenities
            setProperty({
                ...data,
                amenities: processedAmenities,
            });

            // Fetch agent data using the agent ID from the property
            if (data.agent) {
                await fetchAgentData(data.agent);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);
    

    return (
        <main id="main">
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">
                                    {property.number} {property.addressOne}{' '}
                                    {property.addressTwo} 
                                </h1>
                                <span className="color-text-a">{property.location}</span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav 
                                aria-label="breadcrumb" 
                                className="breadcrumb-box d-flex justify-content-lg-end"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">
                                            <i className="bi bi-house-door-fill"></i>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link href="/properties">
                                            <span>Properties</span>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {property.number} {property.addressOne}{' '}
                                        {property.addressTwo}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="property-single nav-arrow-b">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <Swiper
                                speed={600}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    el: '.property-single-carousel-pagination',
                                    type: 'bullets',
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination]}
                                loop={true}
                                className="swiper"
                            >
                                <SwiperSlide className="carousel-item-b">
                                    <img src={property.bgImg} alt="" className="img-fluid" />
                                </SwiperSlide>
                                <SwiperSlide className="carousel-item-b">
                                    <img src={property.slideImg} alt="" className="img-fluid" />
                                </SwiperSlide>
                                <div className="property-single-carousel-pagination carousel-pagination"></div>                                
                            </Swiper>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row justify-content-between">
                                <div className="col-md-5 col-lg-4">
                                    <div className="property-price d-flex justify-content-center foo">
                                        <div className="card-header-c d-flex">
                                            <div className="card-box-ico">
                                                <span className="bi bi-cash">$</span>
                                            </div>
                                            <div className="card-title-c align-self-center">
                                                <h5 className="title-c">{property.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property-summary">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="title-box-d">
                                                    <h3 className="title-d">Quick Summary</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="summary-list">
                                            <ul className="list">
                                                <li className="d-flex justify-content-between">
                                                    <strong>Property ID:</strong>
                                                    <span>{property.id}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Location:</strong>
                                                    <span>{property.location}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Property Type:</strong>
                                                    <span>{property.type}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Status:</strong>
                                                    <span>{property.status}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Area:</strong>
                                                    <span>{property.area}m<sup>2</sup></span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Beds:</strong>
                                                    <span>{property.beds}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Baths:</strong>
                                                    <span>{property.baths}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Garage:</strong>
                                                    <span>{property.garages}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-7 section-md-t3">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">Property Description</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property-description">
                                        <p className="description color-text-a">
                                            {property.description}
                                        </p>
                                        <p className="description color-text-a no-margin">
                                            {property.details}
                                        </p>
                                    </div>
                                    <div className="row section-t3">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">Amenities</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="amenities-list color-text-a">
                                        <ul className="list-a no-margin grid-container">
                                            {property.amenities &&
                                                property.amenities.length > 0 &&
                                                property.amenities.map((item, index) => (
                                                    <li key={index} className="grid-item">
                                                        - {item} {/* Render the complete string */}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 offset-md-1">
                            <ul 
                                className="nav nav-pills-a nav-pills mb-3 section-t3"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <a 
                                        className="nav-link active"
                                        id="pills-video-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-video"
                                        role="tab"
                                        aria-controls="pills-video"
                                        aria-selected="true"
                                    >
                                        Video
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a 
                                        className="nav-link"
                                        id="pills-plans-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-plans"
                                        role="tab"
                                        aria-controls="pills-plans"
                                        aria-selected="false"
                                    >
                                        Floor Plans
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a 
                                        className="nav-link"
                                        id="pills-map-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-map"
                                        role="tab"
                                        aria-controls="pills-map"
                                        aria-selected="false"
                                    >
                                        Map
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div 
                                    className="tab-pane fade show active"
                                    id="pills-video"
                                    role="tabpanel"
                                    aria-labelledby="pills-video-tab"
                                >
                                    <iframe
                                        width="100%"
                                        height="460"
                                        src={property.video}
                                        frameBorder="0"
                                        webkitallowfullscreen="true"
                                        mozallowfullscreen="true"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div 
                                    className="tab-pane fade"
                                    id="pills-plans"
                                    role="tabpanel"
                                    aria-labelledby="pills-plans-tab"
                                >
                                    <img src={property.floorPlans} alt="" className="img-fluid" />
                                </div>
                                <div 
                                    className="tab-pane fade "
                                    id="pills-map"
                                    role="tabpanel"
                                    aria-labelledby="pills-map-tab"
                                >
                                    <iframe
                                        width="100%"
                                        height="460"
                                        src={property.map}
                                        style={{ border: 0 }}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row section-t3">
                                <div className="col-sm-12">
                                    <div className="title-box-d">
                                        <h3 className="title-d">Contact Agent</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <img src={agent.profileImg} alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="property-agent">
                                        <h4 className="title-agent"> {agent.name} </h4>
                                        <p className="color-text-a"> {agent.description} </p>
                                        <ul className="list-unstyled">
                                            <li className="d-flex justify-content-between">
                                                <strong>Phone:</strong>
                                                <span className="color-text-a">{agent.phone}</span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <strong>Mobile:</strong>
                                                <span className="color-text-a">{agent.mobile}</span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <strong>Email:</strong>
                                                <span className="color-text-a">{agent.email}</span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <strong>Skype:</strong>
                                                <span className="color-text-a">{agent.skype}</span>
                                            </li>
                                        </ul>
                                        <div className="socials-a">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a href={agent.facebook}>
                                                        <i 
                                                            className="bi bi-facebook"
                                                            aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href={agent.twitter}>
                                                        <i className="bi bi-twitter" 
                                                            aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href={agent.instagram}>
                                                        <i className="bi bi-instagram"
                                                            aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href={agent.linkedin}>
                                                        <i className="bi bi-linkedin"
                                                            aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-12 col-lg-4">
                                        <div className="property-contact">
                                            <form className="form-a">
                                                <div className="row">
                                                    <div className="col-md-12 mb-1">
                                                        <div className="form-group">
                                                            <input 
                                                                type="text"
                                                                className="form-control form-control-lg form-control-a"
                                                                id="inputName"
                                                                placeholder="Your Name"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-1">
                                                        <div className="form-group">
                                                            <input 
                                                                type="email"
                                                                className="form-control form-control-lg form-control-a"
                                                                placeholder="Your Email"
                                                                id="inputEmail"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-1">
                                                        <div className="form-group">
                                                            <textarea 
                                                                id="textMessage"
                                                                name="message"
                                                                className="form-control"
                                                                placeholder="Message"
                                                                cols="45"
                                                                rows="8"
                                                                required
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mt-3">
                                                        <button 
                                                            type="submit"
                                                            className="btn btn-a"
                                                        >
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>                    
                </div>
            </section>
        </main>
    );
}