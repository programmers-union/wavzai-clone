'use client';

import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

const images = [
  'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c2ab993b83f6b36b13f1ee_instragram-img-2.png',
  'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c2ab8bfc37b7878902020e_instragram-img-1.png',
  'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c2aba2185669759caa4504_instragram-img-3.png',
  'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c2abacd454a6102276a89a_instragram-img-4.png',
  'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c2abb6a9df52bd52fc7027_instragram-img-5.png'
];

export default function InstaGallerySection() {
  return (
    <section className="insta-gallery-section py-5">
      <div className="container">
        <div className="row g-3">
          {images.map((src, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg" key={index}>
              <div className="insta-gallery-wrapper position-relative overflow-hidden rounded shadow-sm">
                <Image
                  src={src}
                  alt={`gallery-${index + 1}`}
                  width={500}
                  height={500}
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
                <div className="insta-gallery-overlay d-flex align-items-center justify-content-center">
                  <FaInstagram className="text-white fs-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
