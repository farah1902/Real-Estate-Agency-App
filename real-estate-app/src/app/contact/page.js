'use client'

import React from 'react'
import Breadcumb from '../components/Breadcumb'
import ContactForm from '../components/ContactForm'

import './styles.css'

export default function Contact() {
return (
    <main id="main">
                            {/* Breadcumb */}
    <Breadcumb
        title="Contact Us" 
        subtitle="Get in touch with us" 
        page="Contact" 
    />

    <section className="contact">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="contact-map box">
                        <div id="map" className="contact-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.50809017388!2d-7.622902099999998!3d33.5834464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d37dfd46501f%3A0x3ad03e6ae701942c!2sNICKEL%20HOUSE!5e1!3m2!1sen!2sma!4v1739980885694!5m2!1sen!2sma" 
                            width="100%" 
                            height="450"  
                            allowFullScreen="" 
                            loading="lazy" >
                        </iframe>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 section-t8">
                    <div className="row">
                        <div className="col-md-7">
                            <ContactForm />
                        </div>
                        <div className="col-md-5 section-md-t3">
                            <div className="icon-box section-b">
                                <div className="icon-box-icon">
                                    <span className="bi bi-envelope"></span>
                                </div>
                                <div className="icon-box-content table-cell">
                                    <div className="icon-box-title">
                                        <h4 className="icon-title"> Say Hello</h4>
                                    </div>
                                    <div className="icon-box-content">
                                        <p className="mb-1">
                                            Email.
                                            <span className="color-a">contact@example.com</span>
                                        </p>
                                        <p className="mb-1">
                                            Phone.
                                            <span className="color-a">+212 689 479013</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-box section-b2">
                                <div className="icon-box-icon">
                                    <span className="bi bi-geo-alt"></span>
                                </div>
                                <div className="icon-box-content table-cell">
                                    <div className="icon-box-title">
                                        <h4 className="icon-title">Find us in</h4>
                                    </div>
                                    <div className="icon-box-content">
                                        <p className="mb-1">
                                            Your adresse, State 12345,
                                            <br /> Country
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-box">
                                <div className="icon-box-icon">
                                    <span className="bi bi-share"></span>
                                </div>
                                <div className="icon-box-content table-cell">
                                    <div className="icon-box-title">
                                        <h4 className="icon-title"> Social Networks</h4>
                                    </div>
                                    <div className="icon-box-content">
                                        <div className="socials-footer">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a href="#" className="link-one">
                                                        <i
                                                            className="bi bi-facebook"
                                                            aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#" className="link-one">
                                                        <i
                                                            className="bi bi-twitter"
                                                            aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#" className="link-one">
                                                        <i
                                                            className="bi bi-instagram"
                                                            aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#" className="link-one">
                                                        <i
                                                            className="bi bi-linkedin"
                                                            aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
)
}
