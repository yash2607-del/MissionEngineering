import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Nav, Dropdown, Form, Modal, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Person, Bell, Gear, BoxArrowRight, BarChart, Plus, PencilSquare, Trash, Send, ArrowLeft } from 'react-bootstrap-icons';
import './AdminDashboard.css';

import { useAuth } from '../auth/useAuth';
import {
  adminCreateNotification,
  adminCreateTest,
  adminDeleteNotification,
  adminDeleteTest,
  adminFetchNotifications,
  adminFetchTests
} from '../api/adminApi';

const AdminDashboard = () => {
  const { token, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('notifications');
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const [editingNotificationId, setEditingNotificationId] = useState(null);
  const [editingTestId, setEditingTestId] = useState(null);

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showChangeAvatarModal, setShowChangeAvatarModal] = useState(false);

  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@missionengineering.com',
    phone: '+91 9876543210',
    role: 'Administrator'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [newNotification, setNewNotification] = useState({
    title: '',
    message: ''
  });

  const [newTest, setNewTest] = useState({
    title: '',
    subject: '',
    duration: '',
    questions: '',
    date: '',
    link: '',
    details: ''
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError('');
        const [notifRes, testsRes] = await Promise.all([
          adminFetchNotifications(token),
          adminFetchTests(token)
        ]);

        if (cancelled) return;
        setNotifications(notifRes?.notifications || []);
        setTests(testsRes?.tests || []);
      } catch (err) {
        if (!cancelled) setError(err?.message || 'Failed to load admin data');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token]);

  const sidebarItems = [
    { id: 'notifications', icon: Bell, label: 'Create Notification' },
    { id: 'tests', icon: Plus, label: 'Generate Test' },
    { id: 'profile', icon: Person, label: 'Profile' },
    { id: 'logout', icon: BoxArrowRight, label: 'Logout', action: handleLogout }
  ];

  const handleEditNotification = (notification) => {
    setEditingNotificationId(notification.id);
    setNewNotification({
      title: notification.title,
      message: notification.message
    });
    setShowNotificationModal(true);
  };

  const handleCreateNotification = async () => {
    if (!newNotification.title || !newNotification.message) return;
    setSubmitting(true);
    try {
      if (editingNotificationId) {
        // For now, delete old and create new (simple update)
        await adminDeleteNotification(token, editingNotificationId);
      }
      await adminCreateNotification(token, newNotification);
      const notifRes = await adminFetchNotifications(token);
      setNotifications(notifRes?.notifications || []);
      setNewNotification({ title: '', message: '' });
      setEditingNotificationId(null);
      setShowNotificationModal(false);
    } catch (err) {
      setError(err?.message || 'Failed to create notification');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditTest = (test) => {
    setEditingTestId(test.id);
    setNewTest({
      title: test.title,
      subject: test.subject,
      duration: test.duration || '',
      questions: test.questions || '',
      date: test.date,
      link: test.link,
      details: test.details || ''
    });
    setShowTestModal(true);
  };

  const handleCreateTest = async () => {
    if (!newTest.title || !newTest.subject || !newTest.date || !newTest.link) return;
    setSubmitting(true);
    try {
      if (editingTestId) {
        // For now, delete old and create new (simple update)
        await adminDeleteTest(token, editingTestId);
      }
      await adminCreateTest(token, newTest);
      const testsRes = await adminFetchTests(token);
      setTests(testsRes?.tests || []);
      setNewTest({ title: '', subject: '', duration: '', questions: '', date: '', link: '', details: '' });
      setEditingTestId(null);
      setShowTestModal(false);
    } catch (err) {
      setError(err?.message || 'Failed to create test');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteNotification = async (id) => {
    setSubmitting(true);
    try {
      await adminDeleteNotification(token, id);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      setError(err?.message || 'Failed to delete notification');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteTest = async (id) => {
    setSubmitting(true);
    try {
      await adminDeleteTest(token, id);
      setTests((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err?.message || 'Failed to delete test');
    } finally {
      setSubmitting(false);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'notifications':
        return (
          <div className="notifications-section">
            {error ? <Alert variant="danger">{error}</Alert> : null}
            {loading ? <div className="text-muted">Loading…</div> : null}
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
                        <Button variant="outline-primary" size="sm" onClick={() => handleEditNotification(notification)}>
                          <PencilSquare size={16} />
                        </Button>
                        <Button variant="outline-danger" size="sm" onClick={() => handleDeleteNotification(notification.id)}>
                          <Trash size={16} />
                        </Button>
                      </div>
                    </div>
                    <p>{notification.message}</p>
                    <div className="notification-footer">
                      <span className="date">{(notification.createdAt || '').slice(0, 10)}</span>
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
            {error ? <Alert variant="danger">{error}</Alert> : null}
            {loading ? <div className="text-muted">Loading…</div> : null}
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
                        <Button variant="outline-primary" size="sm" onClick={() => handleEditTest(test)}>
                          <PencilSquare size={16} />
                        </Button>
                        <Button variant="outline-danger" size="sm" onClick={() => handleDeleteTest(test.id)}>
                          <Trash size={16} />
                        </Button>
                      </div>
                    </div>
                    <div className="test-details">
                      <p><strong>Subject:</strong> {test.subject}</p>
                      {test.duration ? <p><strong>Duration:</strong> {test.duration}</p> : null}
                      {test.questions !== null && test.questions !== undefined ? (
                        <p><strong>Questions:</strong> {test.questions}</p>
                      ) : null}
                      <p><strong>Date:</strong> {test.date}</p>
                      <p>
                        <strong>Link:</strong>{' '}
                        <a href={test.link} target="_blank" rel="noreferrer">Open test details</a>
                      </p>
                      {test.details ? <p><strong>Details:</strong> {test.details}</p> : null}
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
            <h3 className="section-title">Admin Profile</h3>
            
            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar-container">
                  <div className="avatar-circle">
                    <Person size={50} />
                  </div>
                  <Button 
                    variant="link" 
                    className="change-avatar-btn"
                    onClick={() => setShowChangeAvatarModal(true)}
                  >
                    Change Avatar
                  </Button>
                </div>
                <div className="profile-info">
                  <h4>{profileData.name}</h4>
                </div>
                <div className="profile-details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">{profileData.email}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Phone:</span>
                    <span className="detail-value">{profileData.phone}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Role:</span>
                    <span className="detail-value">{profileData.role}</span>
                  </div>
                </div>
              </div>

              <div className="profile-actions">
                <Button 
                  variant="primary" 
                  className="action-btn"
                  onClick={() => setShowEditProfileModal(true)}
                >
                  <PencilSquare className="me-2" size={16} />
                  Edit Profile
                </Button>
                <Button 
                  variant="outline-primary" 
                  className="action-btn"
                  onClick={() => setShowChangePasswordModal(true)}
                >
                  <Gear className="me-2" size={16} />
                  Change Password
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-container">
        {/* Dark Sidebar */}
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
          {/* White Header */}
          <div className="dashboard-header">
            <Container fluid>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Dropdown align="start">
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
                </Col>
                <Col className="text-center">
                  <h2>Admin Dashboard</h2>
                </Col>
                <Col xs="auto">
                  {/* Empty column for balance */}
                </Col>
              </Row>
            </Container>
          </div>

          {/* Content Area */}
          <div className="content-wrapper">
            <Container fluid>
              <div className="content-area">
                {renderContent()}
              </div>
            </Container>
          </div>
        </div>
      </div>

      {/* Notification Modal */}
      <Modal show={showNotificationModal} onHide={() => {
        setShowNotificationModal(false);
        setEditingNotificationId(null);
        setNewNotification({ title: '', message: '' });
      }}>
        <Modal.Header closeButton>
          <Modal.Title>{editingNotificationId ? 'Edit Notification' : 'Create New Notification'}</Modal.Title>
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
          <Button variant="secondary" onClick={() => {
            setShowNotificationModal(false);
            setEditingNotificationId(null);
            setNewNotification({ title: '', message: '' });
          }}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateNotification} disabled={submitting}>
            <Send className="me-2" /> {submitting ? (editingNotificationId ? 'Updating…' : 'Creating…') : (editingNotificationId ? 'Update Notification' : 'Create Notification')}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Test Modal */}
      <Modal show={showTestModal} onHide={() => {
        setShowTestModal(false);
        setEditingTestId(null);
        setNewTest({ title: '', subject: '', duration: '', questions: '', date: '', link: '', details: '' });
      }}>
        <Modal.Header closeButton>
          <Modal.Title>{editingTestId ? 'Edit Test' : 'Generate New Test'}</Modal.Title>
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

            <Form.Group className="mb-3">
              <Form.Label>Test Details Link</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://..."
                value={newTest.link}
                onChange={(e) => setNewTest({...newTest, link: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Details (optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Any instructions for students"
                value={newTest.details}
                onChange={(e) => setNewTest({...newTest, details: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setShowTestModal(false);
            setEditingTestId(null);
            setNewTest({ title: '', subject: '', duration: '', questions: '', date: '', link: '', details: '' });
          }}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateTest} disabled={submitting}>
            <Plus className="me-2" /> {submitting ? (editingTestId ? 'Updating…' : 'Creating…') : (editingTestId ? 'Update Test' : 'Generate Test')}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Profile Modal */}
      <Modal show={showEditProfileModal} onHide={() => setShowEditProfileModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={profileData.name}
                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                value={profileData.phone}
                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditProfileModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {
            setShowEditProfileModal(false);
            // TODO: Add API call to update profile
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Change Password Modal */}
      <Modal show={showChangePasswordModal} onHide={() => {
        setShowChangePasswordModal(false);
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      }} centered>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setShowChangePasswordModal(false);
            setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
          }}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {
            if (passwordData.newPassword !== passwordData.confirmPassword) {
              alert('Passwords do not match!');
              return;
            }
            setShowChangePasswordModal(false);
            setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
            // TODO: Add API call to change password
          }}>
            Change Password
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Change Avatar Modal */}
      <Modal show={showChangeAvatarModal} onHide={() => setShowChangeAvatarModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Change Avatar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center p-4">
            <div className="avatar-circle mx-auto mb-3" style={{width: '120px', height: '120px'}}>
              <Person size={70} />
            </div>
            <Form.Group>
              <Form.Label>Upload New Avatar</Form.Label>
              <Form.Control type="file" accept="image/*" />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowChangeAvatarModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {
            setShowChangeAvatarModal(false);
            // TODO: Add API call to upload avatar
          }}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
