import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formsubmit.co/ajax/dawit5662@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent!");
        formRef.current.reset();
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("Failed to send. Please try again.");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      setStatus("Error sending message.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <a
              href="mailto:biretade881@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact__option-icon-link"
              style={{ color: "inherit" }}
            >
              <MdOutlineEmail className="contact__option-icon" />
            </a>
            <h4>Email</h4>
            <h5>dawit5662@gmail.com</h5>
            <a href="mailto:dawit5662@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <a
              href="https://t.me/Deaave"
              target="_blank"
              rel="noreferrer"
              className="contact__option-icon-link"
              style={{ color: "inherit" }}
            >
              <FaTelegramPlane className="contact__option-icon" />
            </a>
            <h4>Telegram</h4>
            <a href="https://t.me/Deaave" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
          <input type="text" name="name" placeholder="Enter you Full Name" required />
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <textarea name="message" rows="7" placeholder=" Fill Your Message" required></textarea>

          {/* Hidden fields for Formsubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {/* Success/Error message */}
          {status && (
            <p className={`status-message ${status.includes("sent") ? "success" : "error"}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
