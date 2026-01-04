import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-3">
          <Col lg={3} md={6} className="mb-3">
            <h5 className="footer-heading">ABOUT US</h5>
            <ul className="footer-links">
              <li><a href="/about">About Mission Engineering</a></li>
              <li><a href="#">Apply For Faculty Position</a></li>
              <li><a href="#">Photo Gallery</a></li>
              <li><a href="#">Video Gallery</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <h5 className="footer-heading">COACHING</h5>
            <ul className="footer-links">
              <li><a href="/coaching">LEET</a></li>
              <li><a href="/coaching">Polytechnic Entrance</a></li>
              <li><a href="/coaching">Polytechnic Subjects</a></li>
              <li><a href="/coaching">Polytechnic Placement</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <h5 className="footer-heading">STUDENT's TALK</h5>
            <ul className="footer-links">
              <li><a href="#">Mission Engineering Toppers</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="#">Alumni</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <h5 className="footer-heading">ENQUIRY</h5>
            <ul className="footer-links">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Study Material</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col lg={6} className="mb-2">
            <h5 className="footer-heading">MISSION ENGINEERING</h5>
            <p className="footer-address">
              In Front Of Metro Gate No.2, Uttam Nagar East, New Delhi - 110059
            </p>
          </Col>
          <Col lg={6} className="mb-2 text-lg-end">
            <div className="social-icons">
              <a href="https://www.facebook.com/missionengineering.in/" target="_blank" rel="noreferrer" className="social-icon"><FaFacebook size={24} /></a>
              <a href="https://x.com/missionenginee" target="_blank" rel="noreferrer" className="social-icon"><FaTwitter size={24} /></a>
              <a href="https://www.instagram.com/missionengineering2014/" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram size={24} /></a>
              <a href="https://www.linkedin.com/company/mission-engineering/" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin size={24} /></a>
              <a href="https://www.youtube.com/@MissionEngineering_Official" target="_blank" rel="noreferrer" className="social-icon"><FaYoutube size={24} /></a>
            </div>
          </Col>
        </Row>
        <Row className="pt-2 mt-2">
          <Col className="text-center">
            <p className="copyright">© 2026 Mission Engineering. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
