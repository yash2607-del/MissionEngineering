import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaBookReader, FaChartLine, FaBriefcase } from 'react-icons/fa';
import './Coaching.css';

const Coaching = () => {
  return (
    <div className="coaching-page">
      <section className="page-header">
        <Container>
          <h1>Our Coaching Programs</h1>
        </Container>
      </section>

      <section className="coaching-content py-5">
        <Container>
          <Row className="g-4">
            {/* LEET */}
            <Col lg={6} md={6}>
              <Card className="coaching-card h-100">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <FaGraduationCap size={60} className="text-primary" />
                  </div>
                  <Card.Title className="coaching-title">LEET</Card.Title>
                  <Card.Text>
                    Lateral Entry Entrance Test (LEET) preparation with comprehensive study material,
                    mock tests, and expert guidance. Our program is designed to help diploma holders
                    secure admission into engineering colleges.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Polytechnic Entrance */}
            <Col lg={6} md={6}>
              <Card className="coaching-card h-100">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <FaBookReader size={60} className="text-success" />
                  </div>
                  <Card.Title className="coaching-title">Polytechnic Entrance</Card.Title>
                  <Card.Text>
                    Complete preparation for Polytechnic entrance examinations with focused coaching,
                    practice tests, and doubt clearing sessions. We ensure students are well-prepared
                    for their entrance exams.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Polytechnic Subjects */}
            <Col lg={6} md={6}>
              <Card className="coaching-card h-100">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <FaChartLine size={60} className="text-warning" />
                  </div>
                  <Card.Title className="coaching-title">Polytechnic Subjects</Card.Title>
                  <Card.Text>
                    Subject-wise coaching for all polytechnic courses with experienced faculty members.
                    We cover all major subjects including Mathematics, Physics, Chemistry, and Engineering
                    subjects with practical approach.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Polytechnic Placement */}
            <Col lg={6} md={6}>
              <Card className="coaching-card h-100">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <FaBriefcase size={60} className="text-danger" />
                  </div>
                  <Card.Title className="coaching-title">Polytechnic Placement</Card.Title>
                  <Card.Text>
                    Career guidance and placement preparation for polytechnic students. We provide
                    interview training, resume building, aptitude test preparation, and soft skills
                    development to ensure successful placements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Coaching;
