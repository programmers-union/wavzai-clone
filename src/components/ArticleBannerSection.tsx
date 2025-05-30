'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ArticleBannerSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <section className="article-banner-section py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-10">
            <h2 className="article-banner-section-title mb-0">
              Read Our Articles<br />Written By Professional.
            </h2>
          </div>
            <div className={`banner-action ${animate ? 'animate-left' : 'hidden-left'} col-md-2`}>
              <Link href="/booking" className="banner-btn">
                <span>BOOK A TABLE</span>
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleBannerSection;
