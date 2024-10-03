import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section fade-in">
      <h1>Contact Me</h1>
      <p>Email: Venkatbhupathi777@gmail.com</p>
      <p>Phone: 8096065585</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/contact-venkatabhupathi/" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

