import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Dave Tesfay
      </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Poroject</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/dave-tesfa" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://t.me/deaave" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Dave Tesfay. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
