import React from 'react';

const LogoCarousel = () => {
  const logos = [
    { id: 1, name: 'Logo 1', text: 'logo' },
    { id: 2, name: 'Logo 2', text: 'logo-ipsum' },
    { id: 3, name: 'Logo 3', text: 'logoipsum' },
    { id: 4, name: 'Logo 4', text: 'logoipsum' },
    { id: 5, name: 'Logo 5', text: 'IPSUM' },
    { id: 6, name: 'Logo 6', text: 'Logoipsum' },
    { id: 7, name: 'Logo 7', text: 'LO' },
  ];

  return (
    <>

      <section className="section-logo-carousel">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-logo-wrapper">
                <div className="section-logo-track">
                  {/* First set of logos */}
                  {logos.map((logo, index) => (
                    <div key={`first-${logo.id}`} className="section-logo-item">
                      <div className="section-logo-content">
                        {index === 0 && <div className="section-logo-icon">LO</div>}
                        {index === 1 && <div className="section-logo-globe"></div>}
                        {index === 2 && <div className="section-logo-icon">🔷</div>}
                        {index === 3 && <div className="section-logo-diamond"></div>}
                        {index === 4 && <div className="section-logo-icon">IP</div>}
                        {index === 5 && <div className="section-logo-shield"></div>}
                        {index === 6 && <div className="section-logo-icon">LO</div>}
                        <div className="section-logo-text">{logo.text}</div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {logos.map((logo, index) => (
                    <div key={`second-${logo.id}`} className="section-logo-item">
                      <div className="section-logo-content">
                        {index === 0 && <div className="section-logo-icon">LO</div>}
                        {index === 1 && <div className="section-logo-globe"></div>}
                        {index === 2 && <div className="section-logo-icon">🔷</div>}
                        {index === 3 && <div className="section-logo-diamond"></div>}
                        {index === 4 && <div className="section-logo-icon">IP</div>}
                        {index === 5 && <div className="section-logo-shield"></div>}
                        {index === 6 && <div className="section-logo-icon">LO</div>}
                        <div className="section-logo-text">{logo.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoCarousel;