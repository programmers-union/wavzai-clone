'use client'
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  shouldStart: boolean;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '', shouldStart }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasStarted) return;

    const timer = setTimeout(() => {
      setHasStarted(true);
    }, 300); // Start counter shortly after element is visible

    return () => clearTimeout(timer);
  }, [shouldStart, hasStarted]);

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

  // Reset counter when shouldStart becomes false (for re-triggering)
  useEffect(() => {
    if (!shouldStart && hasStarted) {
      setCount(0);
      setHasStarted(false);
    }
  }, [shouldStart, hasStarted]);

  return <>{count}{suffix}</>;
};

// Custom hook for intersection observer
const useIntersectionObserver = (threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isIntersecting] as const;
};

const SeafoodRestaurant: React.FC = () => {
  // Separate intersection observers for different sections
  const [titleRef, titleIntersecting] = useIntersectionObserver(0.3);
  const [contentRef, contentIntersecting] = useIntersectionObserver(0.2);
  const [statsRef, statsIntersecting] = useIntersectionObserver(0.2);
  const [imageRef, imageIntersecting] = useIntersectionObserver(0.2);

  return (
    <section className="seafood-hero">
      <div className="container-fluid">
        <div className="content-wrapper mx-4">
          <div ref={titleRef}>
            <h1 className={`hero-title ${titleIntersecting ? 'animate-up' : 'hidden-up'}`}>
              Experience The Epitome Of Luxury And Convenience Sea Food
              Restaurant.
            </h1>
          </div>
        </div>
        <div className="row min-vh-100">
          {/* Left Content Section */}
          <div className="col-lg-6 col-md-12 hero-content">
            <div className="content-wrapper">
              <div ref={contentRef}>
                <p className={`hero-description ${contentIntersecting ? 'animate-left' : 'hidden-left'}`}>
                  Find your sanctuary amidst the chaos of travel with our curated
                  collection of hotels & accommodations. We understand that the
                  journey is just as important as the destination, which is why
                  we've gone to great
                </p>

                <div className={`banner-action ${contentIntersecting ? 'animate-left' : 'hidden-left'}`}>
                  <Link href="/booking" className="banner-btn">
                    <span>MORE ABOUT US</span>
                  </Link>
                </div>
              </div>

              {/* Stats Section */}
              <div ref={statsRef} className={`stats-container ${statsIntersecting ? 'animate-left' : 'hidden-left'}`}>
                <div className="row">
                  <div className="col-6">
                    <div className="stat-item">
                      <div className="stat-number">
                        <AnimatedCounter end={80} suffix="+" shouldStart={statsIntersecting} />
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
                        <AnimatedCounter end={120} suffix="+" shouldStart={statsIntersecting} />
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
                        <AnimatedCounter end={28} shouldStart={statsIntersecting} />
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
                        <AnimatedCounter end={96} suffix="%" shouldStart={statsIntersecting} />
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
            <div ref={imageRef} className={`image-wrapper ${imageIntersecting ? 'animate-image' : ''}`}>
              <div className={`image-overlay ${imageIntersecting ? 'animate-overlay' : ''}`}></div>
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