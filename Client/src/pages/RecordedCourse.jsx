import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CourseNavigation from '../components/CourseNavigation';
import './RecordedCourse.css';

const RecordedCourse = () => {
  const recordedCourses = [
    {
      title: 'Lateral Entry Coaching 2024-25 : IPU | DTU | NSUT LEET',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : IPU LEET',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : DTU / NSUT LEET',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : CUET LEET',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : Bihar LEET (BCECE)',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : Jharkhand LEET (JCECEB)',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : West Bengal (JELET)',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : Gujarat LEET (D to D)',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : Punjab LEET (PUEEET)',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : SLIET LEET',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : Kerala LEET (CUSAT)',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-23 : Uttarakhand LEET (UKSEE)',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : Himachal Pradesh LEET (HP LEET)',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : Maharashtra LEET',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-25 : All India LEET',
      targetStudents: 'For Final Year/Dropout Students',
      validity: '25 July 2025'
    },
    {
      title: 'Lateral Entry Coaching 2024-26 : IPU | DTU | NSUT LEET',
      targetStudents: 'For Second Year Students',
      validity: '25 July 2026'
    }
  ];

  return (
    <div className="recorded-course-page">
      <div className="courses-heading-container">
        <h2 className="courses-heading">Courses We Offer</h2>
      </div>
      <CourseNavigation />
      <section className="hero-section">
        <Container>
          <h1 className="page-title">RECORDED COURSE</h1>
          <p className="page-subtitle">Study at your own pace with pre-recorded video lectures</p>
        </Container>
      </section>

      <section className="courses-listing-section">
        <Container>
          <h3 className="courses-section-heading">Recorded LEET Coaching</h3>
          <Row>
            {recordedCourses.map((course, index) => (
              <Col md={12} key={index} className="mb-4">
                <Card className="course-card">
                  <Card.Body>
                    <h4 className="course-title">{course.title}</h4>
                    <div className="course-info">
                      <div className="info-item">
                        <i className="bi bi-people"></i>
                        <span>{course.targetStudents}</span>
                      </div>
                      <div className="info-item">
                        <i className="bi bi-check-circle"></i>
                        <span>Course Validity</span>
                        <p>{course.validity}</p>
                      </div>
                    </div>

                    <div className="course-actions mt-3">
                      <Button variant="primary" className="action-btn">FEE STRUCTURE</Button>
                      <Button variant="outline-primary" className="action-btn">COURSE FEATURE</Button>
                      <Button variant="outline-primary" className="action-btn">MEET OUR TOPPERS</Button>
                    </div>

                    <div className="book-seats mt-3">
                      <span className="book-text">Book Your Demo For Live/Offline Class - </span>
                      <span className="phone-numbers">96 439 439 14</span>
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

export default RecordedCourse;
