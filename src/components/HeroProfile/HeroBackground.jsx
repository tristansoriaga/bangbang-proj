import React from "react";

const HeroBackground = props => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.state.bg_img})`,
        textAlign: "left",
        backgroundPosition: "center 0",
        backgroundSize: "cover",
        height: "520px"
      }}
    >
      <div
        style={{
          width: "500px",
          background: "linear-gradient(to right, #F8FFFF, transparent)",
          padding: "0em 7em 0em 7em",
          height: "100%"
        }}
      >
        <p style={{ color: "#c40501", margin: 0, paddingTop: "5em" }}>
          {props.state.type}
        </p>
        <h1 style={{ color: "#000000", margin: 0 }}>
          {props.state.name.toUpperCase()}
        </h1>
        <p style={{ color: "#000000", fontSize: "1em" }}>
          {props.state.background_story}
        </p>
      </div>
    </div>
  );
};

export default HeroBackground;
