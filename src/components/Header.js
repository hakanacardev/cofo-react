import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header_section header_bg">
      <div className="container">
        <Navbar expand="lg" className="navbar-light">
          <Navbar.Brand as={Link} to="/" style={{ width: '100%', textAlign: 'center' }}>
            <img src="/images/logo.jpeg" width="150" alt="Etçi Kısmet Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Ana Sayfa</Nav.Link>
              <Nav.Link as={Link} to="/menu">Menü</Nav.Link>
              <Nav.Link as={Link} to="/contact">İletişim</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
