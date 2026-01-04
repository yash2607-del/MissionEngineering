import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './RecordedCourse.css';

const RecordedCourse = () => {
  return (
    <div className="recorded-course-page">
      <section className="hero-section">
        <Container>
          <h1 className="page-title">RECORDED COURSE</h1>
          <p className="page-subtitle">Study at your own pace with pre-recorded video lectures</p>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="section-title">About Recorded Course</h2>
              <p>Content coming soon...</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default RecordedCourse;
