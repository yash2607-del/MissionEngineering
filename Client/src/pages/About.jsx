import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <Container>
          <h1>About Mission Engineering</h1>
        </Container>
      </section>

      <section className="about-content py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="about-text">
                <h2>About Us</h2>
                <p>
                  Mission Engineering is a premier coaching institute dedicated to providing quality education
                  and guidance to engineering aspirants. We specialize in LEET, Polytechnic Entrance,
                  Polytechnic Subjects, and Polytechnic Placement preparation.
                </p>
                <p>
                  With our team of renowned and experienced faculties, we ensure that every student receives
                  personalized attention and quality teaching that helps them achieve their goals.
                </p>
                <p>
                  Our institute is equipped with robust infrastructure and follows a student-centric approach
                  to create an exam-oriented ecosystem that fosters learning and growth.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
