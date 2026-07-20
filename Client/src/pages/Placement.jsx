import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CourseNavigation from '../components/CourseNavigation';
import { FaCheckCircle, FaBriefcase, FaUserGraduate, FaHandshake, FaChartLine, FaAward, FaUsers, FaLightbulb, FaBook, FaChalkboardTeacher, FaComments, FaFileAlt } from 'react-icons/fa';
import './Placement.css';
import { images } from '../../data';

const prachiSoniImg = images.placementToppers.prachiSoni;
const prabhsimarSinghImg = images.placementToppers.prabhsimarSingh;
const pritamImg = images.placementToppers.pritam;
const aakashImg = images.placementToppers.aakash;
const jatinVermaImg = images.placementToppers.jatinVerma;
const nitinImg = images.placementToppers.nitin;
const rajThakurImg = images.placementToppers.rajThakur;
const sanjayImg = images.placementToppers.sanjay;
const sureshGolaImg = images.placementToppers.sureshGola;

const Placement = () => {
  const placementToppers = [
    {
      name: 'Prachi Soni',
      company: 'Maruti Suzuki',
      image: prachiSoniImg
    },
    {
      name: 'Prabhsimar Singh',
      company: 'Maruti Suzuki',
      image: prabhsimarSinghImg
    },
    {
      name: 'Pritam',
      company: 'Maruti Suzuki',
      image: pritamImg
    },
    {
      name: 'Aakash',
      company: 'Top Company',
      image: aakashImg
    },
    {
      name: 'Jatin Verma',
      company: 'Top Company',
      image: jatinVermaImg
    },
    {
      name: 'Nitin',
      company: 'Top Company',
      image: nitinImg
    },
    {
      name: 'Raj Thakur',
      company: 'Top Company',
      image: rajThakurImg
    },
    {
      name: 'Sanjay',
      company: 'Top Company',
      image: sanjayImg
    },
    {
      name: 'Suresh Gola',
      company: 'Top Company',
      image: sureshGolaImg
    }
  ];

  const placementProcess = [
    {
      step: 1,
      title: 'Company Visits & Presentations',
      description: 'Companies present their organization, values, and available job roles to interested students.'
    },
    {
      step: 2,
      title: 'Written Tests',
      description: 'Assessments to evaluate technical knowledge, logical reasoning, and problem-solving skills.'
    },
    {
      step: 3,
      title: 'Group Discussions',
      description: 'Interactive discussions to assess communication, leadership, and teamwork abilities.'
    },
    {
      step: 4,
      title: 'Interviews',
      description: 'Personal or technical interviews focusing on your expertise, problem-solving, and cultural fit.'
    },
    {
      step: 5,
      title: 'Medical Test',
      description: 'A pre-employment medical examination to ensure candidates meet the health and fitness requirements of the role.'
    },
    {
      step: 6,
      title: 'Offer Letter',
      description: 'Successful candidates receive an official offer detailing their role, salary, and joining date.'
    }
  ];

  const studentBenefits = [
    {
      icon: <FaBriefcase />,
      title: 'Early Career Start',
      description: 'Students can secure employment before completing their course, providing them with job security and a clear career trajectory.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Hands-On Experience',
      description: 'Polytechnic courses are typically very industry-focused. Campus placements allow students to apply what they\'ve learned in a real-world setting, making them more proficient in their field.'
    },
    {
      icon: <FaUsers />,
      title: 'Networking Opportunities',
      description: 'Through campus placement drives, students get the chance to interact with industry professionals, which can lead to future opportunities and collaborations.'
    }
  ];

  const employerBenefits = [
    {
      icon: <FaUserGraduate />,
      title: 'Access to Fresh Talent',
      description: 'Employers can hire highly skilled and motivated individuals directly from the academic environment.'
    },
    {
      icon: <FaChartLine />,
      title: 'Cost-Effective Hiring',
      description: 'Hiring polytechnic graduates directly from campus helps reduce recruitment costs and training time.'
    },
    {
      icon: <FaAward />,
      title: 'Building Brand Recognition',
      description: 'Companies that regularly participate in campus placements build a strong presence among educational institutions, which can enhance their employer brand and attract more talent.'
    }
  ];

  const missionOffers = [
    {
      title: 'Technical Skill Development',
      description: 'Focused on core engineering subjects such as Mechanical, Civil, Electrical, Computer Science, etc.',
      icon: <FaLightbulb />
    },
    {
      title: 'Aptitude & Reasoning',
      description: 'Comprehensive preparation for quantitative aptitude, logical reasoning, and verbal ability.',
      icon: <FaChartLine />
    },
    {
      title: 'Soft Skills',
      description: 'Training in communication, teamwork, leadership, and time management to ensure students are ready for professional environments.',
      icon: <FaHandshake />
    },
    {
      title: 'Group Discussion',
      description: 'A group discussion (GD) is a common selection process used by companies to assess candidates\' communication, teamwork, and problem-solving skills. During a GD, participants discuss a given topic, share their perspectives, and collaborate to reach a conclusion.',
      icon: <FaUsers />
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews, resume building, and personality development workshops to help students present their best selves.',
      icon: <FaUserGraduate />
    },
    {
      title: 'Career Guidance',
      description: 'Expert advice and continuous support to help students make informed decisions about their career paths and future opportunities.',
      icon: <FaBriefcase />
    }
  ];

  const facilities = [
    {
      title: 'Regular Mock Tests & Assessments',
      description: 'These simulate real-time placement exams and help students build confidence and time management skills.'
    },
    {
      title: 'Interactive Classes',
      description: 'We offer interactive sessions that encourage active participation, discussions, and problem-solving.'
    },
    {
      title: 'Performance Tracking',
      description: 'Through regular feedback and performance evaluations, we ensure each student is on track to achieve their placement goals.'
    }
  ];

  const topRecruiters = [
    {
      name: 'Maruti Suzuki',
      description: 'As India\'s largest automobile manufacturer, Maruti Suzuki has a well-established reputation for providing high-quality vehicles and contributing to the growth of the automotive sector in Delhi polytechnic colleges, particularly looking for mechanical, electrical, and automobile engineering students.'
    },
    {
      name: 'Samsung Engineering',
      description: 'Samsung Engineering is a global engineering, procurement, and construction (EPC) company specializing in the oil & gas, power, and industrial sectors. The company actively recruits polytechnic graduates for roles in project engineering, design, and field operations.'
    },
    {
      name: 'IGL (Indraprastha Gas Limited)',
      description: 'IGL plays a critical role in the energy sector, providing natural gas to Delhi and surrounding areas. As a leading company in the distribution of natural gas, IGL offers polytechnic graduates the chance to work in infrastructure development, project management, and operations.'
    },
    {
      name: 'Fluor Daniel',
      description: 'Fluor Daniel is a company that specializes in providing comprehensive interior and exterior design solutions for the construction industry. Polytechnic graduates in Delhi offer excellent Floor David for recruitment drives, looking for talented civil engineers and architects.'
    },
    {
      name: 'Bechtel',
      description: 'Bechtel is one of the world\'s largest engineering, procurement, and construction companies. Known for its work in the energy, infrastructure, and defense sectors, Bechtel hires polytechnic graduates in Delhi to recruit graduates with specialized skills in mechanical, civil, and electrical engineering.'
    },
    {
      name: 'L&T (Larsen & Toubro)',
      description: 'L&T is a giant in the field of engineering and construction. With expertise in various sectors, including construction, technology, and manufacturing, L&T is a preferred employer for many polytechnic students in Delhi. The company actively recruits polytechnic graduates for roles in civil engineering, mechanical engineering, electrical engineering, and project management.'
    },
    {
      name: 'S&B',
      description: 'S&B is an established name in engineering services, providing solutions for various sectors, including energy, construction, and infrastructure. S&B regularly recruits students from polytechnic colleges in Delhi for positions in design, engineering, and project management, focusing on those with expertise in civil, mechanical, and electrical fields.'
    },
    {
      name: 'Godrej',
      description: 'Godrej, a well-known conglomerate with revenues and assets, is a leading player in multiple industries, including manufacturing, technology, and consumer goods. Godrej visits polytechnic colleges in Delhi to recruit students for roles in production, manufacturing, and supply chain management.'
    },
    {
      name: 'Daikin',
      description: 'Daikin, a global leader in air conditioning and refrigeration solutions, is a prominent recruiter for polytechnic students in Delhi. The company focuses on hiring young talent for roles in HVAC engineering, solution sales, implementation, and production.'
    },
    {
      name: 'Honda Cars',
      description: 'Honda Cars, a global leader in automobile manufacturing, recruits talented individuals for its production facilities and supply chain operations. Honda regularly recruits polytechnic students in Delhi, especially those with a background in mechanical and automobile engineering.'
    },
    {
      name: 'Hero Motors',
      description: 'Hero Motors, a global leader in the motorcycle and bicycle manufacturing industry, is another key recruiter in Delhi\'s polytechnic colleges. Known for its presence in the two-wheeled segment, Hero Motors hires polytechnic graduates for roles in production, design, quality control, and R&D.'
    },
     {
      name: 'Atlas Copco',
      description: 'Atlas Copco is a leading global industrial company specializing in innovative products like air compressors and industrial tools. With a focus on sustainable productivity, they hire polytechnic graduates for various roles in manufacturing, automotive, and electronics.'
    }
  ];

  return (
    <div className="placement-page">
     
      {/* Why Polytechnic Campus Placement Section */}
      <section className="placement-section">
        <Container>
          <h2 className="section-title">Why Polytechnic Campus Placement?</h2>
          <Row className="g-4 mt-3">
            <Col lg={4} md={12}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaHandshake /></div>
                  <h5 className="benefit-title">Direct Recruitment</h5>
                  <p className="benefit-description">Campus placement ensures a smooth transition from academic life to the professional world. Companies directly recruit talented students from our institution for exciting roles in engineering, technology, and manufacturing.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={12}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaAward /></div>
                  <h5 className="benefit-title">Bridge to Profession</h5>
                  <p className="benefit-description">Placement serves as a vital bridge between your academic accomplishments and the professional job market. It provides a direct pathway to kickstart your career, gain real-world experience, and achieve financial independence early on.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={12}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaBriefcase /></div>
                  <h5 className="benefit-title">Efficient Hiring</h5>
                  <p className="benefit-description">For organizations, campus placement offers an efficient way to identify fresh, highly-trained talent. Hiring polytechnic graduates who are already equipped with industry-specific skills significantly reduces the time needed for onboarding.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Top Recruiters */}
      <section className="placement-section bg-light">
        <Container>
          <h2 className="section-title">Top Recruiters</h2>
          
          <Row className="g-4">
            {topRecruiters.map((recruiter, index) => (
              <Col key={index} lg={4} md={6} xs={12}>
                <Card className="recruiter-card h-100">
                  <Card.Body>
                    <div className="recruiter-number">{index + 1}</div>
                    <h5 className="recruiter-name">{recruiter.name}</h5>
                    <p className="recruiter-description">{recruiter.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Placement Process */}
      <section className="placement-section">
        <Container>
          <h2 className="section-title">Polytechnic Campus Placement Process</h2>
          <div className="roadmap-container">
            {placementProcess.map((item, index) => (
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

      {/* Benefits Section */}
      <section className="placement-section bg-light">
        <Container>
          <h2 className="section-title">Benefits Of Polytechnic Campus Placement</h2>
          
          <div className="benefits-subsection">
            <h4 className="subsection-title">For Students:</h4>
            <Row className="g-4 mt-3">
              {studentBenefits.map((benefit, index) => (
                <Col key={index} md={4} sm={6} xs={12}>
                  <Card className="benefit-card h-100">
                    <Card.Body>
                      <div className="benefit-icon">{benefit.icon}</div>
                      <h5 className="benefit-title">{benefit.title}</h5>
                      <p className="benefit-description">{benefit.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          <div className="benefits-subsection mt-5">
            <h4 className="subsection-title">For Employers:</h4>
            <Row className="g-4 mt-3">
              {employerBenefits.map((benefit, index) => (
                <Col key={index} md={4} sm={6} xs={12}>
                  <Card className="benefit-card h-100">
                    <Card.Body>
                      <div className="benefit-icon">{benefit.icon}</div>
                      <h5 className="benefit-title">{benefit.title}</h5>
                      <p className="benefit-description">{benefit.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* Why Choose Mission Engineering */}
      <section className="placement-section">
        <Container>
          <h2 className="section-title">Why Choose Mission Engineering?</h2>
          <Row className="g-4 mt-3">
            <Col md={4} sm={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaChalkboardTeacher /></div>
                  <h5 className="benefit-title">Experienced Faculty</h5>
                  <p className="benefit-description">Our team of experienced, passionate educators are experts in their respective fields, committed to your success.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaBook /></div>
                  <h5 className="benefit-title">Comprehensive Curriculum</h5>
                  <p className="benefit-description">We offer a well-structured curriculum that covers every aspect of polytechnic placement exams, including technical subjects, aptitude, logical reasoning, and soft skills.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaUserGraduate /></div>
                  <h5 className="benefit-title">Personalized Coaching</h5>
                  <p className="benefit-description">At Mission Engineering, we understand that each student has unique learning needs. Our personalized coaching ensures that you get the individual attention you deserve.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaBriefcase /></div>
                  <h5 className="benefit-title">Industry Exposure</h5>
                  <p className="benefit-description">We provide students with real-world exposure through mock interviews, guest lectures from industry experts, and interaction with alumni who have successfully been placed.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaChartLine /></div>
                  <h5 className="benefit-title">Success Stories</h5>
                  <p className="benefit-description">Our alumni have secured positions in top organizations across various industries. With a proven track record of student success, we take pride in shaping the future of polytechnic students.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card className="benefit-card h-100">
                <Card.Body>
                  <div className="benefit-icon"><FaComments /></div>
                  <h5 className="benefit-title">Doubt Clearing Sessions</h5>
                  <p className="benefit-description">Regular doubt clearing sessions to ensure that no student is left behind, providing a solid foundation in all subjects.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What Mission Engineering Offers */}
      <section className="placement-section bg-light">
        <Container>
          <h2 className="section-title">What Mission Engineering Offer?</h2>
          
          <Row className="g-4 mt-3">
            {missionOffers.map((offer, index) => (
              <Col key={index} lg={4} md={6} xs={12}>
                <Card className="benefit-card h-100">
                  <Card.Body>
                    <div className="benefit-icon">{offer.icon}</div>
                    <h5 className="benefit-title">{offer.title}</h5>
                    <p className="benefit-description">{offer.description}</p>
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

export default Placement;
