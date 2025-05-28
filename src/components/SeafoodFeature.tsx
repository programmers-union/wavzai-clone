'use client';
import React, { useState } from 'react';

interface ContentItem {
  title: string;
  text: string;
  img: string;
}

const contentMap: Record<string, ContentItem> = {
  'SHRIMPS': {
    title: 'Shrimps',
    text: 'Juicy shrimps grilled to perfection and served with garlic butter sauce.',
    img: 'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c5386ba7ec1ad8ed20b376_food-item-img-2.png',
  },
  'FRESH FISH': {
    title: 'Fresh Fish',
    text: 'Freshly caught fish with lemon herb seasoning, pan-seared for flavor.',
    img: 'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c5386ba7ec1ad8ed20b376_food-item-img-2.png',
  },
  'LOBSTER': {
    title: 'Lobster',
    text: 'Grilled lobster tails with rich, creamy Cajun sauce and lemon zest.',
    img: 'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c538e50eb6d6a08c77eda4_food-item-img-3.png',
  },
  'RED CRAB': {
    title: 'Red Crab',
    text: 'Red crab with signature spice rub and golden buttery crust.',
    img: 'https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c53944cd96a68be6fda053_food-item-img-4.png',
  }
};

const rows = Object.keys(contentMap);

export default function SeafoodShowcase() {
  const [hoveredRow, setHoveredRow] = useState<string>('RED CRAB');
  const currentContent = hoveredRow ? contentMap[hoveredRow as keyof typeof contentMap] : null;

  return (
    <div className="carousel-section">
      <div className="text-carousel">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`carousel-row ${hoveredRow === row ? 'active' : ''}`}
            onMouseEnter={() => setHoveredRow(row)}
          >
            {Array.from({ length: 10 }).map((_, j) => (
              <span key={j} className="carousel-text">{row}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="sticky-card">
        {currentContent && (
          <div className="card-content">
            <small className="text-light">[{hoveredRow}]</small>
            <h2 className="mt-2">{currentContent.title}</h2>
            <p className="mt-2">{currentContent.text}</p>
            <div className="image-container mt-3">
              <img
                src={currentContent.img}
                alt={currentContent.title}
                className="img-fluid"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
