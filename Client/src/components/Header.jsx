import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="brand-name">
            Mission Engineering
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-item">Home </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-item">About Us </Nav.Link>
              <Nav.Link as={Link} to="/leet" className="nav-item">LEET</Nav.Link>
              <Nav.Link as={Link} to="/polytechnic" className="nav-item">POLYTECHNIC</Nav.Link>
              <Nav.Link as={Link} to="/placement" className="nav-item">PLACEMENT</Nav.Link>
              <Nav.Link as={Link} to="/semester-coaching" className="nav-item">SEMESTER COACHING</Nav.Link>
              <Nav.Link as={Link} to="/fee-structure" className="nav-item">FEE STRUCTURE</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-item">CONTACT US</Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-item-login">LOGIN</Nav.Link>
              <Nav.Link as={Link} to="/signup" className="nav-item-signup">SIGN UP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
