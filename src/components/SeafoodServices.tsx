import Image from 'next/image';
import React from 'react';


const SeafoodServices = () => {
  const services = [
    {
      id: 1,
      icon: "https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c7d29b103dc07859f4f237_feature-icon-1.svg",
      title: "Fresh Seafood",
      description: "Where the freshest seafood meets exceptional flavors in a warm and inviting the good atmosphere."
    },
    {
      id: 2,
      icon: "https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c7d3d3ebcb3b2126e93b3e_feature-icon-2.svg",
      title: "Oyster Bar",
      description: "Dedicated to serving high-quality, sustainably sourced seafood, expertly prepared to delight every palate."
    },
    {
      id: 3,
      icon: "https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c7d3dc093433b8b9e6a982_feature-icon-3.svg",
      title: "Poke & Sashimi",
      description: "From sizzling grilled lobster and crispy fish and chips to rich seafood pastas and refreshing oysters."
    },
    {
      id: 4,
      icon: "https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c7d3e5a15e080c1754ffbe_feature-icon-4.svg",
      title: "Grilled dishes",
      description: "Join us today and indulge in the finest seafood, paired with the handcrafted cocktails and delectable desserts."
    }
  ];

  return (
    <section className="seafood-services py-5">
      <div className="container">
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-3 border-start border-end">
              <div className="seafood-services__card h-100 p-4 text-center">
                <div className="seafood-services__icon-wrapper mb-4">
                <img
                 src={service.icon} alt="" />
                </div>
                <h3 className="seafood-services__title mb-3">
                  {service.title}
                </h3>
                <p className="seafood-services__description mb-0">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeafoodServices;