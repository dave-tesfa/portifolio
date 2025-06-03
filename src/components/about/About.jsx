import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h5 className="subtitle">Get to Know</h5>
      <h2 className="title">About Me</h2>

      <div className="about-container">
        <p className="description">
          Hello! I’m <strong>Dawit Tesfaye</strong>, a 22-year-old passionate software enthusiast currently studying Software Engineering at Debre Markos University.
          <br /><br />
          My coursework includes <strong>HTML, Java, PHP, and Java</strong>, where I have gained solid foundations in web development and programming.
          <br /><br />
          I’m always eager to learn and grow in this fast-paced industry, and I enjoy crafting efficient, user-friendly web applications.
          <br /><br />
          When I’m not coding, I love spending quality time with friends and family, playing soccer, and immersing myself in music. 
          This balance fuels my creativity and keeps me motivated for new challenges.
        </p>
      </div>
    </section>
  );
};

export default About;
