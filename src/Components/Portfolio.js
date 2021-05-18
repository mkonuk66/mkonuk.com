import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;

        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href={projects.url}
                target="_blank"
                title={projects.title}
                rel="dofollow"
              >
                <img
                  alt={projects.title}
                  src={projectImage}
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="proje">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projelerimden bazıları aşağıda</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
