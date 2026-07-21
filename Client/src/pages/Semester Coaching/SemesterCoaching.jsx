import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FaBook, FaGraduationCap, FaChalkboardTeacher, FaLaptop, FaCog, FaBolt, FaDesktop, FaFlask, FaCar, FaPrint, FaNetworkWired, FaUserTie, FaBookOpen, FaBullseye, FaTrophy, FaUsers, FaClipboardCheck, FaChartLine, FaClock, FaLaptopCode, FaMicrochip, FaBuilding, FaPlug, FaWrench, FaVial, FaServer } from 'react-icons/fa';
import './SemesterCoaching.css';

const SemesterCoaching = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const engineeringBranches = [
    {
      icon: <FaCog />,
      title: 'Mechanical Engineering',
      semesters: [
        {
          title: '1st & 2nd Semester',
          subjects: [
            'Applied Mathematics – I',
            'Applied Mathematics – II',
            'Applied Mechanics',
            'Applied Physics',
            'Introductory Chemistry',
            'Engineering Graphics (BEG) / Engineering Drawing',
            'Material Science & Metallurgy',
            'Auto CAD'
          ]
        },
        {
          title: '3rd & 4th Semester',
          subjects: [
            'Thermal Engineering – I',
            'Thermal Engineering – II (IC Engine)',
            'Strength Of Material (SOM)',
            'Fluid Mechanics (FM)',
            'Computerised Numerical Control (CNC)'
          ]
        },
        {
          title: '5th & 6th Semester',
          subjects: [
            'Theory Of Machine (TOM)',
            'Refrigerator & Air Conditioning (RAC)',
            'Machine Design (MD)',
            'Automobile Engineering'
          ]
        }
      ]
    },
    {
      icon: <FaLaptopCode />,
      title: 'Computer Science Engineering',
      subjects: [
        'Applied Mathematics – I',
        'Applied Mathematics – II',
        'Applied Mechanics',
        'Applied Physics',
        'Engineering Graphics (BEG) / Engineering Drawing',
        'C Language',
        'Basic Electronics'
      ]
    },
    {
      icon: <FaMicrochip />,
      title: 'Electronics Engineering',
      subjects: [
        'Applied Mathematics – I',
        'Applied Mathematics – II',
        'Applied Physics',
        'Engineering Graphics (BEG) / Engineering Drawing',
        'C Language',
        'Analog Electronics – I',
        'Analog Electronics – II',
        'Digital Electronics',
        'Electrical Machine – I',
        'Electrical Machine – II',
        'Basic Electrical Engineering',
        'MATL',
        'EDC – I',
        'EDC – II',
        'Microprocessor'
      ]
    },
    {
      icon: <FaBuilding />,
      title: 'Civil Engineering',
      subjects: [
        'Applied Mathematics – I',
        'Applied Mathematics – II',
        'Applied Physics',
        'Applied Chemistry',
        'Engineering Graphics (BEG) / Engineering Drawing',
        'Structural Mechanics',
        'Hydraulics'
      ]
    },
    {
      icon: <FaPlug />,
      title: 'Electrical Engineering',
      subjects: [
        'Applied Mathematics – I',
        'Applied Mathematics – II',
        'Applied Physics',
        'Applied Chemistry',
        'Applied Mechanics',
        'Engineering Graphics (BEG) / Engineering Drawing',
        'Analog Electronics – I',
        'Analog Electronics – II',
        'Digital Electronics',
        'Electrical Machine – I',
        'Electrical Machine – II',
        'Basic Electrical Engineering',
        'Electric Circuit',
        'EDC – I',
        'EDC – II',
        'Microprocessor'
      ]
    },
    {
      icon: <FaCar />,
      title: 'Automobile Engineering',
      subjects: [
        'Applied Mathematics – I',
        'Applied Mathematics – II',
        'Applied Mechanics',
        'Applied Physics',
        'Applied Chemistry',
        'Engineering Graphics (BEG) / Engineering Drawing',
        'Strength Of Material',
        'Fluid Mechanics',
        'Thermal',
        'Automobile Engineering',
        'Basic Of Electrical & Electronics Engineering (BEEE)',
        'BME (Basic Of Mechanical Engineering)'
      ]
    },
    {
      icon: <FaPrint />,
      title: 'Printing Technology',
      subjects: [
        'Applied Mathematics – I',
        'Applied Mathematics – II',
        'Applied Physics',
        'Applied Chemistry',
        'Engineering Graphics (BEG) / Engineering Drawing'
      ]
    },
    {
      icon: <FaServer />,
      title: 'Information Technology',
      subjects: [
        'Applied Mathematics – I',
        'Applied Mathematics – II',
        'Applied Mechanics',
        'Applied Physics',
        'Engineering Graphics (BEG) / Engineering Drawing',
        'C Language',
        'Basic Electronics'
      ]
    },
    {
      icon: <FaVial />,
      title: 'Chemical Engineering',
      subjects: [
        'Applied Mathematics – I',
        'Applied Mathematics – II',
        'Applied Mechanics',
        'Applied Physics',
        'Applied Chemistry',
        'Engineering Graphics (BEG) / Engineering Drawing',
        'Strength Of Material',
        'Fluid Mechanics',
        'Thermal'
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaChalkboardTeacher />,
      title: 'In-Depth Understanding',
      description: 'Our expert coaches break down complex topics into digestible portions, making it easier for students to grasp.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Exam-Focused Preparation',
      description: 'We focus on important topics, past exam papers, and likely questions to ensure students are thoroughly prepared for the semester exams.'
    },
    {
      icon: <FaBook />,
      title: 'Personalized Attention',
      description: 'With smaller class sizes and one-on-one sessions, we offer tailored guidance to help each student reach their full potential.'
    },
    {
      icon: <FaLaptop />,
      title: 'Flexible Learning Options',
      description: 'Whether you prefer in-person coaching or the convenience of online Polytechnic subjects coaching, we offer both options to fit your schedule.'
    }
  ];

  const keyStrengths = [
    {
      icon: <FaUserTie />,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced educators specializing in Polytechnic subjects across various branches.'
    },
    {
      icon: <FaBookOpen />,
      title: 'Comprehensive Course Material',
      description: 'Meticulously designed study materials aligned with syllabus and exam patterns.'
    },
    {
      icon: <FaBullseye />,
      title: 'Tailored Coaching Programs',
      description: 'Customized coaching plans catering to individual strengths and weaknesses.'
    },
    {
      icon: <FaTrophy />,
      title: 'Proven Track Record',
      description: 'Consistently helping students achieve excellent results and secure top ranks.'
    },
    {
      icon: <FaLaptop />,
      title: 'Flexible Learning Options',
      description: 'Both offline and online coaching options to fit your schedule and learning style.'
    },
    {
      icon: <FaUsers />,
      title: 'Personalized Attention',
      description: 'Smaller batch sizes ensuring individual attention and regular doubt-clearing sessions.'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Regular Assessments',
      description: 'Periodic tests and mock exams to track progress and identify areas for improvement.'
    },
    {
      icon: <FaChartLine />,
      title: 'Performance Analytics',
      description: 'Detailed performance reports and analytics to help students understand their strengths and weaknesses.'
    },
    {
      icon: <FaClock />,
      title: '24/7 Support',
      description: 'Round-the-clock doubt clearing sessions and academic support for continuous learning.'
    }
  ];

  return (
    <div className="semester-coaching-page">
      {/* Content Section */}
      <section className="poly-section mt-4">
        <Container>
          <h2 className="section-title mb-5 text-uppercase"> Why Polytechnic Semester Coaching?</h2>
          <Row className="g-4">
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaBook /></div>
                  <h5 className="benefit-title">Technical Foundation</h5>
                  <p className="benefit-description">
                    Polytechnic education is an essential path for building a strong foundation in diverse technical fields.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaWrench /></div>
                  <h5 className="benefit-title">Practical Application</h5>
                  <p className="benefit-description">
                    Bridges the gap between theoretical concepts and practical applications, preparing you for real-world engineering challenges.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaLaptopCode /></div>
                  <h5 className="benefit-title">Skill Development</h5>
                  <p className="benefit-description">
                    Focuses on developing core technical skills specific to your engineering branch to make you industry-ready.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaChartLine /></div>
                  <h5 className="benefit-title">Academic Excellence</h5>
                  <p className="benefit-description">
                    Consistent effort during semesters helps maintain a strong academic record, which is crucial for higher studies and placements.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>



      {/* Content Container */}
      <Container>
        {/* Why Choose Section */}
        <div className="why-choose-section">
            <h2 className="main-section-heading">Why Choose Polytechnic Semester Coaching?</h2>
            <p className="intro-text">
              Polytechnic students often face a wide range of technical subjects, each requiring a deep understanding of concepts. These subjects can be challenging, and the semester exams demand not only knowledge but also the ability to apply it in practical scenarios. Polytechnic subjects coaching helps bridge the gap between textbook knowledge and real-world application.
            </p>
            <Row className="benefits-row">
              {benefits.map((benefit, index) => (
                <Col lg={3} md={6} sm={6} xs={12} key={index} className="mb-4">
                  <Card className="benefit-card h-100">
                    <Card.Body>
                      <div className="benefit-icon">
                        {benefit.icon}
                      </div>
                      <h5 className="benefit-title">{benefit.title}</h5>
                      <p className="benefit-description">{benefit.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Engineering Branches */}
          <div className="branches-section">
            <h2 className="main-section-heading">Polytechnic Engineering Branches We Offer</h2>
            
            <Row>
              {engineeringBranches.map((branch, index) => (
                <Col lg={4} md={6} sm={6} xs={12} key={index} className="mb-4">
                  <Card className="branch-card h-100">
                    <Card.Body className="d-flex flex-column">
                      <div className="branch-header">
                        <div className="branch-icon">
                          {branch.icon}
                        </div>
                        <h3 className="branch-title">{branch.title}</h3>
                      </div>
                      
                      <div className="branch-content">
                        {branch.semesters ? (
                          // For Mechanical Engineering with semester breakdown
                          <>
                            {branch.semesters.slice(0, expandedCards[index] ? branch.semesters.length : 1).map((semester, semIdx) => (
                              <div key={semIdx} className="semester-group">
                                <h5 className="semester-heading">{semester.title}</h5>
                                <ul className="subjects-list">
                                  {semester.subjects.slice(0, expandedCards[index] ? semester.subjects.length : 4).map((subject, subIdx) => (
                                    <li key={subIdx}>{subject}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </>
                        ) : (
                          // For other branches with direct subjects list
                          <ul className="subjects-list">
                            {branch.subjects.slice(0, expandedCards[index] ? branch.subjects.length : 5).map((subject, subIdx) => (
                              <li key={subIdx}>{subject}</li>
                            ))}
                          </ul>
                        )}
                        {(branch.semesters ? branch.semesters.length > 1 : branch.subjects.length > 5) && (
                          <button 
                            className="read-more-btn"
                            onClick={() => toggleCard(index)}
                          >
                            {expandedCards[index] ? 'Show Less' : 'Read More...'}
                          </button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Why Mission Engineering */}
          <div className="mission-section">

            <h3 className="subsection-heading">Our Key Strengths</h3>
            <Row className="strengths-row">
              {keyStrengths.map((strength, index) => (
                <Col lg={4} md={6} sm={6} xs={12} key={index} className="mb-4">
                  <Card className="strength-card h-100">
                    <Card.Body>
                      <div className="strength-icon">
                        {strength.icon}
                      </div>
                      <h5 className="strength-title">{strength.title}</h5>
                      <p className="strength-description">{strength.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* FAQ Section */}
          <section className="faq-section py-5 mt-4">
            <h2 className="text-center mb-5 home-section-heading">FREQUENTLY ASKED QUESTIONS</h2>
            <Accordion className="custom-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>1. Which semesters are covered in the semester coaching program?</Accordion.Header>
                <Accordion.Body>
                  We cover all subjects for polytechnic students from the 1st semester right up to the 6th semester, focusing on core engineering subjects.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. Are all engineering branches supported?</Accordion.Header>
                <Accordion.Body>
                  Yes, we provide semester coaching for major branches including Mechanical, Civil, Computer Science, Electronics, Electrical, Automobile, IT, and Chemical Engineering.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>3. Do you provide study materials for semester exams?</Accordion.Header>
                <Accordion.Body>
                  Absolutely! Students receive comprehensive notes, practice sheets, and previous year question papers specifically tailored to the polytechnic syllabus.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>4. How often are the classes conducted?</Accordion.Header>
                <Accordion.Body>
                  Classes are typically held 3 to 4 days a week, depending on the subjects you choose, with flexible timing to suit college schedules.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>5. Are previous year question papers discussed?</Accordion.Header>
                <Accordion.Body>
                  Yes, solving PYQs is a core part of our teaching methodology. We dedicate special sessions before exams to discuss and solve past papers.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>6. Do you conduct regular tests for semester preparation?</Accordion.Header>
                <Accordion.Body>
                  We conduct unit tests after completing each module and full-length mock tests before the final semester exams to track student progress.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>7. Is a doubt clearing session available separately?</Accordion.Header>
                <Accordion.Body>
                  Yes, we hold dedicated doubt-clearing sessions on weekends where students can ask specific questions and clarify complex concepts.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>8. Are the classes held online or offline?</Accordion.Header>
                <Accordion.Body>
                  We offer both offline classroom sessions and live online classes, allowing students to choose the mode of learning they prefer.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>9. Who are the faculty members for semester coaching?</Accordion.Header>
                <Accordion.Body>
                  Our faculty consists of highly experienced subject matter experts and senior educators who have deep knowledge of the polytechnic curriculum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>10. Can I join mid-semester if I missed the starting classes?</Accordion.Header>
                <Accordion.Body>
                  Yes, late joiners get access to recorded lectures for the missed classes and we provide extra backup sessions to help them catch up quickly.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
        </Container>
    </div>
  );
};

export default SemesterCoaching;
