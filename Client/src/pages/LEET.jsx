import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion, Table } from 'react-bootstrap';
import CourseNavigation from '../components/CourseNavigation';
import { FaCheckCircle, FaBook, FaUserGraduate, FaChartLine, FaClock, FaQuestionCircle, FaUsers, FaHandPointRight } from 'react-icons/fa';
import './LEET.css';

const LEET = () => {
  const [activeKey, setActiveKey] = useState(null);

  const tableOfContents = [
    { id: 'eligibility', title: 'LEET Eligibility Criteria' },
    { id: 'ipu-pattern', title: 'IPU LEET Exam Pattern' },
    { id: 'ipu-syllabus', title: 'Syllabus of IPU LEET Exam' },
    { id: 'dtu-pattern', title: 'DTU LEET Exam Pattern' },
    { id: 'dtu-syllabus', title: 'Syllabus of DTU LEET Exam' },
    { id: 'admission', title: 'Admission Process: Step By Step' },
    { id: 'cutoff', title: 'Understanding LEET Cut Off' },
    { id: 'previous-cutoff', title: 'Analyzing Previous LEET Cut Off' },
    { id: 'preparation', title: 'Effective LEET Exam Preparation Tips' },
    { id: 'coaching', title: 'Importance Of LEET Coaching In Delhi' },
    { id: 'faqs', title: 'FAQs About LEET' }
  ];

  const ipuPattern = [
    { sr: 1, section: 'Section A', questions: 25, marks: 100 },
    { sr: 2, section: 'Section B', questions: 25, marks: 100 },
    { sr: 3, section: 'Section C', questions: 25, marks: 100 },
    { sr: 4, section: 'Section D', questions: 25, marks: 100 },
  ];

  const ipuSyllabus = [
    { sr: 1, section: 'Section A', syllabus: 'Mathematics', questions: 25 },
    { sr: 2, section: 'Section B', syllabus: 'Reasoning', questions: 25 },
    { sr: 3, section: 'Section C', syllabus: 'Mechanics', questions: 25 },
    { sr: 4, section: 'Section D', syllabus: 'Physics + Chemistry + Computer Awareness', questions: 25 },
  ];

  const dtuPattern = [
    { sr: 1, section: 'Section A', questions: 40, marks: 160 },
    { sr: 2, section: 'Section B', questions: 25, marks: 100 },
    { sr: 3, section: 'Section C', questions: 25, marks: 100 },
  ];

  const dtuSyllabus = [
    { sr: 1, section: 'Section A', subject: 'Mathematics', questions: 40 },
    { sr: 2, section: 'Section B', subject: 'Reasoning', questions: 25 },
    { sr: 3, section: 'Section C', subject: 'Aptitude', questions: 25 },
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
      {/* Hero Section */}
      <section className="leet-hero">
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">LEET Exam Guide</h1>
            <p className="hero-subtitle">Comprehensive Guide for Lateral Entry Entrance Test</p>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="leet-intro">
        <Container>
          <Card className="intro-card">
            <Card.Body>
              <h2 className="section-title">What is LEET Exam?</h2>
              <p>
                The Lateral Entry Entrance Test (LEET) is designed for students seeking to gain admission into the second year of undergraduate engineering programs, typically after completing a diploma in engineering or a relevant field. This test serves as a pathway for those who want to further their education and enhance their career prospects in engineering without starting from the first year. LEET is crucial for integrating diploma holders into degree programs, allowing them to build upon their existing knowledge and skills.
              </p>
              <p>
                The format of the LEET varies by institution, but it generally assesses candidates on subjects relevant to their chosen engineering discipline. The exam usually covers mathematics, physics, and the specific engineering subjects related to the branch the candidate wishes to enter. The objective is to evaluate the students' foundational knowledge and their ability to transition smoothly into a more advanced curriculum. The test may consist of multiple-choice questions, problem-solving scenarios, and sometimes even practical assessments, depending on the engineering program.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <CourseNavigation />

      {/* Table of Contents */}
      <section className="table-of-contents">
        <Container>
          <div className="toc-wrapper">
            <h3 className="toc-title">Table Of Content</h3>
            <div className="toc-list">
              {tableOfContents.map((item, index) => (
                <a key={index} href={`#${item.id}`} className="toc-item">
                  <FaHandPointRight className="toc-icon" />
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Eligibility Criteria */}
      <section id="eligibility" className="leet-section">
        <Container>
          <h2 className="section-title">LEET Eligibility Criteria</h2>
          <Card className="content-card">
            <Card.Body>
              <p>To sit for the LEET exam, candidates must meet certain LEET eligibility criteria. Generally, this includes:</p>
              <ul className="criteria-list">
                <li>Holding a 3- or 4-years diploma in engineering from recognized board or University.</li>
                <li>Meeting minimum percentage requirements as specified by the conducting body.</li>
                <li>Age limit – Some university set age limit criteria for entering through LEET exam.</li>
              </ul>
              <p className="mt-3">Understanding these criteria is essential for candidates to ensure they are eligible for the exam. Before applying for the LEET exam, candidates should verify their eligibility by:</p>
              <ul className="criteria-list">
                <li><strong>Consulting Official Websites:</strong> Always refer to the official websites of the universities or examination bodies to get the most accurate and updated information regarding eligibility criteria.</li>
                <li><strong>Checking Notifications:</strong> Universities often release notifications regarding any changes in eligibility, so it's essential to stay updated.</li>
              </ul>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* IPU LEET Exam Pattern */}
      <section id="ipu-pattern" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">IPU LEET Exam Pattern</h2>
          <Card className="content-card">
            <Card.Body>
              <div className="key-points">
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Program code for the IPU LEET is 128 for diploma students requires during form filling.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>To appear for the IPU LEET exam, you must have at least 60% marks in your diploma.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>IPU LEET exam will have four sections (Section A, B, C & D).</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Each section will have 25 multiple choice questions (MCQ).</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Each question is worth 4 marks. The maximum marks for the exam are 200.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Time limit for the LEET exam will be 150 minutes.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Negative marking - There will be a 1-mark penalty for answering a question incorrectly.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Age Limit - The maximum age limit for the entering is 21 years for general category candidates as on 01.08.2025. For SC/ST/OBC candidates, a relaxation of 5 years shall be granted on the maximum age limit specified.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Application Fee – The registration fee of Rs. 1500/- is to be paid for the IPU LEET exam.</span>
                </div>
              </div>
              
              <div className="table-responsive mt-4">
                <Table striped bordered hover className="exam-table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Section</th>
                      <th>Number Of Questions</th>
                      <th>Maximum Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipuPattern.map((row) => (
                      <tr key={row.sr}>
                        <td>{row.sr}</td>
                        <td>{row.section}</td>
                        <td>{row.questions}</td>
                        <td>{row.marks}</td>
                      </tr>
                    ))}
                    <tr className="total-row">
                      <td colSpan="2"><strong>Total</strong></td>
                      <td><strong>100</strong></td>
                      <td><strong>400</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* IPU LEET Syllabus */}
      <section id="ipu-syllabus" className="leet-section">
        <Container>
          <h2 className="section-title">Syllabus for IPU LEET 2025 (Delhi)</h2>
          <Card className="content-card">
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover className="exam-table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Section</th>
                      <th>Syllabus</th>
                      <th>Number of Questions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipuSyllabus.map((row) => (
                      <tr key={row.sr}>
                        <td>{row.sr}</td>
                        <td>{row.section}</td>
                        <td>{row.syllabus}</td>
                        <td>{row.questions}</td>
                      </tr>
                    ))}
                    <tr className="total-row">
                      <td colSpan="3"><strong>Total</strong></td>
                      <td><strong>100</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="text-center mt-3">
                <a href="#" className="syllabus-link">Click Here For IPU LEET Detailed Syllabus</a>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* DTU LEET Exam Pattern */}
      <section id="dtu-pattern" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">DTU LEET Exam Pattern</h2>
          <Card className="content-card">
            <Card.Body>
              <h5 className="mb-3">Essential Guidelines for DTU LEET 2025 (Delhi)</h5>
              <div className="key-points">
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>To appear for the DTU LEET exam, you must have at least 60% marks in your diploma.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>DTU LEET exam will have three sections (Section A, B & C).</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Section A consists of Mathematics, which has 40 questions, Section B consists of Reasoning, which has 25 questions and Section C consists of Reasoning which has 25 questions.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Time limit for the DTU LEET exam will be 90 minutes.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Negative marking - There will be a 1-mark penalty for answering a question incorrectly.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Essential Qualification – Three years regular diploma in any branch of engineering awarded by any state board of Technical Education / Diploma recognized by AICTE, Delhi with 60% marks or equivalent CGPA.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Application Fee – The registration fee of Rs. 1500/- is to be paid for the DTU LEET exam.</span>
                </div>
              </div>
              
              <div className="table-responsive mt-4">
                <Table striped bordered hover className="exam-table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Section</th>
                      <th>Number Of Questions</th>
                      <th>Maximum Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dtuPattern.map((row) => (
                      <tr key={row.sr}>
                        <td>{row.sr}</td>
                        <td>{row.section}</td>
                        <td>{row.questions}</td>
                        <td>{row.marks}</td>
                      </tr>
                    ))}
                    <tr className="total-row">
                      <td colSpan="2"><strong>Total</strong></td>
                      <td><strong>90</strong></td>
                      <td><strong>360</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* DTU LEET Syllabus */}
      <section id="dtu-syllabus" className="leet-section">
        <Container>
          <h2 className="section-title">Syllabus Of DTU LEET 2025 (Delhi)</h2>
          <Card className="content-card">
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover className="exam-table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Section</th>
                      <th>Subject</th>
                      <th>Number Of Questions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dtuSyllabus.map((row) => (
                      <tr key={row.sr}>
                        <td>{row.sr}</td>
                        <td>{row.section}</td>
                        <td>{row.subject}</td>
                        <td>{row.questions}</td>
                      </tr>
                    ))}
                    <tr className="total-row">
                      <td colSpan="3"><strong>Total</strong></td>
                      <td><strong>90</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="text-center mt-3">
                <a href="#" className="syllabus-link">Click Here For DTU LEET Detailed Syllabus</a>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Admission Process */}
      <section id="admission" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">Admission Process at IP University through Lateral Entry</h2>
          <h4 className="text-center mb-4">Step-by-Step Guide</h4>
          <p className="text-center mb-4">
            The admission process for Indraprastha University (IPU) is a crucial journey for students aiming to pursue higher education, especially for those looking to enter Bachelor of Technology (B.Tech) programs through the Lateral Entry Entrance Test (LEET). This comprehensive guide outlines the step-by-step process for admission into IP University, along with essential tips for successful LEET exam preparation.
          </p>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="step-card h-100">
                <Card.Body>
                  <div className="step-number">1</div>
                  <h5>Understand Eligibility Criteria</h5>
                  <p>Before diving into the admission process, it's vital to understand the LEET eligibility criteria. Candidates must possess a diploma in engineering, achieve minimum 60% marks, and meet age requirements (21 years for unreserved category).</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="step-card h-100">
                <Card.Body>
                  <div className="step-number">2</div>
                  <h5>Register for LEET</h5>
                  <p>Visit the official IPU admission portal to complete the registration process. Fill in your details, upload required documents (photograph and signature), and pay the application fee of Rs. 1500 online.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="step-card h-100">
                <Card.Body>
                  <div className="step-number">3</div>
                  <h5>Download Admit Card</h5>
                  <p>Visit the official GGSIPU website, find the Admit Card section, enter required details (registration number, DOB, password), submit and download the admit card. Verify all information is correct.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="step-card h-100">
                <Card.Body>
                  <div className="step-number">4</div>
                  <h5>Take the LEET Exam</h5>
                  <p>Familiarize yourself with the exam center location in advance. Carry all necessary documents including admit card and valid ID proof. Stay calm and manage your time effectively during the exam.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="step-card h-100">
                <Card.Body>
                  <div className="step-number">5</div>
                  <h5>Check LEET Results</h5>
                  <p>Results are usually declared within a few weeks. IPU provides the answer key before the final result. Check the official IPU website for your LEET results and rank.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="step-card h-100">
                <Card.Body>
                  <div className="step-number">6</div>
                  <h5>Participate in Counselling</h5>
                  <p>Register online for the counselling session by submitting counselling fee of Rs. 1000. Fill in your preferences for courses and colleges. Seats will be allocated based on your rank and choices.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="step-card h-100">
                <Card.Body>
                  <div className="step-number">7</div>
                  <h5>Document Verification</h5>
                  <p>Attend the document verification session with all required documents including academic certificates, identity proof, and LEET scorecard. Pay the admission fee and keep the payment receipt safe.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="step-card h-100">
                <Card.Body>
                  <div className="step-number">8</div>
                  <h5>Admission Confirmation</h5>
                  <p>Upon successful verification and fee payment, you will receive confirmation of your admission into the chosen B.Tech program. Complete course registration and attend orientation sessions.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Understanding Cut Off */}
      <section id="cutoff" className="leet-section">
        <Container>
          <h2 className="section-title">Understanding LEET Cut Off</h2>
          <Card className="content-card">
            <Card.Body>
              <p className="highlight-text">
                "Understanding the cut-off for the LEET exam is very important. Both IPU and DTU do not have a minimum passing marks criterion; all students who appear in the LEET examination qualify. However, for admission to a good college, the number of seats available in the respective stream and college is crucial. Only those students who score well in the LEET exam get to choose their preferred college and stream."
              </p>
              <p>
                Candidates should familiarize themselves with previous years' cut-off scores to gauge the competition and set realistic targets for their exam preparation. Here's how to stay updated:
              </p>
              <ul className="criteria-list">
                <li><strong>Research Past Trends:</strong> Look into cut-off scores from previous years to set realistic goals for your preparation. It is important for understanding the typical range required for admission.</li>
                <li><strong>University Notifications:</strong> Stay informed through official university websites or coaching centers for the latest cut-off announcements for the current academic year.</li>
                <li><strong>Availability of Seats:</strong> The number of seats available in the participating institutions.</li>
                <li><strong>Overall Performance:</strong> The average scores of all candidates appearing for the exam.</li>
              </ul>

              <h5 className="mt-4">Understanding the LEET cut off is crucial for several reasons:</h5>
              <Row className="mt-3">
                <Col md={4}>
                  <div className="cutoff-reason">
                    <FaChartLine className="reason-icon" />
                    <h6>Admission Planning</h6>
                    <p>Knowing the expected cut off helps candidates set realistic goals for their preparation and choose the right institutions.</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="cutoff-reason">
                    <FaUserGraduate className="reason-icon" />
                    <h6>Competitive Edge</h6>
                    <p>Familiarity with cut off trends allows candidates to understand the competition and tailor their strategies accordingly.</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="cutoff-reason">
                    <FaBook className="reason-icon" />
                    <h6>Guiding Study Focus</h6>
                    <p>Understanding subjects that impact cut off scores helps allocate study time more effectively.</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Previous Cut Off */}
      <section id="previous-cutoff" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">Analyzing Previous Years' LEET Cut Off Trends</h2>
          <Card className="content-card">
            <Card.Body>
              <p>
                To provide insights into the current admission landscape, let's analyze the cut off trends from the past few years. The cut off scores for institutions such as IPU and DTU can fluctuate significantly based on various factors.
              </p>

              <Row className="mt-4">
                <Col md={4}>
                  <Card className="year-card">
                    <Card.Body>
                      <h4 className="year-title">2024 Cut Off</h4>
                      <div className="university-cutoff">
                        <h6>IPU:</h6>
                        <p>Students who scored 290 out of 400 ranked in the top 10.</p>
                      </div>
                      <div className="university-cutoff">
                        <h6>DTU:</h6>
                        <p>Rank 1: Spandan Choudhury scored 292 out of 360. Spandan was a student of Mission Engineering offline batch LEET 2024.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card className="year-card">
                    <Card.Body>
                      <h4 className="year-title">2023 Cut Off</h4>
                      <div className="university-cutoff">
                        <h6>IPU:</h6>
                        <p>Students who scored 230 out of 400 ranked in the top 10.</p>
                      </div>
                      <div className="university-cutoff">
                        <h6>DTU:</h6>
                        <p>Students who scored 220 out of 360 ranked in the top 10.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card className="year-card">
                    <Card.Body>
                      <h4 className="year-title">2022 Cut Off</h4>
                      <div className="university-cutoff">
                        <h6>IPU:</h6>
                        <p>Rank 1: Md Akmal scored 267 out of 400 (Mission Engineering student). Top 10: 235+ out of 400.</p>
                      </div>
                      <div className="university-cutoff">
                        <h6>DTU:</h6>
                        <p>Rank 1: Kartik Dadhwal scored 340 out of 360 (Mission Engineering student). Top 10: 280+ out of 360.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <div className="factors-section mt-4">
                <h5>Factors Influencing Cut Offs</h5>
                <ul className="criteria-list">
                  <li><strong>Increase in Candidates:</strong> Each year, more students apply for lateral entry, which can lead to higher cut off scores.</li>
                  <li><strong>Changes in Curriculum:</strong> Updates to the Delhi LEET syllabus or IPU LEET syllabus can impact how candidates perform and subsequently affect the cut off.</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Preparation Tips */}
      <section id="preparation" className="leet-section">
        <Container>
          <h2 className="section-title">Effective LEET Exam Preparation Tips</h2>
          <p className="text-center mb-4">
            Effective LEET exam preparation is vital for achieving a good rank. Here are some essential strategies:
          </p>

          <Row className="g-4">
            <Col md={6}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <div className="prep-icon">
                    <FaUserGraduate />
                  </div>
                  <h5>Join LEET Classes</h5>
                  <p>Joining LEET classes helps students gain structured knowledge. Mission Engineering provides best LEET classes for both IPU LEET and DTU LEET preparations.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <div className="prep-icon">
                    <FaBook />
                  </div>
                  <h5>Use Quality Study Materials</h5>
                  <p>Utilize classroom notes, practice sets, check list books, Mission Engineering APP, books, revision guide, mock tests and previous years question papers.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <div className="prep-icon">
                    <FaClock />
                  </div>
                  <h5>Practice Regularly</h5>
                  <p>Consistent practice is key to success. Regular practice through mock tests can significantly enhance students' confidence, exam readiness and familiarity with the exam format.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <div className="prep-icon">
                    <FaChartLine />
                  </div>
                  <h5>Focus on Weak Areas</h5>
                  <p>Identify and focus on areas that require more attention. Personalized coaching can help students tackle their weaknesses effectively.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <div className="prep-icon">
                    <FaUsers />
                  </div>
                  <h5>Group Study</h5>
                  <p>Studying with peers can provide different perspectives and facilitate better understanding. It's also a great way to stay motivated.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <div className="prep-icon">
                    <FaCheckCircle />
                  </div>
                  <h5>Take Care of Your Health</h5>
                  <p>Maintain a healthy lifestyle with a balanced diet and regular exercise. Mental and physical well-being are crucial during exam preparation.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <div className="prep-icon">
                    <FaCheckCircle />
                  </div>
                  <h5>Active Participation</h5>
                  <p>Engage actively during classes, asking questions and participating in discussions. Take thorough notes during lectures for revision.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="prep-card h-100">
                <Card.Body>
                  <div className="prep-icon">
                    <FaCheckCircle />
                  </div>
                  <h5>Develop a Study Plan</h5>
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
          <Card className="content-card">
            <Card.Body>
              <p>
                The Lateral Entry Entrance Test (LEET) is a crucial examination for diploma holders in engineering, enabling them to gain admission into direct second year of Bachelor of Technology (B.Tech) programs at various institutions across India. Lateral entry in B.Tech programs is particularly beneficial for diploma holders. This pathway not only saves time by allowing students to enter the second year of a B.Tech program but also helps them leverage their existing skills and knowledge.
              </p>

              <h5 className="mt-4">Purpose of LEET Exam</h5>
              <Row className="mt-3">
                <Col md={6}>
                  <div className="purpose-item">
                    <FaCheckCircle className="purpose-icon" />
                    <div>
                      <h6>Standardized Assessment</h6>
                      <p>Provides a standardized method to assess the aptitude and knowledge of diploma holders in engineering disciplines.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="purpose-item">
                    <FaCheckCircle className="purpose-icon" />
                    <div>
                      <h6>Facilitating Admission</h6>
                      <p>By passing the LEET exam, candidates can secure admission to reputable engineering colleges, enhancing their career prospects.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="purpose-item">
                    <FaCheckCircle className="purpose-icon" />
                    <div>
                      <h6>Streamlining Lateral Entry</h6>
                      <p>The exam is specifically designed for lateral entry into B.Tech programs, allowing students to continue their education without repeating the first year.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="purpose-item">
                    <FaCheckCircle className="purpose-icon" />
                    <div>
                      <h6>Broader Career Opportunities</h6>
                      <p>A B.Tech degree often opens up more job opportunities and potentially higher salaries compared to a diploma.</p>
                    </div>
                  </div>
                </Col>
              </Row>

              <h5 className="mt-4">Who Should Take LEET?</h5>
              <p>
                LEET is designed specifically for diploma holders in engineering fields, such as civil, mechanical, electrical, electronics and computer engineering. It opens up opportunities for lateral entry into B.Tech programs, making it an excellent choice for diploma students looking to advance their education and skills. There is no common LEET exam for all University and all state of India. In some states, the technical board conducts the LEET exam for all universities and colleges, while some universities conduct their own exams separately. Here we will discuss specially about IPU LEET and DTU LEET exam.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Coaching Centers */}
      <section id="coaching" className="leet-section">
        <Container>
          <h2 className="section-title">Importance Of LEET Coaching In Delhi</h2>
          <Card className="content-card mb-4">
            <Card.Body>
              <p>
                Many students opt for LEET coaching in Delhi to enhance their chances of success in the exam. They join LEET exam tuition to get personalized attention, clarify doubts and support in their studies. This approach can be especially beneficial for students who may struggle in certain subjects or require additional guidance. Good coaching centres offer tailored programs with a structured environment that helps students focus on key concepts and exam strategies.
              </p>

              <h5 className="mt-4">Good coaching centres often provide:</h5>
              <ul className="criteria-list">
                <li><strong>Expert Faculty:</strong> Experienced instructors who are familiar with the LEET exam pattern and can guide students effectively. They have good command in their respective subjects.</li>
                <li><strong>Comprehensive Study Materials:</strong> Well-curated resources that align with the LEET syllabus, ensuring thorough coverage of topics.</li>
                <li><strong>Practice Tests:</strong> Regular mock tests to help students assess their preparedness and improve their time management skills.</li>
                <li><strong>Structured Learning Environment:</strong> Coaching centers provide a systematic approach to studying, ensuring that students cover all necessary topics in line with the Delhi LEET syllabus.</li>
                <li><strong>Focused Preparation:</strong> With specialized LEET exam tuition, students can focus on their weaknesses and develop strengths in key areas relevant to the IPU LEET and DTU LEET syllabus.</li>
                <li><strong>Motivation and Discipline:</strong> A classroom setting fosters a sense of community and accountability, encouraging students to stay committed to their study schedules.</li>
              </ul>
            </Card.Body>
          </Card>

          <h3 className="text-center mb-4">Top 5 LEET Coaching Centers in Delhi</h3>
          <Row className="g-4">
            {coachingCenters.map((center, index) => (
              <Col key={index} lg={12}>
                <Card className="coaching-card">
                  <Card.Body>
                    <div className="coaching-number">{index + 1}</div>
                    <h5>{center.name}</h5>
                    <p>{center.description}</p>
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
          <p className="text-center mb-4">Common Questions about the LEET Exam and Admission Process</p>
          
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
