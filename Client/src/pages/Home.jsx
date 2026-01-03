import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { FaChalkboardTeacher, FaBook, FaUsers, FaClipboardCheck } from 'react-icons/fa';
import hero1 from '../assets/hero/mission_hero_1.jpg';
import hero2 from '../assets/hero/mission_hero_2.png';
import hero3 from '../assets/hero/mission_hero_3.jpg';
import missionLogo from '../assets/hero/mission_logo.png';
import dtuLogo from '../assets/test-series/dtu.png';
import ipuLogo from '../assets/test-series/ipu.png';
import cuetLogo from '../assets/test-series/cuet.png';
import allIndiaLogo from '../assets/test-series/all_india.png';
import delhiPolyLogo from '../assets/test-series/delhi polytechnic.png';
import upPolyLogo from '../assets/test-series/up polytechnic.png';
import biharPolyLogo from '../assets/test-series/bihar polytechnic.png';
import jharkhandPolyLogo from '../assets/test-series/jharkhand polytechnic .png';
import './Home.css';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const heroImages = [hero1, hero2, hero3];

  return (
    <div className="home-page">
      {/* Hero Section with Image Carousel */}
      <section className="hero-section">
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={true} controls={true} interval={2000} fade>
          {heroImages.map((image, idx) => (
            <Carousel.Item key={idx}>
              <div className="hero-image-wrapper">
                <img
                  className="d-block w-100 hero-image"
                  src={image}
                  alt={`Mission Engineering Hero ${idx + 1}`}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* What We Offer Section */}
      <section className="what-we-offer-section py-5">
        <Container>
          <h2 className="text-center mb-5">WHAT WE OFFER</h2>
          <Row className="g-4">
            {/* Polytechnic Entrance */}
            <Col lg={6} md={6}>
              <Card className="offer-card h-100">
                <Card.Body className="text-center">
                  <img src={missionLogo} alt="Mission Engineering" className="offer-logo mb-3" />
                  <h3 className="offer-title">POLYTECHNIC ENTRANCE</h3>
                  <Row className="g-3 mt-3">
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">DELHI</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">BIHAR</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">JHARKHAND</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">UTTARAKHAND</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">UTTAR PRADESH</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">MADHYA PRADESH</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Lateral Entry (LEET) */}
            <Col lg={6} md={6}>
              <Card className="offer-card h-100">
                <Card.Body className="text-center">
                  <img src={missionLogo} alt="Mission Engineering" className="offer-logo mb-3" />
                  <h3 className="offer-title">LATERAL ENTRY (LEET)</h3>
                  <Row className="g-3 mt-3">
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">IPU</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">DTU</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">CUET</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">WBJELET</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">BCECE</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">ALL INDIA LEET</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Placement Coaching */}
            <Col lg={6} md={6}>
              <Card className="offer-card h-100">
                <Card.Body className="text-center">
                  <img src={missionLogo} alt="Mission Engineering" className="offer-logo mb-3" />
                  <h3 className="offer-title">PLACEMENT COACHING</h3>
                  <Row className="g-3 mt-3">
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">MARUTI SUZUKI</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">SAMSUNG ENGG.</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">HONDA CARS</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">TECHNIP ENERGIES</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">INDRAPRASTHA GAS LTD</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">HERO MOTOCORP LTD</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Semester Coaching */}
            <Col lg={6} md={6}>
              <Card className="offer-card h-100">
                <Card.Body className="text-center">
                  <img src={missionLogo} alt="Mission Engineering" className="offer-logo mb-3" />
                  <h3 className="offer-title">SEMESTER COACHING</h3>
                  <Row className="g-3 mt-3">
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">MECHANICAL</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">COMPUTER</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">CIVIL</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">ELECTRONICS</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">ELECTRICAL</Button>
                    </Col>
                    <Col xs={6}>
                      <Button variant="outline-primary" className="offer-btn w-100">OTHER TRADES</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Courses Section */}
      <section className="courses-section py-5">
        <Container>
          {/* Offline Courses */}
          <div className="course-category mb-5">
            <h2 className="course-heading text-center mb-4">OFFLINE COURSES</h2>
            <Row className="g-3 justify-content-center">
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">DELHI LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">CUET LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">ALL INDIA LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">POLYTECHNIC ENTRANCE</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">POLYTECHNIC PLACEMENT</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">SEMESTER COACHING</Button>
              </Col>
            </Row>
          </div>

          {/* Live-Online Courses */}
          <div className="course-category mb-5">
            <h2 className="course-heading text-center mb-4">LIVE-ONLINE COURSES</h2>
            <Row className="g-3 justify-content-center">
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">DELHI LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">CUET LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">ALL INDIA LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">DELHI POLYTECHNIC</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">UP POLYTECHNIC</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">JHARKHAND POLYTECHNIC</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">BIHAR POLYTECHNIC</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">MP POLYTECHNIC</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">UTTARAKHAND POLYTECHNIC</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">HIMACHAL POLYTECHNIC</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">POLYTECHNIC PLACEMENT</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">SEMESTER COACHING</Button>
              </Col>
            </Row>
          </div>

          {/* Recorded Courses */}
          <div className="course-category">
            <h2 className="course-heading text-center mb-4">RECORDED COURSES</h2>
            <Row className="g-3 justify-content-center">
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">IPU LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">DTU LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">CUET LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">BIHAR LEET (BCECE)</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">JHARKHAND LEET (JCECEB)</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">WEST BENGAL (JELET)</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">GUJRAT LEET (D TO D)</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">PUNJAB LEET (PULEET)</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">SLIET LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">KERALA LEET (CUSAT)</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">UTTARAKHAND LEET (UKSEE)</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">HP LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">MAHARASHTRA LEET</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">ALL INDIA LEET EXAMS</Button>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Button variant="outline-primary" className="course-btn w-100">SEMESTER COACHING</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Test Series Section */}
      <section className="test-series-section py-5">
        <Container>
          <h2 className="text-center mb-5">TEST SERIES</h2>
          <Row className="g-4">
            {/* DTU LEET */}
            <Col lg={3} md={4} sm={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={dtuLogo} alt="DTU LEET TEST SERIES" className="test-logo" />
                  </div>
                  <Button variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* IPU LEET */}
            <Col lg={3} md={4} sm={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={ipuLogo} alt="IPU LEET TEST SERIES" className="test-logo" />
                  </div>
                  <Button variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* CUET LEET */}
            <Col lg={3} md={4} sm={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={cuetLogo} alt="CUET LEET TEST SERIES" className="test-logo" />
                  </div>
                  <Button variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* ALL INDIA LEET */}
            <Col lg={3} md={4} sm={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={allIndiaLogo} alt="ALL INDIA LEET TEST SERIES" className="test-logo" />
                  </div>
                  <Button variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* DELHI POLYTECHNIC */}
            <Col lg={3} md={4} sm={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={delhiPolyLogo} alt="DELHI POLYTECHNIC TEST SERIES" className="test-logo" />
                  </div>
                  <Button variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* UP POLYTECHNIC */}
            <Col lg={3} md={4} sm={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={upPolyLogo} alt="UP POLYTECHNIC TEST SERIES" className="test-logo" />
                  </div>
                  <Button variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* BIHAR POLYTECHNIC */}
            <Col lg={3} md={4} sm={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={biharPolyLogo} alt="BIHAR POLYTECHNIC TEST SERIES" className="test-logo" />
                  </div>
                  <Button variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* JHARKHAND POLYTECHNIC */}
            <Col lg={3} md={4} sm={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={jharkhandPolyLogo} alt="JHARKHAND POLYTECHNIC TEST SERIES" className="test-logo" />
                  </div>
                  <Button variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-home-section py-5">
        <Container fluid>
          <h2 className="text-center mb-5">TESTIMONIALS</h2>
          
          {/* LEET Exam Row */}
          <div className="testimonial-row mb-5">
            <h3 className="testimonial-category-title">LEET EXAM</h3>
            <div className="testimonial-scroll-container">
              <div className="testimonial-scroll-content">
                {[
                  { name: 'Md. Zahid', rank: 'Rank 1 - Kerala LEET 2021, Rank 6 - IPU LEET 2021', text: 'I, Md. Zahid, have secured AIR 1 in Kerala LEET and Rank 6 in IPU LEET 2021. The guidance from Mission Engineering was exceptional.' },
                  { name: 'Spandan', rank: 'AIR 1 - DTU LEET 2024', text: 'Mission Engineering helped me achieve AIR 1 in DTU LEET 2024. The faculty and study material were outstanding.' },
                  { name: 'Sarthak', rank: 'AIR(O) 1 - IPU LEET 2023', text: 'Securing AIR 1 in IPU LEET 2023 was possible because of the excellent coaching at Mission Engineering.' },
                  { name: 'Kartik', rank: 'AIR 1 - DTU LEET 2023', text: 'The comprehensive test series and expert guidance helped me secure AIR 1 in DTU LEET 2023.' },
                  { name: 'Md. Akmal', rank: 'AIR 1 - IPU LEET 2022', text: 'Mission Engineering provided me with the best preparation strategy for IPU LEET 2022.' },
                  { name: 'Md. Asif', rank: 'AIR 1 - Maharashtra LEET 2022', text: 'The personalized attention and quality teaching helped me achieve AIR 1 in Maharashtra LEET 2022.' },
                ].concat([
                  { name: 'Md. Zahid', rank: 'Rank 1 - Kerala LEET 2021, Rank 6 - IPU LEET 2021', text: 'I, Md. Zahid, have secured AIR 1 in Kerala LEET and Rank 6 in IPU LEET 2021. The guidance from Mission Engineering was exceptional.' },
                  { name: 'Spandan', rank: 'AIR 1 - DTU LEET 2024', text: 'Mission Engineering helped me achieve AIR 1 in DTU LEET 2024. The faculty and study material were outstanding.' },
                  { name: 'Sarthak', rank: 'AIR(O) 1 - IPU LEET 2023', text: 'Securing AIR 1 in IPU LEET 2023 was possible because of the excellent coaching at Mission Engineering.' },
                ]).map((testimonial, idx) => (
                  <Card key={idx} className="testimonial-card">
                    <Card.Body>
                      <div className="testimonial-avatar"></div>
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                      <p className="testimonial-rank">{testimonial.rank}</p>
                      <p className="testimonial-text">{testimonial.text}</p>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Polytechnic Placement Row */}
          <div className="testimonial-row mb-5">
            <h3 className="testimonial-category-title">POLYTECHNIC PLACEMENT</h3>
            <div className="testimonial-scroll-container">
              <div className="testimonial-scroll-content scroll-reverse">
                {[
                  { name: 'Manish', rank: 'Pusa Polytechnic - Mechanical Engineering', text: 'I, Manish, have got selected in Pusa Campus in Mechanical Engineering through Mission Engineering coaching.' },
                  { name: 'Raj Thakur', rank: 'Final Selection in S&B India', text: 'I, Raj Thakur, have got selected in S&B India. The placement training at Mission Engineering was excellent.' },
                  { name: 'Rohit Kumar', rank: 'Selected in Maruti Suzuki', text: 'Mission Engineering\'s placement coaching helped me secure a position at Maruti Suzuki.' },
                  { name: 'Amit Sharma', rank: 'Samsung Engineering', text: 'The interview preparation and technical training helped me get placed at Samsung Engineering.' },
                  { name: 'Priya Singh', rank: 'Honda Cars India', text: 'I am grateful to Mission Engineering for helping me achieve my dream placement at Honda Cars.' },
                  { name: 'Vikash Yadav', rank: 'Hero MotoCorp Ltd', text: 'The mock interviews and personality development sessions were crucial for my success at Hero MotoCorp.' },
                ].concat([
                  { name: 'Manish', rank: 'Pusa Polytechnic - Mechanical Engineering', text: 'I, Manish, have got selected in Pusa Campus in Mechanical Engineering through Mission Engineering coaching.' },
                  { name: 'Raj Thakur', rank: 'Final Selection in S&B India', text: 'I, Raj Thakur, have got selected in S&B India. The placement training at Mission Engineering was excellent.' },
                  { name: 'Rohit Kumar', rank: 'Selected in Maruti Suzuki', text: 'Mission Engineering\'s placement coaching helped me secure a position at Maruti Suzuki.' },
                ]).map((testimonial, idx) => (
                  <Card key={idx} className="testimonial-card">
                    <Card.Body>
                      <div className="testimonial-avatar"></div>
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                      <p className="testimonial-rank">{testimonial.rank}</p>
                      <p className="testimonial-text">{testimonial.text}</p>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* College Placement Row */}
          <div className="testimonial-row">
            <h3 className="testimonial-category-title">COLLEGE PLACEMENT</h3>
            <div className="testimonial-scroll-container">
              <div className="testimonial-scroll-content">
                {[
                  { name: 'Ankit Verma', rank: 'Placed at TCS - Package 7 LPA', text: 'Mission Engineering\'s semester coaching and placement training helped me secure a great package at TCS.' },
                  { name: 'Neha Gupta', rank: 'Infosys - Package 6.5 LPA', text: 'The aptitude training and interview preparation were instrumental in my Infosys placement.' },
                  { name: 'Rahul Mishra', rank: 'Wipro - Package 6 LPA', text: 'Thanks to Mission Engineering for preparing me well for my Wipro placement interview.' },
                  { name: 'Pooja Malik', rank: 'Tech Mahindra - Package 5.5 LPA', text: 'The comprehensive training program helped me crack Tech Mahindra interview successfully.' },
                  { name: 'Deepak Singh', rank: 'HCL Technologies - Package 6 LPA', text: 'Mission Engineering\'s guidance was crucial in my journey to HCL Technologies.' },
                  { name: 'Simran Kaur', rank: 'Cognizant - Package 7 LPA', text: 'The placement coaching and mock interviews boosted my confidence for Cognizant placement.' },
                ].concat([
                  { name: 'Ankit Verma', rank: 'Placed at TCS - Package 7 LPA', text: 'Mission Engineering\'s semester coaching and placement training helped me secure a great package at TCS.' },
                  { name: 'Neha Gupta', rank: 'Infosys - Package 6.5 LPA', text: 'The aptitude training and interview preparation were instrumental in my Infosys placement.' },
                  { name: 'Rahul Mishra', rank: 'Wipro - Package 6 LPA', text: 'Thanks to Mission Engineering for preparing me well for my Wipro placement interview.' },
                ]).map((testimonial, idx) => (
                  <Card key={idx} className="testimonial-card">
                    <Card.Body>
                      <div className="testimonial-avatar"></div>
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                      <p className="testimonial-rank">{testimonial.rank}</p>
                      <p className="testimonial-text">{testimonial.text}</p>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Success Keys Section */}
      <section className="success-keys-section py-5">
        <Container>
          <h2 className="text-center mb-5">4 SUCCESS KEYS OF MISSION ENGINEERING</h2>
          <Row className="g-4">
            {/* Key 1 */}
            <Col lg={3} md={6}>
              <Card className="success-card h-100 text-center">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <FaChalkboardTeacher size={50} className="success-icon icon-blue" />
                  </div>
                  <Card.Title>Renowned & Experienced Faculties</Card.Title>
                  <ul className="text-start mt-3">
                    <li>Quality Teaching</li>
                    <li>Outstanding Education Delivery</li>
                    <li>Concept Building</li>
                    <li>Individualised Support</li>
                    <li>Dynamic Educational Technique</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Key 2 */}
            <Col lg={3} md={6}>
              <Card className="success-card h-100 text-center">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <FaBook size={50} className="success-icon icon-purple" />
                  </div>
                  <Card.Title>Enriched Content & Performance Assessment</Card.Title>
                  <ul className="text-start mt-3">
                    <li>Well Researched & Refined Study Material</li>
                    <li>Aligned with Current Exam Trends</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Key 3 */}
            <Col lg={3} md={6}>
              <Card className="success-card h-100 text-center">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <FaUsers size={50} className="success-icon icon-teal" />
                  </div>
                  <Card.Title>Student Centric Approach</Card.Title>
                  <ul className="text-start mt-3">
                    <li>Back-Up for Missed Classes</li>
                    <li>Robust Infrastructure</li>
                    <li>Exam-Oriented Ecosystem</li>
                    <li>Updates by Career Support Team</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Key 4 */}
            <Col lg={3} md={6}>
              <Card className="success-card h-100 text-center">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <FaClipboardCheck size={50} className="success-icon icon-orange" />
                  </div>
                  <Card.Title>Written & Personality Test</Card.Title>
                  <ul className="text-start mt-3">
                    <li>Meticulously Crafted Curriculum</li>
                    <li>Result Oriented Approach</li>
                    <li>Interview Guidance by Renowned Experts</li>
                    <li>GD & Mock Interviews</li>
                    <li>Personality Development by Seasoned Trainers</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
