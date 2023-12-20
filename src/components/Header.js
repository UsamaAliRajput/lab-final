import React from "react";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 4rem",
      }}
    >
      <div>
        <img src={Logo} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            color: "white",
            gap: "1rem",
          }}
        >
          <li>
            <a href="#">Web3Makr</a>
          </li>
          <li>
            <a href="#">White paper</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Tool</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            style={{
              height: 40,
              width: 140,
              background: "none",
              border: "1px solid #18ADE4",
              borderRadius: 3,
              color: "#18ADE4",
            }}
          >
            Start for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
