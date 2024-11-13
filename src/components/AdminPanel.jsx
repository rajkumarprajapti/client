import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsResponse = await axios.get('http://localhost:5000/api/projects');
      const clientsResponse = await axios.get('http://localhost:5000/api/clients');
      const subscriptionsResponse = await axios.get('http://localhost:5000/api/subscriptions');
      setProjects(projectsResponse.data);
      setClients(clientsResponse.data);
      setSubscriptions(subscriptionsResponse.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Admin Panel</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Projects</h3>
        <ul>
          {projects.map(project => (
            <li key={project._id} className="mb-4">
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Clients</h3>
        <ul>
          {clients.map(client => (
            <li key={client._id} className="mb-4">
              <h4>{client.name}</h4>
              <p>{client.designation}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Subscriptions</h3>
        <ul>
          {subscriptions.map(sub => (
            <li key={sub._id} className="mb-4">
              <p>{sub.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
