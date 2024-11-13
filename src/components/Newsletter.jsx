import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/subscriptions', { email });
      alert('Subscription successful!');
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter your email"
        required
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4">Subscribe</button>
    </form>
  );
};

export default Newsletter;
