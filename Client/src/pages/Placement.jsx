import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CourseNavigation from '../components/CourseNavigation';
import { FaCheckCircle, FaBriefcase, FaUserGraduate, FaHandshake, FaChartLine, FaAward, FaUsers, FaLightbulb } from 'react-icons/fa';
import './Placement.css';

const Placement = () => {
  const placementProcess = [
    {
      step: 1,
      title: 'Company Visits & Presentations',
      description: 'Companies interested in hiring polytechnic students schedule campus visits where they present their organization, its values, and the job roles available. This gives students a chance to learn about potential employers and the expectations of the roles they are applying for.'
    },
    {
      step: 2,
      title: 'Written Tests',
      description: 'Many companies conduct written tests to assess the technical knowledge and problem-solving skills of students. These tests typically cover subjects relevant to the student\'s field of study, such as engineering principles, logical reasoning, and mathematics.'
    },
    {
      step: 3,
      title: 'Group Discussions',
      description: 'Some companies also include group discussions (GD) as part of the selection process. This helps employers assess the candidates\' communication, leadership, and teamwork abilities.'
    },
    {
      step: 4,
      title: 'Interviews',
      description: 'After successfully clearing the written tests and group discussions, students are usually called for personal or technical interviews. These interviews focus on assessing the candidate\'s technical expertise, problem-solving abilities, and overall fit within the company culture.'
    },
    {
      step: 5,
      title: 'Offer Letter',
      description: 'After the interview stage, successful candidates are given an offer letter, which confirms their selection for a job. The offer may include details about the role, salary, benefits, and joining date.'
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
      description: 'Focused on core engineering subjects such as Mechanical, Civil, Electrical, Computer Science, etc.'
    },
    {
      title: 'Aptitude & Reasoning',
      description: 'Comprehensive preparation for quantitative aptitude, logical reasoning, and verbal ability.'
    },
    {
      title: 'Soft Skills',
      description: 'Training in communication, teamwork, leadership, and time management to ensure students are ready for professional environments.'
    },
    {
      title: 'Group Discussion',
      description: 'A group discussion (GD) is a common selection process used by companies to assess candidates\' communication, teamwork, and problem-solving skills. During a GD, participants discuss a given topic, share their perspectives, and collaborate to reach a conclusion.'
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews, resume building, and personality development workshops to help students present their best selves.'
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
      name: 'Toshiba Energies',
      description: 'Toshiba Energies is a global leader in engineering and technology services, specializing in energy and petrochemical sectors. With a presence in more than 45 countries, Toshiba Energies recruits students from polytechnic colleges in Delhi for positions in project engineering, design, and field operations.'
    },
    {
      name: 'IGL (Indraprastha Gas Limited)',
      description: 'IGL plays a critical role in the energy sector, providing natural gas to Delhi and surrounding areas. As a leading company in the distribution of natural gas, IGL offers polytechnic graduates the chance to work in infrastructure development, project management, and operations.'
    },
    {
      name: 'Floor Design',
      description: 'Floor Design is a company that specializes in providing comprehensive interior and exterior design solutions for the construction industry. Polytechnic graduates in Delhi offer excellent Floor David for recruitment drives, looking for talented civil engineers and architects.'
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
    }
  ];

  return (
    <div className="placement-page">
      {/* Hero Section */}
      <section className="placement-hero">
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">Polytechnic Campus Placement</h1>
            <p className="hero-subtitle">Your Gateway to a Successful Engineering Career</p>
          </div>
        </Container>
      </section>

      {/* What is Polytechnic Campus Placement */}
      <section className="placement-section">
        <Container>
          <Card className="content-card">
            <Card.Body>
              <h2 className="section-title">What is Polytechnic Campus Placement?</h2>
              <p>
                Polytechnic campus placement refers to the process through which polytechnic students are recruited by companies and industries directly from their educational institution. It is an integral part of the polytechnic education system, ensuring that students can transition smoothly from academic life to the professional world. Through campus placement, companies visit polytechnic institutes to assess and select potential candidates for job roles in various sectors, including engineering, technology, manufacturing, and more.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

        <CourseNavigation />

      {/* Importance Section */}
      <section className="placement-section bg-light">
        <Container>
          <h2 className="section-title">Importance of Polytechnic Placement</h2>
          <Card className="content-card">
            <Card.Body>
              <p>
                The main objective of polytechnic education is to equip students with the technical skills and practical knowledge required to excel in their chosen fields. Campus placement serves as the bridge between these academic accomplishments and the professional job market. It provides students with an opportunity to kickstart their careers by securing a job right after completing their course. This direct employment pathway helps students not only in their financial independence but also in gaining valuable real-world experience early in their careers.
              </p>
              <p className="mt-3">
                For companies, campus placement offers an efficient way to identify fresh talent who are already equipped with the technical knowledge and skill sets needed for specific roles. Organizations benefit from hiring polytechnic graduates who are ready to work in industry-specific roles, thus reducing the time and effort needed for training.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Placement Process */}
      <section className="placement-section">
        <Container>
          <h2 className="section-title">Polytechnic Campus Placement Process</h2>
          <p className="text-center mb-4">
            The polytechnic campus placement process typically involves several stages. While the exact process may vary from one institute to another, it generally includes the following steps:
          </p>
          
          <Row className="g-4">
            {placementProcess.map((item, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className="process-card h-100">
                  <Card.Body>
                    <div className="process-number">{item.step}</div>
                    <h5 className="process-title">{item.title}</h5>
                    <p className="process-description">{item.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
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
                <Col key={index} md={4}>
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
                <Col key={index} md={4}>
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
          <Card className="content-card mission-card">
            <Card.Body>
              <h2 className="section-title">Why Choose Mission Engineering for Polytechnic Placement Preparation?</h2>
              
              <div className="mission-point">
                <h5><FaCheckCircle className="point-icon" /> Experienced Faculty</h5>
                <p>Our team of experienced, passionate educators are experts in their respective fields, committed to your success.</p>
              </div>

              <div className="mission-point">
                <h5><FaCheckCircle className="point-icon" /> Comprehensive Curriculum</h5>
                <p>We offer a well-structured curriculum that covers every aspect of polytechnic placement exams, including technical subjects, aptitude, logical reasoning, and soft skills.</p>
              </div>

              <div className="mission-point">
                <h5><FaCheckCircle className="point-icon" /> Personalized Coaching</h5>
                <p>At Mission Engineering, we understand that each student has unique learning needs. Our personalized coaching ensures that you get the individual attention you deserve.</p>
              </div>

              <div className="mission-point">
                <h5><FaCheckCircle className="point-icon" /> Industry Exposure</h5>
                <p>We provide students with real-world exposure through mock interviews, guest lectures from industry experts, and interaction with alumni who have successfully been placed.</p>
              </div>

              <div className="mission-point">
                <h5><FaCheckCircle className="point-icon" /> Success Stories</h5>
                <p>Our alumni have secured positions in top organizations across various industries. With a proven track record of student success, we take pride in shaping the future of polytechnic students.</p>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* What Mission Engineering Offers */}
      <section className="placement-section bg-light">
        <Container>
          <h2 className="section-title">What Mission Engineering Offer?</h2>
          <p className="text-center mb-4">We offer coaching for a wide range of polytechnic placements, including:</p>
          
          <Row className="g-4">
            {missionOffers.map((offer, index) => (
              <Col key={index} md={6}>
                <Card className="offer-card h-100">
                  <Card.Body>
                    <h5 className="offer-title">
                      <FaCheckCircle className="offer-icon" />
                      {offer.title}
                    </h5>
                    <p className="offer-description">{offer.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Mission Engineering Facilitates */}
      <section className="placement-section">
        <Container>
          <h2 className="section-title">Mission Engineering Facilitates?</h2>
          <p className="text-center mb-4">
            At Mission Engineering, we believe in a hands-on approach to coaching. We focus on practical learning methods such as:
          </p>
          
          <Row className="g-4">
            {facilities.map((facility, index) => (
              <Col key={index} md={4}>
                <Card className="facility-card h-100">
                  <Card.Body>
                    <h5 className="facility-title">
                      <FaCheckCircle className="facility-icon" />
                      {facility.title}
                    </h5>
                    <p className="facility-description">{facility.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Top Recruiters */}
      <section className="placement-section bg-light">
        <Container>
          <h2 className="section-title">Top Recruiters Visit in Delhi Polytechnic Colleges for Placement</h2>
          <p className="text-center mb-4">
            Polytechnic education in Delhi offers students a solid foundation in engineering, technology, and applied sciences. As students near the completion of their courses, one of the most exciting milestones is the campus placement season. To bridge the gap between education and employment, many top-tier companies actively recruit from Delhi's polytechnic colleges. These companies recognize the value of polytechnic graduates who are equipped with the technical skills and practical knowledge necessary to excel in various industries. Below are some of the most prominent recruiters visiting Delhi's polytechnic colleges:
          </p>
          
          <Row className="g-4">
            {topRecruiters.map((recruiter, index) => (
              <Col key={index} lg={6}>
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
    </div>
  );
};

export default Placement;
