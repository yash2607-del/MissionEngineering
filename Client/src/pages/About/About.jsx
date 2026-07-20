import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserTie, FaChartLine, FaHeadset, FaBriefcase, FaHandshake, FaClipboardCheck, FaLinkedin, FaGithub, FaTrophy, FaUsers, FaStar, FaCheckCircle, FaGraduationCap, FaBullseye } from 'react-icons/fa';
import { images } from '../../../data';
import './About.css';

const chairmanPhoto = images.aboutTeam.chairman;
const viceChairmanPhoto = images.aboutTeam.viceChairman;
const ranjanSirPhoto = images.aboutTeam.ranjanSir;
const abhishekSirPhoto = images.aboutTeam.abhishekSir;
const yashPhoto = images.aboutTeam.yash;

const About = () => {
  const whyChooseCards = [
    {
      icon: <FaUserTie />,
      title: 'Expert Guidance',
      description: 'Industry-experienced mentors ensure top-notch coaching for Polytechnic, B.Tech, Gov. Job, and Campus Placements.'
    },
    {
      icon: <FaChartLine />,
      title: 'Customized Approach',
      description: 'Tailored coaching methods cater to individual needs, maximizing your potential and performance.'
    },
    {
      icon: <FaHeadset />,
      title: '24 x 7 User Support',
      description: 'Our commitment doesn\'t end with the course - ongoing support and resources ensure your success even after completion.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Strategic Career Planning',
      description: 'We go beyond academics, providing guidance on career paths, job opportunities, and long-term growth prospects.'
    },
    {
      icon: <FaHandshake />,
      title: 'Industry Connections',
      description: 'Benefit from our strong network of industry connections, facilitating internships, projects, and job placements.'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Mock Tests and Assessment',
      description: 'Rigorous practice through mock interviews and tests prepares you for real-world challenges and boosts your confidence.'
    }
  ];

  return (
    <div className="about-page">
      {/* Team Section Header */}
      <section className="team-header-section">
        <Container>
          <div className="section-badge">OUR TEAM</div>
          <h1 className="team-main-title">Meet Our Leadership</h1>
          <p className="team-subtitle">
            Unlock success with Mission Engineering! Elevate your academic journey with expert coaching in Leet, Polytechnic, Semester Coaching and Campus Placements. Meet our leadership for personalized guidance today.
          </p>
          <div className="team-buttons">
            <Button as={Link} to="/contact" className="btn-contact">
              Contact Us →
            </Button>
            <Button as={Link} to="/classroom-course" className="btn-explore">
              Explore Courses →
            </Button>
          </div>
        </Container>
      </section>

      {/* Chairman Section */}
      <section className="team-member-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} xs={12} className="team-content-col">
              <div className="team-content">
                <h2 className="member-title">CHAIRMAN</h2>
                <h3 className="member-subtitle">"YOU CAN'T HAVE TO BE GREAT TO START YOUR DREAMS"</h3>
                <p className="member-description">
                  I personally indulge myself with students one by one backbone of the tomorrow's India. For that we try to possible best secured and environment to students. Our all faculties are well qualified and have good experience in their field. They pay special attention to every students because of that students gives their best output to the world. After Completing diploma students get quality job. Because of the base knowledge they have in Interested, various skills at understand them divide result.
                </p>
                <p className="member-description">
                  I welcome all students and their parents to be a part of Mission Engineering family to make success our Mission. I request them to give their ideas, guidance and support to our family.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12} xs={12} className="team-photo-col">
              <div className="team-photo-wrapper">
              <div class="portrait-frame">
                  <img src={chairmanPhoto} alt="Chairman" className="team-photo" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vice Chairman Section */}
      <section className="team-member-section alternate">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} xs={12} className="team-photo-col order-lg-1 order-2">
              <div className="team-photo-wrapper">
                <div className="portrait-frame">
                  <img src={viceChairmanPhoto} alt="Vice Chairman" className="team-photo" />
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} xs={12} className="team-content-col order-lg-2 order-1">
              <div className="team-content">
                <h2 className="member-title">VICE CHAIRMAN</h2>
                <h3 className="member-subtitle">"EDUCATION IS THE MOST POWERFUL WEAPON WHICH YOU CAN USE TO CHANGE THE WORLD"</h3>
                <p className="member-description">
                  Dear Parents, Mission Engineering is an Institute, which nourish all the students not only theoretically, but practically as well. We are committed to provide best education quality to the future leaders of the world. Education for our children is not mere line in the book, for they learn, love to use the education is the life, for us only educated student is who not only can be learned, but also can make learning a habit of life.
                </p>
                <p className="member-description">
                  Today, Mission Engineering is one synonymous with success because we have achieved every success in the technical field of India.
                </p>
                <p className="member-description">
                  We are thankful to the parents for their valuable assistance in all our achievements. The harmonious and persistent support of our family and student has led us to be successful.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Director 1 Section */}
      <section className="team-member-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} xs={12} className="team-content-col">
              <div className="team-content">
                <h2 className="member-title">DIRECTOR</h2>
                <h3 className="member-name">Ranjan Shrivastav</h3>
                <p className="member-description">
                  Mission Engineering, provides right set of circumstances to all students to accomplish distinction in academics. We provide such environment to student which boost their learning. It is our strong belief that students can learn easily if they surrounding is integrated and determined.
                </p>
                <p className="member-description">
                  "Direction is everything, it what an endeavor for". We motivate our students to get their aim and sharpness them guidance and support. Our students are advantaged to drive themselves to achieve their goal.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12} xs={12} className="team-photo-col">
              <div className="team-photo-wrapper">
                <div className="portrait-frame portrait-frame--contain">
                  <img src={ranjanSirPhoto} alt="Ranjan Shrivastav - Director" className="team-photo" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Director 2 Section */}
      <section className="team-member-section alternate">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} xs={12} className="team-photo-col order-lg-1 order-2">
              <div className="team-photo-wrapper">
                <div className="portrait-frame portrait-frame--contain">
                  <img src={abhishekSirPhoto} alt="Abhishek Shrivastav - Director" className="team-photo" />
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} xs={12} className="team-content-col order-lg-2 order-1">
              <div className="team-content">
                <h2 className="member-title">DIRECTOR</h2>
                <h3 className="member-name">Abhishek Shrivastav</h3>
                <p className="member-description">
                  An educated person has the ability to change the world as he/she is brimming with confidence and interest of making the right issues. Establishing and developing technical educational institutions is a passion of mine. I strongly believe technical education must result in nurturing youngsters and give them an environment to learn and grow their technical ability. I want to see my students as to fulfill a challenging and enriching educational experience for our students.
                </p>
                <p className="member-description">
                  Mission Engineering provides intellectual, artistic and personal interest contributing to their holistic growth. I welcome parents and students to be a part of the Mission Engineering family to share common ideals and aspirations as we build a challenging and enriching educational experience for our students.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Lead Web Developer Section */}
      <section className="team-member-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} xs={12} className="team-content-col">
              <div className="team-content">
                <h3 className="member-name">Yash Raj</h3>
                <h2 className="member-title">FULL STACK WEB DEVELOPER</h2>
                <div className="social-links mb-3">
                  <a href="https://www.linkedin.com/in/yashh26/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://github.com/yash2607-del" target="_blank" rel="noopener noreferrer" className="social-icon github-icon">
                    <FaGithub size={24} />
                  </a>
                </div>
                <p className="member-description">
                  I am a Computer Science and Engineering student at Jaypee Institute of Information Technology (JIIT), Noida, and a MERN Stack Developer with strong expertise in MongoDB, Express.js, React.js, and Node.js. I specialize in building modern, responsive, and scalable web applications using the MERN stack and industry best practices.
                </p>
                <p className="member-description">
                  I was responsible for the complete end-to-end development of the Mission Engineering website, including UI/UX design, development, deployment, and hosting. My focus is on delivering fast, secure, and high-performance web solutions that provide a seamless and reliable user experience across all devices.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12} xs={12} className="team-photo-col">
              <div className="team-photo-wrapper">
                <div className="portrait-frame portrait-frame--cropped">
                  <img src={yashPhoto} alt="Yash Raj - Lead Web Developer" className="team-photo" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Mission Engineering Section - Redesigned */}
      <section className="about-mission-section">
        <div className="about-mission-bg">
          <Container>
            <Row className="align-items-center g-5">

              {/* Left: Stats Panel */}
              <Col lg={5} md={12}>
                <div className="about-stats-panel">
                  <div className="about-stats-label">MISSION ENGINEERING</div>
                  <h2 className="about-stats-heading">
                    Shaping <span className="about-stats-accent">Future</span> Engineers
                  </h2>
                  <p className="about-stats-sub">
                    India's most trusted coaching destination for Polytechnic Coaching, Leet Coaching and Campus Placements.
                  </p>
                  <div className="about-stats-grid">
                    <div className="about-stat-card">
                      <FaTrophy className="about-stat-icon" />
                      <div className="about-stat-number">12+</div>
                      <div className="about-stat-text">Years of Excellence</div>
                    </div>
                    <div className="about-stat-card">
                      <FaUsers className="about-stat-icon" />
                      <div className="about-stat-number">4.9+</div>
                      <div className="about-stat-text"> Google Rating </div>
                    </div>
                    <div className="about-stat-card">
                      <FaStar className="about-stat-icon" />
                      <div className="about-stat-number">98%</div>
                      <div className="about-stat-text">Success Rate</div>
                    </div>
                    <div className="about-stat-card">
                      <FaGraduationCap className="about-stat-icon" />
                      <div className="about-stat-number">5000+</div>
                      <div className="about-stat-text">IPU Selections</div>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Right: Text + Highlights */}
              <Col lg={7} md={12}>
                <div className="about-content-panel">
                  <p className="about-mission-text">
                    Welcome to <strong>Mission Engineering</strong> — where we offer top-notch coaching to students who want to pursue careers in government service, polytechnic education and Leet Coaching. Our main objective is to give pupils the knowledge and abilities needed to perform well on entrance tests.
                  </p>
                  <p className="about-mission-text">
                    We believe that every student is unique, and therefore, we provide personalized attention to each and every student. Our coaching methodology combines traditional and modern teaching techniques, making learning fun and interactive.
                  </p>
                </div>
              </Col>

            </Row>
          </Container>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <Container>
          <h2 className="why-choose-title">
            Why Choose <span className="text-danger">Us?</span>
          </h2>
          <p className="why-choose-subtitle">
            Mission Engineering, for coaching in Polytechnic, B.Tech, Gov. Job, and Campus Placements:
          </p>

          <Row className="why-choose-cards">
            {whyChooseCards.map((card, index) => (
              <Col lg={4} md={6} xs={6} key={index} className="mb-4">
                <Card className="why-card h-100">
                  <Card.Body className="text-center">
                    <div className="why-icon">
                      {card.icon}
                    </div>
                    <h4 className="why-card-title">{card.title}</h4>
                    <p className="why-card-description">{card.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
