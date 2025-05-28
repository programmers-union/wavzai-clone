'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, 800); // Start counter after other animations

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return <>{count}{suffix}</>;
};

const SeafoodRestaurant: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="seafood-hero">
      <div className="container-fluid">
        <div className="content-wrapper mx-4">
          <h1 className={`hero-title ${animate ? 'animate-up' : 'hidden-up'}`}>
            Experience The Epitome Of Luxury And Convenience Sea Food
            Restaurant.
          </h1>
        </div>
        <div className="row min-vh-100">
          {/* Left Content Section */}
          <div className="col-lg-6 col-md-12 hero-content">
            <div className="content-wrapper">
              <p className={`hero-description ${animate ? 'animate-left' : 'hidden-left'}`}>
                Find your sanctuary amidst the chaos of travel with our curated
                collection of hotels & accommodations. We understand that the
                journey is just as important as the destination, which is why
                we've gone to great
              </p>

              <div className={`banner-action ${animate ? 'animate-left' : 'hidden-left'}`}>
                <Link href="/booking" className="banner-btn">
                  <span>MORE ABOUT US</span>
                </Link>
              </div>

              {/* Stats Section */}
              <div className={`stats-container ${animate ? 'animate-left' : 'hidden-left'}`}>
                <div className="row">
                  <div className="col-6">
                    <div className="stat-item">
                      <div className="stat-number">
                        <AnimatedCounter end={80} suffix="+" />
                      </div>
                      <div className="stat-text">
                        <div>Seasonal Delights to Enjoy</div>
                        <div>Fresh flavors</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="stat-item">
                      <div className="stat-number">
                        <AnimatedCounter end={120} suffix="+" />
                      </div>
                      <div className="stat-text">
                        <div>Healthy Choices with</div>
                        <div>Nutritious options</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="stat-item">
                      <div className="stat-number">
                        <AnimatedCounter end={28} />
                      </div>
                      <div className="stat-text">
                        <div>Years of Exceptional</div>
                        <div>Dining Experiences</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="stat-item">
                      <div className="stat-number">
                        <AnimatedCounter end={96} suffix="%" />
                      </div>
                      <div className="stat-text">
                        <div>Outstanding Customers</div>
                        <div>Reviews</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6 col-md-12 hero-image">
            <div className={`image-wrapper ${animate ? 'animate-image' : ''}`}>
              <div className={`image-overlay ${animate ? 'animate-overlay' : ''}`}></div>
              <img
                src="https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c3d17461264338b20a1db7_about-us-img.png"
                alt="Luxury seafood restaurant dining setup with turquoise cushions and ocean view"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeafoodRestaurant;