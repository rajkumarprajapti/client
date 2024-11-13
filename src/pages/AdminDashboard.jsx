import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      const projectsResponse = await axios.get('/api/projects');
      const clientsResponse = await axios.get('/api/clients');
      const subscriptionsResponse = await axios.get('/api/subscriptions');
      setProjects(projectsResponse.data);
      setClients(clientsResponse.data);
      setSubscriptions(subscriptionsResponse.data);
    };
    fetchAdminData();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Projects</h3>
        {projects.map((project) => (
          <div key={project._id}>
            <p>{project.name}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Clients</h3>
        {clients.map((client) => (
          <div key={client._id}>
            <p>{client.name}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Subscriptions</h3>
        {subscriptions.map((sub) => (
          <p key={sub._id}>{sub.email}</p>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
