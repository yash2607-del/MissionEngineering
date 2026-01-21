import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeSlash } from 'react-bootstrap-icons';
import './Signup.css';

import { useAuth } from '../auth/useAuth';

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    setLoading(true);
    try {
      const user = await signup({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      });
      navigate('/student-dashboard', { replace: true });
    } catch (err) {
      setError(err?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="auth-back-container">
        <Container>
          <button
            type="button"
            className="auth-back-btn"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </Container>
      </div>
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
                  {error ? (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  ) : null}
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

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label className="form-label">Password</Form.Label>
                        <div className="password-input-wrapper">
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="Create password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                          <button
                            type="button"
                            className="password-toggle-btn"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                          >
                            {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label className="form-label">Confirm Password</Form.Label>
                        <div className="password-input-wrapper">
                          <Form.Control
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                          <button
                            type="button"
                            className="password-toggle-btn"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                          >
                            {showConfirmPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
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
                    {loading ? 'Creating…' : 'Sign Up'}
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
