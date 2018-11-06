import React from "react";
import styled from "styled-components";

const HeroSkins = props => {
  const DivSkins = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
  `;
  return (
    <DivSkins>
      {props.skins.map((val, index) => (
        <div key={index}>
          <img width="269" src={val.image} alt={val.name} />
          <p style={{ color: "white" }}>{val.name}</p>
        </div>
      ))}
    </DivSkins>
  );
};

export default HeroSkins;
