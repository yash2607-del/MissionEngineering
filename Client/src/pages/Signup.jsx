import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup submitted:', formData);
  };

  return (
    <div className="signup-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100 py-5">
          <Col md={7} lg={6}>
            <Card className="signup-card">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="signup-title">Create Account</h2>
                  <p className="signup-subtitle">Join Mission Engineering today</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label className="form-label">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="form-label">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label className="form-label">Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formRole">
                    <Form.Label className="form-label">Select Role</Form.Label>
                    <div className="role-selection">
                      <Form.Check
                        type="radio"
                        label="Student"
                        name="role"
                        value="student"
                        checked={formData.role === 'student'}
                        onChange={handleChange}
                        className="role-radio"
                      />
                      <Form.Check
                        type="radio"
                        label="Admin"
                        name="role"
                        value="admin"
                        checked={formData.role === 'admin'}
                        onChange={handleChange}
                        className="role-radio"
                      />
                    </div>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label className="form-label">Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Create password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label className="form-label">Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4" controlId="formTerms">
                    <Form.Check 
                      type="checkbox" 
                      label="I agree to the Terms & Conditions" 
                      required
                      className="terms-check"
                    />
                  </Form.Group>

                  <Button type="submit" className="signup-btn w-100 mb-3">
                    Sign Up
                  </Button>

                  <div className="text-center">
                    <p className="login-text">
                      Already have an account? <Link to="/login" className="login-link">Login</Link>
                    </p>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
