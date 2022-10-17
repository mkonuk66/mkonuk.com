import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutBioBlock">
          <img src="/images/vs.webp" alt="pp" id="aboutBioImage" />
          <div className="aboutBioTextBlock">
            <h3 id="aboutBioTitle">Hakkımda</h3>
            <hr />
            <p id="aboutBioText">
              &bull;&nbsp;Merhabalar! Ben Mehmet Emin KONUK. Takvimler 2000
              yılının 18 Ekim tarihini gösterdiğinde Yozgat'ta dünyaya geldim.
              İlk, orta öğrenimimi memleketimdeki mahalle okulunda tamamladım.
              Lise öğrenimimi ise yine memleketimde Yozgat Anadolu Lisesinde
              tamamladım. Ardından 2018 senesinde üniversite sınavına girdim.
              Hayalimdeki meslek olan Bilgisayar Mühendisliği için üniversite
              tercih sıralamamın tamamını Bilgisayar Mühendisliği bölümleri ile
              sıraladım. Bu sıralamadan Ondokuz Mayıs Üniversitesi Bilgisayar
              Mühendisliği bölümüne yerleştim. Böylece üniversite serüvenim
              başlamış oldu. Üniversitede iki adet staj yapma imkanı buldum.
              Bunlardan ilkini Yozgat Bozok Üniversitesinde web geliştirici
              pozisyonunda yaz stajı olarak tamamladım. Diğer stajımı ise
              TÜBİTAK - STAR programı tarafından desteklenerek "Kuantum Sonrası
              Kriptografik Protokollerin Biçimsel Analizi ve Doğrulanması
              (FAVPQC)" konulu bir proje üzerinde stajyer araştırmacı olarak
              gerçekleştirdim. Lisans öğrenimimi Haziran 2022'de 3.14 ortalama
              ile Bilgisayar Mühendisliği Bölüm Birincisi olarak tamamladım.
              Şuanda SDataM Bilişim Teknolojileri ve Güvenliği şirketinde
              Bilgisayar Mühendisi olarak çalışmaktayım.
            </p>
          </div>
        </div>
        <div className="aboutEducation">
          <h1 id="aboutEducationTitle">Eğitim</h1>
          <hr />
          <div className="aboutEducationSchoolBlock">
            <div>
              <img src="/images/omu.webp" alt="omu" id="aboutEducationImage" />
            </div>
            <div>
              <h3 className="aboutEducationSchoolTitle">
                Ondokuz Mayıs Üniversitesi
              </h3>
              <h5 className="aboutEducationSchoolDesc">
                Mühendislik Fakültesi - Bilgisayar Mühendisliği
              </h5>
              <div className="aboutEducationDesc">
                <p>
                  <strong>GANO : </strong>
                  <i>3.14</i>
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>
                  <strong>Tarih : </strong>
                  <i>09/2018 - 06/2022</i>
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="aboutEducationSchoolBlock">
            <div>
              <img src="/images/yal.webp" alt="yal" id="aboutEducationImage" />
            </div>
            <div>
              <h3 className="aboutEducationSchoolTitle">
                Yozgat Anadolu Lisesi
              </h3>
              <h5 className="aboutEducationSchoolDesc">Anadolu Lisesi</h5>
              <div className="aboutEducationDesc">
                <p>
                  <strong>Diploma Puanı : </strong>
                  <i>86.9</i>
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>
                  <strong>Tarih : </strong>
                  <i>09/2014 - 06/2018</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutWork">
          <h1 id="aboutEducationTitle">İş ve Staj Deneyimi</h1>
          <hr />
          <div className="aboutEducationSchoolBlock">
            <div>
              <img
                src="/images/sdatam.webp"
                alt="sdatam"
                id="aboutEducationImage"
              />
            </div>
            <div>
              <h3 className="aboutEducationSchoolTitle">
                {" "}
                SDataM Bilişim Teknolojileri ve Güvenliği
              </h3>
              <h5 className="aboutEducationSchoolDesc">Bilgisayar Mühendisi</h5>
              <div className="aboutEducationDesc">
                <p>
                  <strong>Tarih : </strong>
                  <i>07/2022 - Devam ediyor...</i>
                </p>
              </div>
            </div>
          </div>

          <div className="aboutEducationSchoolBlock">
            <div>
              <img
                src="/images/tubitak.webp"
                alt="tübitak"
                id="aboutEducationImage"
              />
            </div>
            <div>
              <h3 className="aboutEducationSchoolTitle">TÜBİTAK - STAR</h3>
              <h5 className="aboutEducationSchoolDesc">Stajyer Araştırmacı</h5>
              <div className="aboutEducationDesc">
                <p>
                  <strong>Tarih : </strong>
                  <i>12/2021 - 06/2022</i>
                </p>
              </div>
            </div>
          </div>
          <div className="aboutEducationSchoolBlock">
            <div>
              <img
                src="/images/yobu.webp"
                alt="yobü"
                id="aboutEducationImage"
              />
            </div>
            <div>
              <h3 className="aboutEducationSchoolTitle">
                Yozgat Bozok Üniversitesi
              </h3>
              <h5 className="aboutEducationSchoolDesc">
                Bilgisayar Mühendisi Stajyeri
              </h5>
              <div className="aboutEducationDesc">
                <p>
                  <strong>Tarih : </strong>
                  <i>08/2021 - 09/2021</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
