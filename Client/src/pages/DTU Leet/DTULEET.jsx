import React from 'react';
import { Container, Row, Col, Card, Accordion, Table } from 'react-bootstrap';
import CourseNavigation from '../../components/CourseNavigation';
import { FaCheckCircle, FaBook, FaUserGraduate, FaChartLine, FaClock, FaUsers, FaHandPointRight } from 'react-icons/fa';
import { images } from '../../../data';
import '../Leet/LEET.css';

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
      {/* Introduction Section */}
      <section className="leet-intro py-5 mt-4">
        <Container>
          <h2 className="section-title text-uppercase mb-5">What is DTU LEET Exam?</h2>
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

      <div className="courses-heading-container">
        <h2 className="courses-heading">Courses We Offer</h2>
      </div>
      <CourseNavigation />

      {/* Eligibility Criteria */}
      <section id="dtu-eligibility" className="leet-section">
        <Container>
          <h2 className="section-title">DTU LEET Eligibility Criteria</h2>
          <Row className="g-4 mt-3">
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaUserGraduate /></div>
                  <h5 className="benefit-title">Diploma Required</h5>
                  <p className="benefit-description">
                    Hold a 3-year regular Diploma in any branch of engineering from a State Board or AICTE-recognized institution in Delhi.
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
                    Must have scored a minimum of 60% marks (or equivalent CGPA) in the diploma.
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
                    Maximum 21 years for General category. Age relaxation as per DTU norms for reserved categories.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaCheckCircle /></div>
                  <h5 className="benefit-title">Domicile Priority</h5>
                  <p className="benefit-description">
                    Candidate must be domiciled in Delhi (Delhi candidates get priority in seat allocation).
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Exam Pattern */}
      <section id="dtu-pattern" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">DTU LEET Exam Pattern</h2>
          <Card className="content-card">
            <Card.Body>
              <h5 className="mb-3">Essential Guidelines for DTU LEET 2027 (Delhi)</h5>
              <Row className="g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>1</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Minimum 60% marks in diploma required to appear for DTU LEET.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>2</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>DTU LEET has three sections (Section A, B & C).</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>3</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Time limit for the DTU LEET exam will be 90 minutes.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>4</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Negative marking - There will be a 1-mark penalty for answering a question incorrectly.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>5</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Essential Qualification – Three years regular diploma in any engineering branch awarded by state board / AICTE with 60%.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>6</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Application Fee – The registration fee of Rs. 1500/- is to be paid for the DTU LEET exam.</p></Card.Body></Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Syllabus */}
      <section id="dtu-syllabus" className="leet-section">
        <Container>
          <h2 className="section-title">Syllabus of DTU LEET 2027</h2>
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
                      <th>Maximum Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Section A</td>
                      <td>Mathematics – Algebra, Coordinate Geometry, Calculus, Trigonometry, Matrices, Probability, Statistics</td>
                      <td>40</td>
                      <td>160</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Section B</td>
                      <td>Reasoning – Verbal Reasoning, Non-verbal Reasoning, Analytical Reasoning</td>
                      <td>25</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Section C</td>
                      <td>Aptitude – General Knowledge, Quantitative Aptitude, Data Interpretation</td>
                      <td>25</td>
                      <td>100</td>
                    </tr>
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
      <section id="dtu-admission" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">Admission Process of DTU LEET</h2>
          

          <div className="roadmap-container">
            {[
              { step: 1, title: 'Check Eligibility', desc: 'Confirm you hold a 3-year regular diploma in engineering with minimum 60% marks from a recognized institution. Verify your age and domicile requirements as per DTU norms.' },
              { step: 2, title: 'Submit Application', desc: 'Visit the official DTU admissions portal. Register, fill in the application form accurately, upload required documents, and pay the application fee of Rs. 1500.' },
              { step: 3, title: 'Download Admit Card', desc: 'Once the admit card is released, log in with your registration ID and download your hall ticket. Verify all details including exam center, time, and date.' },
              { step: 4, title: 'Appear for DTU LEET', desc: 'Reach the exam center on time with your admit card and a valid government-issued photo ID. 90 minutes for 90 questions — manage time section-wise.' },
              { step: 5, title: 'Check Results & Merit List', desc: 'Results are published on the official DTU website. Check your marks, rank, and position in the merit list. The merit list determines counselling eligibility.' },
              { step: 6, title: 'Online Counselling Registration', desc: 'Register for the official online counselling session. Pay the counselling fee and fill in your preferences for university (DTU/NSUT) and branch.' },
              { step: 7, title: 'Seat Allotment', desc: 'Seats are allotted based on rank, preferences, and availability. Multiple rounds of seat allotment may be conducted. Accept your allotted seat to proceed.' },
              { step: 8, title: 'Document Verification & Fee', desc: 'Report to the allotted college for document verification with all originals. Pay the semester fee and complete the admission formalities to confirm your seat.' },
            ].map((item, index) => (
              <div key={index} className={`roadmap-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="roadmap-marker">
                  <span className="roadmap-number">{item.step}</span>
                </div>
                <div className="roadmap-content">
                  <h5 className="roadmap-title">{item.title}</h5>
                  <p className="roadmap-description">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Cutoff Trends */}
      <section id="dtu-cutoff" className="leet-section">
        <Container>
          <h2 className="section-title">DTU LEET Cutoff Trends</h2>
          <Card className="content-card border-0 bg-transparent shadow-none">
            <Card.Body className="px-0">
              <p className="highlight-text text-center mx-auto" style={{ maxWidth: '800px' }}>
                "DTU does not have a minimum qualifying score — all candidates who appear are eligible. However, the effective cutoff for a seat in DTU or NSUT depends entirely on the number of seats and the competition. Top ranks secure the most preferred branches."
              </p>
              <p className="text-center mb-5">Here's a look at DTU LEET cutoff trends from recent years:</p>

              <Row className="g-4 mb-5">
                <Col lg={4} md={6}>
                  <Card className="trend-card h-100 border-0 shadow-sm overflow-hidden">
                    <div className="trend-header bg-primary text-white text-center py-3">
                      <h2 className="mb-0 fw-bold">2026 Cut Off</h2>
                    </div>
                    <Card.Body className="p-4">
                      <div className="mb-4">
                        <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>DTU LEET 2026:</h4>
                        <p className="text-muted small mb-0">Rank 1: <strong>Shivam</strong> scored 302 out of 360.</p>
                        <p className="text-muted small mb-0">Top 10 range: <strong>210+ out of 360</strong>.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={4} md={6}>
                  <Card className="trend-card h-100 border-0 shadow-sm overflow-hidden">
                    <div className="trend-header bg-primary text-white text-center py-3" style={{ opacity: 0.9 }}>
                      <h2 className="mb-0 fw-bold">2025 Cut Off</h2>
                    </div>
                    <Card.Body className="p-4">
                      <div className="mb-4">
                        <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>DTU LEET 2025:</h4>
                        <p className="text-muted small mb-0">Rank 1 scored <strong>340 out of 360</strong>.</p>
                        <p className="text-muted small mb-0">Top 10 range: <strong>320+ out of 360</strong>.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={4} md={6}>
                  <Card className="trend-card h-100 border-0 shadow-sm overflow-hidden">
                    <div className="trend-header bg-primary text-white text-center py-3" style={{ opacity: 0.8 }}>
                      <h2 className="mb-0 fw-bold">2024 Cut Off</h2>
                    </div>
                    <Card.Body className="p-4">
                      <div className="mb-4">
                        <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>DTU LEET 2024:</h4>
                        <p className="text-muted small mb-0">Rank 1: <strong>Spandan Choudhury</strong> scored 292 out of 360 (Mission Engineering offline batch student).</p>
                        <p className="text-muted small mb-0">Top 10 range: <strong>270+ out of 360</strong>.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>


              <h3 className="text-center mb-4 mt-5 fw-bold">Factors Influencing DTU LEET Cut Off</h3>
              <Row className="g-4 text-center">
                <Col md={4}>
                  <Card className="reason-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="reason-icon-wrapper mx-auto mb-3">
                        <FaChartLine />
                      </div>
                      <h5 className="fw-bold">Total Applicants</h5>
                      <p className="text-muted mb-0">The growing popularity of DTU/NSUT drives more applicants each year, increasing competition.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="reason-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="reason-icon-wrapper mx-auto mb-3">
                        <FaUserGraduate />
                      </div>
                      <h5 className="fw-bold">Branch Preferences</h5>
                      <p className="text-muted mb-0">CSE and Electronics are the most sought-after branches — their effective cutoffs are much higher than other branches.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="reason-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="reason-icon-wrapper mx-auto mb-3">
                        <FaBook />
                      </div>
                      <h5 className="fw-bold">Exam Difficulty</h5>
                      <p className="text-muted mb-0">Variation in difficulty level of Mathematics section significantly affects the overall score distribution.</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
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
              { title: 'Join Expert Coaching', desc: 'Mission Engineering has produced DTU LEET toppers including Rank 1 scorers. Join our structured DTU LEET program for focused preparation.' },
              { title: 'Master Mathematics', desc: 'Section A has 40 questions worth 160 marks. Strong command over Mathematics is the key differentiator in DTU LEET scoring.' },
              { title: 'Time Management', desc: '90 questions in 90 minutes requires exactly 1 minute per question. Practice timed mock tests to build the required speed and accuracy.' },
              { title: 'Strengthen Reasoning', desc: 'Section B covers verbal, non-verbal, and analytical reasoning. Regular practice of previous year reasoning questions significantly improves performance.' },
              { title: 'Aptitude Practice', desc: 'Section C tests general knowledge and quantitative aptitude. Stay updated with current affairs and practice data interpretation problems daily.' },
              { title: 'Attempt Mock Tests', desc: 'Mission Engineering provides DTU LEET-specific mock tests that simulate real exam conditions. Analyze your performance to identify and fix weak areas.' },
            ].map((item, i) => (
              <Col key={i} lg={4} md={6} xs={12}>
                <Card className="prep-card h-100">
                  <Card.Body>
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
