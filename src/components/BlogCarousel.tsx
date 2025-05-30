'use client';
import { useState } from 'react';
import Image from 'next/image';


const blogData = [
  {
    img: 'https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c676f17854ed0846b0c85c_blogs-big-img-1.png',
    category: 'Restuarant',
    date: 'September 5, 2024',
    title: 'The Art of Flavor: How We Craft Each Plate with Care.',
  },
  {
    img: 'https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c2fb9e1bdaee086acc6318_blogs-post-single-img-2.png',
    category: 'Business',
    date: 'August 20, 2024',
    title: 'Why Fresh Ingredients Make All the Difference in Every Bite.',
  },
  {
    img: 'https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c677247854ed0846b0ef86_blogs-big-img-3.png',
    category: 'Sea Food',
    date: 'August 1, 2024',
    title: 'A Taste of Tradition: The Story Behind Our Signature Dish.',
  },
  {
    img: 'https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c6772edae3615f0093c742_blogs-big-img-4.png',
    category: 'Sea Food',
    date: 'July 18, 2024',
    title: 'From Farm to Fork: Our Commitment to Local Sourcing.',
  },
  {
    img: 'https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c6773a4fd1aa1fffa72b6f_blogs-big-img-5.png',
    category: 'Culture',
    date: 'July 3, 2024',
    title: 'Seafood Traditions Around the World.',
  },
  {
    img: 'https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c67745c0fd3306475e8df6_blogs-big-img-6.png',
    category: 'Lifestyle',
    date: 'June 12, 2024',
    title: 'Dining With a View: Oceanfront Eateries.',
  },
];

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogData.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === blogData.length - 1 ? 0 : prevIndex + 1));
  };

  const getImage = (index: number) => blogData[(index + blogData.length) % blogData.length];

  return (
    <div className="blogcarousel-section py-5 text-center position-relative">
      <div className="container position-relative">
        <div className="row justify-content-center align-items-end blogcarousel-image-row">
          {[currentIndex - 1, currentIndex, currentIndex + 1].map((i, idx) => {
            const blog = getImage(i);
            const isActive = i % blogData.length === currentIndex;
            return (
              <div
                key={idx}
                className={`col-10 col-sm-8 col-md-4 blogcarousel-image-container ${isActive ? 'active' : 'muted'}`}
              >
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="img-fluid blogcarousel-image"
                />
              </div>
            );
          })}
        </div>

        {/* Overlapping Card */}
        <div className="blogcarousel-card bg-white shadow-lg p-4">
          <div className="text-muted small mb-1">
            ({blogData[currentIndex].category}) • {blogData[currentIndex].date}
          </div>
          <h5 className="blogcarousel-title">
            {blogData[currentIndex].title}
          </h5>
          <div className="mt-3 text-primary fw-bold">
            READ FULL BLOG <span>&#8594;</span>
          </div>
        </div>

        {/* Arrows */}
        <div className="blogcarousel-arrows d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-secondary rounded-circle arrow-btn" onClick={prev}>
            &#8592;
          </button>
          <button className="btn btn-outline-secondary rounded-circle arrow-btn" onClick={next}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
