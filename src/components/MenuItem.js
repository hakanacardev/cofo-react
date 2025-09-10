import React from 'react';

const MenuItem = ({ name, nameEn, price, image }) => {
  return (
    <div className="menu-item">
      <div className="coffee_img">
        <img src={image} alt={name} />
      </div>
      <div className="coffee_box">
        <h3 className="types_text" style={{ padding: 0 }}>
          {name}
        </h3>
        <p className="looking_text" style={{ fontSize: '14px', color: '#fff', margin: '5px 0' }}>
          {nameEn}
        </p>
        <p className="looking_text">
          {price}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
