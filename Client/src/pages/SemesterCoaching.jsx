import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CourseNavigation from '../components/CourseNavigation';
import { FaBook, FaGraduationCap, FaChalkboardTeacher, FaLaptop, FaCog, FaBolt, FaDesktop, FaFlask, FaCar, FaPrint, FaNetworkWired, FaUserTie, FaBookOpen, FaBullseye, FaTrophy, FaUsers, FaClipboardCheck, FaChartLine, FaClock, FaLaptopCode, FaMicrochip, FaBuilding, FaPlug, FaWrench, FaVial, FaServer } from 'react-icons/fa';
import './SemesterCoaching.css';

const SemesterCoaching = () => {
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
      {/* Header Section */}
      <div className="semester-header">
        <Container>
          <h1 className="semester-main-title">Polytechnic Semester Coaching: Expert Guidance for Success</h1>
        </Container>
      </div>

      {/* Content Section */}
      <div className="semester-content">
        <Container>
          <div className="content-section">
            <p className="content-text">
              Polytechnic education has long been an essential path for students looking to build a strong foundation in technical fields. As you move through each semester, the pressure to perform well in exams can be daunting. However, with the right guidance and resources, you can effectively navigate your semester exams and achieve success. This is where Polytechnic semester coaching becomes indispensable.
            </p>
            <p className="content-text">
              At our coaching institute, we offer dedicated Polytechnic semester coaching courses that focus on strengthening your understanding of all Polytechnic subjects. Whether you need help with Polytechnic subjects coaching online, we have tailored solutions to meet your needs. Our experienced faculty members help students at every stage of their preparation, ensuring that they are well-prepared for each exam.
            </p>
          </div>
        </Container>
      </div>

      <div className="courses-heading-container">
        <h2 className="courses-heading">Courses We Offer</h2>
      </div>
      <CourseNavigation />

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
                <Col lg={3} md={6} key={index} className="mb-4">
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

          {/* Why Mission Engineering */}
          <div className="mission-section">
            <h2 className="main-section-heading">Why Mission Engineering is Best For Polytechnic Semester Coaching?</h2>
            <p className="intro-text">
              At Mission Engineering, we understand the unique challenges that Polytechnic students face when preparing for their semester exams. With a commitment to academic excellence and personalized support, we have emerged as the go-to coaching institute for Polytechnic semester preparation.
            </p>
            <h3 className="subsection-heading">Our Key Strengths</h3>
            <Row className="strengths-row">
              {keyStrengths.map((strength, index) => (
                <Col lg={4} md={6} key={index} className="mb-4">
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

          {/* Engineering Branches */}
          <div className="branches-section">
            <h2 className="main-section-heading">Polytechnic Engineering Branches We Offer</h2>
            <p className="intro-text">
              Mission Engineering provides comprehensive coaching for all streams of polytechnic. We offer both offline and online semester coaching to ensure every student has access to high-quality education.
            </p>
            <Row>
              {engineeringBranches.map((branch, index) => (
                <Col lg={4} md={6} key={index} className="mb-4">
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
                          branch.semesters.map((semester, semIdx) => (
                            <div key={semIdx} className="semester-group">
                              <h5 className="semester-heading">{semester.title}</h5>
                              <ul className="subjects-list">
                                {semester.subjects.map((subject, subIdx) => (
                                  <li key={subIdx}>{subject}</li>
                                ))}
                              </ul>
                            </div>
                          ))
                        ) : (
                          // For other branches with direct subjects list
                          <ul className="subjects-list">
                            {branch.subjects.map((subject, subIdx) => (
                              <li key={subIdx}>{subject}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
    </div>
  );
};

export default SemesterCoaching;
