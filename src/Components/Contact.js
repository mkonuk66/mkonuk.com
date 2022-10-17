import React, { Component } from "react";
import emailjs from "emailjs-com";
function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_gdfk549",
      "template_tuv8pwh",
      e.target,
      "user_poj04YYRQKaB2u1Wdgu3v"
    )
    .then(
      (result) => {
        if (document.getElementById("contactName").value.length === 0) {
        } else if (
          document.getElementById("contactSurname").value.length === 0
        ) {
        } else if (document.getElementById("contactEmail").value.length === 0) {
        } else if (
          document.getElementById("contactSubject").value.length === 0
        ) {
        } else if (
          document.getElementById("contactMessage").value.length === 0
        ) {
        } else {
          alert(
            "Mesaj gönderimi başarılı !",
            "Mesajın başarıyla gönderildi. Geri dönüş için teşekkürler !"
          );
        }
        console.log(result.text);
        document.getElementById("contactName").value = null;
        document.getElementById("contactSurname").value = null;
        document.getElementById("contactEmail").value = null;
        document.getElementById("contactSubject").value = null;
        document.getElementById("contactMessage").value = null;
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export default class Contact extends Component {
  handleSubmit() {}
  render() {
    return (
      <div className="contact container mt-3">
        <h1 className="contactTitle">İletişim</h1>
        <hr />
        <div className="contactInfo">
          {" "}
          <br />
          Aşağıdaki sosyal medya hesaplarımdan bana ulaşabilirsin.
          <br />
          <br />
          <a
            href="https://www.instagram.com/mkonuk66"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram fa-3x contactIconInstagram"></i>
          </a>
          <a
            href="https://www.twitter.com/mkonuk66"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i className="fa fa-twitter fa-3x contactIconTwitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mkonuk66/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i className="fa fa-linkedin fa-3x contactIconLinkedin"></i>
          </a>
          <br />
          <br />
          Ya da aşağıdaki iletişim formunu doldurarak mesajını bana
          iletebilirsin. <br /> <br />
        </div>
        <div>
          <form className="contactForm container " onSubmit={sendEmail}>
            <h1 className="contactFormTitle">
              &bull;&nbsp;&nbsp;İletişim Formu&nbsp;&nbsp;&bull;
            </h1>
            <hr style={{ margin: "2% 5% 2% 5%" }} />
            <div className="contactNameGroup">
              <div className="form-group  contactFormGroupName">
                <label for="fname" className="contactLabel">
                  &bull;&nbsp;&nbsp;Ad :
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  className="contactInput form-control"
                  placeholder="Lütfen adınızı giriniz"
                />
              </div>
              <div className="form-group contactFormGroupName">
                {" "}
                <label for="fname" className="contactLabel">
                  &bull;&nbsp;&nbsp;Soyad :
                </label>{" "}
                <input
                  type="text"
                  id="contactSurname"
                  name="contactSurname"
                  placeholder="Lütfen soyadınızı giriniz"
                  className="contactInput form-control"
                />
              </div>
            </div>
            <div className="form-group contactFormGroup">
              {" "}
              <label for="lname" className="contactLabel">
                &bull;&nbsp;&nbsp;E-mail :
              </label>{" "}
              <br />
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                placeholder="Lütfen e-mail adresinizi giriniz"
                className="contactInput form-control"
              />{" "}
            </div>
            <div className="form-group contactFormGroup">
              <label for="lname" className="contactLabel">
                &bull;&nbsp;&nbsp;Konu :
              </label>{" "}
              <br />
              <input
                type="text"
                id="contactSubject"
                name="contactSubject"
                placeholder="Lütfen mesajınızın konusunu belirtiniz"
                className="contactInput form-control"
              />{" "}
            </div>

            <div className="form-group contactFormGroup">
              <label for="lname" className="contactLabel">
                &bull;&nbsp;&nbsp;Mesaj :
              </label>{" "}
              <br />
              <textarea
                type="textarea"
                id="contactMessage"
                name="contactMessage"
                cols="30"
                rows="5"
                placeholder="Lütfen mesajınızı giriniz"
                className="contactInput form-control"
              />
            </div>
            <input
              className="form-group btn btn-danger contactFormGroup"
              value=" Gönder"
              type="submit"
              onClick={this.handleSubmit}
              style={{ width: "90%", background: "#ed0a00", color: "#fff" }}
            ></input>
          </form>
          <br />
        </div>
      </div>
    );
  }
}
