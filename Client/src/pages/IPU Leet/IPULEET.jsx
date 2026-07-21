import React from 'react';
import { Container, Row, Col, Card, Accordion, Table } from 'react-bootstrap';
import CourseNavigation from '../../components/CourseNavigation';
import { FaCheckCircle, FaBook, FaUserGraduate, FaChartLine, FaClock, FaUsers, FaHandPointRight } from 'react-icons/fa';
import { images } from '../../../data';
import '../Leet/LEET.css';

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
      {/* Introduction Section */}
      <section className="leet-intro py-5 mt-4">
        <Container>
          <h2 className="section-title text-uppercase mb-5">What is IPU LEET Exam?</h2>
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
      <section id="ipu-eligibility" className="leet-section">
        <Container>
          <h2 className="section-title">IPU LEET Eligibility Criteria</h2>
          <Row className="g-4 mt-3">
            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaUserGraduate /></div>
                  <h5 className="benefit-title">Diploma Required</h5>
                  <p className="benefit-description">
                    Hold a 3 or 4-year Diploma in Engineering from a recognized State Board of Technical Education or an institution recognized by AICTE/UGC.
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
                    Maximum 21 years for General category as on 01.08.2027. Relaxation of 5 years for SC/ST/OBC candidates.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaCheckCircle /></div>
                  <h5 className="benefit-title">Nationality</h5>
                  <p className="benefit-description">
                    The candidate must be an Indian national. Refer to official notifications for any updates.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Exam Guidelines */}
      <section id="ipu-pattern" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">IPU LEET Exam Guidelines</h2>
          <Card className="content-card">
            <Card.Body>
              <Row className="g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>1</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Program code for IPU LEET is 128 (required during form filling).</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>2</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Minimum 60% marks in diploma required to appear for IPU LEET.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>3</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>IPU LEET has four sections (Section A, B, C & D).</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>4</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Each section has 25 Multiple Choice Questions (MCQs).</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>5</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Each question carries 4 marks. Maximum marks: 400.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>6</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Total duration: 150 minutes.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>7</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Negative marking: 1 mark deducted for every wrong answer.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>8</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Age Limit: Maximum 21 years for General category; 5-year relaxation for SC/ST/OBC.</p></Card.Body></Card>
                </Col>
                <Col>
                  <Card className="h-100 border-0 shadow-sm"><Card.Body className="p-4 d-flex align-items-start"><div className="flex-shrink-0 me-3 shadow-sm" style={{ width: '28px', height: '28px', background: '#1e3c72', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>9</div><p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>Application Fee: Rs. 1500/-</p></Card.Body></Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Syllabus */}
      <section id="ipu-syllabus" className="leet-section">
        <Container>
          <h2 className="section-title">Syllabus of IPU LEET 2027</h2>
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
                      <th>Maximum Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Section A</td>
                      <td>Mathematics (Algebra, Calculus, Geometry, Trigonometry)</td>
                      <td>25</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Section B</td>
                      <td>Reasoning (Verbal, Non-verbal, Analytical) & Quantitative Aptitude</td>
                      <td>25</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Section C</td>
                      <td>Mechanics (Applied Mechanics, Strength of Material, Fluid Mechanics)</td>
                      <td>25</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Section D</td>
                      <td>Physics + Chemistry + Computer Awareness</td>
                      <td>25</td>
                      <td>100</td>
                    </tr>
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

      {/* Admission Process */}
      <section id="ipu-admission" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">Admission Process of IPU LEET</h2>
          <p className="text-center mb-5">
            The admission process for Indraprastha University (IPU) is a crucial journey for students aiming to enter B.Tech programs through LEET. Follow these steps to secure your admission.
          </p>

          <div className="roadmap-container">
            {[
              { step: 1, title: 'Understand Eligibility Criteria', desc: 'Ensure you hold a diploma in engineering with minimum 60% marks. Verify your age (21 years max for general category). Check the official IPU notification for current year criteria.' },
              { step: 2, title: 'Register for IPU LEET', desc: 'Visit the official IPU Admission Portal. Create an account, fill the form, upload photo/signature/certificates, and pay Rs. 1500 application fee online.' },
              { step: 3, title: 'Download Admit Card', desc: 'Visit the official GGSIPU website, find the Admit Card section, enter your registration number and DOB, download and verify all details on the admit card.' },
              { step: 4, title: 'Appear for the Exam', desc: 'Reach the exam center on time with admit card and valid ID. Manage your time well across all four sections. 150 minutes for 100 questions.' },
              { step: 5, title: 'Check Results & Rank', desc: 'Results are declared within a few weeks. IPU releases the answer key before the final result. Check your score and rank on the official GGSIPU website.' },
              { step: 6, title: 'Register for Counselling', desc: 'Register online for counselling by paying Rs. 1000. Fill in your college and branch preferences. Seats are allotted based on your rank.' },
              { step: 7, title: 'Document Verification', desc: 'Attend document verification with all originals including 10th marksheet, all diploma marksheets, diploma certificate, identity proof, and category certificate if applicable.' },
              { step: 8, title: 'Confirm Admission', desc: 'Pay the admission fee after successful document verification. Complete course registration and attend orientation at your allotted college.' },
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
      <section id="ipu-cutoff" className="leet-section">
        <Container>
          <h2 className="section-title">IPU LEET Cutoff Trends</h2>
          <Card className="content-card border-0 bg-transparent shadow-none">
            <Card.Body className="px-0">
              <Row className="g-4 mb-5">
                <Col lg={4} md={6}>
                  <Card className="trend-card h-100 border-0 shadow-sm overflow-hidden">
                    <div className="trend-header bg-primary text-white text-center py-3">
                      <h2 className="mb-0 fw-bold">2026 Cut Off</h2>
                    </div>
                    <Card.Body className="p-4">
                      <div className="mb-4">
                        <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>IPU LEET 2026:</h4>
                        <p className="text-muted small mb-0">Rank 1 scored <strong>313 out of 400</strong>.</p>
                        <p className="text-muted small mb-0">Rank 2: <strong>Prabhar Nandan</strong> scored 309 out of 400.</p>
                        <p className="text-muted small mb-0">Top 10 range: <strong>278+ out of 400</strong>.</p>
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
                        <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>IPU LEET 2025:</h4>
                        <p className="text-muted small mb-0">Rank 1: <strong>Aadit Kapoor</strong> scored 342 out of 400.</p>
                        <p className="text-muted small mb-0">Top 10 range: <strong>305 to 342 out of 400</strong>.</p>
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
                        <h4 className="fw-bold mb-2" style={{ color: '#1e3c72' }}>IPU LEET 2024:</h4>
                        <p className="text-muted small mb-0">Students who scored <strong>290 out of 400</strong> ranked in the top 10 overall.</p>
                        <p className="text-muted small mb-0">Top colleges like USAR, MSIT required higher scores for preferred branches.</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <h3 className="text-center mb-4 mt-5 fw-bold">Factors Influencing IPU LEET Cut Off</h3>
              <Row className="g-4 text-center">
                <Col md={4}>
                  <Card className="reason-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="reason-icon-wrapper mx-auto mb-3">
                        <FaChartLine />
                      </div>
                      <h5 className="fw-bold">Number of Applicants</h5>
                      <p className="text-muted mb-0">More applicants each year pushes cutoffs higher due to increased competition.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="reason-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="reason-icon-wrapper mx-auto mb-3">
                        <FaUserGraduate />
                      </div>
                      <h5 className="fw-bold">Seat Availability</h5>
                      <p className="text-muted mb-0">The number of available seats in IPU-affiliated colleges directly affects cutoff scores.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="reason-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="reason-icon-wrapper mx-auto mb-3">
                        <FaBook />
                      </div>
                      <h5 className="fw-bold">Syllabus Changes</h5>
                      <p className="text-muted mb-0">Updates to the IPU LEET syllabus can impact difficulty and thus affect cutoff trends.</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Preparation Tips */}
      <section id="ipu-preparation" className="leet-section bg-light">
        <Container>
          <h2 className="section-title">IPU LEET Preparation Tips</h2>

          <Row className="g-4">
            {[
              { title: 'Join LEET Coaching', desc: 'Joining a structured coaching program like Mission Engineering helps you get expert guidance and a focused study plan for IPU LEET.' },
              { title: 'Use Quality Study Materials', desc: 'Utilize classroom notes, IPU-specific practice sets, Mission Engineering App, revision guides, and previous years\' question papers.' },
              { title: 'Practice Regularly', desc: 'Regular mock tests and timed practice sessions improve speed, accuracy, and exam readiness for all four sections.' },
              { title: 'Focus on Weak Areas', desc: 'Identify sections where you lose marks — especially Mechanics and Physics/Chemistry — and dedicate extra time to improving them.' },
              { title: 'Group Study', desc: 'Study with peers for Reasoning and Mathematics topics. Group discussions help clear doubts and improve problem-solving speed.' },
              { title: 'Revise Diploma Concepts', desc: 'Section C (Mechanics) is directly from your diploma syllabus. Strong revision of Applied Mechanics, SOM, and Fluid Mechanics will help a lot.' },
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
