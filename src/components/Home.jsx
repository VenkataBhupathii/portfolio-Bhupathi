import React from 'react';
import Image1 from '../assets/b1.jpg'; // Include file extension
// You can choose to use Image2 instead of Image1 if you prefer.

const Home = () => {
  return (
    <div className="hero">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${Image1})`, // Use a single static image
        }}
      />
      <div className="content">
        <h1>Hello, I'm Venkata Bhupathi</h1>
        <h3>A passionate backend Java developer</h3>
        <a href="/projects" className="btn">View My Work</a>
      </div>
    </div>
  );
};

export default Home;
