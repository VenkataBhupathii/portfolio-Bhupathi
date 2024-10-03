import React from 'react';

const Projects = () => {
  return (
    <div className="projects fade-in">
      <h1>My Projects</h1>
      <div className="project">
        <h2>E-commerce Backend System</h2>
        <ul>
          <li>
            <p>Developed the backend for an e-commerce project aimed at providing a secure and efficient platform for online shopping.</p>
          </li>
          <li>
            <p>Implemented JWT authentication to enhance data security and user authentication.</p>
          </li>
          <li>
            <p>Implemented role-based access control to protect sensitive customer data.</p>
          </li>
        </ul>
        <a href="https://github.com/VenkataBhupathii/ecommerce" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div className="project">
        <h2>Task Manager</h2>
        <ul>
          <li>
            <p>Developed a web-based task management application that allows users to efficiently manage their tasks.</p>
          </li>
          <li>
            <p>Used CRUD operations for writing and editing their tasks.</p>
          </li>
        </ul>
        <a href="https://github.com/VenkataBhupathii" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default Projects;



