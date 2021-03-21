import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var email = this.props.data.email;
      var email2 = this.props.data.email2;
      var country = this.props.data.address.country
      var cv = this.props.data.cv;
    }

    return (
      <section id="benkimim">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profil Fotoğrafı" />
         </div>
         <div className="nine columns main-col">
            <h2>Ben Kimim ?</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>İletişim Bilgilerim</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city} / {country}</span><br />
                     <a href="mailto:mkonuk66@hotmail.com">{email}</a><br />
                     <a href="mailto:mkonuk6666@gmail.com">{email2}</a>
					   </p>
               </div>
               <div className="columns download">
               <h2>CV</h2>
                  <p>
                     
                     <a className="button "><i className="fa fa-download"></i>CV İNDİR</a> <br/>
                     <h6>Özür dileriz...<br/>CV kısa bir sürede eklenecek.</h6>
                     
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
