import React from 'react';
import MenuItem from './MenuItem';

const MenuCategory = ({ title, items }) => {
  return (
    <div className="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="coffee_taital">{title}</h1>
          </div>
        </div>
      </div>
      
      <div className="coffee_section_2">
        <div className="container-fluid">
          <div className="row">
            {items.map((item, index) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <MenuItem
                  name={item.name}
                  nameEn={item.nameEn}
                  price={item.price}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
