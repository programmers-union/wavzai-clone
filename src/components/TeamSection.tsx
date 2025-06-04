'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  alt: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ members }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`team-section py-5 ${animate ? 'animate' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="pov">
          <div className="row" style={{ width: '70%' }}>
            {members.map((member, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="position-relative overflow-hidden team-card">
                  <div className="team-slide-overlay" />
                  <div className="zoom-image">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      width={600}
                      height={600}
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="pt-3 text-center">
                    <h5 className="team-name">{member.name}</h5>
                    <p className="team-role text-primary fw-bold">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
