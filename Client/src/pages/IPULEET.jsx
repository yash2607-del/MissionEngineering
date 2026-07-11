import React from 'react';
import { Container, Row, Col, Card, Accordion, Table } from 'react-bootstrap';
import CourseNavigation from '../components/CourseNavigation';
import { FaCheckCircle, FaBook, FaUserGraduate, FaChartLine, FaClock, FaUsers, FaHandPointRight } from 'react-icons/fa';
import { images } from '../../data';
import './LEET.css';

const IPULEET = () => {

  const tableOfContents = [
    { id: 'ipu-about', title: 'About IPU LEET' },
    { id: 'ipu-eligibility', title: 'IPU LEET Eligibility Criteria' },
    { id: 'ipu-pattern', title: 'IPU LEET Exam Pattern' },
    { id: 'ipu-syllabus', title: 'Syllabus of IPU LEET Exam' },
    { id: 'ipu-admission', title: 'IPU LEET Admission Process' },
    { id: 'ipu-cutoff', title: 'IPU LEET Cutoff Trends' },
    { id: 'ipu-preparation', title: 'IPU LEET Preparation Tips' },
    { id: 'ipu-faqs', title: 'FAQs About IPU LEET' },
  ];

  const ipuPattern = [
    { sr: 1, section: 'Section A', subject: 'Mathematics', questions: 25, marks: 100 },
    { sr: 2, section: 'Section B', subject: 'Reasoning', questions: 25, marks: 100 },
    { sr: 3, section: 'Section C', subject: 'Mechanics', questions: 25, marks: 100 },
    { sr: 4, section: 'Section D', subject: 'Physics + Chemistry + Computer Awareness', questions: 25, marks: 100 },
  ];

  const faqs = [
    {
      question: 'What is IPU LEET?',
      answer: 'IPU LEET (Lateral Entry Entrance Test) is conducted by Guru Gobind Singh Indraprastha University (GGSIPU) for diploma holders seeking direct admission into the second year of B.Tech programs at IPU-affiliated colleges.'
    },
    {
      question: 'Who is eligible for IPU LEET?',
      answer: 'Candidates must hold a 3 or 4-year diploma in engineering from a recognized institution with a minimum of 60% marks. The maximum age limit for general category is 21 years as on 01.08.2027. SC/ST/OBC candidates get a 5-year relaxation.'
    },
    {
      question: 'What is the program code for IPU LEET?',
      answer: 'The program code for IPU LEET is 128. This code is required while filling the application form on the official GGSIPU portal.'
    },
    {
      question: 'How do I register for IPU LEET?',
      answer: 'Visit the official IPU Admission Portal (ipu.admissions.nic.in), create an account, fill in the application form, upload required documents (photo, signature, educational certificates), and pay the application fee of Rs. 1500.'
    },
    {
      question: 'What is the exam pattern of IPU LEET?',
      answer: 'IPU LEET has 100 MCQs divided into 4 sections: Section A (Mathematics), Section B (Reasoning), Section C (Mechanics), Section D (Physics + Chemistry + Computer Awareness). Each question carries 4 marks, with 1 mark negative marking. Total marks: 400. Duration: 150 minutes.'
    },
    {
      question: 'What is the IPU LEET syllabus?',
      answer: 'Section A: Mathematics (Algebra, Calculus, Geometry, Trigonometry); Section B: Reasoning (Verbal, Non-verbal, Analytical) and Quantitative Aptitude; Section C: Mechanics (Applied Mechanics, Strength of Material, Fluid Mechanics); Section D: Physics, Chemistry, and Computer Awareness.'
    },
    {
      question: 'Is there negative marking in IPU LEET?',
      answer: 'Yes, there is a 1-mark negative marking for every wrong answer in IPU LEET. Unanswered questions carry no penalty.'
    },
    {
      question: 'What is the application fee for IPU LEET?',
      answer: 'The application fee for IPU LEET is Rs. 1500/- to be paid online through the official IPU admission portal.'
    },
    {
      question: 'How are results declared for IPU LEET?',
      answer: 'Results are usually declared within a few weeks after the exam. IPU provides an answer key before the final result. You can check your result and rank on the official GGSIPU website using your registration details.'
    },
    {
      question: 'What is the counselling process for IPU LEET?',
      answer: 'After results, qualified candidates must register online for counselling by paying Rs. 1000. Seats are allocated based on rank and college/branch preferences. Document verification is required at the allotted college.'
    },
    {
      question: 'Which colleges are available through IPU LEET?',
      answer: 'Several reputed colleges in Delhi accept students through IPU LEET including USAR, BPIT, MSIT, HMR, Maharaja Agrasen, Bhagwan Parshuram, Jims, Trinity, and many more affiliated colleges of GGSIPU.'
    },
    {
      question: 'What documents are required for IPU LEET admission?',
      answer: 'Admit card, 10th mark sheets, diploma mark sheets (all semesters), diploma certificate, character certificate, identity proof (Aadhaar/Passport), category certificate (if applicable), passport-size photos, and fee payment receipt.'
    },
  ];

  return (
    <div className="leet-page">
      {/* Hero Section */}
      <section className="leet-hero">
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">IPU LEET Exam Guide</h1>
            <p className="hero-subtitle">Complete Guide for Indraprastha University Lateral Entry Entrance Test</p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section id="ipu-about" className="leet-intro">
        <Container>
          <Card className="intro-card">
            <Card.Body>
              <h2 className="section-title">What is IPU LEET?</h2>
              <p>
                IPU LEET (Lateral Entry Entrance Test) is conducted by Guru Gobind Singh Indraprastha University (GGSIPU), Delhi, for diploma holders in engineering who wish to gain direct admission into the second year of B.Tech programs. It is one of the most prestigious lateral entry exams in India, giving access to top engineering colleges in Delhi.
              </p>
              <p>
                The exam tests candidates on Mathematics, Reasoning, Mechanics, Physics, Chemistry, and Computer Awareness. Candidates who excel in this exam can secure seats in top IPU-affiliated colleges, significantly boosting their engineering career prospects.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <div className="courses-heading-container">
        <h2 className="courses-heading">Courses We Offer</h2>
      </div>
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

      {/* Eligibility */}
      <section id="ipu-eligibility" className="leet-section">
        <Container>
          <h2 className="section-title">IPU LEET Eligibility Criteria</h2>
          <Card className="content-card">
            <Card.Body>
              <p>To be eligible for IPU LEET, candidates must satisfy the following criteria:</p>
              <ul className="criteria-list">
                <li>Hold a 3 or 4-year Diploma in Engineering from a recognized State Board of Technical Education or an institution recognized by AICTE/UGC.</li>
                <li>Must have scored a minimum of <strong>60% marks</strong> (or equivalent CGPA) in the diploma.</li>
                <li>Age Limit: Maximum <strong>21 years</strong> for General category as on 01.08.2027. Relaxation of 5 years for SC/ST/OBC candidates.</li>
                <li>The candidate must be an Indian national.</li>
              </ul>
              <p className="mt-3">
                Candidates should always refer to the official GGSIPU notification for the most accurate eligibility criteria for the current year.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Exam Pattern */}
      <section id="ipu-pattern" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">IPU LEET Exam Pattern</h2>
          <Card className="content-card">
            <Card.Body>
              <div className="key-points">
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Program code for IPU LEET is <strong>128</strong> (required during form filling).</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Minimum <strong>60% marks</strong> in diploma required to appear for IPU LEET.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>IPU LEET has <strong>four sections</strong> (Section A, B, C & D).</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Each section has <strong>25 Multiple Choice Questions (MCQs)</strong>.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Each question carries <strong>4 marks</strong>. Maximum marks: <strong>400</strong>.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Total duration: <strong>150 minutes</strong>.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span><strong>Negative marking:</strong> 1 mark deducted for every wrong answer.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Age Limit: Maximum <strong>21 years</strong> for General category; 5-year relaxation for SC/ST/OBC.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Application Fee: <strong>Rs. 1500/-</strong></span>
                </div>
              </div>

              <div className="table-responsive mt-4">
                <Table responsive striped bordered hover className="exam-table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Section</th>
                      <th>Subject</th>
                      <th>Number Of Questions</th>
                      <th>Maximum Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipuPattern.map((row) => (
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

      {/* Syllabus */}
      <section id="ipu-syllabus" className="leet-section">
        <Container>
          <h2 className="section-title">Syllabus of IPU LEET 2027 (Delhi)</h2>
          <Card className="content-card">
            <Card.Body>
              <div className="table-responsive">
                <Table responsive striped bordered hover className="exam-table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Section</th>
                      <th>Syllabus / Subject</th>
                      <th>Number of Questions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Section A</td>
                      <td>Mathematics (Algebra, Calculus, Geometry, Trigonometry)</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Section B</td>
                      <td>Reasoning (Verbal, Non-verbal, Analytical) & Quantitative Aptitude</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Section C</td>
                      <td>Mechanics (Applied Mechanics, Strength of Material, Fluid Mechanics)</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Section D</td>
                      <td>Physics + Chemistry + Computer Awareness</td>
                      <td>25</td>
                    </tr>
                    <tr className="total-row">
                      <td colSpan="3"><strong>Total</strong></td>
                      <td><strong>100</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="text-center mt-3">
                <a href={images.brochure.leet} target="_blank" rel="noopener noreferrer" className="syllabus-link">Click Here For IPU LEET Detailed Syllabus</a>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Admission Process */}
      <section id="ipu-admission" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">Admission Process at IPU through Lateral Entry</h2>
          <h4 className="text-center mb-4">Step-by-Step Guide</h4>
          <p className="text-center mb-4">
            The admission process for Indraprastha University (IPU) is a crucial journey for students aiming to enter B.Tech programs through LEET. Follow these steps to secure your admission.
          </p>

          <Row className="g-4">
            {[
              { step: 1, title: 'Understand Eligibility Criteria', desc: 'Ensure you hold a diploma in engineering with minimum 60% marks. Verify your age (21 years max for general category). Check the official IPU notification for current year criteria.' },
              { step: 2, title: 'Register for IPU LEET', desc: 'Visit the official IPU Admission Portal. Create an account, fill the form, upload photo/signature/certificates, and pay Rs. 1500 application fee online.' },
              { step: 3, title: 'Download Admit Card', desc: 'Visit the official GGSIPU website, find the Admit Card section, enter your registration number and DOB, download and verify all details on the admit card.' },
              { step: 4, title: 'Appear for the Exam', desc: 'Reach the exam center on time with admit card and valid ID. Manage your time well across all four sections. 150 minutes for 100 questions.' },
              { step: 5, title: 'Check Results & Rank', desc: 'Results are declared within a few weeks. IPU releases the answer key before the final result. Check your score and rank on the official GGSIPU website.' },
              { step: 6, title: 'Register for Counselling', desc: 'Register online for counselling by paying Rs. 1000. Fill in your college and branch preferences. Seats are allotted based on your rank.' },
              { step: 7, title: 'Document Verification', desc: 'Attend document verification with all originals including 10th marksheet, all diploma marksheets, diploma certificate, identity proof, and category certificate if applicable.' },
              { step: 8, title: 'Confirm Admission', desc: 'Pay the admission fee after successful document verification. Complete course registration and attend orientation at your allotted college.' },
            ].map(({ step, title, desc }) => (
              <Col key={step} md={6} lg={4} xs={6}>
                <Card className="step-card h-100">
                  <Card.Body>
                    <div className="step-number">{step}</div>
                    <h5>{title}</h5>
                    <p>{desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Cutoff Trends */}
      <section id="ipu-cutoff" className="leet-section">
        <Container>
          <h2 className="section-title">IPU LEET Cutoff Trends</h2>
          <Card className="content-card">
            <Card.Body>
              <p className="highlight-text">
                "IPU does not have a minimum passing marks criterion — all students who appear qualify. However, for admission to a good IPU-affiliated college, you need to score high. The number of available seats and competition determines your effective cutoff."
              </p>
              <p>Here's a look at IPU LEET cutoff trends from recent years:</p>

              <Row className="mt-4">
                <Col md={4} xs={6}>
                  <Card className="year-card">
                    <Card.Body>
                      <h4 className="year-title">2026 Cut Off</h4>
                      <div className="university-cutoff">
                        <h6>IPU LEET 2026:</h6>
                        <p>Rank 1 scored <strong>313 out of 400</strong>.</p>
                        <p>Rank 2: <strong>Prabhar Nandan</strong> scored 309 out of 400.</p>
                        <p>Top 10 range: <strong>278+ out of 400</strong>.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4} xs={6}>
                  <Card className="year-card">
                    <Card.Body>
                      <h4 className="year-title">2025 Cut Off</h4>
                      <div className="university-cutoff">
                        <h6>IPU LEET 2025:</h6>
                        <p>Rank 1: <strong>Aadit Kapoor</strong> scored 342 out of 400.</p>
                        <p>Top 10 range: <strong>305 to 342 out of 400</strong>.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4} xs={6}>
                  <Card className="year-card">
                    <Card.Body>
                      <h4 className="year-title">2024 Cut Off</h4>
                      <div className="university-cutoff">
                        <h6>IPU LEET 2024:</h6>
                        <p>Students who scored <strong>290 out of 400</strong> ranked in the top 10 overall.</p>
                        <p>Top colleges like USAR, MSIT required higher scores for preferred branches.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>


              <div className="factors-section mt-4">
                <h5>Factors Influencing IPU LEET Cut Off</h5>
                <Row className="mt-3">
                  <Col md={4} xs={6}>
                    <div className="cutoff-reason">
                      <FaChartLine className="reason-icon" />
                      <h6>Number of Applicants</h6>
                      <p>More applicants each year pushes cutoffs higher due to increased competition.</p>
                    </div>
                  </Col>
                  <Col md={4} xs={6}>
                    <div className="cutoff-reason">
                      <FaUserGraduate className="reason-icon" />
                      <h6>Seat Availability</h6>
                      <p>The number of available seats in IPU-affiliated colleges directly affects cutoff scores.</p>
                    </div>
                  </Col>
                  <Col md={4} xs={6}>
                    <div className="cutoff-reason">
                      <FaBook className="reason-icon" />
                      <h6>Syllabus Changes</h6>
                      <p>Updates to the IPU LEET syllabus can impact difficulty and thus affect cutoff trends.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Preparation Tips */}
      <section id="ipu-preparation" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">IPU LEET Preparation Tips</h2>
          <p className="text-center mb-4">Effective preparation strategies to crack IPU LEET with a high rank:</p>

          <Row className="g-4">
            {[
              { icon: <FaUserGraduate />, title: 'Join LEET Coaching', desc: 'Joining a structured coaching program like Mission Engineering helps you get expert guidance and a focused study plan for IPU LEET.' },
              { icon: <FaBook />, title: 'Use Quality Study Materials', desc: 'Utilize classroom notes, IPU-specific practice sets, Mission Engineering App, revision guides, and previous years\' question papers.' },
              { icon: <FaClock />, title: 'Practice Regularly', desc: 'Regular mock tests and timed practice sessions improve speed, accuracy, and exam readiness for all four sections.' },
              { icon: <FaChartLine />, title: 'Focus on Weak Areas', desc: 'Identify sections where you lose marks — especially Mechanics and Physics/Chemistry — and dedicate extra time to improving them.' },
              { icon: <FaUsers />, title: 'Group Study', desc: 'Study with peers for Reasoning and Mathematics topics. Group discussions help clear doubts and improve problem-solving speed.' },
              { icon: <FaCheckCircle />, title: 'Revise Diploma Concepts', desc: 'Section C (Mechanics) is directly from your diploma syllabus. Strong revision of Applied Mechanics, SOM, and Fluid Mechanics will help a lot.' },
            ].map((item, i) => (
              <Col key={i} md={6} xs={6}>
                <Card className="prep-card h-100">
                  <Card.Body>
                    <div className="prep-icon">{item.icon}</div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQs */}
      <section id="ipu-faqs" className="leet-section">
        <Container>
          <h2 className="section-title">FAQs About IPU LEET</h2>
          <p className="text-center mb-4">Frequently Asked Questions about IPU LEET Exam and Admission Process</p>

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

export default IPULEET;
