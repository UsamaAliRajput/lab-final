import React from "react";
import Waves from "../assets/waves.png";
import Glare from "../assets/glare.png";
import Solidity from "../assets/solidity.png";
import mask from "../assets/metamask.png";
import morals from "../assets/morals.png";
import paste from "../assets/paste.png";
import hardth from "../assets/hardth.png";
import ether from "../assets/ether.png";

const Future = () => {
  const stacks = [
    {
      name: "Metamask Support",
      image: mask,
    },
    {
      name: "NFT Search",
      image: ether,
    },
    {
      name: "Moralis Integration",
      image: morals,
    },
    {
      name: "Solidity",
      image: Solidity,
    },
    {
      name: "Ether.js",
      image: paste,
    },
    {
      name: "Hardhat",
      image: hardth,
    },
  ];
  return (
    <section className="future-section" style={{ backgroundColor: "black" }}>
      <img className="glare-image" src={Glare} alt="" />
      {/* <img className="glare-image" src={Waves} alt="" /> */}
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
        <h1 style={{ color: "white" }}>The Future of Web3 NoCode</h1>
        <p>
          Web3Makr allows you to incorporate top ranked blockchain platforms
          into your work through the drag and drop feature.
        </p>
        <div style={{ zIndex: 999 }}>
          <div></div>
          <div className="grid">
            {stacks.map((stack) => {
              return (
                <div>
                  <div className="tech-image solidity">
                    <div className="tech-image-main">
                      <img src={stack.image} alt="" />
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 34,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {stack.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
