import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Nav, Dropdown, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Person, Book, Gear, BoxArrowRight, BarChart, Clock, Award, Calendar, ArrowLeft } from 'react-bootstrap-icons';
import './StudentDashboard.css';
import { useAuth } from '../auth/useAuth';
import { fetchTests } from '../api/studentApi';

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const loadTests = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await fetchTests(token);
        setTests(data.tests || []);
      } catch (err) {
        setError(err?.message || 'Failed to load tests');
        console.error('Error fetching tests:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTests();
  }, [token]);

  const sidebarItems = [
    { id: 'overview', icon: BarChart, label: 'Overview' },
    { id: 'tests', icon: Book, label: 'View Tests' },
    { id: 'profile', icon: Person, label: 'Profile' },
    { id: 'logout', icon: BoxArrowRight, label: 'Logout', action: handleLogout }
  ];

  const mockTests = [
    { id: 1, title: 'Mathematics Test 1', subject: 'Mathematics', date: '2024-01-20', status: 'Available', duration: '60 min' },
    { id: 2, title: 'Physics Quiz', subject: 'Physics', date: '2024-01-22', status: 'Available', duration: '45 min' },
    { id: 3, title: 'Chemistry Assessment', subject: 'Chemistry', date: '2024-01-25', status: 'Upcoming', duration: '90 min' },
    { id: 4, title: 'Biology Test', subject: 'Biology', date: '2024-01-18', status: 'Completed', duration: '60 min', score: '85%' }
  ];

  const renderContent = () => {
    const totalTests = tests.length;
    const completedTests = 0; // TODO: Track completed tests
    const pendingTests = tests.filter(t => t.active).length;
    const avgScore = '85%'; // TODO: Calculate from actual scores

    switch (activeSection) {
      case 'overview':
        return (
          <div className="overview-section">
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="welcome-banner">
              <h2>Welcome back, Student!</h2>
              <p>Track your progress and access your learning materials</p>
            </div>
            
            <Row className="stats-row">
              <Col md={3}>
                <Card className="stat-card">
                  <Card.Body className="text-center">
                    <Book className="stat-icon text-primary" size={32} />
                    <h3>{totalTests}</h3>
                    <p>Total Tests</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="stat-card">
                  <Card.Body className="text-center">
                    <Award className="stat-icon text-success" size={32} />
                    <h3>{avgScore}</h3>
                    <p>Average Score</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="stat-card">
                  <Card.Body className="text-center">
                    <Clock className="stat-icon text-warning" size={32} />
                    <h3>{pendingTests}</h3>
                    <p>Pending Tests</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="stat-card">
                  <Card.Body className="text-center">
                    <BarChart className="stat-icon text-info" size={32} />
                    <h3>{completedTests}</h3>
                    <p>Completed</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Card className="recent-tests-card">
              <Card.Header>
                <h4>Recent Tests</h4>
              </Card.Header>
              <Card.Body>
                {loading ? (
                  <div className="text-center text-muted">Loading tests...</div>
                ) : tests.length === 0 ? (
                  <div className="text-center text-muted">No tests available</div>
                ) : (
                  <>
                    <div className="test-list">
                      {tests.slice(0, 3).map(test => (
                        <div key={test.id} className="test-item">
                          <div className="test-info">
                            <h5>{test.title}</h5>
                            <p>{test.subject} • {test.date} • {test.duration || 'N/A'}</p>
                          </div>
                          <div className="test-status">
                            <span className="status-badge available">
                              Available
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="primary" className="mt-3" onClick={() => setActiveSection('tests')}>
                          View All Tests
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
          </div>
        );

      case 'tests':
        return (
          <div className="tests-section">
            {error && <Alert variant="danger">{error}</Alert>}
            <h3>Available Tests</h3>
            {loading ? (
              <div className="text-center text-muted py-4">Loading tests...</div>
            ) : tests.length === 0 ? (
              <div className="text-center text-muted py-4">No tests available at the moment</div>
            ) : (
              <Row>
                {tests.map(test => (
                  <Col md={6} lg={4} key={test.id} className="mb-4">
                    <Card className="test-card">
                      <Card.Body>
                        <h5>{test.title}</h5>
                        <p className="test-subject">{test.subject}</p>
                        <div className="test-details">
                          <p><Clock size={16} /> {test.duration || 'N/A'}</p>
                          <p><Calendar size={16} /> {test.date}</p>
                          {test.questions && <p>Questions: {test.questions}</p>}
                        </div>
                        <div className="test-footer">
                          <span className="status-badge available">
                            Available
                          </span>
                          <Button 
                            variant="primary" 
                            size="sm"
                            onClick={() => window.open(test.link, '_blank')}
                          >
                            Start Test
                          </Button>
                        </div>
                        {test.details && (
                          <div className="mt-2">
                            <small className="text-muted">{test.details}</small>
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        );

      case 'profile':
        return (
          <div className="profile-section">
            <Card>
              <Card.Header>
                <h4>Profile Settings</h4>
              </Card.Header>
              <Card.Body>
                <div className="profile-info">
                  <div className="avatar-section">
                    <div className="avatar-placeholder">
                      <Person size={48} />
                    </div>
                    <Button variant="outline-primary" size="sm">Change Avatar</Button>
                  </div>
                  <div className="user-details">
                    <h5>John Doe</h5>
                    <p>john.doe@example.com</p>
                    <p>+91 9876543210</p>
                    <p>Student ID: STU001</p>
                  </div>
                </div>
                <hr />
                <div className="profile-actions">
                  <Button variant="primary">Edit Profile</Button>
                  <Button variant="outline-secondary">Change Password</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="student-dashboard">
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="dashboard-sidebar">
          <div className="sidebar-header">
            <button className="back-btn" onClick={() => navigate('/')}>
              <ArrowLeft size={20} />
            </button>
          </div>
          <Nav className="sidebar-nav flex-column">
            {sidebarItems.map(item => (
              <Nav.Item key={item.id}>
                <Nav.Link
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={item.action || (() => setActiveSection(item.id))}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        {/* Main Content Area */}
        <div className="dashboard-main">
          {/* Dashboard Header */}
          <div className="dashboard-header">
            <h1>Student Dashboard</h1>
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="user-dropdown" className="user-dropdown-btn">
                <Person size={24} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setActiveSection('profile')}>
                  <Person className="me-2" /> Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>
                  <BoxArrowRight className="me-2" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Container fluid>
            <div className="content-area">
              {renderContent()}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
