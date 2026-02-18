import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';
import { images } from '../../data';

const AaditKapoorImg = images.leetToppers.aaditKapoor;
const SpandanImg = images.leetToppers.spandan;
const SimranImg = images.leetToppers.simran;
const KartikImg = images.leetToppers.kartik;
const ZahidImg = images.leetToppers.zahid;
const AkmalImg = images.leetToppers.akmal;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Aadit Kapoor',
      rank: 'AIR 1 - IPU LEET 2025',
      text: 'I, Aadit Kapoor, have secured AIR 1 in IPU LEET 2025 with the exceptional guidance and comprehensive study material provided by Mission Engineering.',
      rating: 5,
      photo: AaditKapoorImg,
    },
    {
      id: 2,
      name: 'Spandan Choudhury',
      rank: 'Rank 1 - DTU LEET 2024, Rank 2 - IPU LEET 2024',
      text: 'I, Spandan Choudhury, have secured AIR 1 in DTU LEET 2024 and Rank 2 in IPU LEET 2024 with the dedicated support of Mission Engineering.',
      rating: 5,
      photo: SpandanImg,
    },
    {
      id: 3,
      name: 'Simran Kumari',
      rank: 'Rank 1(F) - IPU LEET 2020',
      text: 'I, Simran Kumari, have secured AIR 1 (Female) in IPU LEET 2020. The focused guidance and regular tests at Mission Engineering helped me a lot.',
      rating: 5,
      photo: SimranImg,
    },
    {
      id: 4,
      name: 'Kartik Dadhwal',
      rank: 'Rank 1 - DTU LEET 2022, Rank 9 - IPU LEET 2022',
      text: 'I, Kartik Dadhwal, have secured AIR 1 in DTU LEET 2022 and Rank 9 in IPU LEET 2022, thanks to the systematic coaching and test series.',
      rating: 5,
      photo: KartikImg,
    },
    {
      id: 5,
      name: 'Md. Zahid',
      rank: 'Rank 1 - Kerala LEET 2021, Rank 6 - IPU LEET 2021',
      text: 'I, Md. Zahid, have secured AIR 1 in Kerala LEET and Rank 6 in IPU LEET 2021. The guidance from Mission Engineering was exceptional.',
      rating: 5,
      photo: ZahidImg,
    },
    {
      id: 6,
      name: 'Md. Akmal',
      rank: 'Rank 1 - IPU LEET 2022, Rank 2 - DTU LEET 2022',
      text: 'I, Md. Akmal, have secured AIR 1 in IPU LEET 2022 and Rank 2 in DTU LEET 2022 with the help of Mission Engineering expert faculty and study material.',
      rating: 5,
      photo: AkmalImg,
    },
  ];

  // Create duplicated array for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonials-page">
      <section className="page-header">
        <Container>
          <h1>LEET TOPPERS</h1>
          <p className="header-subtitle">Our Success Stories</p>
        </Container>
      </section>

      <section className="testimonials-content py-5">
        <Container fluid>
          <h2 className="text-center mb-5">MISSION ENGINEERING TOPPERS</h2>
          
          <div className="testimonial-scroll-container">
            <div className="testimonial-scroll-content">
              {duplicatedTestimonials.map((testimonial, idx) => (
                <Card key={idx} className="testimonial-card">
                  <Card.Body>
                    <div className={`testimonial-avatar ${(testimonial.name === 'Spandan Choudhury' || testimonial.name === 'Md. Akmal' || testimonial.name === 'Simran Kumari' || testimonial.name==='Kartik Dadhwal') ? 'white-bg' : ''}`}>
                      <img src={testimonial.photo} alt={testimonial.name} />
                    </div>
                    <h5 className="testimonial-name">{testimonial.name}</h5>
                    <p className="testimonial-rank">{testimonial.rank}</p>
                    <div className="rating mb-3">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <FaStar key={index} className="star-icon" />
                      ))}
                    </div>
                    <Card.Text className="testimonial-text">
                      "{testimonial.text}"
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Testimonials;
