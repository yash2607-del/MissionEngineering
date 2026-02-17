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

  const [state, handleSubmit] = useForm("xvzbrklb");

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
          <p className="lead">We'd love to hear from you. Get in touch with us today!</p>
        </Container>
      </section>

      <section className="contact-content py-5">
        <Container>
          <Row className="g-4">

            {/* LEFT SIDE */}
            <Col lg={6}>
              <div className="contact-info-card">

                <h2>Get In Touch</h2>

                <div className="info-item">
                  <FaMapMarkerAlt size={30} className="contact-icon me-3" />
                  <div>
                    <h5>Address</h5>
                    <p>Uttam Nagar East, New Delhi - 110059</p>
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
            <Col lg={6}>

              <div className="contact-form">

                <h2>Send Us a Message</h2>

                <Form ref={formRef} onSubmit={handleFormSubmit}>

                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
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
            <strong className="me-auto">Mission Engineering</strong>
          </Toast.Header>

          <Toast.Body className="text-white">
            ✅ Message sent successfully!
          </Toast.Body>

        </Toast>

      </ToastContainer>

    </div>
  );
};

export default Contact;
