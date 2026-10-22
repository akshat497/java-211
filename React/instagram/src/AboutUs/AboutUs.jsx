
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <span className="about-label">ABOUT US</span>

          <h2>
            Building Skills.
            <span> Shaping Futures.</span>
          </h2>

          <p className="about-description">
            Welcome to our institute, where learning meets innovation.
            We help students develop practical skills through expert
            guidance, hands-on projects, and industry-focused training.
          </p>

          <p className="about-description">
            Our goal is to make quality education accessible and prepare
            learners for real-world challenges in technology and business.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <div className="feature-icon">01</div>
              <div>
                <h3>Expert Trainers</h3>
                <p>Learn from experienced industry professionals.</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">02</div>
              <div>
                <h3>Practical Learning</h3>
                <p>Build real projects and develop job-ready skills.</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">03</div>
              <div>
                <h3>Career Support</h3>
                <p>Get guidance to prepare for your next career step.</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="about-button">
            Get in Touch <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="about-visual">
          <div className="about-image-placeholder">
            <div className="about-image-content">
              <span className="about-image-tag">LEARN · BUILD · GROW</span>
              <h3>Your Future Starts Here.</h3>
              <p>
                Discover your potential with practical,
                industry-focused learning.
              </p>
            </div>
          </div>

          <div className="about-stat">
            <strong>100%</strong>
            <span>Focus on Practical Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
