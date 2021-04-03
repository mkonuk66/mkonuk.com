import React, { Component } from "react";

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
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    İsim Soyisim <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Konu</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Mesaj <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>

                <div>
                  <button className="submit">Gönder</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> HATA !</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Mesajın gönderildi , teşekkürler !
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>İletişim Bilgileri</h4>
              <p className="address">
                {name} , 21
                <br />
                {city}, {country}
                <br />
                <a href="mailto:info@mkonuk.com" target="_blank" rel="noopener noreferrer nofollow">
                  {email3}
                </a>
                <br />
                <a href="mailto:mkonuk66@hotmail.com" target="_blank" rel="noopener noreferrer nofollow">
                  {email}
                </a>
                <br />
                <a href="mailto:mkonuk6666@gmail.com" target="_blank" rel="noopener noreferrer nofollow">
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
