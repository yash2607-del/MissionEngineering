import React from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import CourseNavigation from '../../components/CourseNavigation';
import { FaHandPointRight, FaCheckCircle, FaCircle, FaBook, FaCog, FaGraduationCap, FaChalkboardTeacher, FaClipboardList, FaUsers } from 'react-icons/fa';
import './Polytechnic.css';

const Polytechnic = () => {


  const polytechnicExams = [
    {
      title: 'Delhi Polytechnic',
      points: [
        'DSEU conducts the Delhi Polytechnic CET.',
        'Eligibility Criteria: 10th Standard or equivalent.'
      ]
    },
    {
      title: 'UP Polytechnic',
      points: [
        'JEECUP conducts the UP Polytechnic Entrance Exam.',
        'Eligibility Criteria: 10th Standard with min 35% marks.'
      ]
    },
    {
      title: 'Bihar Polytechnic',
      points: [
        'BCECEB conducts the Bihar Polytechnic (PE) Exam.',
        'Eligibility Criteria: 10th Standard with min 35% marks.'
      ]
    },
    {
      title: 'Jharkhand Polytechnic',
      points: [
        'JCECEB conducts the Jharkhand Polytechnic Exam.',
        'Eligibility Criteria: 10th Standard with min 35% marks.'
      ]
    },
    {
      title: 'Uttarakhand Polytechnic',
      points: [
        'UBTER conducts the Uttarakhand JEEP.',
        'Eligibility Criteria: 10th Standard with min 35% marks.'
      ]
    },
    {
      title: 'MP Polytechnic',
      points: [
        'MP PEB conducts the MP PPT Entrance Exam.',
        'Eligibility Criteria: 10th Standard with min 35% marks.'
      ]
    },
    {
      title: 'Himachal Polytechnic',
      points: [
        'HPTSB conducts the Himachal PAT Entrance Exam.',
        'Eligibility Criteria: 10th Standard with min 35% marks.'
      ]
    },
    {
      title: 'Haryana Polytechnic',
      points: [
        'HSTES conducts the Haryana DET Entrance Exam.',
        'Eligibility Criteria: 10th Standard or equivalent.'
      ]
    }
  ];

  return (
    <div className="polytechnic-page">
      {/* Hero Section */}
     

      {/* What is Polytechnic */}
      <section className="poly-section">
        <Container>
          <h2 className="section-title">What is Polytechnic?</h2>
          <Row className="g-4 mt-3">
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaCog /></div>
                  <h5 className="benefit-title">Technical Education</h5>
                  <p className="benefit-description">
                    A specialized stream focusing on practical skills and deep technical knowledge across diverse engineering fields.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaGraduationCap /></div>
                  <h5 className="benefit-title">Early Career Start</h5>
                  <p className="benefit-description">
                    Shorter than traditional degrees, allowing you to pursue exams after 10th standard for a quick start to your career.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaUsers /></div>
                  <h5 className="benefit-title">Our Role</h5>
                  <p className="benefit-description">
                    Your ultimate destination for Polytechnic coaching in Delhi to help you secure admission into top-tier institutes.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaBook /></div>
                  <h5 className="benefit-title">Expert Preparation</h5>
                  <p className="benefit-description">
                    We provide top-notch exam preparation with tailored study plans, expert guidance, and a highly student-centric approach.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

     

      {/* Popular Polytechnic Entrance Exams */}
      <section id="popular-exams" className="poly-section exams-section">
        <Container>
          <h2 className="section-title">Popular Polytechnic Entrance Exams in India</h2>
          <Row className="g-4 align-items-stretch">
            {polytechnicExams.map((exam, index) => (
              <Col key={index} md={6} lg={3} xs={12} className="d-flex">
                <Card className="exam-card h-100 w-100">
                  <Card.Header className="exam-header">{exam.title}</Card.Header>
                  <Card.Body className="d-flex flex-column">
                    <ul className="exam-points flex-grow-1">
                      {exam.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </Container>
      </section>

      {/* Why Choose Polytechnic Courses */}
      <section id="why-choose" className="poly-section bg-light">
        <Container>
          <h2 className="section-title">Why Choose Polytechnic Courses?</h2>
          <Row className="g-4 mt-3">
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaCog /></div>
                  <h5 className="benefit-title">Hands-on Experience</h5>
                  <p className="benefit-description">
                    Gain practical, hands-on experience and enter the workforce quickly. Our courses prepare you to confidently tackle real-world industry challenges.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaBook /></div>
                  <h5 className="benefit-title">Wide Range of Fields</h5>
                  <p className="benefit-description">
                    Explore diverse and exciting engineering fields. Choose from Civil, Mechanical, Electrical, Computer Science, and Electronics Engineering.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaChalkboardTeacher /></div>
                  <h5 className="benefit-title">Theory & Practice</h5>
                  <p className="benefit-description">
                    Benefit from a perfect blend of theoretical knowledge and hands-on practical application, bridging the gap between learning and doing.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaGraduationCap /></div>
                  <h5 className="benefit-title">Further Studies</h5>
                  <p className="benefit-description">
                    Use your diploma as a strong foundation and stepping stone for lateral entry into engineering degree programs or advanced certifications.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How Mission Engineering Helps */}
      <section id="mission-helps" className="poly-section bg-light">
        <Container>
          <h2 className="section-title mb-5">How Mission Engineering Helps You Succeed</h2>
          <Row className="g-4">
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaBook /></div>
                  <h5 className="benefit-title">Course Offerings</h5>
                  <div className="benefit-description" style={{ textAlign: 'left', fontSize: '0.9rem' }}>
                    <ul className="bulleted-list">
                      <li>Structured Classes</li>
                      <li>Online & Offline Options</li>
                      <li>Diploma Entrance Coaching</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaChalkboardTeacher /></div>
                  <h5 className="benefit-title">Expert Faculty</h5>
                  <div className="benefit-description" style={{ textAlign: 'left', fontSize: '0.9rem' }}>
                    <ul className="bulleted-list">
                      <li>Experienced Educators</li>
                      <li>Detailed Concept Clarity</li>
                      <li>Regular Doubt-Clearing</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaCog /></div>
                  <h5 className="benefit-title">Study Material</h5>
                  <div className="benefit-description" style={{ textAlign: 'left', fontSize: '0.9rem' }}>
                    <ul className="bulleted-list">
                      <li>DSEU Syllabus Aligned</li>
                      <li>Comprehensive Notes</li>
                      <li>Practice Questions & PYQs</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaClipboardList /></div>
                  <h5 className="benefit-title">Mock Tests</h5>
                  <div className="benefit-description" style={{ textAlign: 'left', fontSize: '0.9rem' }}>
                    <ul className="bulleted-list">
                      <li>Real Exam Pattern</li>
                      <li>Identify Strengths/Weaknesses</li>
                      <li>Improve Time Management</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQs */}
      <section id="faqs" className="faq-section py-5">
        <Container>
          <h2 className="text-center mb-5 home-section-heading">FAQs About Polytechnic</h2>
          <Accordion className="custom-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. What is a Polytechnic course?</Accordion.Header>
              <Accordion.Body>
                Polytechnic courses are diploma programs that focus on technical and practical education in various engineering fields.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1">
              <Accordion.Header>2. Can I pursue Polytechnic after 10th?</Accordion.Header>
              <Accordion.Body>
                Yes, Polytechnic courses are available for students after completing their 10th standard.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="2">
              <Accordion.Header>3. How long is a Polytechnic course?</Accordion.Header>
              <Accordion.Body>
                Polytechnic diploma courses typically last three to four years, depending on the program.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="3">
              <Accordion.Header>4. What are the benefits of joining Mission Engineering for Polytechnic coaching?</Accordion.Header>
              <Accordion.Body>
                Mission Engineering offers expert faculty, comprehensive study materials, mock tests, and both online and offline classes to ensure your success in Polytechnic entrance exams.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="4">
              <Accordion.Header>5. Does Mission Engineering provide coaching for DSEU Polytechnic entrance?</Accordion.Header>
              <Accordion.Body>
                Yes, we specialize in DSEU Polytechnic entrance coaching and provide tailored study plans to help you excel.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="5">
              <Accordion.Header>6. What are the most popular branches in Polytechnic?</Accordion.Header>
              <Accordion.Body>
                Some of the most popular branches include Mechanical Engineering, Civil Engineering, Computer Science, Electrical Engineering, and Electronics & Communication.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="6">
              <Accordion.Header>7. Is a Polytechnic diploma equivalent to 12th standard?</Accordion.Header>
              <Accordion.Body>
                Yes, in most cases, a 3-year Polytechnic diploma is considered equivalent to 12th standard (intermediate) and allows for lateral entry into B.Tech.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="7">
              <Accordion.Header>8. What is lateral entry (LEET) in B.Tech after Polytechnic?</Accordion.Header>
              <Accordion.Body>
                Lateral entry allows Polytechnic diploma holders to get direct admission into the second year (3rd semester) of a B.Tech degree program.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="8">
              <Accordion.Header>9. Can I get a government job after completing Polytechnic?</Accordion.Header>
              <Accordion.Body>
                Yes, diploma holders can apply for various government jobs like Junior Engineer (JE) in SSC, Railways, State Electricity Boards, and PWD.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="9">
              <Accordion.Header>10. Are mock tests important for Polytechnic entrance exams?</Accordion.Header>
              <Accordion.Body>
                Absolutely! Mock tests help you understand the exam pattern, improve time management, and identify weak areas for better preparation.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </div>
  );
};

export default Polytechnic;
