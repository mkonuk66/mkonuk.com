import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <div className="project">
        <h1 className="projectTitle"> PROJELERİM </h1>
        <hr style={{ margin: "0 13rem 2rem 13rem" }} />
        <div className="projectCards">
          <div className="card bg-light border-dark text-center projectCard">
            <div className="card-header">
              <i
                className="fa fa-github fa-5x"
                style={{ backgroundColor: "transparent" }}
              ></i>
            </div>
            <div className="card-body">
              <span
                className="card-title projectCardTitle"
                style={{ fontWeight: "700" }}
              >
                mkonuk.com
              </span>
              <p className="card-text projectCardText">
                Mehmet Emin KONUK kişisel web sitesi
              </p>
              <a
                href="http://www.github.com/mkonuk66/mkonuk.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Detaylı Bilgi
              </a>
            </div>
            <div
              className="card-footer projectCardFooter"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                {" "}
                <strong style={{ color: "#4AD5FF" }}>
                  <i className="fa fa-circle fa-2xs" />
                </strong>
                &nbsp;
                <span style={{ color: "#4AD5FF" }}>React.js</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ color: "#7AB561" }}>Node.js</span>
                &nbsp;
                <strong style={{ color: "#7AB561" }}>
                  <i className="fa fa-circle fa-2xs" />
                </strong>
              </div>
            </div>
          </div>
          <div className="card bg-light border-dark text-center projectCard">
            <div className="card-header">
              <i
                className="fa fa-github fa-5x"
                style={{ backgroundColor: "transparent" }}
              ></i>
            </div>
            <div className="card-body">
              <span
                className="card-title projectCardTitle"
                style={{ fontWeight: "700" }}
              >
                kuskulu.com
              </span>
              <p className="card-text projectCardText">
                kuskulu.com blog web sitesi
                <br />
                <br />
              </p>
              <a
                href="http://www.github.com/eerensuzgen/blog"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Detaylı Bilgi
              </a>
            </div>
            <div
              className="card-footer projectCardFooter"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                {" "}
                <strong style={{ color: "#4AD5FF" }}>
                  <i className="fa fa-circle fa-2xs" />
                </strong>
                &nbsp;
                <span style={{ color: "#4AD5FF" }}>React.js</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ color: "#7AB561" }}>Node.js</span>
                &nbsp;
                <strong style={{ color: "#7AB561" }}>
                  <i className="fa fa-circle fa-2xs" />
                </strong>
              </div>
            </div>
          </div>
          <div className="card bg-light border-dark text-center projectCard">
            <div className="card-header">
              <i
                className="fa fa-github fa-5x"
                style={{ backgroundColor: "transparent" }}
              ></i>
            </div>
            <div className="card-body">
              <span
                className="card-title projectCardTitle"
                style={{ fontWeight: "700" }}
              >
                BAL-MAR
              </span>
              <p className="card-text projectCardText">Market Otomasyonu</p>{" "}
              <br />
              <a
                href="http://www.github.com/mkonuk66/BAL-MAR-Market-Automation"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Detaylı Bilgi
              </a>
            </div>
            <div
              className="card-footer projectCardFooter"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                {" "}
                <strong style={{ color: "#68217A" }}>
                  <i className="fa fa-circle fa-2xs" />
                </strong>
                &nbsp;
                <span style={{ color: "#68217A" }}>C#</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ color: "#C31831" }}>MSSQL</span>
                &nbsp;
                <strong style={{ color: "#C31831" }}>
                  <i className="fa fa-circle fa-2xs" />
                </strong>
              </div>
            </div>
          </div>
          <div className="card bg-light border-dark text-center projectCard">
            <div className="card-header">
              <i
                className="fa fa-github fa-5x"
                style={{ backgroundColor: "transparent" }}
              ></i>
            </div>
            <div className="card-body">
              <span
                className="card-title projectCardTitle"
                style={{ fontWeight: "700" }}
              >
                FAVPQC
              </span>
              <p className="card-text projectCardText">
                Kriptografik protokollerin biçimsel analizi
              </p>{" "}
              <a
                href="http://www.github.com/mkonuk66/hlpslRepo"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Detaylı Bilgi
              </a>
            </div>
            <div className="card-footer projectCardFooter">
              <strong style={{ color: "#ed0a00" }}>
                <i className="fa fa-circle fa-2xs" />
              </strong>
              &nbsp;
              <span style={{ color: "#ed0a00" }}>HLPSL</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
