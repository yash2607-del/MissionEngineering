import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CourseNavigation from '../components/CourseNavigation';
import { FaHandPointRight, FaCheckCircle } from 'react-icons/fa';
import './Polytechnic.css';

const Polytechnic = () => {
  const tableOfContents = [
    { id: 'popular-exams', title: 'Popular Polytechnic Exams in India' },
    { id: 'why-choose', title: 'Why Choose Polytechnic Course' },
    { id: 'understanding', title: 'Understanding the Polytechnic Exams' },
    { id: 'mission-helps', title: 'How Mission Engineering Helps' },
    { id: 'faqs', title: 'FAQs About Polytechnic' }
  ];

  const polytechnicExams = [
    {
      title: 'Delhi Polytechnic',
      points: [
        'DSEIJ Conducts Delhi Polytechnic Entrance Exam.',
        'Eligibility Criteria for Delhi Polytechnic is 10th Standard.'
      ]
    },
    {
      title: 'UP Polytechnic',
      points: [
        'DSEIJ Conducts Delhi Polytechnic Entrance Exam.',
        'Eligibility Criteria for Delhi Polytechnic is 10th Standard.'
      ]
    },
    {
      title: 'Bihar Polytechnic',
      points: [
        'DSEIJ Conducts Delhi Polytechnic Entrance Exam.',
        'Eligibility Criteria for Delhi Polytechnic is 10th Standard.'
      ]
    },
    {
      title: 'Jharkhand Polytechnic',
      points: [
        'DSEIJ Conducts Delhi Polytechnic Entrance Exam.',
        'Eligibility Criteria for Delhi Polytechnic is 10th Standard.'
      ]
    },
    {
      title: 'Uttarakhand Polytechnic',
      points: [
        'DSEIJ Conducts Delhi Polytechnic Entrance Exam.',
        'Eligibility Criteria for Delhi Polytechnic is 10th Standard.'
      ]
    },
    {
      title: 'MP Polytechnic',
      points: [
        'DSEIJ Conducts Delhi Polytechnic Entrance Exam.',
        'Eligibility Criteria for Delhi Polytechnic is 10th Standard.'
      ]
    },
    {
      title: 'Himachal Polytechnic',
      points: [
        'DSEIJ Conducts Delhi Polytechnic Entrance Exam.',
        'Eligibility Criteria for Delhi Polytechnic is 10th Standard.'
      ]
    },
    {
      title: 'Haryana Polytechnic',
      points: [
        'DSEIJ Conducts Delhi Polytechnic Entrance Exam.',
        'Eligibility Criteria for Delhi Polytechnic is 10th Standard.'
      ]
    }
  ];

  return (
    <div className="polytechnic-page">
      {/* Hero Section */}
      <section className="polytechnic-hero">
        <Container>
          <h1 className="hero-title">Polytechnic Entrance Exam Guide</h1>
          <p className="hero-subtitle">Your Path to Technical Education Excellence</p>
        </Container>
      </section>

      {/* What is Polytechnic */}
      <section className="poly-section">
        <Container>
          <Card className="content-card">
            <Card.Body>
              <h2 className="section-title">What is Polytechnic?</h2>
              <p>
                Polytechnic is a technical education stream that focuses on equipping students with practical skills and technical knowledge in various engineering fields. It offers diploma courses that are shorter in duration compared to traditional degree programs, typically spanning three or four years. Students can pursue a <strong>Polytechnic exam after 10th</strong>, making it a popular choice for those seeking an early start to their careers.
              </p>
              <p>
                Mission Engineering, your ultimate destination for <strong>Polytechnic coaching in Delhi</strong>! If you are aspiring to enroll in the <strong>Polytechnic Entrance Exams</strong> and secure admission to top polytechnic institutes, you are in the right place. At Mission Engineering, we specialize in providing top-notch <strong>Polytechnic exam preparation</strong> through expert guidance, tailored study plans, and a student-centric approach. Let us guide you through the journey of understanding polytechnic education, the entrance exam process, and how our coaching can help you achieve success.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

        <CourseNavigation />

      {/* Table of Contents */}
      <section className="poly-toc-section">
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

      {/* Popular Polytechnic Entrance Exams */}
      <section id="popular-exams" className="poly-section exams-section">
        <Container>
          <h2 className="section-title">Popular Polytechnic Entrance Exams in India</h2>
          <Row className="g-4">
            {polytechnicExams.map((exam, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="exam-card h-100">
                  <Card.Header className="exam-header">{exam.title}</Card.Header>
                  <Card.Body>
                    <ul className="exam-points">
                      {exam.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    <Button className="explore-btn">Explore Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Polytechnic Courses */}
      <section id="why-choose" className="poly-section">
        <Container>
          <Card className="content-card">
            <Card.Body>
              <h2 className="section-title">Why Choose Polytechnic Courses?</h2>
              <p>
                Polytechnic courses are an excellent choice for students who want to gain hands-on experience and enter the workforce quickly. These courses cover a wide range of fields, including Civil Engineering, Mechanical Engineering, Electrical Engineering, Computer Science, Electronics and Communication Engineering, Automobile Engineering and more. They offer a perfect blend of theory and practical knowledge, preparing students for real-world challenges.
              </p>
              <p>
                Moreover, polytechnic education serves as a stepping stone for further studies. Diploma holders can pursue lateral entry into engineering degree programs or enhance their skills through advanced certifications.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Understanding the Polytechnic Entrance Exam */}
      <section id="understanding" className="poly-section">
        <Container>
          <Card className="content-card">
            <Card.Body>
              <h2 className="section-title">Understanding the Polytechnic Entrance Exam</h2>
              <p>
                The <strong>Polytechnic Entrance Exam</strong> is the gateway to enrolling in prestigious diploma courses across India. In Delhi, institutes like DSEU (Delhi Skill and Entrepreneurship University) conduct their entrance exams to select candidates for various diploma programs. To crack this competitive exam, thorough <strong>Polytechnic exam preparation</strong> is essential.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* How Mission Engineering Helps */}
      <section id="mission-helps" className="poly-section">
        <Container>
          <h2 className="section-title">How Mission Engineering Helps You Succeed</h2>
          <Card className="content-card">
            <Card.Body>
              <p>
                At Mission Engineering, we are committed to providing the best <strong>Polytechnic coaching online and Offline (in Delhi)</strong> to help students excel in their entrance exams. Here's how we stand out:
              </p>

              <div className="help-section">
                <h4>Comprehensive Course Offerings</h4>
                <ol className="numbered-list">
                  <li><strong>Polytechnic Classes:</strong> Our structured Polytechnic classes cover every aspect of the syllabus, ensuring a strong conceptual foundation.</li>
                  <li><strong>Online Polytechnic Classes:</strong> For students who prefer learning from home, our interactive online Polytechnic classes provide flexibility and accessibility.</li>
                  <li><strong>Offline Polytechnic Classes:</strong> Our in-person classes create a focused learning environment with real-time interaction.</li>
                  <li><strong>Diploma Entrance Coaching:</strong> Our specialized coaching programs prepare you for competitive exams like the DSEU Polytechnic entrance.</li>
                </ol>
              </div>

              <div className="help-section">
                <h4>Expert Faculty</h4>
                <p>Our experienced faculty members are dedicated to helping students achieve their goals. They provide:</p>
                <ul className="bulleted-list">
                  <li>Detailed explanations of complex concepts.</li>
                  <li>Tips and strategies for effective Polytechnic preparation.</li>
                  <li>Regular doubt-clearing sessions to ensure no topic remains unclear.</li>
                </ul>
              </div>

              <div className="help-section">
                <h4>Tailored Study Material</h4>
                <p>We provide meticulously crafted study material that aligns with the <strong>Delhi Polytechnic syllabus</strong> and <strong>DSEU Polytechnic syllabus</strong>. Our material includes:</p>
                <ul className="bulleted-list">
                  <li>Comprehensive theory notes.</li>
                  <li>Practice questions with varying difficulty levels.</li>
                  <li>Previous years' question papers for hands-on practice.</li>
                </ul>
              </div>

              <div className="help-section">
                <h4>Mock Tests and Performance Analysis</h4>
                <p>Mock tests are an integral part of our <strong>Polytechnic exam preparation</strong> program. They help students:</p>
                <ul className="bulleted-list">
                  <li>Get accustomed to the exam pattern.</li>
                  <li>Identify their strengths and weaknesses.</li>
                  <li>Improve time management skills.</li>
                  <li>Gauge their readiness to meet the Polytechnic cut-off scores.</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* FAQs */}
      <section id="faqs" className="poly-section">
        <Container>
          <Card className="content-card">
            <Card.Body>
              <h2 className="section-title">FAQs About Polytechnic</h2>
              
              <div className="faq-item">
                <h5><FaCheckCircle className="faq-icon" /> What is a Polytechnic course?</h5>
                <p>Polytechnic courses are diploma programs that focus on technical and practical education in various engineering fields.</p>
              </div>

              <div className="faq-item">
                <h5><FaCheckCircle className="faq-icon" /> Can I pursue Polytechnic after 10th?</h5>
                <p>Yes, Polytechnic courses are available for students after completing their 10th standard.</p>
              </div>

              <div className="faq-item">
                <h5><FaCheckCircle className="faq-icon" /> How long is a Polytechnic course?</h5>
                <p>Polytechnic diploma courses typically last three to four years, depending on the program.</p>
              </div>

              <div className="faq-item">
                <h5><FaCheckCircle className="faq-icon" /> What are the benefits of joining Mission Engineering for Polytechnic coaching?</h5>
                <p>Mission Engineering offers expert faculty, comprehensive study materials, mock tests, and both online and offline classes to ensure your success in Polytechnic entrance exams.</p>
              </div>

              <div className="faq-item">
                <h5><FaCheckCircle className="faq-icon" /> Does Mission Engineering provide coaching for DSEU Polytechnic entrance?</h5>
                <p>Yes, we specialize in DSEU Polytechnic entrance coaching and provide tailored study plans to help you excel.</p>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </div>
  );
};

export default Polytechnic;
