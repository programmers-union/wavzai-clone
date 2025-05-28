'use client';

import React, { useEffect, useRef } from 'react';

const ScrollZoomImage = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
    
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !sectionRef.current) return;

      const section = sectionRef.current;
      const image = imageRef.current;
      
      // Get section position relative to viewport
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the section
      // When section top is at bottom of viewport, progress = 0
      // When section bottom is at top of viewport, progress = 1
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + sectionHeight)
      ));
      
      // Scale from 0.5 (small) to 1 (full page) based on scroll progress
      const scale = 0.5 + (scrollProgress * 0.5);
      
      // Apply transform
      image.style.transform = `scale(${scale})`;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="zoom-section"
      style={{
        height: '200vh',
        position: 'relative'
      }}
    >
      <div 
        className="sticky-wrapper"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <img
          ref={imageRef}
          src="/banner-img.jpg"
          className="zoom-image"
          alt="Seafood"
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            transform: 'scale(0.5)', // Start small
            transition: 'transform 0.1s ease-out',
            transformOrigin: 'center center'
          }}
        />
      </div>
    </section>
  );
};

export default ScrollZoomImage;