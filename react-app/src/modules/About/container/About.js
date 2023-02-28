import React, { Component } from "react";
import EVChart from "../component/EVChart";
import data from "../component/evData";
import Banner from "../component/Banner";

class About extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Banner />
        <h2>Electric Vehicle Sales 2023</h2>
        <EVChart evData={data.evData} />
      </div>
    );
  }
}

export default About;
