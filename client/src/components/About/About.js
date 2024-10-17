import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>We are a team dedicated to helping people identify and manage skin diseases.</p>
      <div className="about-team">
        <div className="team-member">
          <img src="../avatar-1726461041703.jpg" alt="Team Member 1" />
          <h3>Om Singh Tongar</h3>
        </div>
        <div className="team-member">
          <img src="C:\Users\omsin\OneDrive\Pictures\WhatsApp Image 2024-04-05 at 12.54.50_17861554.jpg" alt="Team Member 2" />
          <h3>Tushsar Tanishq</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
