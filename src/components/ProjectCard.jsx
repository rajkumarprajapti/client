import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover rounded-md"/>
      <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <button className="mt-4 text-blue-500">Read More</button>
    </div>
  );
};

export default ProjectCard;
