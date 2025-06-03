import React from "react";
import "./portfolio.css";
import { FaCode, FaSchool, FaBullhorn } from "react-icons/fa"; // Updated marketing icon

const data = [
  {
    id: 1,
    icon: <FaCode size={40} />,
    title: "Personal Website",
    github: "https://github.com/dave-tesfa/portifolio.git",
    color: "#6c63ff",
  },
  {
    id: 2,
    icon: <FaSchool size={40} />,
    title: "trading",
    github: "https://github.com/dave-tesfa/trading.git",
    color: "#00b894",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, icon, title, github, color }) => (
          <article key={id} className="portfolio__item">
            <div
              className="portfolio__item-icon"
              style={{
                backgroundColor: color,
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              {icon}
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
