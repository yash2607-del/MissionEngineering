import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav, Dropdown, Form, Modal, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Person, Bell, Gear, BoxArrowRight, BarChart, Plus, PencilSquare, Trash, Send } from 'react-bootstrap-icons';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('notifications');
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Welcome to Mission Engineering', message: 'Get started with your learning journey!', date: '2024-01-15', active: true },
    { id: 2, title: 'New Test Available', message: 'Mathematics test is now available for students.', date: '2024-01-14', active: true }
  ]);
  const [tests, setTests] = useState([
    { id: 1, title: 'Mathematics Test 1', subject: 'Mathematics', duration: '60 min', questions: 50, date: '2024-01-20' },
    { id: 2, title: 'Physics Quiz', subject: 'Physics', duration: '45 min', questions: 30, date: '2024-01-22' }
  ]);
  const navigate = useNavigate();

  const [newNotification, setNewNotification] = useState({
    title: '',
    message: ''
  });

  const [newTest, setNewTest] = useState({
    title: '',
    subject: '',
    duration: '',
    questions: '',
    date: ''
  });

  const handleLogout = () => {
    navigate('/');
  };

  const sidebarItems = [
    { id: 'notifications', icon: Bell, label: 'Create Notification' },
    { id: 'tests', icon: Plus, label: 'Generate Test' },
    { id: 'profile', icon: Person, label: 'Profile' },
    { id: 'logout', icon: BoxArrowRight, label: 'Logout', action: handleLogout }
  ];

  const handleCreateNotification = () => {
    if (newNotification.title && newNotification.message) {
      const notification = {
        id: notifications.length + 1,
        ...newNotification,
        date: new Date().toISOString().split('T')[0],
        active: true
      };
      setNotifications([...notifications, notification]);
      setNewNotification({ title: '', message: '' });
      setShowNotificationModal(false);
    }
  };

  const handleCreateTest = () => {
    if (newTest.title && newTest.subject && newTest.duration && newTest.questions && newTest.date) {
      const test = {
        id: tests.length + 1,
        ...newTest
      };
      setTests([...tests, test]);
      setNewTest({ title: '', subject: '', duration: '', questions: '', date: '' });
      setShowTestModal(false);
    }
  };

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handleDeleteTest = (id) => {
    setTests(tests.filter(t => t.id !== id));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'notifications':
        return (
          <div className="notifications-section">
            <div className="section-header">
              <h3>Notifications Management</h3>
              <Button variant="primary" onClick={() => setShowNotificationModal(true)}>
                <Plus className="me-2" /> Create New Notification
              </Button>
            </div>

            <div className="notifications-list">
              {notifications.map(notification => (
                <Card key={notification.id} className="notification-card">
                  <Card.Body>
                    <div className="notification-header">
                      <h5>{notification.title}</h5>
                      <div className="notification-actions">
                        <Button variant="outline-primary" size="sm">
                          <PencilSquare size={16} />
                        </Button>
                        <Button variant="outline-danger" size="sm" onClick={() => handleDeleteNotification(notification.id)}>
                          <Trash size={16} />
                        </Button>
                      </div>
                    </div>
                    <p>{notification.message}</p>
                    <div className="notification-footer">
                      <span className="date">{notification.date}</span>
                      <span className={`status ${notification.active ? 'active' : 'inactive'}`}>
                        {notification.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'tests':
        return (
          <div className="tests-section">
            <div className="section-header">
              <h3>Test Management</h3>
              <Button variant="primary" onClick={() => setShowTestModal(true)}>
                <Plus className="me-2" /> Generate New Test
              </Button>
            </div>

            <div className="tests-list">
              {tests.map(test => (
                <Card key={test.id} className="test-card">
                  <Card.Body>
                    <div className="test-header">
                      <h5>{test.title}</h5>
                      <div className="test-actions">
                        <Button variant="outline-primary" size="sm">
                          <PencilSquare size={16} />
                        </Button>
                        <Button variant="outline-danger" size="sm" onClick={() => handleDeleteTest(test.id)}>
                          <Trash size={16} />
                        </Button>
                      </div>
                    </div>
                    <div className="test-details">
                      <p><strong>Subject:</strong> {test.subject}</p>
                      <p><strong>Duration:</strong> {test.duration}</p>
                      <p><strong>Questions:</strong> {test.questions}</p>
                      <p><strong>Date:</strong> {test.date}</p>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="profile-section">
            <Card>
              <Card.Header>
                <h4>Admin Profile</h4>
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
                    <h5>Admin User</h5>
                    <p>admin@missionengineering.com</p>
                    <p>+91 9876543210</p>
                    <p>Role: Administrator</p>
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
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <Container fluid>
          <Row className="align-items-center">
            <Col>
              <h2>Admin Dashboard</h2>
            </Col>
            <Col className="text-end">
              <Dropdown align="end">
                <Dropdown.Toggle variant="light" id="user-dropdown">
                  <Person size={20} className="me-2" />
                  Admin User
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

      {/* Notification Modal */}
      <Modal show={showNotificationModal} onHide={() => setShowNotificationModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter notification title"
                value={newNotification.title}
                onChange={(e) => setNewNotification({...newNotification, title: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter notification message"
                value={newNotification.message}
                onChange={(e) => setNewNotification({...newNotification, message: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowNotificationModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateNotification}>
            <Send className="me-2" /> Create Notification
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Test Modal */}
      <Modal show={showTestModal} onHide={() => setShowTestModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Generate New Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Test Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter test title"
                value={newTest.title}
                onChange={(e) => setNewTest({...newTest, title: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                value={newTest.subject}
                onChange={(e) => setNewTest({...newTest, subject: e.target.value})}
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., 60 min"
                    value={newTest.duration}
                    onChange={(e) => setNewTest({...newTest, duration: e.target.value})}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Number of Questions</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g., 50"
                    value={newTest.questions}
                    onChange={(e) => setNewTest({...newTest, questions: e.target.value})}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Test Date</Form.Label>
              <Form.Control
                type="date"
                value={newTest.date}
                onChange={(e) => setNewTest({...newTest, date: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTestModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateTest}>
            <Plus className="me-2" /> Generate Test
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
