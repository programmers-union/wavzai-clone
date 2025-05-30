import React from 'react';


const AppetizersSection = () => {
  const menuItems = [
    { id: 1, name: "APPETIZERS", color: "#007bff" },
    { id: 2, name: "BEVERAGES", color: "#2c3e50" },
    { id: 3, name: "RICE DISHES", color: "#2c3e50" },
    { id: 4, name: "FRIED DISHES", color: "#2c3e50" }
  ];

  return (
    <section className="appetizers-section py-5">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          {/* Large APPETIZERS Text */}
          <div className="col-12 col-lg-9">
            <div className="appetizers-section__main-title">
              APPETIZERS
            </div>
          </div>
          
          {/* Menu List */}
          <div className="col-12 col-lg-2 offset-lg-1">
            <div className="appetizers-section__menu-list">
              {menuItems.map((item) => (
                <div 
                  key={item.id} 
                  className="appetizers-section__menu-item d-flex align-items-center"
                >
                  <p
                    className="appetizers-section__menu-number"
                    style={{ color: item.color }}
                  >
                    {item.id}.
                  </p>
                  <p
                    className="appetizers-section__menu-name"
                    style={{ color: item.color }}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppetizersSection;