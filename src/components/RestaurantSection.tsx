"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const RestaurantSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState([false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger image animations with slight delays
          setTimeout(() => setImageVisible((prev) => [true, prev[1]]), 300);
          setTimeout(() => setImageVisible((prev) => [prev[0], true]), 600);
        } else {
          // Reset animations when out of view
          setIsVisible(false);
          setImageVisible([false, false]);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="restaurant-section" ref={sectionRef}>
        <div className="container">
          <h2 className={`restaurant-title ${isVisible ? "animate" : ""}`}>
            From Classic Favorites to Innovative
            <br />
            Creations, Have Something for Everyone.
          </h2>

          <p className={`restaurant-description ${isVisible ? "animate" : ""}`}>
            Inspired by the rhythm of the seasons, our dishes reflect
            creativity,
            <br />
            elegance, and the vibrant spirit of contemporary
          </p>

          <div className="restaurant-cards-container">
            <div className="row g-0">
              {/* First Image */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="restaurant-card">
                  <div className="restaurant-image-container">
                    <img
                      src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt="Restaurant Terrace"
                      className={`restaurant-image ${
                        imageVisible[0] ? "animate" : ""
                      }`}
                    />
                    <div
                      className={`restaurant-image-overlay ${
                        imageVisible[0] ? "animate" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* First Text Section */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 py-3">
                <div
                  className={`restaurant-text-section ${
                    isVisible ? "animate" : ""
                  }`}
                  style={{ transitionDelay: "0.4s" }}
                >
                  <Image
                    src="https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c4327a15bea5a85d4d8d32_favorites-card-icon.svg"
                    alt="Restaurant Icon"
                    width={24}
                    height={24}
                    className="restaurant-icon"
                  />
                  <h3 className="restaurant-section-title">Fresh Seafood</h3>
                </div>
              </div>

              {/* Second Image */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="restaurant-card">
                  <div className="restaurant-image-container">
                    <img
                      src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
                      alt="Beach Dining"
                      className={`restaurant-image ${
                        imageVisible[1] ? "animate" : ""
                      }`}
                    />
                    <div
                      className={`restaurant-image-overlay ${
                        imageVisible[1] ? "animate" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Second Text Section */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 py-3">
                <div
                  className={`restaurant-text-section ${
                    isVisible ? "animate" : ""
                  }`}
                  style={{ transitionDelay: "0.6s" }}
                >
                  <Image
                    src="https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c4327a15bea5a85d4d8d32_favorites-card-icon.svg"
                    alt="Restaurant Icon"
                    width={24}
                    height={24}
                    className="restaurant-icon"
                  />
                  <h3 className="restaurant-section-title">Various Test</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantSection;
