import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-page">
      {/* Section Navigation */}
      <div className="section-navigation">
        <Container>
          <Row className="justify-content-center">
            <Col xs={6} md={3} className="text-center">
              <Link to="/classroom-course" className="section-tab-link">
                <div className="section-tab">
                  <div className="section-icon">
                    <i className="bi bi-building"></i>
                  </div>
                  <div className="section-label">CLASSROOM COURSE</div>
                </div>
              </Link>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <Link to="/live-online-course" className="section-tab-link">
                <div className="section-tab">
                  <div className="section-icon">
                    <i className="bi bi-book"></i>
                  </div>
                  <div className="section-label">LIVE-ONLINE COURSE</div>
                </div>
              </Link>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <Link to="/recorded-course" className="section-tab-link">
                <div className="section-tab">
                  <div className="section-icon">
                    <i className="bi bi-phone"></i>
                  </div>
                  <div className="section-label">RECORDED COURSE</div>
                </div>
              </Link>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <Link to="/test-series" className="section-tab-link">
                <div className="section-tab">
                  <div className="section-icon">
                    <i className="bi bi-card-checklist"></i>
                  </div>
                  <div className="section-label">TEST SERIES</div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Courses;
