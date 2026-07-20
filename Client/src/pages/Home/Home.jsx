import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Carousel, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserTie, FaLayerGroup, FaGraduationCap, FaMedal, FaWhatsapp } from 'react-icons/fa';
import { images } from '../../../data';
import { fetchVideos } from '../../api/studentApi';
import InfiniteScroller from '../../components/InfiniteScroller';
import './Home.css';


const missionLogo = images.hero.missionLogo;
const missionPopup = images.hero.missionPopup;
const dtuLogo = images.testSeriesLogos.dtu;
const ipuLogo = images.testSeriesLogos.ipu;
const cuetLogo = images.testSeriesLogos.cuet;
const allIndiaLogo = images.testSeriesLogos.allIndia;
const delhiPolyLogo = images.testSeriesLogos.delhiPolytechnic;
const upPolyLogo = images.testSeriesLogos.upPolytechnic;
const biharPolyLogo = images.testSeriesLogos.biharPolytechnic;
const jharkhandPolyLogo = images.testSeriesLogos.jharkhandPolytechnic;
const AaditKapoorImg = images.leetToppers.aaditKapoor;
const SpandanImg = images.leetToppers.spandan;
const SimranImg = images.leetToppers.simran;
const KartikImg = images.leetToppers.kartik;
const ZahidImg = images.leetToppers.zahid;
const AkmalImg = images.leetToppers.akmal;
const PrachiSoniImg = images.placementToppers.prachiSoni;
const PrabhsimarSinghImg = images.placementToppers.prabhsimarSingh;
const PritamImg = images.placementToppers.pritam;
const RajThakurImg = images.placementToppers.rajThakur;
const SanjayImg = images.placementToppers.sanjay;
const SureshGolaImg = images.placementToppers.sureshGola;
const JatinVermaImg = images.placementToppers.jatinVerma;
const AakashImg = images.placementToppers.aakash;
const NitinImg = images.placementToppers.nitin;

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const hasSeenPopup = window.sessionStorage.getItem('missionPopupSeenSession');
    if (!hasSeenPopup) {
      setShowPopup(true);
    }

    fetchVideos().then(res => {
      if (res && res.videos) {
        setVideos(res.videos);
      }
    }).catch(err => console.error(' No Youtube Videos', err));
  }, []);

  const closePopup = () => {
    window.sessionStorage.setItem('missionPopupSeenSession', 'true');
    setShowPopup(false);
  };

  const getEmbedUrl = (url) => {
    if (!url) return '';
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match && match[1] ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  const heroImages = [
    { desktop: images.hero.missionHero4, mobile: images.hero.missionHero4 },
    { desktop: images.hero.missionHero3, mobile: images.hero.missionHero3 },
    { desktop: images.hero.missionHero2, mobile: images.hero.missionHero2 },
    { desktop: images.hero.missionHero1, mobile: images.hero.missionHero1 },
  ];

  return (
    <div className="home-page">
      {showPopup && (
        <div className="mission-popup-overlay" role="dialog" aria-modal="true" aria-label="Mission Engineering announcement">
          <div className="mission-popup-card">
            <button type="button" className="mission-popup-close" onClick={closePopup} aria-label="Close popup">
              ×
            </button>
            <img src={images.hero.missionPopup} alt="Mission Engineering announcement" className="mission-popup-image" />
          </div>
        </div>
      )}

      {/* Hero Section with Image Carousel */}
      <section className="hero-section">
        <Carousel indicators={true} controls={true} interval={4000} pause={false} fade>
          {heroImages.map((img, idx) => (
            <Carousel.Item key={idx}>
              <div className="hero-image-wrapper">
                <picture>
                  <source media="(max-width: 768px)" srcSet={img.mobile} />
                  <img
                    className={`d-block w-100 hero-image ${idx === 0 ? 'hero-image-cover' : 'hero-image-fill'}`}
                    src={img.desktop}
                    alt={`Mission Engineering Hero ${idx + 1}`}
                  />
                </picture>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/919643943914"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-sticky"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={35} />
      </a>

      <div className="announcement-strip" role="status" aria-label="Latest announcements">
        <div className="announcement-strip-track">
          <div className="announcement-strip-group">
            <span className="announcement-strip-message"> DTU Leet Rank 1 in 2026</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">13 students in Top 25 LEET 2026</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">New Batch Starts LEET 2027</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">Book Your Seat Now</span>
            <span className="announcement-strip-divider">•</span>
          </div>
          <div className="announcement-strip-group" aria-hidden="true">
            <span className="announcement-strip-message"> DTU Leet Rank 1 in 2026</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">13 students in Top 25 LEET 2026</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">New Batch Starts LEET 2027</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">Book Your Seat Now</span>
            <span className="announcement-strip-divider">•</span>
          </div>
          <div className="announcement-strip-group" aria-hidden="true">
            <span className="announcement-strip-message"> DTU Leet Rank 1 in 2026</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">13 students in Top 25 LEET 2026</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">New Batch Starts LEET 2027</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">Book Your Seat Now</span>
            <span className="announcement-strip-divider">•</span>
          </div>
          <div className="announcement-strip-group" aria-hidden="true">
            <span className="announcement-strip-message"> DTU Leet Rank 1 in 2026</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">13 students in Top 25 LEET 2026</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">New Batch Starts LEET 2027</span>
            <span className="announcement-strip-divider">•</span>
            <span className="announcement-strip-message">Book Your Seat Now</span>
            <span className="announcement-strip-divider">•</span>
          </div>
        </div>
      </div>

      {/* Our YouTube Videos Section */}
      {videos && videos.length > 0 && (
        <section className="youtube-videos-section py-5 bg-light">
          <Container>
            <h2 className="text-center mb-5 youtube-section-title">OUR YOUTUBE VIDEOS</h2>
            <Row className="g-4">
              {videos.map((video) => {
                if (!video.youtubeUrl) return null;
                return (
                  <Col lg={6} md={6} key={video.id || video._id}>
                    <Card className="h-100 video-card border-0 shadow-sm">
                      <Card.Body className="p-3">
                        <div className="ratio ratio-16x9 mb-3">
                          <iframe
                            src={getEmbedUrl(video.youtubeUrl)}
                            title={video.title || 'YouTube Video'}
                            allowFullScreen
                            style={{ borderRadius: '8px' }}
                          ></iframe>
                        </div>
                        {video.title && (
                          <h5 className="text-center mb-0 mt-2">{video.title}</h5>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      )}

      {/* What We Offer Section */}
      <section className="what-we-offer-section py-5">
        <Container>
          <h2 className="text-center mb-5 home-section-heading">WHAT WE OFFER</h2>
          <Row className="g-4">
            {/* Polytechnic Entrance */}
            <Col lg={6} md={6}>
              <Card className="offer-card h-100">
                <Card.Body className="text-center">
                  <img src={missionLogo} alt="Mission Engineering" className="offer-logo mb-3" />
                  <h3 className="offer-title">POLYTECHNIC ENTRANCE</h3>
                  <Row className="g-3 mt-3">
                    <Col xs={6}>
                      <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">DELHI</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">HARYANA</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">BIHAR</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">PUNJAB</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">UTTAR PRADESH</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">MADHYA PRADESH</Button>
                      </Link>
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
                      <Link to="/leet/ipu-leet" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">IPU</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/leet/dtu-leet" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">DTU/NSUT</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/leet" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">CUET</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/leet" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">IGDTUW LEET</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/leet" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">BCECE</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/leet" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">ALL INDIA LEET</Button>
                      </Link>
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
                      <Link to="/placement" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">MARUTI SUZUKI</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/placement" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">SAMSUNG ENGG.</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/placement" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">HONDA CARS</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/placement" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">TECHNIP ENERGIES</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/placement" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">INDRAPRASTHA GAS LTD</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/placement" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">HERO MOTOCORP LTD</Button>
                      </Link>
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
                      <Link to="/semester-coaching" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">MECHANICAL</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/semester-coaching" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">COMPUTER</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/semester-coaching" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">CIVIL</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/semester-coaching" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">ELECTRONICS</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/semester-coaching" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">ELECTRICAL</Button>
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="/semester-coaching" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-primary" className="offer-btn w-100">OTHER TRADES</Button>
                      </Link>
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
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">DELHI LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">CUET LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">ALL INDIA LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">POLYTECHNIC ENTRANCE</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/placement" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">POLYTECHNIC PLACEMENT</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/semester-coaching" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">SEMESTER COACHING</Button>
                </Link>
              </Col>
            </Row>
          </div>

          {/* Live-Online Courses */}
          <div className="course-category mb-5">
            <h2 className="course-heading text-center mb-4">LIVE-ONLINE COURSES</h2>
            <Row className="g-3 justify-content-center">
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">DELHI LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">CUET LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">ALL INDIA LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">DELHI POLYTECHNIC</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">UP POLYTECHNIC</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">JHARKHAND POLYTECHNIC</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">BIHAR POLYTECHNIC</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">MP POLYTECHNIC</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">UTTARAKHAND POLYTECHNIC</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/polytechnic" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">HIMACHAL POLYTECHNIC</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/placement" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">POLYTECHNIC PLACEMENT</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/semester-coaching" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">SEMESTER COACHING</Button>
                </Link>
              </Col>
            </Row>
          </div>

          {/* Recorded Courses */}
          <div className="course-category">
            <h2 className="course-heading text-center mb-4">RECORDED COURSES</h2>
            <Row className="g-3 justify-content-center">
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet/ipu-leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">IPU LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet/dtu-leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">DTU/NSUT LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">CUET LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">BIHAR LEET (BCECE)</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">JHARKHAND LEET (JCECEB)</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">WEST BENGAL (JELET)</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">GUJRAT LEET (D TO D)</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">PUNJAB LEET (PULEET)</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">SLIET LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">KERALA LEET (CUSAT)</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">UTTARAKHAND LEET (UKSEE)</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">HP LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">MAHARASHTRA LEET</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/leet" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">ALL INDIA LEET EXAMS</Button>
                </Link>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <Link to="/semester-coaching" style={{ textDecoration: 'none' }}>
                  <Button variant="outline-primary" className="course-btn w-100">SEMESTER COACHING</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </section>


      {/* Test Series Section */}
      <section className="test-series-section py-5">
        <Container>
          <h2 className="text-center mb-5 home-section-heading">TEST SERIES</h2>
          <Row className="g-4">
            {/* DTU LEET */}
            <Col lg={3} md={4} sm={6} xs={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={dtuLogo} alt="DTU LEET TEST SERIES" className="test-logo" />
                  </div>
                  <Button as={Link} to="/test-series" variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* IPU LEET */}
            <Col lg={3} md={4} sm={6} xs={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={ipuLogo} alt="IPU LEET TEST SERIES" className="test-logo" />
                  </div>
                  <Button as={Link} to="/test-series" variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* CUET LEET */}
            <Col lg={3} md={4} sm={6} xs={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={cuetLogo} alt="CUET LEET TEST SERIES" className="test-logo" />
                  </div>
                  <Button as={Link} to="/test-series" variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* ALL INDIA LEET */}
            <Col lg={3} md={4} sm={6} xs={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={allIndiaLogo} alt="ALL INDIA LEET TEST SERIES" className="test-logo" />
                  </div>
                  <Button as={Link} to="/test-series" variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* DELHI POLYTECHNIC */}
            <Col lg={3} md={4} sm={6} xs={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={delhiPolyLogo} alt="DELHI POLYTECHNIC TEST SERIES" className="test-logo" />
                  </div>
                  <Button as={Link} to="/test-series" variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* UP POLYTECHNIC */}
            <Col lg={3} md={4} sm={6} xs={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={upPolyLogo} alt="UP POLYTECHNIC TEST SERIES" className="test-logo" />
                  </div>
                  <Button as={Link} to="/test-series" variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* BIHAR POLYTECHNIC */}
            <Col lg={3} md={4} sm={6} xs={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={biharPolyLogo} alt="BIHAR POLYTECHNIC TEST SERIES" className="test-logo" />
                  </div>
                  <Button as={Link} to="/test-series" variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* JHARKHAND POLYTECHNIC */}
            <Col lg={3} md={4} sm={6} xs={6}>
              <Card className="test-card h-100">
                <Card.Body className="text-center">
                  <div className="test-logo-wrapper">
                    <img src={jharkhandPolyLogo} alt="JHARKHAND POLYTECHNIC TEST SERIES" className="test-logo" />
                  </div>
                  <Button as={Link} to="/test-series" variant="primary" className="test-btn">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-home-section py-5">
        <Container fluid>
          <h2 className="text-center mb-5 home-section-heading">TESTIMONIALS</h2>

          {/* LEET Exam Row */}
          <div className="testimonial-row mb-5">
            <h3 className="testimonial-category-title">LEET EXAM</h3>
            <div className="testimonial-scroll-container">
              <InfiniteScroller direction="left" speed={40}>
                {[
                  {
                    name: 'Aadit Kapoor',
                    rank: 'AIR 1 - IPU LEET 2025',
                    text: 'I, Aadit Kapoor, have secured AIR 1 in IPU LEET 2025 with the exceptional guidance and comprehensive study material provided by Mission Engineering.',
                    photo: AaditKapoorImg,
                  },
                  {
                    name: 'Spandan Choudhury',
                    rank: 'Rank 1 - DTU LEET 2024, Rank 2 - IPU LEET 2024',
                    text: 'I, Spandan Choudhury, have secured AIR 1 in DTU LEET 2024 and Rank 2 in IPU LEET 2024 with the dedicated support of Mission Engineering.',
                    photo: SpandanImg,
                  },
                  {
                    name: 'Simran Kumari',
                    rank: 'Rank 1(F) - IPU LEET 2020',
                    text: 'I, Simran Kumari, have secured AIR 1 (Female) in IPU LEET 2020. The focused guidance and regular tests at Mission Engineering helped me a lot.',
                    photo: SimranImg,
                  },
                  {
                    name: 'Kartik Dadhwal',
                    rank: 'Rank 1 - DTU LEET 2022, Rank 9 - IPU LEET 2022',
                    text: 'I, Kartik Dadhwal, have secured AIR 1 in DTU LEET 2022 and Rank 9 in IPU LEET 2022, thanks to the systematic coaching and test series.',
                    photo: KartikImg,
                  },
                  {
                    name: 'Md. Zahid',
                    rank: 'Rank 1 - Kerala LEET 2021, Rank 6 - IPU LEET 2021',
                    text: 'I, Md. Zahid, have secured AIR 1 in Kerala LEET and Rank 6 in IPU LEET 2021. The guidance from Mission Engineering was exceptional.',
                    photo: ZahidImg,
                  },
                  {
                    name: 'Md. Akmal',
                    rank: 'Rank 1 - IPU LEET 2022, Rank 2 - DTU LEET 2022',
                    text: 'I, Md. Akmal, have secured AIR 1 in IPU LEET 2022 and Rank 2 in DTU LEET 2022 with the help of Mission Engineerings expert faculty and study material.',
                    photo: AkmalImg,
                  },
                ].map((testimonial, idx) => (
                  <Card key={idx} className="testimonial-card">
                    <Card.Body>
                      <div className={`testimonial-avatar ${(testimonial.name === 'Spandan Choudhury' || testimonial.name === 'Md. Akmal' || testimonial.name === 'Simran Kumari' || testimonial.name === 'Kartik Dadhwal') ? 'white-bg' : ''}`}>
                        <img src={testimonial.photo} alt={testimonial.name} loading="eager" decoding="async" />
                      </div>
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                      <p className="testimonial-rank">{testimonial.rank}</p>
                      <p className="testimonial-text">{testimonial.text}</p>
                    </Card.Body>
                  </Card>
                ))}
              </InfiniteScroller>
            </div>
          </div>

          {/* Polytechnic Placement Row */}
          <div className="testimonial-row mb-5">
            <h3 className="testimonial-category-title">POLYTECHNIC CAMPUS PLACEMENT</h3>
            <div className="testimonial-scroll-container">
              <InfiniteScroller direction="right" speed={35}>
                {[
                  {
                    name: 'Prachi Soni',
                    rank: 'Final Selection in Maruti Suzuki India Ltd.',
                    text: 'I, Prachi Soni, have got selected in Maruti Suzuki India Ltd. with the excellent placement training and guidance provided by Mission Engineering.',
                    photo: PrachiSoniImg,
                  },
                  {
                    name: 'Prabhsimar Singh',
                    rank: 'Final Selection in Maruti Suzuki India Ltd.',
                    text: 'I, Prabhsimar Singh, have got selected in Maruti Suzuki India Ltd. The placement coaching at Mission Engineering was exceptional.',
                    photo: PrabhsimarSinghImg,
                  },
                  {
                    name: 'Pritam',
                    rank: 'Final Selection in Samsung & S&B India',
                    text: 'I, Pritam, have got selected in both Samsung Engineering and S&B India. Mission Engineering helped me achieve this dual placement.',
                    photo: PritamImg,
                  },
                  {
                    name: 'Raj Thakur',
                    rank: 'Final Selection in S&B India',
                    text: 'I, Raj Thakur, have got selected in S&B India with the excellent placement training and guidance provided by Mission Engineering.',
                    photo: RajThakurImg,
                  },
                  {
                    name: 'Suresh Gola',
                    rank: 'Final Selection in Maruti Suzuki India Ltd.',
                    text: 'I, Suresh Gola, have got selected in Maruti Suzuki India Ltd. The placement coaching at Mission Engineering was outstanding.',
                    photo: SureshGolaImg,
                  },
                  {
                    name: 'Jatin Verma',
                    rank: 'Final Selection in Maruti Suzuki India Ltd.',
                    text: 'I, Jatin Verma, have got selected in Maruti Suzuki India Ltd. through the comprehensive training program at Mission Engineering.',
                    photo: JatinVermaImg,
                  },
                  {
                    name: 'Sanjay Kumar Singh',
                    rank: 'Final Selection in Maruti Suzuki India Ltd.',
                    text: 'I, Sanjay Kumar Singh, have got selected in Maruti Suzuki India Ltd. The mock interviews and placement preparation were excellent.',
                    photo: SanjayImg,
                  },
                  {
                    name: 'Aakash',
                    rank: 'Final Selection in Top Company',
                    text: 'I, Aakash, have got selected in a top company with the comprehensive placement training provided by Mission Engineering.',
                    photo: AakashImg,
                  },
                  {
                    name: 'Nitin',
                    rank: 'Final Selection in Top Company',
                    text: 'I, Nitin, have got selected in a top company. The placement guidance at Mission Engineering was excellent.',
                    photo: NitinImg,
                  },
                ].map((testimonial, idx) => (
                  <Card key={idx} className="testimonial-card">
                    <Card.Body>
                      <div className={`testimonial-avatar ${testimonial.name === 'Pritam' ? 'white-bg' : ''}`}>
                        <img src={testimonial.photo} alt={testimonial.name} loading="eager" decoding="async" />
                      </div>
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                      <p className="testimonial-rank">{testimonial.rank}</p>
                      <p className="testimonial-text">{testimonial.text}</p>
                    </Card.Body>
                  </Card>
                ))}
              </InfiniteScroller>
            </div>
          </div>
        </Container>
      </section>

      {/* Success Keys Section */}
      <section className="success-keys-section py-5">
        <Container>
          <h1 className="text-center mb-4 success-keys-title fs-1">Our  Pillars of Excellence</h1>
          <Row className="g-4">
            {/* Key 1 */}
            <Col lg={3} md={6}>
              <Card className="success-card h-100 text-center">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <div className="icon-circle">
                      <FaUserTie size={28} className="success-icon icon-blue" />
                    </div>
                  </div>
                  <Card.Title>Expert &amp; Dedicated Faculty</Card.Title>
                  <ul className="text-start mt-3">
                    <li>Industry-Proven Teaching Methods</li>
                    <li>Strong Foundation &amp; Concept Clarity</li>
                    <li>Personalized Attention to Every Student</li>
                    <li>Regular Doubt-Clearing Sessions</li>
                    <li>Motivational &amp; Result-Driven Approach</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Key 2 */}
            <Col lg={3} md={6}>
              <Card className="success-card h-100 text-center">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <div className="icon-circle">
                      <FaLayerGroup size={28} className="success-icon icon-purple" />
                    </div>
                  </div>
                  <Card.Title>Premium Study Material &amp; Assessments</Card.Title>
                  <ul className="text-start mt-3">
                    <li>Thoroughly Researched &amp; Updated Content</li>
                    <li>Topic-wise Practice Question Banks</li>
                    <li>Previous Year Papers with Solutions</li>
                    <li>Regular Performance-Based Tests</li>
                    <li>Aligned with Latest Exam Patterns</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Key 3 */}
            <Col lg={3} md={6}>
              <Card className="success-card h-100 text-center">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <div className="icon-circle">
                      <FaGraduationCap size={28} className="success-icon icon-teal" />
                    </div>
                  </div>
                  <Card.Title>Student-First Learning Environment</Card.Title>
                  <ul className="text-start mt-3">
                    <li>Recorded Backup for Missed Classes</li>
                    <li>State-of-the-Art Infrastructure</li>
                    <li>Exam-Focused Daily Schedule</li>
                    <li>Dedicated Career Guidance Team</li>
                    <li>Live Progress Tracking &amp; Reports</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Key 4 */}
            <Col lg={3} md={6}>
              <Card className="success-card h-100 text-center">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    <div className="icon-circle">
                      <FaMedal size={28} className="success-icon icon-orange" />
                    </div>
                  </div>
                  <Card.Title>Placement &amp; Personality Training</Card.Title>
                  <ul className="text-start mt-3">
                    <li>Structured Written Test Preparation</li>
                    <li>GD &amp; Group Activity Practice</li>
                    <li>Mock Interviews with Industry Experts</li>
                    <li>Personality &amp; Communication Development</li>
                    <li>Campus Placement Drive Support</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <Container>
          <h2 className="text-center mb-5 home-section-heading">FREQUENTLY ASKED QUESTIONS</h2>
          <Accordion className="custom-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. When was Mission Engineering established?</Accordion.Header>
              <Accordion.Body>
                Mission Engineering was established on 26 March 2014. Since then, we have been helping thousands of students achieve success in LEET (B.Tech Lateral Entry), Polytechnic Entrance, Polytechnic Semester Exams, and Campus Placement preparation through quality education and expert guidance.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>2. Where is Mission Engineering located?</Accordion.Header>
              <Accordion.Body>
                Mission Engineering is conveniently located in front of Metro Gate No. 2, Uttam Nagar East Metro Station, New Delhi, just a 2-minute walk from Uttam Nagar Bus Terminal. Our prime location makes us easily accessible for students from Delhi, Noida, Gurugram, Ghaziabad, Faridabad, and nearby areas.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>3. Which courses are offered at Mission Engineering?</Accordion.Header>
              <Accordion.Body>
                <p>Mission Engineering offers comprehensive coaching for:</p>
                <ul>
                  <li>LEET (B.Tech Lateral Entry Entrance Exam)</li>
                  <li>Polytechnic Entrance Examination</li>
                  <li>Polytechnic Semester Subjects</li>
                  <li>Polytechnic Campus Placement Preparation</li>
                  <li>Live, Recorded &amp; Test Series Programs</li>
                </ul>
                <p>Our courses are designed to help students secure admission into top engineering colleges like DTU, NSUT, IGDTUW, DSEU, GGSIPU, and other reputed institutions.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>4. How can I contact Mission Engineering?</Accordion.Header>
              <Accordion.Body>
                <p>You can visit our institute directly or contact our admission team through phone or WhatsApp.</p>
                <p>Admission Helpline:</p>
                <ul>
                  <li>011 41 083 083</li>
                  <li>+91 96 439 439 14</li>
                  <li>+91 95 822 026 51</li>
                </ul>
                <p>Our team is always available to assist you with admissions, counselling, batch details, and course information.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>5. Is a demo class available before admission?</Accordion.Header>
              <Accordion.Body>
                Yes. We provide 2 FREE Demo Classes so students can experience our teaching methodology, faculty, classroom environment, and learning approach before taking admission.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>6. How can I take admission at Mission Engineering?</Accordion.Header>
              <Accordion.Body>
                <p>Admission is simple and hassle-free.</p>
                <p>You can:</p>
                <ul>
                  <li>Visit the institute for Offline Classroom Admission, or</li>
                  <li>Download the Mission Engineering App for Live Classes, Recorded Courses, Test Series, and Online Learning.</li>
                </ul>
                <p>For admission assistance, simply call or WhatsApp our admission team.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>7. Is online coaching available?</Accordion.Header>
              <Accordion.Body>
                <p>Yes. Mission Engineering provides Online LEET Coaching through the Mission Engineering App.</p>
                <p>Students can access:</p>
                <ul>
                  <li>Live Interactive Classes</li>
                  <li>Recorded Video Lectures</li>
                  <li>Online Test Series</li>
                  <li>Study Material</li>
                  <li>Doubt Support</li>
                </ul>
                <p>This allows students from anywhere in India to prepare effectively.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>8. Do you provide study material?</Accordion.Header>
              <Accordion.Body>
                <p>Yes. Every enrolled student receives comprehensive study resources, including:</p>
                <ul>
                  <li>Printed &amp; Digital Study Material</li>
                  <li>Practice Sheets</li>
                  <li>Assignments</li>
                  <li>Previous Year Questions (PYQs)</li>
                  <li>Mock Tests</li>
                  <li>Topic-wise Notes</li>
                </ul>
                <p>Our study material is regularly updated according to the latest exam pattern.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>9. Why is Mission Engineering considered one of the best LEET coaching institutes in Delhi?</Accordion.Header>
              <Accordion.Body>
                <p>Mission Engineering has earned the trust of thousands of students because of its result-oriented approach and experienced faculty.</p>
                <p>Our key strengths include:</p>
                <ul>
                  <li>Result-Oriented Teaching Methodology</li>
                  <li>Individual Attention to Every Student</li>
                  <li>Strong Concept Building</li>
                  <li>Regular Doubt-Solving Sessions</li>
                  <li>Performance Analysis &amp; Test Series</li>
                  <li>Motivational Guidance</li>
                  <li>Excellent Success Record in LEET &amp; Polytechnic Exams</li>
                </ul>
                <p>Our focus is not just on completing the syllabus but on helping every student achieve their dream engineering college.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>10. Are Previous Year Question Papers (PYQs) discussed in class?</Accordion.Header>
              <Accordion.Body>
                <p>Yes. We thoroughly solve and explain Previous Year Question Papers (PYQs) during classroom sessions.</p>
                <p>Students learn:</p>
                <ul>
                  <li>Latest Exam Pattern</li>
                  <li>Frequently Asked Questions</li>
                  <li>Important Topics</li>
                  <li>Time Management Techniques</li>
                  <li>Smart Problem-Solving Methods</li>
                </ul>
                <p>Practicing PYQs significantly improves exam confidence and accuracy.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10">
              <Accordion.Header>11. How is student performance monitored?</Accordion.Header>
              <Accordion.Body>
                <p>Mission Engineering continuously tracks each student's progress through:</p>
                <ul>
                  <li>Regular Class Tests</li>
                  <li>Weekly &amp; Monthly Assessments</li>
                  <li>Assignments</li>
                  <li>Attendance Monitoring</li>
                  <li>One-to-One Feedback Sessions</li>
                  <li>Personalized Improvement Plans</li>
                </ul>
                <p>Parents can also receive updates regarding their child's academic progress whenever required.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11">
              <Accordion.Header>12. Does Mission Engineering provide counselling and admission guidance after the results?</Accordion.Header>
              <Accordion.Body>
                <p>Yes.</p>
                <p>Our expert team provides complete post-result support, including:</p>
                <ul>
                  <li>Counselling Guidance</li>
                  <li>College Choice Filling</li>
                  <li>Document Verification</li>
                  <li>Seat Allotment Assistance</li>
                  <li>Admission Process Support</li>
                </ul>
                <p>We help students make informed decisions and secure admission into the best engineering colleges.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="12">
              <Accordion.Header>13. Can parents meet the faculty to discuss their child's progress?</Accordion.Header>
              <Accordion.Body>
                <p>Absolutely.</p>
                <p>Parents are always welcome to meet our faculty members or counselling team to discuss:</p>
                <ul>
                  <li>Academic Performance</li>
                  <li>Test Results</li>
                  <li>Attendance</li>
                  <li>Improvement Areas</li>
                  <li>Career Guidance</li>
                </ul>
                <p>We believe that parent involvement plays an important role in student success.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="13">
              <Accordion.Header>14. How can I stay updated about admissions, new batches, and important announcements?</Accordion.Header>
              <Accordion.Body>
                <p>To receive the latest updates regarding admissions, batch schedules, counselling, exam notifications, and results:</p>
                <ul>
                  <li>Subscribe to the Mission Engineering YouTube Channel</li>
                  <li>Join the Mission Engineering WhatsApp Channel</li>
                </ul>
                <p>You will receive timely updates, preparation tips, and important announcements.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="14">
              <Accordion.Header>15. Why should I join coaching instead of preparing through self-study?</Accordion.Header>
              <Accordion.Body>
                <p>While self-study is important, expert coaching provides the right direction, structured learning, and continuous guidance.</p>
                <p>At Mission Engineering, students benefit from:</p>
                <ul>
                  <li>Expert Faculty</li>
                  <li>Structured Learning Plan</li>
                  <li>Regular Mock Tests</li>
                  <li>Daily Doubt Solving</li>
                  <li>Previous Year Question Practice</li>
                  <li>Time Management Strategies</li>
                  <li>Performance Analysis</li>
                  <li>Motivation &amp; Career Guidance</li>
                </ul>
                <p>This systematic approach helps students prepare more efficiently and improves their chances of securing top ranks in LEET and Polytechnic entrance examinations.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

    </div>
  );
};

export default Home;
