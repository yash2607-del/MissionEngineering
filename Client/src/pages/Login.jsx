import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock authentication - in real app, this would be an API call
    // For demo purposes, we'll check email to determine role
    let userRole = 'student';
    if (formData.email.includes('admin')) {
      userRole = 'admin';
    }
    
    // Store user info in localStorage (in real app, use secure storage)
    localStorage.setItem('user', JSON.stringify({
      email: formData.email,
      role: userRole,
      name: userRole === 'admin' ? 'Admin User' : 'John Doe'
    }));
    
    // Redirect based on role
    if (userRole === 'admin') {
      window.location.href = '/admin-dashboard';
    } else {
      window.location.href = '/student-dashboard';
    }
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={5}>
            <Card className="login-card">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="login-title">Welcome Back</h2>
                  <p className="login-subtitle">Login to your account</p>
                </div>

                <Form onSubmit={handleSubmit}>
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

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check 
                      type="checkbox" 
                      label="Remember me" 
                      className="remember-check"
                    />
                    <Link to="#" className="forgot-link">Forgot Password?</Link>
                  </div>

                  <Button type="submit" className="login-btn w-100 mb-3">
                    Login
                  </Button>

                  <div className="text-center">
                    <p className="signup-text">
                      Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
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

export default Login;
