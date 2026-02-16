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
  const [validationErrors, setValidationErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, text: '', color: '' });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push('At least 8 characters');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('One uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('One lowercase letter');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('One number');
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      errors.push('One special character (!@#$%^&*)');
    }
    return errors;
  };

  const calculatePasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) score++;

    if (score === 0) return { score: 0, text: '', color: '' };
    if (score <= 2) return { score: 1, text: 'Weak', color: '#dc3545' };
    if (score <= 3) return { score: 2, text: 'Fair', color: '#ffc107' };
    if (score <= 4) return { score: 3, text: 'Good', color: '#17a2b8' };
    return { score: 4, text: 'Strong', color: '#28a745' };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Calculate password strength
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate all fields
    const errors = {};
    
    if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    const passwordErrors = validatePassword(formData.password);
    if (passwordErrors.length > 0) {
      errors.password = 'Password must contain: ' + passwordErrors.join(', ');
    }
    
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
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
                      placeholder="Enter your email (e.g., user@gmail.com)"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`form-input ${validationErrors.email ? 'is-invalid' : ''}`}
                    />
                    {validationErrors.email && (
                      <div className="invalid-feedback d-block">
                        {validationErrors.email}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label className="form-label">Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your 10-digit phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`form-input ${validationErrors.phone ? 'is-invalid' : ''}`}
                    />
                    {validationErrors.phone && (
                      <div className="invalid-feedback d-block">
                        {validationErrors.phone}
                      </div>
                    )}
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
                            className={`form-input ${validationErrors.password ? 'is-invalid' : ''}`}
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
                        {formData.password && passwordStrength.text && (
                          <div className="password-strength-indicator mt-2">
                            <div className="d-flex align-items-center gap-2 mb-1">
                              <div className="strength-bar-container">
                                <div 
                                  className="strength-bar" 
                                  style={{ 
                                    width: `${(passwordStrength.score / 4) * 100}%`,
                                    backgroundColor: passwordStrength.color 
                                  }}
                                ></div>
                              </div>
                              <small style={{ color: passwordStrength.color, fontWeight: '600' }}>
                                {passwordStrength.text}
                              </small>
                            </div>
                          </div>
                        )}
                        {validationErrors.password && (
                          <div className="invalid-feedback d-block">
                            {validationErrors.password}
                          </div>
                        )}
                        <small className="text-muted d-block mt-1">
                          Must include: 8+ characters, uppercase, lowercase, number, special character
                        </small>
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
                            className={`form-input ${validationErrors.confirmPassword ? 'is-invalid' : ''}`}
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
                        {validationErrors.confirmPassword && (
                          <div className="invalid-feedback d-block">
                            {validationErrors.confirmPassword}
                          </div>
                        )}
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
