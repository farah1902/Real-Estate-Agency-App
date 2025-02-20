'use client'

import React, { useState, useEffect } from 'react'
import Breadcumb from '../components/Breadcumb';
import AgentCard from '../components/AgentCard';
import Pagination from '../components/Pagination';

export default function AgentsList() {

  const [agents, setAgents] = useState([])


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
      <Breadcumb title="Our Agents" subtitle="All Agents List" page="Agents" />

      {/* Agents Section */}
      <section className="agents-grid grid">
        <div className="container">
          <div className="row">
            {agents &&
              agents.length > 0 &&
              agents.map(agent => (
              <div key={agent.id} className="col-md-4">
                <AgentCard agent={agent} />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Pagination />
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}
