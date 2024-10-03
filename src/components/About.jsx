import React from 'react';

const About = () => {
  return (
    <div className="about-section fade-in">
      <h1>About Me</h1>
      <p>
        Hi, I'm Venkata Bhupathi, a fresher and passionate backend Java developer.
      </p>
      <p>
        I have a good understanding of backend technologies like <strong>Spring Boot</strong>, 
        <strong>MySQL</strong>, <strong>Java</strong>, and <strong>Hibernate</strong>. 
        I enjoy building efficient server-side applications and look forward to learning more in this field.
      </p>
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>Java</li>
        <li>Spring Boot</li>
        <li>MySQL</li>
        <li>Hibernate</li>
        <li>RESTful APIs</li>
      </ul>
      <h2>In My Free Time</h2>
      <p>
        I enjoy spending time with friends and family, watching movies, and playing cricket.
      </p>
    </div>
  );
};

export default About;


