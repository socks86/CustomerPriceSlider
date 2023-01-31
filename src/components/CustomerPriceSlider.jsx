import React from "react";
import Slider from "./Slider";
import "../styles/main.css";

export const CustomerPriceSlider = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Simple, traffic-based pricing</h1>
          <div>
            <h5>Sign-up for our 30-day trial. No credit card required.</h5>
          </div>
        </div>
          <Slider />
      </div>
    </div>
  );
};