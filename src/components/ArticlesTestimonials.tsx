"use client"
import React, { useEffect } from 'react';


const testimonials = [
  {
    stars: 5,
    text: "The ambiance is perfect, and the dishes are truly a work of art. This is my go-to spot for date nights and special occasions. Highly recommend!",
    name: "DARRELL STEWARD",
    location: "Houston, TX",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    stars: 5,
    text: "Absolutely amazing! The food was fresh, flavorful, and beautifully presented. The service was top-notch—friendly and attentive. I can't wait to come back.",
    name: "MARVIN MCKINNEY",
    location: "San Francisco, CA",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

const TestimonialSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.testimonial-section') as HTMLElement | null;
      if (section) {
        const scrollY = window.scrollY;
        section.style.backgroundPosition = `center ${scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="testimonial-section d-flex align-items-center">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="testimonial-section-title text-center">
              <h2>Read Our Articles <br />Written By Professional.</h2>
              <div className="testimonial-section-rating float-end text-white">
                <span className="me-2">★ AVERAGE 4.7</span>
                <span>420K CUSTOMERS</span>
              </div>
            </div>

            <div className="testimonial-section-card d-flex mt-5">
              {testimonials.map((t, index) => (
                <div className="testimonial-section-box p-4" key={index}>
                  <div className="testimonial-section-stars text-primary mb-2">
                    {'★'.repeat(t.stars)}
                  </div>
                  <p className="testimonial-section-text">
                    {t.text}
                  </p>
                  <div className="testimonial-section-user d-flex align-items-center mt-4">
                    <img src={t.image} alt={t.name} className="rounded-circle me-3" width="50" height="50" />
                    <div>
                      <h6 className="mb-0 fw-bold">{t.name}</h6>
                      <small>{t.location}</small>
                    </div>
                  </div>
                  <div className="testimonial-section-quote">❞</div>
                </div>
              ))}
            </div>

            <div className="testimonial-section-nav d-flex justify-content-between px-4">
              <span className="testimonial-section-arrow">←</span>
              <span className="testimonial-section-arrow">→</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
