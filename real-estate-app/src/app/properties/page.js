'use client'

import React, { useState, useEffect } from 'react'
import './styles.css'
import Breadcumb from '../components/Breadcumb';
import PropertyCard from '../components/PropertyCard';
import Pagination from '../components/Pagination';


export default function PropertiesList() {

    const [properties, setProperties] = useState([]);

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
    <main id="main">
        {/* Breadcumb */}
        <Breadcumb title="Our Amazing Properties" subtitle="Properties List" page="Properties" />

        {/* Properties Section */}
        <section className="property-grid grid">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="grid-option">
                            <form>
                                <select className="custom-select" defaultValue="All">
                                    <option value="All">All</option>
                                    <option value="1">New to Old</option>
                                    <option value="2">For Rent</option>
                                    <option value="3">For Sale</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    {properties && 
                    properties.length > 0 &&
                    properties.map(property => (
                        <div className="col-md-4" key={property.id}>
                            <PropertyCard property={property} />
                        </div>
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Pagination />
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
