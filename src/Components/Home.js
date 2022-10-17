import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <img
          src="/images/dalle.webp"
          width="750"
          alt="artificalIntelligence-textToImage"
          className="img-fluid"
          style={{
            margin: "auto",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    );
  }
}
