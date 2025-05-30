'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SeafoodMenu: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  

  const menuItems = [
    {
      id: 1,
      name: 'Bacon-Wrapped Scallops',
      description: 'Tender scallops wrapped in crispy bacon with a tangy glaze.',
      price: '$80.00',
      image: 'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c7c6961d6cdf2551cc6a97_all-menu-img-1.png'
    },
    {
      id: 2,
      name: 'Spicy Tuna Crisps',
      description: 'Spicy tuna tartare on crispy wontons with sriracha mayo.',
      price: '$50.00',
      image: 'https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c7dce719ac10cb271f50a7_products-scroll-img-6.png'
    },
    {
      id: 3,
      name: 'Lobster Arancini',
      description: 'Crispy risotto balls stuffed with lobster and cheese.',
      price: '$45.00',
      image: 'https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c7dcc7bd4b8853a7ccfece_products-scroll-img-5.png'
    },
    {
      id: 4,
      name: 'Honey-Glazed Grilled Salmon',
      description: 'Crispy Italian-style risotto balls stuffed with lobster and cheese.',
      price: '$40.00',
      image: 'https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c7dcb21d6bab08bf7f46d0_products-scroll-img-4.png'
    },
    {
      id: 5,
      name: 'Crab-Stuffed Mushrooms',
      description: 'Buttery, flaky sea bass glazed with a savory miso sauce.',
      price: '$60.00',
      image: 'https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c7dc89f921c60d8708b903_products-scroll-img-3.png'
    }
  ];
  const [activeImage, setActiveImage] = useState(menuItems[0].image);

  return (
    <div className="seafood-menu">
      <div className="container-fluid">
        <div className="row">
          {/* Menu Items Section */}
          <div className="col-lg-7 col-md-6 seafood-menu__content">
            <div className="seafood-menu__items">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="seafood-menu__item"
                  onMouseEnter={() => setActiveImage(item.image)}
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="seafood-menu__item-content">
                      <h3 className="seafood-menu__item-title">{item.name}</h3>
                      <p className="seafood-menu__item-description">{item.description}</p>
                    </div>
                    <div className="seafood-menu__price">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`banner-action ${animate ? 'animate-left' : 'hidden-left'}`}>
              <Link href="/booking" className="banner-btn">
                <span>BOOK A TABLE</span>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-5 col-md-6 d-none d-md-block seafood-menu__image-section">
            <div className="seafood-menu__image-container">
              <Image
                src={activeImage}
                alt="Seafood dish"
                fill
                className="seafood-menu__image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeafoodMenu;