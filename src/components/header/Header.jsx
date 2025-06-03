import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <section className="header-left">
        <div className="header-gradient" />
        <div className="header-profile-content">
          <div className="header-profile-wrapper">
            <img 
              src="/b.jpg" 
              alt="Dawit Tesfaye" 
              className="header-profile-image" 
            />
          </div>
        </div>
      </section>

      <section className="header-right">
        <h2 className="header-title">
          Welcome
        </h2>
        <p className="header-description">
          I'm <strong>Dawit Tesfaye</strong>, currently pursuing Software Engineering at Debre Markos University.
          <br />
          I enjoy designing user-centric web applications with clean code and innovative solutions.
          <br />
          This portfolio showcases my projects, skills, and passion for frontend development, demonstrating my commitment to crafting engaging and efficient digital experiences.
        </p>
      </section>
    </div>
  );
};

export default Header;
