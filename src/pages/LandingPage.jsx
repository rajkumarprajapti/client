import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import ClientCard from '../components/ClientCard';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';

const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectData = await axios.get('/api/projects');
      const clientData = await axios.get('/api/clients');
      setProjects(projectData.data);
      setClients(clientData.data);
    };
    fetchData();
  }, []);

  return (
    <div className="landing-page">
      <Header />
      <section>
        <h2>Our Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>
      <section>
        <h2>Happy Clients</h2>
        <div className="client-list">
          {clients.map((client) => (
            <ClientCard key={client._id} client={client} />
          ))}
        </div>
      </section>
      <ContactForm />
      <Newsletter />
    </div>
  );
};

export default LandingPage;
