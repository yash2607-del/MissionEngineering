import React from 'react';
import { Container, Row, Col, Card, Accordion, Table } from 'react-bootstrap';
import CourseNavigation from '../components/CourseNavigation';
import { FaCheckCircle, FaBook, FaUserGraduate, FaChartLine, FaClock, FaUsers, FaHandPointRight } from 'react-icons/fa';
import { images } from '../../data';
import './LEET.css';

const DTULEET = () => {

  const tableOfContents = [
    { id: 'dtu-about', title: 'About DTU LEET' },
    { id: 'dtu-eligibility', title: 'DTU LEET Eligibility Criteria' },
    { id: 'dtu-pattern', title: 'DTU LEET Exam Pattern' },
    { id: 'dtu-syllabus', title: 'Syllabus of DTU LEET Exam' },
    { id: 'dtu-admission', title: 'DTU LEET Admission Process' },
    { id: 'dtu-cutoff', title: 'DTU LEET Cutoff Trends' },
    { id: 'dtu-preparation', title: 'DTU LEET Preparation Tips' },
    { id: 'dtu-faqs', title: 'FAQs About DTU LEET' },
  ];

  const dtuPattern = [
    { sr: 1, section: 'Section A', subject: 'Mathematics', questions: 40, marks: 160 },
    { sr: 2, section: 'Section B', subject: 'Reasoning', questions: 25, marks: 100 },
    { sr: 3, section: 'Section C', subject: 'Aptitude', questions: 25, marks: 100 },
  ];

  const faqs = [
    {
      question: 'What is DTU LEET?',
      answer: 'DTU LEET (Lateral Entry Entrance Test) is conducted by Delhi Technological University (DTU) for diploma holders seeking direct admission into the second year of B.Tech programs at DTU, NSUT, and other participating colleges in Delhi.'
    },
    {
      question: 'Who is eligible for DTU LEET?',
      answer: 'Candidates must hold a 3-year regular diploma in any branch of engineering from a State Board of Technical Education or AICTE-recognized institution with a minimum of 60% marks (or equivalent CGPA). The maximum age limit is 21 years for general category candidates.'
    },
    {
      question: 'How many questions are in DTU LEET?',
      answer: 'DTU LEET has 90 MCQs divided into 3 sections: Section A (Mathematics – 40 questions), Section B (Reasoning – 25 questions), Section C (Aptitude – 25 questions). Total marks: 360. Duration: 90 minutes.'
    },
    {
      question: 'Is there negative marking in DTU LEET?',
      answer: 'Yes, there is a 1-mark negative marking for every wrong answer. It is advisable not to guess randomly — only attempt questions you are reasonably confident about.'
    },
    {
      question: 'What is the application fee for DTU LEET?',
      answer: 'The application fee for DTU LEET is Rs. 1500/- paid online through the official portal. Please check the official DTU website for the latest fee structure.'
    },
    {
      question: 'What is the DTU LEET syllabus?',
      answer: 'Section A: Mathematics – Algebra, Coordinate Geometry, Calculus, Trigonometry, Matrices, Probability, Statistics; Section B: Reasoning – Verbal, Non-verbal, Analytical Reasoning; Section C: Aptitude – General Knowledge, Quantitative Aptitude, Data Interpretation.'
    },
    {
      question: 'Which colleges accept DTU LEET scores?',
      answer: 'DTU LEET scores are accepted by Delhi Technological University (DTU) and Netaji Subhas University of Technology (NSUT). Both are premium state-funded technical universities in Delhi offering excellent placement records.'
    },
    {
      question: 'How is the DTU LEET different from IPU LEET?',
      answer: 'DTU LEET has 90 questions (vs 100 in IPU LEET), a shorter exam duration of 90 minutes (vs 150 minutes), and focuses only on Mathematics, Reasoning, and Aptitude — without Mechanics or Physics/Chemistry sections. DTU/NSUT colleges are generally considered more prestigious.'
    },
    {
      question: 'How are results declared for DTU LEET?',
      answer: 'Results are typically declared on the official DTU website within a few weeks of the exam. Candidates can check their scores, rank, and merit list online using their registration number.'
    },
    {
      question: 'What is the counselling process for DTU LEET?',
      answer: 'After results, candidates must register for online counselling. Seats are allocated based on rank and branch preferences. Document verification is carried out at the allotted college before final admission.'
    },
    {
      question: 'Can a student get admission to both DTU and NSUT through DTU LEET?',
      answer: 'Yes, through DTU LEET, candidates can fill preferences for both DTU and NSUT during counselling. Seat allotment depends on the rank and available seats in respective branches.'
    },
    {
      question: 'What documents are needed for DTU LEET admission?',
      answer: 'You will need: Admit card, 10th marksheet, diploma marksheets (all semesters), diploma certificate, identity proof (Aadhaar/Passport), category certificate if applicable, and passport-size photos. Carry originals and photocopies.'
    },
  ];

  return (
    <div className="leet-page">
      {/* Hero Section */}
      <section className="leet-hero">
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">DTU LEET Exam Guide</h1>
            <p className="hero-subtitle">Complete Guide for Delhi Technological University Lateral Entry Entrance Test</p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section id="dtu-about" className="leet-intro">
        <Container>
          <Card className="intro-card">
            <Card.Body>
              <h2 className="section-title">What is DTU LEET?</h2>
              <p>
                DTU LEET (Lateral Entry Entrance Test) is conducted by Delhi Technological University (DTU) for diploma holders who wish to secure direct admission into the second year of B.Tech programs at DTU and NSUT (Netaji Subhas University of Technology). These are among the most prestigious government-funded technical universities in Delhi with exceptional placement records.
              </p>
              <p>
                The exam consists of 90 questions covering Mathematics, Reasoning, and Aptitude, to be completed in 90 minutes. DTU LEET is considered highly competitive, and achieving a high rank is essential to secure a seat in a coveted branch like Computer Science, Electronics, or Mechanical Engineering at DTU or NSUT.
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
      <section id="dtu-eligibility" className="leet-section">
        <Container>
          <h2 className="section-title">DTU LEET Eligibility Criteria</h2>
          <Card className="content-card">
            <Card.Body>
              <p>To be eligible for DTU LEET, candidates must satisfy the following criteria:</p>
              <ul className="criteria-list">
                <li>Hold a <strong>3-year regular Diploma</strong> in any branch of engineering from a State Board of Technical Education or an AICTE-recognized institution in Delhi.</li>
                <li>Must have scored a minimum of <strong>60% marks</strong> (or equivalent CGPA) in the diploma.</li>
                <li>Age Limit: Maximum <strong>21 years</strong> for General category. Age relaxation as per DTU norms for reserved categories.</li>
                <li>Candidate must be domiciled in Delhi (Delhi candidates get priority in seat allocation).</li>
              </ul>
              <p className="mt-3">
                Always check the official DTU website for the most updated eligibility norms for the current academic year.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Exam Pattern */}
      <section id="dtu-pattern" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">DTU LEET Exam Pattern</h2>
          <Card className="content-card">
            <Card.Body>
              <h5 className="mb-3">Essential Guidelines for DTU LEET 2027 (Delhi)</h5>
              <div className="key-points">
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Minimum <strong>60% marks</strong> in diploma required to appear for DTU LEET.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>DTU LEET has <strong>three sections</strong> (Section A, B & C).</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Section A: <strong>Mathematics (40 questions)</strong>, Section B: <strong>Reasoning (25 questions)</strong>, Section C: <strong>Aptitude (25 questions)</strong>.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Total duration: <strong>90 minutes</strong>.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span><strong>Negative marking:</strong> 1 mark deducted for every wrong answer.</span>
                </div>
                <div className="key-point">
                  <FaCheckCircle className="point-icon" />
                  <span>Essential Qualification: 3-year regular diploma in engineering from State Board of Technical Education / AICTE-recognized institution with 60% marks.</span>
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
                    {dtuPattern.map((row) => (
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
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Syllabus */}
      <section id="dtu-syllabus" className="leet-section">
        <Container>
          <h2 className="section-title">Syllabus of DTU LEET 2027 (Delhi)</h2>
          <Card className="content-card">
            <Card.Body>
              <div className="table-responsive">
                <Table responsive striped bordered hover className="exam-table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Section</th>
                      <th>Subject / Topics</th>
                      <th>Number Of Questions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Section A</td>
                      <td>Mathematics – Algebra, Coordinate Geometry, Calculus, Trigonometry, Matrices, Probability, Statistics</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Section B</td>
                      <td>Reasoning – Verbal Reasoning, Non-verbal Reasoning, Analytical Reasoning</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Section C</td>
                      <td>Aptitude – General Knowledge, Quantitative Aptitude, Data Interpretation</td>
                      <td>25</td>
                    </tr>
                    <tr className="total-row">
                      <td colSpan="3"><strong>Total</strong></td>
                      <td><strong>90</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="text-center mt-3">
                <a href={images.brochure.leet} target="_blank" rel="noopener noreferrer" className="syllabus-link">Click Here For DTU LEET Detailed Syllabus</a>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Admission Process */}
      <section id="dtu-admission" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">Admission Process at DTU through Lateral Entry</h2>
          <h4 className="text-center mb-4">Step-by-Step Guide</h4>
          <p className="text-center mb-4">
            Follow this comprehensive step-by-step guide to successfully secure admission at DTU or NSUT through the DTU LEET examination.
          </p>

          <Row className="g-4">
            {[
              { step: 1, title: 'Check Eligibility', desc: 'Confirm you hold a 3-year regular diploma in engineering with minimum 60% marks from a recognized institution. Verify your age and domicile requirements as per DTU norms.' },
              { step: 2, title: 'Submit Application', desc: 'Visit the official DTU admissions portal. Register, fill in the application form accurately, upload required documents, and pay the application fee of Rs. 1500.' },
              { step: 3, title: 'Download Admit Card', desc: 'Once the admit card is released, log in with your registration ID and download your hall ticket. Verify all details including exam center, time, and date.' },
              { step: 4, title: 'Appear for DTU LEET', desc: 'Reach the exam center on time with your admit card and a valid government-issued photo ID. 90 minutes for 90 questions — manage time section-wise.' },
              { step: 5, title: 'Check Results & Merit List', desc: 'Results are published on the official DTU website. Check your marks, rank, and position in the merit list. The merit list determines counselling eligibility.' },
              { step: 6, title: 'Online Counselling Registration', desc: 'Register for the official online counselling session. Pay the counselling fee and fill in your preferences for university (DTU/NSUT) and branch.' },
              { step: 7, title: 'Seat Allotment', desc: 'Seats are allotted based on rank, preferences, and availability. Multiple rounds of seat allotment may be conducted. Accept your allotted seat to proceed.' },
              { step: 8, title: 'Document Verification & Fee', desc: 'Report to the allotted college for document verification with all originals. Pay the semester fee and complete the admission formalities to confirm your seat.' },
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
      <section id="dtu-cutoff" className="leet-section">
        <Container>
          <h2 className="section-title">DTU LEET Cutoff Trends</h2>
          <Card className="content-card">
            <Card.Body>
              <p className="highlight-text">
                "DTU does not have a minimum qualifying score — all candidates who appear are eligible. However, the effective cutoff for a seat in DTU or NSUT depends entirely on the number of seats and the competition. Top ranks secure the most preferred branches."
              </p>
              <p>Here's a look at DTU LEET cutoff trends from recent years:</p>

              <Row className="mt-4">
                <Col md={4} xs={6}>
                  <Card className="year-card">
                    <Card.Body>
                      <h4 className="year-title">2026 Cut Off</h4>
                      <div className="university-cutoff">
                        <h6>DTU LEET 2026:</h6>
                        <p>Rank 1: <strong>Shivam</strong> scored 302 out of 360.</p>
                        <p>Top 10 range: <strong>210+ out of 360</strong>.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4} xs={6}>
                  <Card className="year-card">
                    <Card.Body>
                      <h4 className="year-title">2025 Cut Off</h4>
                      <div className="university-cutoff">
                        <h6>DTU LEET 2025:</h6>
                        <p>Rank 1 scored <strong>340 out of 360</strong>.</p>
                        <p>Top 10 range: <strong>320+ out of 360</strong>.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4} xs={6}>
                  <Card className="year-card">
                    <Card.Body>
                      <h4 className="year-title">2024 Cut Off</h4>
                      <div className="university-cutoff">
                        <h6>DTU LEET 2024:</h6>
                        <p>Rank 1: <strong>Spandan Choudhury</strong> scored 292 out of 360 (Mission Engineering offline batch student).</p>
                        <p>Top 10 range: <strong>270+ out of 360</strong>.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>


              <div className="factors-section mt-4">
                <h5>Factors Influencing DTU LEET Cut Off</h5>
                <Row className="mt-3">
                  <Col md={4} xs={6}>
                    <div className="cutoff-reason">
                      <FaChartLine className="reason-icon" />
                      <h6>Total Applicants</h6>
                      <p>The growing popularity of DTU/NSUT drives more applicants each year, increasing competition.</p>
                    </div>
                  </Col>
                  <Col md={4} xs={6}>
                    <div className="cutoff-reason">
                      <FaUserGraduate className="reason-icon" />
                      <h6>Branch Preferences</h6>
                      <p>CSE and Electronics are the most sought-after branches — their effective cutoffs are much higher than other branches.</p>
                    </div>
                  </Col>
                  <Col md={4} xs={6}>
                    <div className="cutoff-reason">
                      <FaBook className="reason-icon" />
                      <h6>Exam Difficulty</h6>
                      <p>Variation in difficulty level of Mathematics section significantly affects the overall score distribution.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Preparation Tips */}
      <section id="dtu-preparation" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">DTU LEET Preparation Tips</h2>
          <p className="text-center mb-4">Targeted strategies to crack DTU LEET and secure a seat at DTU or NSUT:</p>

          <Row className="g-4">
            {[
              { icon: <FaUserGraduate />, title: 'Join Expert Coaching', desc: 'Mission Engineering has produced DTU LEET toppers including Rank 1 scorers. Join our structured DTU LEET program for focused preparation.' },
              { icon: <FaBook />, title: 'Master Mathematics', desc: 'Section A has 40 questions worth 160 marks. Strong command over Mathematics is the key differentiator in DTU LEET scoring.' },
              { icon: <FaClock />, title: 'Time Management', desc: '90 questions in 90 minutes requires exactly 1 minute per question. Practice timed mock tests to build the required speed and accuracy.' },
              { icon: <FaChartLine />, title: 'Strengthen Reasoning', desc: 'Section B covers verbal, non-verbal, and analytical reasoning. Regular practice of previous year reasoning questions significantly improves performance.' },
              { icon: <FaUsers />, title: 'Aptitude Practice', desc: 'Section C tests general knowledge and quantitative aptitude. Stay updated with current affairs and practice data interpretation problems daily.' },
              { icon: <FaCheckCircle />, title: 'Attempt Mock Tests', desc: 'Mission Engineering provides DTU LEET-specific mock tests that simulate real exam conditions. Analyze your performance to identify and fix weak areas.' },
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
      <section id="dtu-faqs" className="leet-section">
        <Container>
          <h2 className="section-title">FAQs About DTU LEET</h2>
          <p className="text-center mb-4">Frequently Asked Questions about DTU LEET Exam and Admission Process</p>

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

export default DTULEET;
