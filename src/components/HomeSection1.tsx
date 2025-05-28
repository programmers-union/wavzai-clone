'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HomeSection1: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="seafood-banner">
      <div className="">
        <div className="row">
          <div className="col-12">
            <div className={`banner-categories ${animate ? 'animate-right' : 'hidden-right'}`}>
              <span className="banner-category">Food</span>
              <span className="banner-category">Ocean</span>
              <span className="banner-category">Restaurant</span>
            </div>

            <div className={`banner-title-container ${animate ? 'animate-left' : 'hidden-left'}`}>
              <h1 className="banner-title">
                BEST SEA FOOD
                <span className="banner-subtitle">in Solomon Islands.</span>
              </h1>
            </div>

            <div className={`banner-action ${animate ? 'animate-left' : 'hidden-left'}`}>
              <Link href="/booking" className="banner-btn">
                <span>BOOK A TABLE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
