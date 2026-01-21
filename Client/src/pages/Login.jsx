import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeSlash } from 'react-bootstrap-icons';
import './Login.css';

import { useAuth } from '../auth/useAuth';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const user = await login({ email: formData.email, password: formData.password });

      if (from) {
        navigate(from, { replace: true });
        return;
      }

      navigate(user.role === 'admin' ? '/admin-dashboard' : '/student-dashboard', { replace: true });
    } catch (err) {
      setError(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
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
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={5}>
            <Card className="login-card">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="login-title">Welcome Back</h2>
                  <p className="login-subtitle">Login to your account</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  {error ? (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  ) : null}
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
                    <div className="password-input-wrapper">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
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

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check 
                      type="checkbox" 
                      label="Remember me" 
                      className="remember-check"
                    />
                    <Link to="#" className="forgot-link">Forgot Password?</Link>
                  </div>

                  <Button type="submit" className="login-btn w-100 mb-3" disabled={loading}>
                    {loading ? 'Logging in…' : 'Login'}
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
