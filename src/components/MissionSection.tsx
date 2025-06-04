'use client';
import React, { useEffect, useRef, useState } from 'react';

interface MissionSectionProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  containerSize?: string;
  customClassName?: string;
  enableImageHover?: boolean;
}

const MissionSection: React.FC<MissionSectionProps> = ({ 
  title = "Our Mission",
  description = "Our mission is to create innovative architectural solutions that seamlessly merge functionality and sustainability, an emblem of French culinary finesse, marries tradition with modernity. Inspired by the rhythm of the seasons",
  image = "/api/placeholder/800/400",
  imageAlt = "Mission representative image",
  containerSize = "lg-8 md-10",
  customClassName = "",
  enableImageHover = true
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`mission-section ${customClassName} ${animate ? 'animate' : ''}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mission-title animated-title">{title}</h2>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className={`col-${containerSize} col-12`}>
            <div className="mission-image-wrapper">
              <div className="mission-slide-overlay" />
              <div className="mission-image-container animated-image-container">
                <img 
                  src={image} 
                  alt={imageAlt} 
                  className={`mission-image ${enableImageHover ? 'mission-image-hover' : ''}`}
                />
              </div>
            </div>
            <p className="mission-text animated-text">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
