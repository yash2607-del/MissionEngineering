import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Scroll to top */}
      <div className="scroll-to-top-container">
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>

      {/* Main footer columns */}
      <div className="footer-main">
        <Container>
          <Row className="g-3">
            {/* Quick Links */}
            <Col lg={3} md={6} xs={6}>
              <h5 className="footer-heading">Quick Links</h5>
              <div className="footer-divider"></div>
              <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </Col>

            {/* Coaching Programs */}
            <Col lg={3} md={6} xs={6}>
              <h5 className="footer-heading">Coaching Programs</h5>
              <div className="footer-divider"></div>
              <ul className="footer-links">
                <li><a href="/leet">LEET Coaching</a></li>
                <li><a href="/polytechnic">Polytechnic Entrance</a></li>
                <li><a href="/semester-coaching">Semester Coaching</a></li>
                <li><a href="/placement">Campus Placement</a></li>
              </ul>
            </Col>

            {/* Get In Touch */}
            <Col lg={3} md={6} xs={12}>
              <h5 className="footer-heading">Get in Touch</h5>
              <div className="footer-divider"></div>
              <div className="footer-contact-vertical">
                <div className="contact-item-vertical">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>In Front Of Metro Gate No.2, Uttam Nagar East, New Delhi - 110059</span>
                </div>
                <div className="contact-item-vertical">
                  <FaPhone className="contact-icon" />
                  <span>+91 96 439 439 14</span>
                </div>
                <div className="contact-item-vertical">
                  <FaEnvelope className="contact-icon" />
                  <span>missionengineering2014@gmail.com</span>
                </div>
              </div>
            </Col>

            {/* Connect with us */}
            <Col lg={3} md={6} xs={12}>
              <h5 className="footer-heading">Connect With Us</h5>
              <div className="footer-divider"></div>
              <p className="social-text">Follow us for updates and success stories.</p>
              <div className="social-icons-container">
                <a href="https://www.facebook.com/missionengineering.in/" target="_blank" rel="noreferrer" className="social-icon facebook" title="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://x.com/missionenginee" target="_blank" rel="noreferrer" className="social-icon twitter" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com/missionengineering2014/" target="_blank" rel="noreferrer" className="social-icon instagram" title="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/mission-engineering/" target="_blank" rel="noreferrer" className="social-icon linkedin" title="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://www.youtube.com/@MissionEngineering_Official" target="_blank" rel="noreferrer" className="social-icon youtube" title="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <Container>
          <p className="copyright text-center">
            © 2026 Mission Engineering. All Rights Reserved. <span className="d-none d-md-inline">|</span><br className="d-md-none" /> Designed &amp; Developed by <a href="https://www.linkedin.com/in/yashh26/ " className="text-white text-decoration-none fw-bold"> Yash Raj</a>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
