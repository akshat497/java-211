
import { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Demo submission only; no email is sent.
    console.log("Contact form data:", formData);

    setStatus("Thank you! Your form has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-label">CONTACT US</span>

          <h2>
            Let's Start a <span>Conversation.</span>
          </h2>

          <p>
            Have a question about our courses or services?
            Fill out the form or reach out to us directly.
            We would love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <p className="contact-info-description">
              Our team is here to help you find the right
              learning path.
            </p>

            <div className="contact-detail">
              <div className="contact-icon">E</div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:info@example.com">
                  info@example.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">P</div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:+911234567890">
                  +91 12345 67890
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">L</div>
              <div>
                <h4>Visit Us</h4>
                <p>Enter your institute address here.</p>
              </div>
            </div>

            <div className="contact-note">
              We are happy to answer your questions and
              help you get started.
            </div>
          </div>

          <div className="contact-form-card">
            <h3>Send Us a Message</h3>
            <p className="contact-form-description">
              Fill in your details below.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What is your enquiry about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="contact-submit" type="submit">
                Send Message <span aria-hidden="true">→</span>
              </button>

              {status && (
                <p className="contact-status" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
