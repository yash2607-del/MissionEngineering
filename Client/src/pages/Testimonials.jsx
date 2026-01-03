import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Student Name 1',
      text: 'Mission Engineering provided me with excellent guidance and support throughout my preparation. The faculty members are highly experienced and always ready to help.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Student Name 2',
      text: 'The study material and test series were very helpful. I was able to clear my entrance exam with a good rank thanks to Mission Engineering.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Student Name 3',
      text: 'The infrastructure and learning environment at Mission Engineering is outstanding. The personalized attention helped me improve my performance significantly.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Student Name 4',
      text: 'I highly recommend Mission Engineering for anyone preparing for LEET or Polytechnic entrance exams. The coaching quality is top-notch.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Student Name 5',
      text: 'The mock interviews and personality development sessions were very useful for my placement preparation. Thank you Mission Engineering!',
      rating: 5,
    },
    {
      id: 6,
      name: 'Student Name 6',
      text: 'Excellent coaching institute with dedicated faculty and comprehensive study material. The regular tests helped me track my progress.',
      rating: 5,
    },
  ];

  return (
    <div className="testimonials-page">
      <section className="page-header">
        <Container>
          <h1>Testimonials</h1>
        </Container>
      </section>

      <section className="testimonials-content py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Students Say</h2>
          <Row className="g-4">
            {testimonials.map((testimonial) => (
              <Col lg={4} md={6} key={testimonial.id}>
                <Card className="testimonial-card h-100">
                  <Card.Body>
                    <div className="rating mb-3">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <FaStar key={index} className="star-icon" />
                      ))}
                    </div>
                    <Card.Text className="testimonial-text">
                      "{testimonial.text}"
                    </Card.Text>
                    <div className="testimonial-author">
                      <h5>{testimonial.name}</h5>
                    </div>
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

export default Testimonials;
