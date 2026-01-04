import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
    

      <section className="contact-content py-5">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <div className="contact-info-card">
                <h2>Get In Touch</h2>
                <div className="info-item">
                  <FaMapMarkerAlt size={30} className="contact-icon me-3" />
                  <div>
                    <h5>Address</h5>
                    <p>In Front Of Metro Gate No.2, Uttam Nagar East, New Delhi - 110059</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaPhone size={30} className="contact-icon phone-icon me-3" />
                  <div>
                    <h5>Phone</h5>
                    <p>96 439 439 14</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaEnvelope size={30} className="contact-icon me-3" />
                  <div>
                    <h5>Email</h5>
                    <p>missionengineering@gmail.com</p>
                  </div>
                </div>

                <div className="contact-social">
                  <h5>Follow Us</h5>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/missionengineering.in/" target="_blank" rel="noreferrer" className="social-icon">
                      <FaFacebook size={22} />
                    </a>
                    <a href="https://x.com/missionenginee" target="_blank" rel="noreferrer" className="social-icon">
                      <FaTwitter size={22} />
                    </a>
                    <a href="https://www.instagram.com/missionengineering2014/" target="_blank" rel="noreferrer" className="social-icon">
                      <FaInstagram size={22} />
                    </a>
                    <a href="https://www.linkedin.com/company/mission-engineering/" target="_blank" rel="noreferrer" className="social-icon">
                      <FaLinkedin size={22} />
                    </a>
                    <a href="https://www.youtube.com/@MissionEngineering_Official" target="_blank" rel="noreferrer" className="social-icon">
                      <FaYoutube size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact-form">
                <h2>Send Us a Message</h2>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your phone number" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
