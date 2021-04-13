import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var ramazan = "images/" + this.props.data.ramazan;
    }
    return (
      <section id="paylasim">
        <div className="text-container">
          <h2>Paylaşımlar</h2> <hr />
          <div className="row">
            <div className="two columns header-col">
              <h1> </h1>
            </div>
            <div classname="twelve column flex-container">
              <img
                src={ramazan}
                alt="Ramazan"
                loading="lazy"
                width="40%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;