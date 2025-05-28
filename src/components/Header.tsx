"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSubmenu(!showSubmenu);
  };

  return (
    <header className={ ` header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="">
        <div className="nav-wrapper">
          {/* Logo */}
          <div className="logo-container">
            <Link href="/">
              <Image src="https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c00d8c1e9d19226f05db51_navbar-logo.svg" alt="WavZai Logo" width={100} height={100} className="logo" />
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="main-navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link href="/menu" className="nav-link">Menu</Link>
              </li>
              <li className="nav-item has-submenu">
                <Link href="#" className="nav-link" onClick={toggleSubmenu}>
                  Pages
                </Link>
                {showSubmenu && (
                  <ul className="submenu">
                    <li className="submenu-item">
                      <Link href="/services" className="submenu-link">Services</Link>
                    </li>
                    <li className="submenu-item">
                      <Link href="/gallery" className="submenu-link">Gallery</Link>
                    </li>
                    <li className="submenu-item">
                      <Link href="/testimonials" className="submenu-link">Testimonials</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link href="/blogs" className="nav-link">Blogs</Link>
              </li>
            </ul>
          </nav>
          
          {/* Book A Table Button */}
          <div className="action-button">
            <Link href="/booking" className="book-table-btn">
              <span>BOOK A TABLE</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;