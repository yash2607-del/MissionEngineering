import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './TestSeries.css';
import phone1 from '../assets/test-series-phone/me-phone-1.jpg';
import phone2 from '../assets/test-series-phone/me-phone-2.jpg';
import phone3 from '../assets/test-series-phone/me-phone-3.jpg';
import phone4 from '../assets/test-series-phone/me-phone-4.jpg';
import phone5 from '../assets/test-series-phone/me-phone-5.jpg';
import phone6 from '../assets/test-series-phone/me-phone-6.jpg';

const TestSeries = () => {
  const testSeriesCards = [
    {
      title: 'LEET TEST SERIES',
      icon: 'bi-card-checklist'
    },
    {
      title: 'POLYTECHNIC ENTRANCE TEST SERIES',
      icon: 'bi-card-checklist'
    }
  ];

  return (
    <div className="test-series-page">
      {/* Main Content Section */}
      <section className="test-series-content">
        <Container>
          <h1 className="test-series-main-title">TEST SERIES</h1>
          
          <div className="test-series-intro">
            <h3 className="intro-heading">Test Series - A Step Towards Your Dream</h3>
            <p className="intro-text">
              Supercharge your exam preparation with our comprehensive online test series. Our series offers an ideal mix of topic-wise, subject-wise, part-course, and full-course assessments. This structured approach helps students to build a strong foundation before progressing to more complex topics.
            </p>
            <p className="intro-text">
              Each exam is carefully designed to reflect real exam formats, providing an authentic testing experience. Our subject-wise tests allow you to focus on specific areas, ensuring a deep understanding of each topic before progressing. The sectional tests cover various engineering topics, while part-course and full-course tests prepare you for the complete range of subjects included in the exams.
            </p>
            <p className="intro-text">
              By regularly participating in our test series, you can track your progress, identify strengths and weaknesses, and improve your preparation strategy. This targeted approach not only boosts your confidence but also enhances your problem-solving skills, making you more adept at tackling challenging questions.
            </p>
          </div>

          <div className="features-section">
            <h4 className="features-heading">Features of Test Series</h4>
            <ol className="features-list">
              <li>Identical exam layout to the exam</li>
              <li>Comprehensive explanations for student guidance</li>
              <li>Total assessment report: This report will show Your Score in the assessment, the number of questions addressed, Time Spent, and the Rank earned.</li>
              <li>Marks Distribution (positive, negative, and unattempted questions).</li>
              <li>Comparison Reports: Comparison reports distinctly show your Score / Topper's Score, Your Time / Time utilized by Topper, Your Accuracy / Topper's Accuracy</li>
              <li>Ranking comparison among the three highest scorers</li>
            </ol>
          </div>

          {/* Test Series Cards */}
          <Row className="test-series-cards">
            {testSeriesCards.map((card, index) => (
              <Col md={6} key={index} className="mb-4">
                <Card className="test-card">
                  <Card.Body className="text-center">
                    <div className="test-card-icon">
                      <i className={`bi ${card.icon}`}></i>
                    </div>
                    <h5 className="test-card-title">{card.title}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* App Instructions Section */}
      <section className="app-instructions-section">
        <Container>
          <h2 className="app-heading">How To Get Test Series On Mission Engineering App (Android)</h2>
          
          <Row className="instruction-row">
            <Col md={6} className="instruction-text-col">
              <h4 className="instruction-title">Download & Install Mission Engineering App From Play Store.</h4>
              <p className="instruction-desc">
                To get started, the first step is to download the "Mission Engineering" app from the Google Play Store. Simply open the Play Store on your Android device, search for "Mission Engineering" in the search bar, and hit the "Install" button. The app will automatically download and install on your device. Once installed, you'll find the app icon on your home screen or app drawer. With this app, you can access various test series, including the DTU LEET Test Series, IPU LEET Test Series, CUET Test Series, All India LEET Test Series and other important resources like Polytechnic Entrance and Polytechnic Placement Test Series.
              </p>
            </Col>
            <Col md={6} className="instruction-img-col">
              <div className="phone-mockup">
                <img src={phone1} alt="Mission Engineering App Screenshot" className="phone-image" />
              </div>
            </Col>
          </Row>

          <Row className="instruction-row">
            <Col md={6} className="instruction-img-col">
              <div className="phone-mockup">
                <img src={phone2} alt="Use Another Method Screen" className="phone-image" />
              </div>
            </Col>
            <Col md={6} className="instruction-text-col">
              <h4 className="instruction-title">Click On "Use Another Method".</h4>
              <p className="instruction-desc">
                After installing the app, launch it and you'll be directed to the login screen. If you don't want to log in using a Google account, select the option "Use Another Method." This option allows you to log in with your mobile number and provides flexibility for users who prefer not to link their Google credentials to the app. This method will lead you to the personalized dashboard where you can access various courses like the DTU LEET Test Series or Polytechnic Entrance Test Series.
              </p>
            </Col>
          </Row>

          <Row className="instruction-row">
            <Col md={6} className="instruction-text-col">
              <h4 className="instruction-title">Enter Your "Mobile Number" & "OTP" To Login App.</h4>
              <p className="instruction-desc">
                Once you select the "Use Another Method" option, you will be asked to input your mobile number. Enter the number that you've registered with and the app will send you an OTP (One-Time Password) to verify your identity. After receiving the OTP on your phone, enter it into the app to successfully log in. This step ensures that your account is secure and personalized, granting you access to exclusive resources such as the IPU LEET Test Series and other coaching materials.
              </p>
            </Col>
            <Col md={6} className="instruction-img-col">
              <div className="phone-mockup">
                <img src={phone3} alt="Mobile Number and OTP Screen" className="phone-image" />
              </div>
            </Col>
          </Row>

          <Row className="instruction-row">
            <Col md={6} className="instruction-img-col">
              <div className="phone-mockup">
                <img src={phone4} alt="Name and Email Screen" className="phone-image" />
              </div>
            </Col>
            <Col md={6} className="instruction-text-col">
              <h4 className="instruction-title">Enter Your Credential "Name & E-mail ID".</h4>
              <p className="instruction-desc">
                After the OTP verification, you'll need to provide your basic details, including your name and email ID. These details are used to create a profile that allows us to offer tailored learning experiences. Your email ID will also be used to send you important notifications, updates, and resources related to test series, such as Polytechnic Placement Test Series, LEET Test Series, and other important communications.
              </p>
            </Col>
          </Row>

          <Row className="instruction-row">
            <Col md={6} className="instruction-text-col">
              <h4 className="instruction-title">Click On Courses To Get All Course</h4>
              <p className="instruction-desc">
                After setting up your profile, you will be directed to the app's dashboard. Here, you'll see the "Courses" tab where you can find all the available courses offered by our coaching centre. In this section, you can easily access the LEET Test Series, IPU LEET Test Series, DTU LEET Test Series, and more. It's your gateway to finding the most relevant resources for your entrance exams and career prep, including specialized Polytechnic Entrance and Placement Test Series.
              </p>
            </Col>
            <Col md={6} className="instruction-img-col">
              <div className="phone-mockup">
                <img src={phone5} alt="Courses Dashboard" className="phone-image" />
              </div>
            </Col>
          </Row>

          <Row className="instruction-row">
            <Col md={6} className="instruction-img-col">
              <div className="phone-mockup">
                <img src={phone6} alt="Course Selection Screen" className="phone-image" />
              </div>
            </Col>
            <Col md={6} className="instruction-text-col">
              <h4 className="instruction-title">Click On The Course Which You Want To Buy.</h4>
              <p className="instruction-desc">
                Once you've browsed through the available courses, select the one you want to purchase. Whether you are looking for the LEET Test Series, IPU LEET Test Series, or Polytechnic Entrance Test Series, click on the course you are interested in to view more details. After you choose the course, simply click the "Buy Now" button and follow the on-screen instructions to complete the purchase, and gain immediate access to the course content. Start preparing with the right tools to ensure your success in the exams and get ready for a bright future with the Polytechnic Placement Test Series.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default TestSeries;
