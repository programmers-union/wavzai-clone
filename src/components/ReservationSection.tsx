'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const plates = [
  'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c2a8893f6b8bbf2fbef223_reservation-img-2.png',
  'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c2af23ac83b00d6ae3eec8_reservation-img-3.png',
  'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c2a82a9e940b8e55fa3ed2_reservation-img-1.png',
  'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c2b0489e61df8d69fa0ad4_reservation-img-4.png',
  'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c2b056ce07e32a79cf865a_reservation-img-5.png',
  'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c2b0654c668c9f3cbef354_reservation-img-6.png',
];

export default function ReservationSection() {
  const [scrollDir, setScrollDir] = useState('down');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, []);

  return (
    <section className={`reservation-section py-5 text-center position-relative min-vh-100 d-flex align-items-center justify-content-center sectionWrapper`}>
      <div className="container-fluid">
        <div className="position-relative">
          {/* Central Text */}
          <div 
            className={`reservation-text position-relative ${isHovered ? 'mutedZoom' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1 className="reservation-title fw-bold mb-0">
              RESERVATION
            </h1>
            
            {/* Book Button */}
            {isHovered && (
              <button className={`btn btn-dark mt-3 position-absolute bookBtn`}>
                Book a Table
              </button>
            )}
          </div>

          {/* Plates positioned exactly like screenshot */}
          <div className="reservation-plates position-absolute top-50 start-50 translate-middle">
            {plates.map((src, i) => {
              // Easy to adjust plate configurations
              const plateConfigs = [
                { 
                  name: 'top-left', 
                  size: 180, 
                  top: -280, 
                  left: -320 
                },
                { 
                  name: 'top-center', 
                  size: 180, 
                  top: -200, 
                  left: 0 
                },
                { 
                  name: 'top-right', 
                  size: 180, 
                  top: -250, 
                  left: 380 
                },
                { 
                  name: 'bottom-left', 
                  size: 180, 
                  top: 220, 
                  left: -280 
                },
                { 
                  name: 'bottom-center', 
                  size: 180, 
                  top: 280, 
                  left: 80 
                },
                { 
                  name: 'right', 
                  size: 180, 
                  top: 80, 
                  left: 420 
                }
              ];
              
              const config = plateConfigs[i];
              
              return (
                <div 
                  key={i}
                  className={`reservation-plate position-absolute plate ${
                    scrollDir === 'down' ? 'rotateRight' : 'rotateLeft'
                  }`}
                  style={{
                    top: `${config.top}px`,
                    left: `${config.left}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Image 
                    src={src} 
                    alt={`plate-${config.name}`} 
                    width={config.size} 
                    height={config.size} 
                    className=" rounded-circle"
                    style={{objectFit: 'cover'}}
                    onError={(e) => {
                      console.log(`Failed to load image ${i + 1}:`, src);
                      e.currentTarget.src = `https://via.placeholder.com/${config.size}x${config.size}/000000/FFFFFF?text=Plate+${i + 1}`;
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}