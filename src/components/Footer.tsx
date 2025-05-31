'use client';

import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="footer-section bg-white text-dark pt-5">
      <div className="container">
        {/* Top section */}
        <div className="row text-center text-md-start justify-content-between mb-4">
          <div className="col-12 col-md-6 mb-3">
            <h2 className="footer-section-heading fw-semibold mb-0">
              Book a Table to Enjoy <br /> Our Sea Food Horizon.
            </h2>
          </div>
          <div className="col-6 col-md-3 d-flex align-items-start gap-3">
            <span className="footer-section-icon bg-light rounded-circle p-2">
              <FaMapMarkerAlt size={18} className="text-info" />
            </span>
            <div>
              <strong>Our Address:</strong><br />
              256th North Neusvill Avenue, 19302, USA
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex align-items-start gap-3">
            <span className="footer-section-icon bg-light rounded-circle p-2">
              <FaPhone size={18} className="text-info" />
            </span>
            <div>
              <strong>Contact</strong><br />
              Phone: 0-800-525-00-250 <br />
              Gmail: Info.demo@gmail.com
            </div>
          </div>
        </div>

        <hr />

        {/* Bottom section */}
        <div className="row py-4">
          {/* Brand */}
          <div className="col-md-3 mb-4 mb-md-0">
          <div className="logo-container">
            <Link href="/">
              <Image src="https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c00d8c1e9d19226f05db51_navbar-logo.svg" alt="WavZai Logo" width={100} height={100} className="logo" />
            </Link>
          </div>
            <p className="small text-muted">
              Visit us today for an unforgettable dining experience, or place your order online for a taste of the sea wherever you are.
            </p>
            <div className="fw-semibold fs-6">
              Ig. &nbsp;-&nbsp; Be. &nbsp;-&nbsp; Tw. &nbsp;-&nbsp; In.
            </div>
          </div>

          {/* Pages */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Pages</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Menu</li>
              <li>Blogs</li>
              <li>Blog Single</li>
              <li>Book Reservation</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Utility Pages</h6>
            <ul className="list-unstyled">
              <li>404 Not Found</li>
              <li>Style Guide</li>
              <li>License</li>
              <li>Changelog</li>
              <li>Password Protected</li>
            </ul>
          </div>

          {/* Opening Time */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Opening Time</h6>
            <ul className="list-unstyled">
              <li>Mon: CLOSED</li>
              <li>Tue to Thu: 11 AM – 10 PM</li>
              <li>Fri: Closed</li>
              <li>Sat to Sun: 12 PM – 7 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
