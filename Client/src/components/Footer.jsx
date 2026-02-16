import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
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
      <Container>
        <Row className="py-5">
          <Col lg={4} md={6} className="mb-4">
            <h5 className="footer-heading">QUICK LINKS</h5>
            <div className="footer-divider"></div>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <h5 className="footer-heading">COACHING PROGRAMS</h5>
            <div className="footer-divider"></div>
            <ul className="footer-links">
              <li><a href="/leet">LEET Coaching</a></li>
              <li><a href="/polytechnic">Polytechnic Entrance</a></li>
              <li><a href="/semester-coaching">Semester Coaching</a></li>
              <li><a href="/placement">Campus Placement</a></li>
            </ul>
          </Col>
          <Col lg={4} md={12} className="mb-4">
            <h5 className="footer-heading">CONNECT WITH US</h5>
            <div className="footer-divider"></div>
            <p className="social-text">Follow us on social media for updates and success stories.</p>
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
        <Row className="footer-contact-section pt-4 mt-3">
          <Col lg={12} className="mb-3">
            <h5 className="footer-heading text-center">GET IN TOUCH</h5>
            <div className="footer-divider mx-auto"></div>
            <div className="contact-info-row">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>In Front Of Metro Gate No.2, Uttam Nagar East, New Delhi - 110059</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 96 439 439 14</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>missionengineering2014@gmail.com</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="copyright">© 2026 Mission Engineering. All Rights Reserved. | Designed & Developed by Yash Raj</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
