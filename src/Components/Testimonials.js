import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    return (
      <section id="paylasim">
        <div className="text-container">
          <h2>Paylaşımlar</h2> <hr />
          <div className="row">
            <div className="two columns header-col">
              <h1> </h1>
            </div>
            <img
              src="images/content/SMT.webp"
              alt="Social Media"
              loading="lazy"
              width="30%"
              height="100%"
            />
            &nbsp;&nbsp;&nbsp;
            <img
              src="images/content/mockup.webp"
              alt="Mockup"
              loading="lazy"
              width="40%"
              height="100%"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
