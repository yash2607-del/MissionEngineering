import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Person, Book, Gear, BoxArrowRight, BarChart, Clock, Award, Calendar } from 'react-bootstrap-icons';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/');
  };

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
    switch (activeSection) {
      case 'overview':
        return (
          <div className="overview-section">
            <div className="welcome-banner">
              <h2>Welcome back, Student!</h2>
              <p>Track your progress and access your learning materials</p>
            </div>
            
            <Row className="stats-row">
              <Col md={3}>
                <Card className="stat-card">
                  <Card.Body className="text-center">
                    <Book className="stat-icon text-primary" size={32} />
                    <h3>12</h3>
                    <p>Total Tests</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="stat-card">
                  <Card.Body className="text-center">
                    <Award className="stat-icon text-success" size={32} />
                    <h3>85%</h3>
                    <p>Average Score</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="stat-card">
                  <Card.Body className="text-center">
                    <Clock className="stat-icon text-warning" size={32} />
                    <h3>3</h3>
                    <p>Pending Tests</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="stat-card">
                  <Card.Body className="text-center">
                    <BarChart className="stat-icon text-info" size={32} />
                    <h3>9</h3>
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
                <div className="test-list">
                  {mockTests.slice(0, 3).map(test => (
                    <div key={test.id} className="test-item">
                      <div className="test-info">
                        <h5>{test.title}</h5>
                        <p>{test.subject} • {test.date} • {test.duration}</p>
                      </div>
                      <div className="test-status">
                        <span className={`status-badge ${test.status.toLowerCase()}`}>
                          {test.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="primary" className="mt-3" onClick={() => setActiveSection('tests')}>
                  View All Tests
                </Button>
              </Card.Body>
            </Card>
          </div>
        );

      case 'tests':
        return (
          <div className="tests-section">
            <h3>Available Tests</h3>
            <Row>
              {mockTests.map(test => (
                <Col md={6} lg={4} key={test.id} className="mb-4">
                  <Card className="test-card">
                    <Card.Body>
                      <h5>{test.title}</h5>
                      <p className="test-subject">{test.subject}</p>
                      <div className="test-details">
                        <p><Clock size={16} /> {test.duration}</p>
                        <p><Calendar size={16} /> {test.date}</p>
                      </div>
                      <div className="test-footer">
                        <span className={`status-badge ${test.status.toLowerCase()}`}>
                          {test.status}
                        </span>
                        {test.status === 'Available' && (
                          <Button variant="primary" size="sm">Start Test</Button>
                        )}
                        {test.status === 'Completed' && (
                          <Button variant="success" size="sm">View Results</Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
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
      <div className="dashboard-header">
        <Container fluid>
          <Row className="align-items-center">
            <Col>
              <h2>Student Portal</h2>
            </Col>
            <Col className="text-end">
              <Dropdown align="end">
                <Dropdown.Toggle variant="light" id="user-dropdown">
                  <Person size={20} className="me-2" />
                  John Doe
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
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid className="dashboard-content">
        <Row>
          <Col md={3} className="sidebar-col">
            <Nav className="sidebar-nav flex-column">
              {sidebarItems.map(item => (
                <Nav.Item key={item.id}>
                  <Nav.Link
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={item.action || (() => setActiveSection(item.id))}
                  >
                    <item.icon className="me-2" size={20} />
                    {item.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col md={9} className="content-col">
            <div className="content-area">
              {renderContent()}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentDashboard;
