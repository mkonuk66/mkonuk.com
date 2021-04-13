import React, { Component } from "react";
import emailjs from "emailjs-com";
import alertify from "alertifyjs";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_gdfk549",
      "template_926sxig",
      e.target,
      "user_poj04YYRQKaB2u1Wdgu3v"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var email = this.props.data.email;
      var email2 = this.props.data.email2;
      var email3 = this.props.data.email3;
      var city = this.props.data.address.city;
      var linkedin = this.props.data.linkedin;
      var github = this.props.data.github;
      var instagram = this.props.data.instagram;
      var twitter = this.props.data.twitter;
      var country = this.props.data.address.country;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="iletisim">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>İLETİŞİM</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <form className="contact-form eight columns" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>İsim Soyisim :</label>
            <input type="text" name="contactName" />
            <label>E-mail :</label>
            <input type="email" name="contactEmail" />
            <label>Konu :</label>
            <input type="text" name="contactSubject" />
            <label>Mesaj :</label>
            <textarea name="contactMessage" />
            <input
              type="submit"
              value="Gönder"
              onClick={function () {
                alertify.alert("Başarılı !", "Mesajınız başarıyla gönderildi.");
                document.forms[0].reset();
              }}
            />
          </form>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>İletişim Bilgileri</h4>
              <p className="address">
                {name} , 21
                <br />
                {city}, {country}
                <br />
                <a
                  href="mailto:info@mkonuk.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {email3}
                </a>
                <br />
                <a
                  href="mailto:mkonuk66@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {email}
                </a>
                <br />
                <a
                  href="mailto:mkonuk6666@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {email2}
                </a>
              </p>
            </div>
            <div>
              <ul className="social">
                <a
                  href={twitter}
                  target="_blank"
                  className="button btn twitter-btn"
                  rel="nofollow"
                >
                  <i className="fa fa-twitter"></i>Twitter
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  className="button btn instagram-btn"
                  rel="nofollow"
                >
                  <i className="fa fa-instagram"></i>İnstagram
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  className="button btn linkedin-btn"
                  rel="nofollow"
                >
                  <i className="fa fa-linkedin"></i>LinkedIn
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="nofollow"
                  className="button btn github-btn"
                >
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
