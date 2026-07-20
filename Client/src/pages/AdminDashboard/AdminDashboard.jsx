import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Nav, Dropdown, Form, Modal, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Person, Bell, Gear, BoxArrowRight, BarChart, Plus, PencilSquare, Trash, Send, ArrowLeft, PlayBtn } from 'react-bootstrap-icons';
import './AdminDashboard.css';

import { useAuth } from '../../auth/useAuth';
import {
  adminCreateNotification,
  adminDeleteNotification,
  adminFetchNotifications,
  adminFetchVideos,
  adminUpdateVideo
} from '../../api/adminApi';

const AdminDashboard = () => {
  const { token, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('notifications');
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  
  const [notifications, setNotifications] = useState([]);
  const [videos, setVideos] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const [editingNotificationId, setEditingNotificationId] = useState(null);
  const [editingVideoId, setEditingVideoId] = useState(null);

  const [newNotification, setNewNotification] = useState({
    title: '',
    message: ''
  });

  const [editVideoData, setEditVideoData] = useState({
    title: '',
    youtubeUrl: ''
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
        const [notifRes, videoRes] = await Promise.all([
          adminFetchNotifications(token),
          adminFetchVideos()
        ]);

        if (cancelled) return;
        setNotifications(notifRes?.notifications || []);
        setVideos(videoRes?.videos || []);
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
    { id: 'videos', icon: PlayBtn, label: 'Manage Videos' },
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

  const handleEditVideo = (video) => {
    setEditingVideoId(video.id || video._id);
    setEditVideoData({
      title: video.title || '',
      youtubeUrl: video.youtubeUrl || ''
    });
    setShowVideoModal(true);
  };

  const handleUpdateVideo = async () => {
    if (!editVideoData.title || !editVideoData.youtubeUrl) return;
    setSubmitting(true);
    try {
      await adminUpdateVideo(token, editingVideoId, editVideoData);
      const videoRes = await adminFetchVideos();
      setVideos(videoRes?.videos || []);
      setEditVideoData({ title: '', youtubeUrl: '' });
      setEditingVideoId(null);
      setShowVideoModal(false);
    } catch (err) {
      setError(err?.message || 'Failed to update video');
    } finally {
      setSubmitting(false);
    }
  };

  const getEmbedUrl = (url) => {
    if (!url) return '';
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match && match[1] ? `https://www.youtube.com/embed/${match[1]}` : url;
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

      case 'videos':
        return (
          <div className="videos-section">
            {error ? <Alert variant="danger">{error}</Alert> : null}
            {loading ? <div className="text-muted">Loading…</div> : null}
            <div className="section-header">
              <h3>YouTube Videos Management</h3>
            </div>
            <p className="text-muted mb-4">Manage the 4 video slots on your platform. Slot 1 is the daily video, and Slots 2-4 are yearly features.</p>
            
            <Row>
              {videos.map((video, idx) => (
                <Col md={6} lg={6} className="mb-4" key={video.id || video._id || idx}>
                  <Card className="h-100 video-card">
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0">
                          {video.slot === 1 ? "Slot 1 (Daily)" : `Slot ${video.slot} (Yearly)`}
                        </h5>
                        <Button variant="outline-primary" size="sm" onClick={() => handleEditVideo(video)}>
                          <PencilSquare size={16} className="me-1" /> Edit
                        </Button>
                      </div>
                      
                      {video.youtubeUrl ? (
                        <div className="ratio ratio-16x9 mb-3">
                          <iframe 
                            src={getEmbedUrl(video.youtubeUrl)} 
                            title={video.title} 
                            allowFullScreen 
                            style={{ borderRadius: '8px' }}
                          ></iframe>
                        </div>
                      ) : (
                        <div className="bg-light d-flex align-items-center justify-content-center mb-3" style={{ height: '200px', borderRadius: '8px' }}>
                          <span className="text-muted">No Video Set</span>
                        </div>
                      )}
                      
                      <div className="mt-auto">
                        <strong>Title:</strong> {video.title || 'Untitled'}<br/>
                        <small className="text-muted text-break">Link: {video.youtubeUrl || 'None'}</small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
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

      {/* Video Edit Modal */}
      <Modal show={showVideoModal} onHide={() => {
        setShowVideoModal(false);
        setEditingVideoId(null);
        setEditVideoData({ title: '', youtubeUrl: '' });
      }}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Video Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Video Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Daily Update - 21st Jan"
                value={editVideoData.title}
                onChange={(e) => setEditVideoData({...editVideoData, title: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>YouTube URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={editVideoData.youtubeUrl}
                onChange={(e) => setEditVideoData({...editVideoData, youtubeUrl: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setShowVideoModal(false);
            setEditingVideoId(null);
            setEditVideoData({ title: '', youtubeUrl: '' });
          }}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateVideo} disabled={submitting}>
            <Send className="me-2" /> {submitting ? 'Updating…' : 'Update Video'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
