import React, { useState, useRef } from 'react';
import {
  Container, Row, Col, Form, Button,
  Toast, ToastContainer
} from 'react-bootstrap';

import {
  FaMapMarkerAlt, FaPhone, FaEnvelope,

} from 'react-icons/fa';

import { useForm } from '@formspree/react';

import './Contact.css';

const Contact = () => {

  const [state, handleSubmit] = useForm("xlgqbryq");

  const formRef = useRef();

  const [showToast, setShowToast] = useState(false);

  // Custom submit handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await handleSubmit(e);

    if (!state.submitting) {

      // Clear form
      formRef.current.reset();

      // Show toast
      setShowToast(true);
    }
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <h1>Contact Us</h1>
          <p className="lead">Get in touch with us today and we'll help you land in your dream college!</p>
        </Container>
      </section>

      <section className="contact-content py-3">
        <Container>
          <Row className="g-4">

            {/* LEFT SIDE */}
            <Col lg={5} md={5} xs={12}>
              <h2 className="contact-section-title">Get In Touch</h2>
              <div className="contact-info-card">

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
                    <p>missionengineering2014@gmail.com</p>
                  </div>
                </div>

              </div>
            </Col>

            {/* RIGHT SIDE FORM */}
            <Col lg={7} md={7} xs={12}>
              <h2 className="contact-section-title">Send Us a Message</h2>
              <div className="contact-form">

                <Form ref={formRef} onSubmit={handleFormSubmit}>

                  <Form.Group className="mb-2">
                    <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="message"
                      placeholder="Enter your message"
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>

                </Form>

              </div>

            </Col>

          </Row>
        </Container>
      </section>

      {/* MAP SECTION */}
      <section className="map-section mt-5" style={{ lineHeight: 0 }}>
        <Container fluid className="p-0 m-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1752593501446!2d77.06152277528875!3d28.62450897566908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a8dee41d31%3A0xcbffdd0e76470236!2sMission%20Engineering%20%7C%20LEET%20Coaching%20in%20Delhi%20%7C%20B.tech%20Entrance%20Coaching%20%7C%20LEET%20Coaching%20after%20Diploma!5e0!3m2!1sen!2sin!4v1784796282164!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0, display: 'block', width: '100%' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </Container>
      </section>

      {/* TOAST */}
      <ToastContainer position="top-end" className="p-3">

        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg="success"
        >

          <Toast.Header>
            <strong className="me-auto">Message sent successfully!</strong>
          </Toast.Header>

          <Toast.Body className="text-white">
            Thank you for reaching out! We will get back to you as soon as possible.
          </Toast.Body>

        </Toast>

      </ToastContainer>

    </div>
  );
};

export default Contact;
