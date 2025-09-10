import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="contact-title">İletişim</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <h3>Adres</h3>
              <p>Etçi Kısmet Restoran</p>
              <p>Merkez Mahallesi, Lezzet Sokak No:123</p>
              <p>İstanbul, Türkiye</p>
            </div>
            <div className="contact-info">
              <h3>Telefon</h3>
              <p>+90 212 123 45 67</p>
            </div>
            <div className="contact-info">
              <h3>E-posta</h3>
              <p>info@etckisnet.com</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form">
              <h3>Bize Ulaşın</h3>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Adınız" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="E-posta" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="5" placeholder="Mesajınız"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Gönder</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
