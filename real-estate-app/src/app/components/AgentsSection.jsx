'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import AgentCard from './AgentCard';

export default function AgentsSection() {

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
    <section className="section-agents section-t8">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title-wrap d-flex justify-content-between">
                        <div className="title-box">
                            <h2 className="title-a">Our Agents</h2>
                        </div>
                        <div className="title-link">
                            <Link href="/agents">All Agents
                                <span className="bi bi-chevron-right"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {agents && 
                    agents.length > 0 &&
                    agents.slice(0, 3).map(agent => ( //slice for give me just 3 item
                        <div className="col-md-4" key={agent.id}>
                            <AgentCard agent={agent} />
                        </div>
                    ))
                    }
            </div>
        </div>
    </section>
  );
}