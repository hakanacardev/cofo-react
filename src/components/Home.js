import React from 'react';

const Home = () => {
  return (
    <div className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="home-title">Etçi Kısmet'e Hoş Geldiniz</h1>
            <p className="home-subtitle">Taze etler, lezzetli yemekler ve sıcak misafirperverlik</p>
            <div className="home-buttons">
              <a href="/menu" className="btn btn-primary">Menüyü İncele</a>
              <a href="/contact" className="btn btn-secondary">İletişim</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
