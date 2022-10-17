import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ShortAbout extends Component {
  render() {
    return (
      <div className="shortAbout">
        <img src="/images/pp.webp" alt="pp" id="pp" />
        <div className="shortAboutText">
          <h1 className="shortAboutTitle">Hakkımda</h1>
          <hr />
          <p className="shortAboutResume">
            Ben Mehmet Emin KONUK. Yozgat'ta doğdum ve büyüdüm. Lisans eğitimimi
            Ondokuz Mayıs Üniversitesi Bilgisayar Mühendisliği bölümünde
            tamamladım. Şuanda SDataM Bilişim Teknolojileri ve Güvenliği
            şirketinde Bilgisayar Mühendisi olarak görev yapmaktayım.
          </p>
          <Link to="/about" className="shortAboutButton">
            <i className="fa fa-arrow-right"></i>&nbsp;Daha fazlası için
            tıklayınız.
          </Link>
        </div>
      </div>
    );
  }
}
