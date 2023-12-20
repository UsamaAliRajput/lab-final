import React from "react";
import Glare from "../assets/glare.png";
import Tab from "../assets/Web.png";
import Play from "../assets/Play.svg";
const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundColor: "black" }}>
      <img className="glare-image" src={Glare} alt="" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          zIndex: 9999,
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <h1 style={{ color: "white" }}>Web3Makr Redefining How You Create</h1>
        <p>Unlock the blockchain potential to create Web3 Applications</p>
        <img src={Play} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            zIndex: 9999,
          }}
          className="tab-image"
          src={Tab}
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
