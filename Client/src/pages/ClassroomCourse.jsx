import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ClassroomCourse.css';

const ClassroomCourse = () => {
  const courseFeatures = [
    {
      title: 'Renowned & Experienced Faculties',
      items: [
        'Quality Teaching',
        'Outstanding Education Delivery',
        'Concept Building',
        'Individualised Support',
        'Dynamic Educational Technique'
      ]
    },
    {
      title: 'Enriched Content & Performance Assessment',
      items: [
        'Well Researched & Refined Study Material',
        'Aligned with Current Exam Trends'
      ]
    },
    {
      title: 'Student Centric Approach',
      items: [
        'Back-Up for Missed Classes/Robust Infrastructure',
        'Dynamic Infrastructure',
        'Exam-Oriented Ecosystem',
        'Updates by Career Support Team'
      ]
    },
    {
      title: 'Written & Personality Test',
      items: [
        'Meticulously Crafted Curriculum',
        'Result Oriented Approach',
        'Interview Guidance by Renowned Experts',
        'GD & Mock Interviews',
        'Personality Development by Seasoned Trainers'
      ]
    }
  ];

  const classroomCourses = [
    {
      title: 'Lateral Entry Coaching 2024-25 - IPU | DTU | NSUT LEET',
      targetStudents: 'For Final Year/Dropped Students',
      nextBatch: '05-06-2025',
      classTimings: 'Mon-Sun | 7AM & 6 Sun',
      validity: 'Group Validity till Jun 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 - CUET LEET',
      targetStudents: 'For Final Year/Dropped Students',
      nextBatch: '05-06-2025',
      classTimings: 'Mon-Sun | 7AM & 6 Sun',
      validity: 'Group Validity till Jun 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 - All India LEET',
      targetStudents: 'For Final Year/Dropped Students',
      nextBatch: '05-06-2025',
      classTimings: 'Mon-Sun | 7AM & 6 Sun',
      validity: 'Group Validity till Jun 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 - IPU | DTU | NSUT LEET',
      targetStudents: 'For Second Year Students',
      nextBatch: '05-06-2025',
      classTimings: 'Mon-Sun | 7AM & 6 Sun',
      validity: 'Group Validity till Jun 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 - CUET LEET',
      targetStudents: 'For Second Year Students',
      nextBatch: '05-06-2025',
      classTimings: 'Mon-Sun | 7AM & 6 Sun',
      validity: 'Group Validity till Jun 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 - All India LEET',
      targetStudents: 'For Second Year Students',
      nextBatch: '05-06-2025',
      classTimings: 'Mon-Sun | 7AM & 6 Sun',
      validity: 'Group Validity till Jun 2025'
    }
  ];

  return (
    <div className="classroom-course-page">
      {/* Course Features Section */}
      <section className="course-features-section">
        <Container>
          <h2 className="features-title">COURSE FEATURES</h2>
          <Row>
            {courseFeatures.map((feature, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className="feature-card h-100">
                  <Card.Body>
                    <h5 className="feature-title">{feature.title}</h5>
                    <ul className="feature-list">
                      {feature.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Classroom Courses Section */}
      <section className="courses-listing-section">
        <Container>
          <h3 className="courses-section-heading">Classroom Course</h3>
          <Row>
            {classroomCourses.map((course, index) => (
              <Col md={12} key={index} className="mb-4">
                <Card className="course-card">
                  <Card.Body>
                    <h4 className="course-title">{course.title}</h4>
                    <div className="course-badge">{course.targetStudents}</div>
                    
                    <Row className="course-details mt-3">
                      <Col md={4} className="detail-item">
                        <i className="bi bi-calendar-event"></i>
                        <div>
                          <strong>Next Batch Starts On</strong>
                          <p>{course.nextBatch}</p>
                        </div>
                      </Col>
                      <Col md={4} className="detail-item">
                        <i className="bi bi-clock"></i>
                        <div>
                          <strong>Class Timings</strong>
                          <p>{course.classTimings}</p>
                        </div>
                      </Col>
                      <Col md={4} className="detail-item">
                        <i className="bi bi-shield-check"></i>
                        <div>
                          <strong>Course Validity</strong>
                          <p>{course.validity}</p>
                        </div>
                      </Col>
                    </Row>

                    <div className="course-actions mt-3">
                      <Button variant="primary" className="action-btn">SEE BROCHURE</Button>
                      <Button variant="outline-primary" className="action-btn">COURSE EXPLORE</Button>
                      <Button variant="outline-primary" className="action-btn">MEET OUR TOPPERS</Button>
                    </div>

                    <div className="book-seats mt-3">
                      <span className="book-text">Book Your Seats - </span>
                      <span className="phone-numbers">96 432 432 14</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ClassroomCourse;
