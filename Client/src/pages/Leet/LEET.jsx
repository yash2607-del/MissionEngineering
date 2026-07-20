import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseNavigation from '../../components/CourseNavigation';
import { FaCheckCircle, FaBook, FaUserGraduate, FaChartLine, FaClock, FaQuestionCircle, FaUsers, FaHandPointRight, FaSearch, FaBell, FaChair, FaTrophy, FaLightbulb } from 'react-icons/fa';
import { images } from '../../../data';
import './LEET.css';

const LEET = () => {













  const ipuSyllabus = [
    { sr: 1, section: 'Section A', syllabus: 'Mathematics', questions: 25, marks: 100 },
    { sr: 2, section: 'Section B', syllabus: 'Reasoning', questions: 25, marks: 100 },
    { sr: 3, section: 'Section C', syllabus: 'Mechanics', questions: 25, marks: 100 },
    { sr: 4, section: 'Section D', syllabus: 'Physics + Chemistry + Computer Awareness', questions: 25, marks: 100 },
  ];



  const dtuSyllabus = [
    { sr: 1, section: 'Section A', subject: 'Mathematics', questions: 40, marks: 160 },
    { sr: 2, section: 'Section B', subject: 'Reasoning', questions: 25, marks: 100 },
    { sr: 3, section: 'Section C', subject: 'Aptitude', questions: 25, marks: 100 },
  ];

  const admissionProcess = [
    {
      step: 1,
      title: 'Understand Eligibility Criteria',
      description: 'Before diving into the admission process, it\'s vital to understand the LEET eligibility criteria. Candidates must possess a diploma in engineering, achieve minimum 60% marks, and meet age requirements (21 years for unreserved category).'
    },
    {
      step: 2,
      title: 'Register for LEET',
      description: 'Visit the official IPU admission portal to complete the registration process. Fill in your details, upload required documents (photograph and signature), and pay the application fee of Rs. 1500 online.'
    },
    {
      step: 3,
      title: 'Download Admit Card',
      description: 'Visit the official GGSIPU website, find the Admit Card section, enter required details (registration number, DOB, password), submit and download the admit card. Verify all information is correct.'
    },
    {
      step: 4,
      title: 'Take the LEET Exam',
      description: 'Familiarize yourself with the exam center location in advance. Carry all necessary documents including admit card and valid ID proof. Stay calm and manage your time effectively during the exam.'
    },
    {
      step: 5,
      title: 'Check LEET Results',
      description: 'Results are usually declared within a few weeks. IPU provides the answer key before the final result. Check the official IPU website for your LEET results and rank.'
    },
    {
      step: 6,
      title: 'Participate in Counselling',
      description: 'Register online for the counselling session by submitting counselling fee of Rs. 1000. Fill in your preferences for courses and colleges. Seats will be allocated based on your rank and choices.'
    },
    {
      step: 7,
      title: 'Document Verification',
      description: 'Attend the document verification session with all required documents including academic certificates, identity proof, and LEET scorecard. Pay the admission fee and keep the payment receipt safe.'
    },
    {
      step: 8,
      title: 'Admission Confirmation',
      description: 'Upon successful verification and fee payment, you will receive confirmation of your admission into the chosen B.Tech program. Complete course registration and attend orientation sessions.'
    }
  ];

  const faqs = [
    {
      question: 'What is LEET?',
      answer: 'LEET, or Lateral Entry Entrance Test, is an examination designed for diploma holders seeking direct admission into the second year of B.Tech programs.'
    },
    {
      question: 'Who is eligible to take the LEET exam?',
      answer: 'To be eligible for the LEET exam, candidates typically must: Hold a diploma in engineering from a recognized institution (usually a three-year or four years program), achieve a minimum percentage 60% in diploma, and maximum age limit for the un-reserved candidates to appear in IPU and DTU LEET examination is 21 years.'
    },
    {
      question: 'How do I register for the LEET exam?',
      answer: 'Registration for the LEET exam is done online: Visit the Official IPU Admission Portal, create an account and fill out the application form. Upload required documents (photo, signature, and educational certificates). Pay the application fee of Rs. 1500 according to the instructions given.'
    },
    {
      question: 'What topics are covered in the LEET syllabus?',
      answer: 'The IPU LEET syllabus generally includes: Section A: Mathematics (Algebra, calculus, geometry, trigonometry), Section B: Reasoning (Verbal Reasoning, Non-verbal Reasoning and Analytical Reasoning) and Quantitative Aptitude, Section C: Mechanics (Applied Mechanics, Strength of Material and Fluid Mechanics), Section D: Physics, Chemistry and Computer Awareness.'
    },
    {
      question: 'How can I prepare for the LEET exam?',
      answer: 'Effective preparation is key to success in the LEET exam: Enroll in LEET Institute in Delhi (joining a coaching center can provide structured guidance and expert insights), attend LEET Classes (regular classes help reinforce learning and clarify doubts), utilize study materials (focus on recommended textbooks, online resources, and previous years\' papers), practice mock tests (simulate exam conditions to enhance your time management and problem-solving skills).'
    },
    {
      question: 'What are the best resources for LEET preparation?',
      answer: 'For comprehensive preparation, consider Mission Engineering Study material which provides comprehensive study material specifically designed for LEET preparation, ensuring coverage of all essential topics. The material includes detailed notes, practice questions, and previous years\' papers. Also use standard textbooks for mathematics, physics, chemistry and all subjects, and download Mission Engineering app where you can get tutorials and lectures tailored to the LEET syllabus.'
    },
    {
      question: 'What is the format of the LEET exam?',
      answer: 'The LEET exam typically consists of 100 multiple-choice questions (MCQs) in four sections. The total duration of the exam is usually 150 minutes, and it is essential to manage your time effectively during the test.'
    },
    {
      question: 'How can I check my LEET results?',
      answer: 'After the exam, results are usually declared within a few weeks. You can check your scores by visiting the official IPU website and entering your registration details to access your result.'
    },
    {
      question: 'What should I do after the results are declared?',
      answer: 'Once the results are out, follow these steps: Check your rank to understand your performance in comparison to other candidates. Register for counseling session online through the IPU admission portal. Fill in your choices - choose the courses and colleges based on your preferences and the cut off scores.'
    },
    {
      question: 'What documents are required for the admission process?',
      answer: 'During the admission process, you will need: Admit card of the LEET exam, 10th mark sheets, diploma certificates (as many available), identity proof (Aadhaar, passport, etc.), caste certificate (if applicable). Make sure to carry original documents along with photocopies for verification.'
    },
    {
      question: 'Is it necessary to attend counseling sessions?',
      answer: 'Yes, attending counseling sessions is crucial if you qualify for admission. This process helps allocate seats based on your rank, preferences, and available courses.'
    },
    {
      question: 'Can I get admission in DTU through LEET?',
      answer: 'Yes, candidates can secure admission in DTU through the LEET exam, provided they meet the eligibility criteria. DTU offers various B.Tech programs through lateral entry, allowing diploma holders to join the second year of the course.'
    },
    {
      question: 'What are the benefits of Lateral Entry in B.Tech?',
      answer: 'Lateral entry into B.Tech programs offers several advantages: Shorter Duration (students enter directly into the second year, reducing the overall time spent in the program), Focused Curriculum (the curriculum is often more tailored to engineering disciplines), Cost-Effective (typically, the cost of completing a B.Tech through lateral entry may be lower than the full duration of the program).'
    },
    {
      question: 'How can I manage stress during preparation?',
      answer: 'Preparing for the LEET exam can be stressful, but effective stress management strategies can help: Take regular breaks during study sessions to recharge, engage in physical activities or yoga to maintain mental well-being, practice mindfulness techniques such as meditation to stay focused and calm, discuss your concerns with peers or mentors to gain perspective and support.'
    }
  ];

  const coachingCenters = [
    {
      name: 'Mission Engineering',
      description: 'Known for its best track record, experienced faculty and comprehensive study material. Offers a robust program for LEET exam preparation with regular mock tests and performance analysis.'
    },
    {
      name: 'Polytechnic Coaching',
      description: 'Renowned for its rigorous coaching and a strong track record in engineering entrance exams. Provides targeted LEET classes focusing on core subjects relevant to the exam.'
    },
    {
      name: 'Eleet Classes',
      description: 'A well-respected name in the field of competitive exam coaching. Offers extensive resources and expert guidance for lateral entry coaching.'
    },
    {
      name: 'Prudance Academy',
      description: 'Focuses on personalized attention and customized learning plans. Known for its student-friendly approach and thorough coverage of the IPU LEET syllabus.'
    },
    {
      name: 'Resonance Classes',
      description: 'Offers comprehensive coaching with a focus on weak areas. Provides a detailed analysis of mock test performance, helping students identify and improve their shortcomings.'
    }
  ];

  return (
    <div className="leet-page">
    
      {/* Introduction Section */}
      <section className="leet-intro py-5 mt-4">
        <Container>
          <h2 className="section-title text-uppercase mb-5">What is LEET Exam?</h2>
          <Row className="g-4">
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaUserGraduate /></div>
                  <h5 className="benefit-title">Admission Pathway</h5>
                  <p className="benefit-description">
                    LEET is designed for diploma holders seeking direct admission into the second year of undergraduate engineering programs.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaChartLine /></div>
                  <h5 className="benefit-title">Career Enhancement</h5>
                  <p className="benefit-description">
                    It serves as a crucial pathway to further your education and enhance engineering career prospects without starting from scratch.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaBook /></div>
                  <h5 className="benefit-title">Exam Format</h5>
                  <p className="benefit-description">
                    The format varies by institution but generally assesses candidates on mathematics, physics, and specific engineering subjects.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaCheckCircle /></div>
                  <h5 className="benefit-title">Assessment Goals</h5>
                  <p className="benefit-description">
                    Evaluates your foundational knowledge and ability to transition smoothly through multiple-choice or problem-solving questions.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* LEET Courses We Offer */}
      <section className="leet-section py-5">
        <Container>
          <h2 className="section-title text-uppercase mb-5">LEET Courses We Offer</h2>
          <Row className="g-4">
            <Col lg={3} md={6}>
              <Link to="/classroom-course" style={{ textDecoration: 'none' }}>
                <Card className="benefit-card h-100">
                  <Card.Body>
                    <div className="benefit-icon"><i className="bi bi-building"></i></div>
                    <h5 className="benefit-title mb-0 mt-3">CLASSROOM COURSE</h5>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            
            <Col lg={3} md={6}>
              <Link to="/live-online-course" style={{ textDecoration: 'none' }}>
                <Card className="benefit-card h-100">
                  <Card.Body>
                    <div className="benefit-icon"><i className="bi bi-book"></i></div>
                    <h5 className="benefit-title mb-0 mt-3">LIVE-ONLINE COURSE</h5>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            
            <Col lg={3} md={6}>
              <Link to="/recorded-course" style={{ textDecoration: 'none' }}>
                <Card className="benefit-card h-100">
                  <Card.Body>
                    <div className="benefit-icon"><i className="bi bi-phone"></i></div>
                    <h5 className="benefit-title mb-0 mt-3">RECORDED COURSE</h5>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            
            <Col lg={3} md={6}>
              <Link to="/test-series" style={{ textDecoration: 'none' }}>
                <Card className="benefit-card h-100">
                  <Card.Body>
                    <div className="benefit-icon"><i className="bi bi-card-checklist"></i></div>
                    <h5 className="benefit-title mb-0 mt-3">TEST SERIES</h5>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

    

      {/* Eligibility Criteria */}
      <section id="eligibility" className="leet-section">
        <Container>
          <h2 className="section-title">LEET Eligibility Criteria</h2>
          <Row className="g-4 mt-3">
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaUserGraduate /></div>
                  <h5 className="benefit-title">Diploma Required</h5>
                  <p className="benefit-description">
                    Candidates must hold a 3 or 4 year diploma in engineering from a recognized board or university.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaChartLine /></div>
                  <h5 className="benefit-title">Min. Percentage</h5>
                  <p className="benefit-description">
                    Candidates must meet the minimum percentage requirements as specified strictly by the conducting body.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaUsers /></div>
                  <h5 className="benefit-title">Age Limitations</h5>
                  <p className="benefit-description">
                    Some universities have specific age limit criteria for candidates entering through the LEET examination.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaCheckCircle /></div>
                  <h5 className="benefit-title">Official Updates</h5>
                  <p className="benefit-description">
                    Always consult official university websites and stay updated with notifications for any criteria changes.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* IPU LEET Exam Guidelines */}
      <section id="ipu-pattern" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">IPU LEET Exam Guidelines</h2>
          <Card className="content-card">
            <Card.Body>
              <Row className="g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>1</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Program code for the IPU LEET is 128 for diploma students requires during form filling.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>2</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>To appear for the IPU LEET exam, you must have at least 60% marks in your diploma.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>3</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>IPU LEET exam will have four sections (Section A, B, C & D).</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>4</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Each section will have 25 multiple choice questions (MCQ).</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>5</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Each question is worth 4 marks. The maximum marks for the exam are 200.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>6</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Time limit for the LEET exam will be 150 minutes.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>7</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Negative marking - There will be a 1-mark penalty for answering a question incorrectly.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>8</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Age Limit - The maximum age limit for the entering is 21 years for general category candidates as on 01.08.2027. For SC/ST/OBC candidates, a relaxation of 5 years shall be granted.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>9</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Application Fee – The registration fee of Rs. 1500/- is to be paid for the IPU LEET exam.</p></Card.Body></Card>
                </Col>
              </Row>
              

            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* IPU LEET Syllabus */}
      <section id="ipu-syllabus" className="leet-section">
        <Container>
          <h2 className="section-title">Syllabus for IPU LEET 2027</h2>
          <Card className="content-card">
            <Card.Body>
              <div className="table-responsive">
                <Table responsive striped bordered hover className="exam-table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Section</th>
                      <th>Syllabus</th>
                      <th>Number of Questions</th>
                      <th>Maximum Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipuSyllabus.map((row) => (
                      <tr key={row.sr}>
                        <td>{row.sr}</td>
                        <td>{row.section}</td>
                        <td>{row.syllabus}</td>
                        <td>{row.questions}</td>
                        <td>{row.marks}</td>
                      </tr>
                    ))}
                    <tr className="total-row">
                      <td colSpan="3"><strong>Total</strong></td>
                      <td><strong>100</strong></td>
                      <td><strong>400</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="text-center mt-4">
                <a href={images.brochure.leet} target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-4 py-2 fw-bold" style={{ backgroundColor: '#1e3c72', border: 'none' }}>Click Here For IPU LEET Detailed Syllabus</a>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* DTU LEET Exam Guidelines */}
      <section id="dtu-pattern" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">DTU LEET Exam Guidelines</h2>
          <Card className="content-card">
            <Card.Body>
              <h5 className="mb-3">Essential Guidelines for DTU LEET 2027 (Delhi)</h5>
              <Row className="g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>1</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>To appear for the DTU LEET exam, you must have at least 60% marks in your diploma.</p></Card.Body></Card>
                </Col>
              
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>2</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Section A consists of Mathematics (40 Qs), Section B Reasoning (25 Qs) and Section C Reasoning (25 Qs).</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>3</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Time limit for the DTU LEET exam will be 90 minutes.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>4</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Negative marking - There will be a 1-mark penalty for answering a question incorrectly.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>6</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Essential Qualification – Three years regular diploma in any engineering branch awarded by state board / AICTE with 60%.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>7</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Application Fee – The registration fee of Rs. 1500/- is to be paid for the DTU LEET exam.</p></Card.Body></Card>
                </Col>
              </Row>
              

            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* DTU LEET Syllabus */}
      <section id="dtu-syllabus" className="leet-section">
        <Container>
          <h2 className="section-title">Syllabus Of DTU LEET 2027</h2>
          <Card className="content-card">
            <Card.Body>
              <div className="table-responsive">
                <Table responsive striped bordered hover className="exam-table">
                  <thead>
                    <tr>
                      <th>S No.</th>
                      <th>Section</th>
                      <th>Subject</th>
                      <th>No. of Questions</th>
                      <th>Maximum Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dtuSyllabus.map((row) => (
                      <tr key={row.sr}>
                        <td>{row.sr}</td>
                        <td>{row.section}</td>
                        <td>{row.subject}</td>
                        <td>{row.questions}</td>
                        <td>{row.marks}</td>
                      </tr>
                    ))}
                    <tr className="total-row">
                      <td colSpan="3"><strong>Total</strong></td>
                      <td><strong>90</strong></td>
                      <td><strong>360</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="text-center mt-4">
                <a href={images.brochure.leet} target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-4 py-2 fw-bold" style={{ backgroundColor: '#1e3c72', border: 'none' }}>Click Here For DTU LEET Detailed Syllabus</a>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Admission Process */}
      <section id="admission" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">Admission Process of IPU LEET</h2>
          <div className="roadmap-container">
            {admissionProcess.map((item, index) => (
              <div key={index} className={`roadmap-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="roadmap-marker">
                  <span className="roadmap-number">{item.step}</span>
                </div>
                <div className="roadmap-content">
                  <h5 className="roadmap-title">{item.title}</h5>
                  <p className="roadmap-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Understanding Cut Off */}
      <section id="cutoff" className="leet-section">
        <Container>
          <h2 className="section-title">LEET Cut Off</h2>

          <Row className="g-4 mb-5">
            <Col lg={3} md={6}>
              <Card className="feature-card h-100 border-0 shadow-sm text-center p-3">
                <Card.Body>
                  <div className="feature-icon-wrapper mb-3 mx-auto">
                    <FaSearch className="feature-icon" />
                  </div>
                  <h6 className="fw-bold">Research Past Trends</h6>
                  <p className="text-muted small mb-0">Look into cut-off scores from previous years to set realistic goals for your preparation.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="feature-card h-100 border-0 shadow-sm text-center p-3">
                <Card.Body>
                  <div className="feature-icon-wrapper mb-3 mx-auto">
                    <FaBell className="feature-icon" />
                  </div>
                  <h6 className="fw-bold">University Notifications</h6>
                  <p className="text-muted small mb-0">Stay informed through official websites for the latest cut-off announcements.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="feature-card h-100 border-0 shadow-sm text-center p-3">
                <Card.Body>
                  <div className="feature-icon-wrapper mb-3 mx-auto">
                    <FaChair className="feature-icon" />
                  </div>
                  <h6 className="fw-bold">Availability of Seats</h6>
                  <p className="text-muted small mb-0">Keep track of the number of seats available in the participating institutions.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="feature-card h-100 border-0 shadow-sm text-center p-3">
                <Card.Body>
                  <div className="feature-icon-wrapper mb-3 mx-auto">
                    <FaTrophy className="feature-icon" />
                  </div>
                  <h6 className="fw-bold">Overall Performance</h6>
                  <p className="text-muted small mb-0">Monitor the average scores of all candidates appearing for the exam.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h2 className="section-title">Why Understanding Cut Off is Crucial</h2>
          <Row className="g-4 text-center">
            <Col md={4}>
              <Card className="reason-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="reason-icon-wrapper mx-auto mb-3">
                    <FaChartLine />
                  </div>
                  <h5 className="fw-bold">Admission Planning</h5>
                  <p className="text-muted mb-0">Knowing the expected cut off helps candidates set realistic goals for their preparation and choose the right institutions.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="reason-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="reason-icon-wrapper mx-auto mb-3">
                    <FaUserGraduate />
                  </div>
                  <h5 className="fw-bold">Competitive Edge</h5>
                  <p className="text-muted mb-0">Familiarity with cut off trends allows candidates to understand the competition and tailor their strategies accordingly.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="reason-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="reason-icon-wrapper mx-auto mb-3">
                    <FaBook />
                  </div>
                  <h5 className="fw-bold">Guiding Study Focus</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Previous Cut Off */}
      <section id="previous-cutoff" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">Analyzing Previous Years' LEET Cut Off Trends</h2>
          <Row className="g-4 mb-5">
            <Col lg={4} md={6}>
              <Card className="trend-card h-100 border-0 shadow-sm overflow-hidden">
                <div className="trend-header bg-primary text-white text-center py-3">
                  <h2 className="mb-0 fw-bold">2026 Cut Off</h2>
                </div>
                <Card.Body className="p-4">
                  <div className="mb-4">
                    <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>IPU:</h4>
                    <p className="text-muted small mb-0">Students who scored 290 out of 400 ranked in the top 10.</p>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>DTU:</h4>
                    <p className="text-muted small mb-0">Rank 1: Spandan Choudhury scored 292 out of 360. Spandan was a student of Mission Engineering offline batch LEET 2026.</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="trend-card h-100 border-0 shadow-sm overflow-hidden">
                <div className="trend-header bg-primary text-white text-center py-3" style={{ opacity: 0.9 }}>
                  <h3 className="mb-0 fw-bold">2025 Cut Off</h3>
                </div>
                <Card.Body className="p-4">
                  <div className="mb-4">
                    <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>IPU:</h4>
                    <p className="text-muted small mb-0">Students who scored 230 out of 400 ranked in the top 10.</p>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>DTU:</h4>
                    <p className="text-muted small mb-0">Students who scored 220 out of 360 ranked in the top 10.</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="trend-card h-100 border-0 shadow-sm overflow-hidden">
                <div className="trend-header bg-primary text-white text-center py-3" style={{ opacity: 0.8 }}>
                  <h3 className="mb-0 fw-bold">2024 Cut Off</h3>
                </div>
                <Card.Body className="p-4">
                  <div className="mb-4">
                    <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>IPU:</h4>
                    <p className="text-muted small mb-0">Rank 1: Md Akmal scored 267 out of 400 (Mission Engineering student). Top 10: 235+ out of 400.</p>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>DTU:</h4>
                    <p className="text-muted small mb-0">Rank 1: Kartik Dadhwal scored 340 out of 360 (Mission Engineering student). Top 10: 280+ out of 360.</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h3 className="text-center mb-4 mt-5 fw-bold">Factors Influencing Cut Offs</h3>
          <Row className="g-4 text-center">
            <Col md={4}>
              <Card className="reason-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="reason-icon-wrapper mx-auto mb-3">
                    <FaUsers />
                  </div>
                  <h5 className="fw-bold">Increase in Candidates</h5>
                  <p className="text-muted mb-0">Each year, more students apply for lateral entry, which can lead to higher cut off scores.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="reason-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="reason-icon-wrapper mx-auto mb-3">
                    <FaBook />
                  </div>
                  <h5 className="fw-bold">Changes in Curriculum</h5>
                  <p className="text-muted mb-0">Updates to the Delhi LEET syllabus or IPU LEET syllabus can impact how candidates perform and subsequently affect the cut off.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="reason-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="reason-icon-wrapper mx-auto mb-3">
                    <FaChair />
                  </div>
                  <h5 className="fw-bold">Seat Availability</h5>
                  <p className="text-muted mb-0">The total number of available seats in top engineering colleges heavily impacts how competitive the cut off will be.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </section>

      {/* Preparation Tips */}
      <section id="preparation" className="leet-section">
        <Container>
          <h2 className="section-title">LEET Preparation Tips</h2>
          <p className="text-center mb-4">
            Effective LEET exam preparation is vital for achieving a good rank. Here are some essential strategies:
          </p>

          <Row className="g-4">
            <Col lg={3} md={6} xs={12}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <h5>Expert Coaching</h5>
                  <p>Joining LEET classes helps students gain structured knowledge. Mission Engineering provides best LEET classes for both IPU LEET and DTU LEET preparations.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <h5>Study Materials</h5>
                  <p>Utilize classroom notes, practice sets, check list books, Mission Engineering APP, books, revision guide, mock tests and previous years question papers.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <h5>Regular Practice</h5>
                  <p>Consistent practice is key to success. Regular practice through mock tests can significantly enhance students' confidence, exam readiness and familiarity with the exam format.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <h5>Focus Areas</h5>
                  <p>Identify and focus on areas that require more attention. Personalized coaching can help students tackle their weaknesses effectively.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <h5>Group Study</h5>
                  <p>Studying with peers can provide different perspectives and facilitate better understanding. It's also a great way to stay motivated.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <h5>Health & Wellness</h5>
                  <p>Maintain a healthy lifestyle with a balanced diet and regular exercise. Mental and physical well-being are crucial during exam preparation.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <h5>Active Participation</h5>
                  <p>Engage actively during classes, asking questions and participating in discussions. Take thorough notes during lectures for revision.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} xs={12}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <h5>Study Plan</h5>
                  <p>A well-structured study plan is essential. Set clear goals, manage time effectively, allocate specific time slots for different subjects, and divide topics into smaller segments.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Understanding LEET for Diploma Holders */}
      <section className="leet-section bg-light">
        <Container>
          <h2 className="section-title">Understanding the LEET Exam for Diploma Holders</h2>
        

          <h4 className="text-center mb-4 fw-bold">Purpose of LEET Exam</h4>
          <Row className="g-4 mb-5">
            <Col lg={3} md={6}>
              <Card className="purpose-card border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Standardized Assessment</h5>
                  <p className="text-muted mb-0">Provides a standardized method to assess the aptitude and knowledge of diploma holders in engineering disciplines.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="purpose-card border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Facilitating Admission</h5>
                  <p className="text-muted mb-0">By passing the LEET exam, candidates can secure admission to reputable engineering colleges, enhancing their career prospects.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="purpose-card border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Streamlining Lateral Entry</h5>
                  <p className="text-muted mb-0">The exam is specifically designed for lateral entry into B.Tech programs, allowing students to continue their education without repeating the first year.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="purpose-card border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Broader Career Opportunities</h5>
                  <p className="text-muted mb-0">A B.Tech degree often opens up more job opportunities and potentially higher salaries compared to a diploma.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

         l
        </Container>
      </section>

      {/* Coaching Centers */}
      <section id="coaching" className="leet-section">
        <Container>
          <h2 className="section-title">Importance Of LEET Coaching In Delhi</h2>
          <h4 className="text-center mb-4 fw-bold">Good coaching centres often provide:</h4>
          <Row className="g-4 mb-5">
            <Col lg={4} md={6}>
              <Card className="coaching-feature-card h-100 border-0 shadow-sm p-3 text-center">
                <Card.Body>
                  <div className="coaching-icon-wrapper mx-auto mb-3 text-primary">
                    <FaUserGraduate size={32} />
                  </div>
                  <h6 className="fw-bold">Expert Faculty</h6>
                  <p className="text-muted small mb-0">Experienced instructors who are familiar with the LEET exam pattern and can guide students effectively. They have good command in their respective subjects.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="coaching-feature-card h-100 border-0 shadow-sm p-3 text-center">
                <Card.Body>
                  <div className="coaching-icon-wrapper mx-auto mb-3 text-primary">
                    <FaBook size={32} />
                  </div>
                  <h6 className="fw-bold">Comprehensive Study Materials</h6>
                  <p className="text-muted small mb-0">Well-curated resources that align with the LEET syllabus, ensuring thorough coverage of topics.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="coaching-feature-card h-100 border-0 shadow-sm p-3 text-center">
                <Card.Body>
                  <div className="coaching-icon-wrapper mx-auto mb-3 text-primary">
                    <FaChartLine size={32} />
                  </div>
                  <h6 className="fw-bold">Practice Tests</h6>
                  <p className="text-muted small mb-0">Regular mock tests to help students assess their preparedness and improve their time management skills.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="coaching-feature-card h-100 border-0 shadow-sm p-3 text-center">
                <Card.Body>
                  <div className="coaching-icon-wrapper mx-auto mb-3 text-primary">
                    <FaChair size={32} />
                  </div>
                  <h6 className="fw-bold">Structured Learning Environment</h6>
                  <p className="text-muted small mb-0">Coaching centers provide a systematic approach to studying, ensuring that students cover all necessary topics in line with the Delhi LEET syllabus.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="coaching-feature-card h-100 border-0 shadow-sm p-3 text-center">
                <Card.Body>
                  <div className="coaching-icon-wrapper mx-auto mb-3 text-primary">
                    <FaSearch size={32} />
                  </div>
                  <h6 className="fw-bold">Focused Preparation</h6>
                  <p className="text-muted small mb-0">With specialized LEET exam tuition, students can focus on their weaknesses and develop strengths in key areas relevant to the IPU LEET and DTU LEET syllabus.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="coaching-feature-card h-100 border-0 shadow-sm p-3 text-center">
                <Card.Body>
                  <div className="coaching-icon-wrapper mx-auto mb-3 text-primary">
                    <FaUsers size={32} />
                  </div>
                  <h6 className="fw-bold">Motivation and Discipline</h6>
                  <p className="text-muted small mb-0">A classroom setting fosters a sense of community and accountability, encouraging students to stay committed to their study schedules.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="mt-5 pt-5">
            <h2 className="section-title mb-5">Top 3 LEET Coaching Centers in Delhi</h2>
          </div>
          
          <Row className="g-4 row-cols-1 row-cols-md-3 row-cols-lg-3 justify-content-center">
            {coachingCenters.slice(0, 3).map((center, index) => (
              <Col key={index}>
                <Card 
                  className="coaching-card h-100 border-0 shadow-sm text-center" 
                  style={{ 
                    transition: 'transform 0.3s ease', 
                    background: '#fff',
                    border: 'none'
                  }}
                >
                  <Card.Body className="p-4 d-flex flex-column align-items-center">
                    <div 
                      className="mx-auto mb-4 shadow-sm flex-shrink-0" 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        fontSize: '1.2rem', 
                        fontWeight: 'bold',
                        background: '#1e3c72', 
                        color: '#fff', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        borderRadius: '8px'
                      }}
                    >
                      {index + 1}
                    </div>
                    <h5 className="fw-bold mb-3" style={{ color: '#1e3c72' }}>{center.name}</h5>
                    <p className="text-muted mb-0 flex-grow-1" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{center.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">FAQs About LEET</h2>
          
          <Accordion>
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} eventKey={index.toString()} className="faq-accordion-item">
                <Accordion.Header className="faq-accordion-header">
                  {faq.question}
                </Accordion.Header>
                <Accordion.Body className="faq-accordion-body">
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>
    </div>
  );
};

export default LEET;
