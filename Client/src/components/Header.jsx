import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      {/* Yellow Top Bar */}
      <div className="top-bar"></div>
      
      {/* Blue Navbar */}
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="brand-name">
            Mission Engineering
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-item">Home </Nav.Link>
              <Nav.Link as={Link} to="/leet" className="nav-item">LEET</Nav.Link>
              <Nav.Link as={Link} to="/polytechnic" className="nav-item">POLYTECHNIC</Nav.Link>
              <Nav.Link as={Link} to="/placement" className="nav-item">PLACEMENT</Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-item">SEMESTER COACHING</Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-item">TEST SERIES</Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-item">FEE STRUCTURE</Nav.Link>
              <Nav.Link href="/#testimonials" className="nav-item">TESTIMONIALS</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-item">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
