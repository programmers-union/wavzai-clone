'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';


export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg  py-3 ">
      <div className="container  d-flex justify-content-between align-items-center">
        {/* Logo */}
          <div className="logo-container">
            <Link href="/">
              <Image src="https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c00d8c1e9d19226f05db51_navbar-logo.svg" alt="WavZai Logo" width={100} height={100} className="logo" />
            </Link>
          </div>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav */}
        <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center gap-lg-4">
            <li className="nav-item">
              <Link href="/" className="nav-link active text-info fw-semibold">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link fw-semibold">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/menu" className="nav-link fw-semibold">
                Menu
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link fw-semibold d-flex align-items-center"
              >
                Pages <BsChevronDown className="ms-1" size={12} />
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blogs" className="nav-link fw-semibold">
                Blogs
              </Link>
            </li>

            {/* Shopping icon with badge */}
            <li className="nav-item position-relative">
              <button className="btn icon-btn">
                <FaShoppingBag className="text-primary" />
               
              </button>
            </li>

            {/* Book a Table Button */}
          <div className="action-button">
            <Link href="/booking" className="book-table-btn">
              <span>BOOK A TABLE</span>
            </Link>
          </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
