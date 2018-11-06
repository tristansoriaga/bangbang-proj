import React from "react";
import _ from "underscore.string";
import styled from "styled-components";

const HeroSkills = props => {
  const DivAbility = styled.div`
    max-width: 350px;
    min-width: 150px;
    text-align: left;
  `;
  return props.ability_num === "passive" ? (
    <DivAbility>
      <img
        alt={props.ability["name"]}
        src={props.ability["image"]}
        style={{ marginBottom: "10px" }}
      />
      <p style={{ color: "#c40501", margin: 0 }}>Skill Passive</p>
      <h2 style={{ color: "#000000", margin: 0 }}>
        {_.capitalize(props.ability["name"])}
      </h2>
      <span>&nbsp;</span>
      <p>{_.capitalize(props.ability["description"])}</p>
    </DivAbility>
  ) : (
    <DivAbility>
      <img
        alt={props.ability["name"]}
        src={props.ability["image"]}
        style={{ marginBottom: "10px" }}
      />
      <p style={{ color: "#c40501", margin: 0 }}>Skill {props.ability_num}</p>
      <h2 style={{ color: "#000000", margin: 0 }}>
        {_.capitalize(props.ability["name"])}
      </h2>
      <span style={{ marginRight: "20px" }}>
        Cooldown: {props.ability["cooldown"]}
      </span>
      <span>Manacost: {props.ability["manacost"]}</span>
      <p>{_.capitalize(props.ability["description"])}</p>
    </DivAbility>
  );
};

export default HeroSkills;
