import React, { useEffect, useMemo, useState } from 'react';
import { Badge, Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Bell, Megaphone, InfoCircle } from 'react-bootstrap-icons';
import './Navbar.css';
import { images } from '../../data';

import { useAuth } from '../auth/useAuth';
import { fetchNotifications } from '../api/studentApi';

const missionLogo = images.hero.missionLogo;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user, token, logout } = useAuth();

  const [notifications, setNotifications] = useState([]);
  const [notifError, setNotifError] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [leetDropdownOpen, setLeetDropdownOpen] = useState(false);
  const leetDropdownTimer = React.useRef(null);

  const lastSeenKey = useMemo(
    () => (user?.email ? `lastSeenNotifications:${user.email}` : null),
    [user?.email]
  );

  const unreadCount = useMemo(() => {
    if (!lastSeenKey) return 0;
    const lastSeen = Number(localStorage.getItem(lastSeenKey) || '0');
    return notifications.filter((n) => new Date(n.createdAt).getTime() > lastSeen).length;
  }, [notifications, lastSeenKey]);

  useEffect(() => {
  let cancelled = false;

  (async () => {
    try {
    setNotifError('');
    const data = await fetchNotifications(token);
    if (!cancelled) setNotifications(data.notifications || []);
    } catch (err) {
    if (!cancelled) setNotifError(err?.message || 'Failed to load notifications');
    }
  })();

  return () => {
    cancelled = true;
  };
  }, [token]);

  const handleOpenNotifications = () => {
    if (!lastSeenKey) return;
    localStorage.setItem(lastSeenKey, String(Date.now()));
  };

  const getTimeAgo = (dateString) => {
    if (!dateString) return '';
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ago`;
    if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
    if (diffDays < 7) return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
    return past.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleTestimonialsClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const testimonialsSection = document.getElementById('testimonials');
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page, then scroll after navigation
      navigate('/');
      setTimeout(() => {
        const testimonialsSection = document.getElementById('testimonials');
        if (testimonialsSection) {
          testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <>
      
      <Navbar expanded={expanded} onToggle={(val) => setExpanded(val)} expand="lg" className="custom-navbar sticky-top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="brand-name d-flex align-items-center">
            <img src={missionLogo} alt="Mission Engineering Logo" className="brand-logo d-none d-lg-block me-2" style={{ height: '45px', width: 'auto' }} />
            <span className="d-none d-lg-inline">Mission Engineering</span>
            <img src={missionLogo} alt="Mission Engineering" className="brand-logo d-lg-none" />
          </Navbar.Brand>
          
          {/* Mobile Notification Icon - Outside Hamburger */}
          <div className="mobile-notification-wrapper d-lg-none">
            <Dropdown align="end" onToggle={(isOpen) => isOpen && handleOpenNotifications()}>
              <Dropdown.Toggle variant="link" className="nav-notification-btn mobile-notification-btn">
                <Bell size={20} className={unreadCount > 0 ? "bell-glow" : ""} />
                {unreadCount > 0 ? (
                  <Badge bg="danger" pill className="nav-notification-badge">
                    {unreadCount}
                  </Badge>
                ) : null}
              </Dropdown.Toggle>

              <Dropdown.Menu className="nav-notification-menu">
                <div className="notification-header">Notifications</div>

                <div className="notification-list">
                  {notifError ? (
                    <div className="notification-error">
                      <InfoCircle size={16} className="me-2" />
                      {notifError}
                    </div>
                  ) : null}

                  {(notifications || []).length === 0 ? (
                    <div className="notification-empty">
                      No notifications
                    </div>
                  ) : (
                    notifications.slice(0, 5).map((n, index) => {
                      const timeAgo = getTimeAgo(n.createdAt);
                      return (
                        <div key={n.id || index} className="nav-notification-item">
                          <div className="notification-icon">
                            <Megaphone size={18} />
                          </div>
                          <div className="notification-content">
                            <div className="notification-title">{n.title}</div>
                            <div className="notification-message">{n.message}</div>
                            <div className="notification-time">{timeAgo}</div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {!notifError && notifications.length > 0 ? (
                  <div className="notification-footer">
                    <button className="show-all-btn">Show all</button>
                  </div>
                ) : null}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-item" onClick={() => setExpanded(false)}>Home </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-item" onClick={() => setExpanded(false)}>About Us </Nav.Link>
              <div
                className="leet-nav-dropdown-wrapper"
                onMouseEnter={() => { clearTimeout(leetDropdownTimer.current); setLeetDropdownOpen(true); }}
                onMouseLeave={() => { leetDropdownTimer.current = setTimeout(() => setLeetDropdownOpen(false), 150); }}
              >
                <Nav.Link as={Link} to="/leet" className="nav-item" onClick={() => setExpanded(false)}>
                  LEET <span className="leet-dropdown-caret">▾</span>
                </Nav.Link>
                {leetDropdownOpen && (
                  <div className="leet-nav-dropdown-menu">
                    <Link to="/leet/ipu-leet" className="leet-dropdown-item" onClick={() => { setExpanded(false); setLeetDropdownOpen(false); }}>
                      IPU LEET
                    </Link>
                    <Link to="/leet/dtu-leet" className="leet-dropdown-item" onClick={() => { setExpanded(false); setLeetDropdownOpen(false); }}>
                      DTU LEET
                    </Link>
                  </div>
                )}
              </div>
              <Nav.Link as={Link} to="/polytechnic" className="nav-item" onClick={() => setExpanded(false)}>POLYTECHNIC</Nav.Link>
              <Nav.Link as={Link} to="/placement" className="nav-item" onClick={() => setExpanded(false)}>PLACEMENT</Nav.Link>
              <Nav.Link as={Link} to="/semester-coaching" className="nav-item" onClick={() => setExpanded(false)}>SEMESTER COACHING</Nav.Link>
              <Nav.Link as={Link} to="/fee-structure" className="nav-item" onClick={() => setExpanded(false)}>FEE STRUCTURE</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-item" onClick={() => setExpanded(false)}>CONTACT US</Nav.Link>

              {/* Desktop Notification Icon - Inside Nav */}
              <Dropdown align="end" onToggle={(isOpen) => isOpen && handleOpenNotifications()} className="d-none d-lg-block">
                <Dropdown.Toggle variant="link" className="nav-notification-btn">
                  <Bell size={20} className={unreadCount > 0 ? "bell-glow" : ""} />
                  {unreadCount > 0 ? (
                    <Badge bg="danger" pill className="nav-notification-badge">
                      {unreadCount}
                    </Badge>
                  ) : null}
                </Dropdown.Toggle>

                <Dropdown.Menu className="nav-notification-menu">
                  <div className="notification-header">Notifications</div>

                  <div className="notification-list">
                    {notifError ? (
                      <div className="notification-error">
                        <InfoCircle size={16} className="me-2" />
                        {notifError}
                      </div>
                    ) : null}

                    {(notifications || []).length === 0 ? (
                      <div className="notification-empty">
                        No notifications
                      </div>
                    ) : (
                      notifications.slice(0, 5).map((n, index) => {
                        const timeAgo = getTimeAgo(n.createdAt);
                        return (
                          <div key={n.id || index} className="nav-notification-item">
                            <div className="notification-icon">
                              <Megaphone size={18} />
                            </div>
                            <div className="notification-content">
                              <div className="notification-title">{n.title}</div>
                              <div className="notification-message">{n.message}</div>
                              <div className="notification-time">{timeAgo}</div>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>

                  {!notifError && notifications.length > 0 ? (
                    <div className="notification-footer">
                      <button className="show-all-btn">Show all</button>
                    </div>
                  ) : null}
                </Dropdown.Menu>
              </Dropdown>

              {!isAuthenticated ? (
                <>
                  <Nav.Link as={Link} to="/login" className="nav-item-login" onClick={() => setExpanded(false)}>LOGIN</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    as={Link}
                    to="/admin-dashboard"
                    className="nav-item"
                    onClick={() => setExpanded(false)}
                  >
                    Dashboard
                  </Nav.Link>

                  <Nav.Link as="button" onClick={() => { setExpanded(false); handleLogout(); }} className="nav-item nav-logout-btn">
                    Logout
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
