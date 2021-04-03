import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var email = this.props.data.email;
      var email2 = this.props.data.email2;
      var email3 = this.props.data.email3;
      var country = this.props.data.address.country;
      var cv = "images/" + this.props.data.cv
    }

    return (
      <section id="benkimim">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Profil Fotoğrafı"
              loading="lazy"
              width="100%"
              height="100%"
            />
          </div>
          <div className="nine columns main-col">
            <h2>Ben Kimim ?</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>İletişim Bilgilerim</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city} / {country}
                  </span>
                  <br />
                  <a href="mailto:info@mkonuk.com">{email3}</a>
                  <br />
                  <a href="mailto:mkonuk6666@gmail.com">{email2}</a>
                  <br />
                  <a href="mailto:mkonuk66@hotmail.com">{email}</a>
                </p>
              </div>
              <div className="columns download">
                <h2>CV</h2>
                <p>
                  <a href={cv} download="CV" className="button ">
                    <i className="fa fa-download"></i>CV İNDİR
                  </a>
                 
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
