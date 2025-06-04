'use client'
import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroSectionImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const scrollSpeed = 0.5;
      
      if (heroSectionImageRef.current) {
        heroSectionImageRef.current.style.transform = `translateY(${scrolled * scrollSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero-section" ref={heroSectionRef}>
      <div 
        className="hero-section-image"
        ref={heroSectionImageRef}
      />
      <div className="hero-section-overlay" />
      
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="hero-section-content">
              <h1 className="hero-section-title">
                A Contemporary Blend of<br />
                Culinary Traditions Inspired<br />
                by the Nordics.
              </h1>
              <a href="#booking" className="hero-section-button">
                Book a Table
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Text Carousel */}
      <div className="text-carousel-wrapper">
        <div className="text-carousel-category ">
          <div className="text-carousel-content">
            <span className="carousel-text-category">BEST SEA FOOD BASED IN SOLOMON ISLAND</span>
            <span className="carousel-separator">•</span>
            <span className="carousel-text-category">BEST SEA FOOD BASED IN SOLOMON ISLAND</span>
            <span className="carousel-separator">•</span>
            <span className="carousel-text-category">BEST SEA FOOD BASED IN SOLOMON ISLAND</span>
            <span className="carousel-separator">•</span>
            <span className="carousel-text-category">BEST SEA FOOD BASED IN SOLOMON ISLAND</span>
            <span className="carousel-separator">•</span>
            <span className="carousel-text-category">BEST SEA FOOD BASED IN SOLOMON ISLAND</span>
            <span className="carousel-separator">•</span>
            <span className="carousel-text-category">BEST SEA FOOD BASED IN SOLOMON ISLAND</span>
            <span className="carousel-separator">•</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;