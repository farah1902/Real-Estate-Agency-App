'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './styles.css'

import aboutBannerImage from '../image/slide-about-1.jpg'
import aboutProfileImage from '../image/about-2.jpg'

import AgentCard from '../components/AgentCard'
import Breadcumb from '../components/Breadcumb'

export default function About() {

    const [agents, setAgents] = useState([]);

      const fetchData = () => {
              fetch('http://localhost:4000/agents')
              .then(response => response.json())
              .then(data => {
                  setAgents(data);
              })
              .catch(error => console.log(error.message));
          };
      
          useEffect(() => {
              fetchData();
          }, []);
    

  return (
    <main id="main">
        {/* Breadcumb */}
        <Breadcumb
            title="Unlocking Dreams, Opening New Doors" 
            subtitle="" 
            page="About" 
        />

        <section className="section-about">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 position-relative">
                        <div className="about-img-box">
                            <Image 
                                src={aboutBannerImage}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        <div className="sinse-box">
                            <h3 className="sinse-title">
                                EstateAgency
                                <span></span>
                                <br /> Sinse 2024
                            </h3>
                            <p>Art & Creative</p>
                        </div>
                    </div>
                    <div className="col-md-12 section-t8 position-relative">
                        <div className="row">
                                <div className="col-md-6 col-lg-5">
                                    <Image src={aboutProfileImage} alt="" className="img-fluid"/>
                                </div>
                                <div className="col-lg-2 d-none d-lg-block position-relative">
                                    <div className="title-vertical d-flex justify-content-start">
                                        <span>EstateAgency Exclusive Property</span>
                                    </div>
                                </div>
                            <div className="col-md-6 col-lg-5 section-md-t3">
                                <div className="title-box-d">
                                    <h3 className="title-d">
                                        Sed
                                        <span className="color-d">porttitor</span> lectus
                                        <br/> nibh.
                                    </h3>
                                </div>
                                <p className="color-text-a">
                                    Welcome to our Real Estate Marketing Management Application. We are dedicated to helping you unlock your dreams and open new doors. Our agency specializes in providing top-notch real estate marketing services to help you buy, sell, or rent properties with ease.
                                </p>
                                <p className="color-text-a">
                                    With years of experience in the industry, our team of experts is committed to delivering exceptional service and personalized solutions tailored to your unique needs. We leverage the latest technology and marketing strategies to ensure your property stands out in the competitive market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    

        <section className="section-agents section-t8">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap d-flex justify-content-between">
                            <div className="title-box">
                                <h2 className="title-a"> Meet Our Team </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {agents &&
                        agents.length > 0 &&
                        agents.slice(0, 3).map(agent => (
                            <div className="col-md-4" key={agent.id}>
                                <AgentCard agent={agent} />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    </main>
  );
}
