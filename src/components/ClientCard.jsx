import React from 'react';

const ClientCard = ({ client }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={client.imageUrl} alt={client.name} className="w-24 h-24 object-cover rounded-full"/>
      <h3 className="text-xl font-semibold mt-4">{client.name}</h3>
      <p className="text-gray-600 mt-2">{client.designation}</p>
      <p className="text-gray-500 mt-1">{client.description}</p>
    </div>
  );
};

export default ClientCard;
