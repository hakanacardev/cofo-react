import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="header_section header_bg">
      <div className="container">
        <Navbar expand="lg" className="navbar-light">
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img src="/images/logo.jpeg" width="150" alt="Etçi Kısmet Logo" />
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
