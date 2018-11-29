import React from "react";
import _ from "underscore.string";
import styled from "styled-components";

const HeroSkills = props => {
  const DivAbility = styled.div`
    max-width: 350px;
    min-width: 150px;
    text-align: left;
  `;

  return props.ability_num === "ability_passive" ? (
    <DivAbility>
      <img
        alt={props.ability[props.ability_num + "_image"]}
        src={props.ability[props.ability_num + "_image"]}
        style={{ marginBottom: "10px" }}
      />
      <p style={{ color: "#c40501", margin: 0 }}>Skill {props.ability_type}</p>
      <h2 style={{ color: "#000000", margin: 0 }}>{_.capitalize(props.ability[props.ability_num + "_name"])}</h2>
      <span>&nbsp;</span>
      <p>{_.capitalize(props.ability[props.ability_num + "_description"])}</p>
    </DivAbility>
  ) : (
    <DivAbility>
      <img
        alt={props.ability[props.ability_num + "_name"]}
        src={props.ability[props.ability_num + "_image"]}
        style={{ marginBottom: "10px" }}
      />
      <p style={{ color: "#c40501", margin: 0 }}>Skill {props.ability_type}</p>
      <h2 style={{ color: "#000000", margin: 0 }}>{_.capitalize(props.ability[props.ability_num + "_name"])}</h2>
      <span style={{ marginRight: "20px" }}>Cooldown: {props.ability[props.ability_num + "_cooldown"]}</span>
      <span>Manacost: {props.ability[props.ability_num + "_manacost"]}</span>
      <p>{_.capitalize(props.ability[props.ability_num + "_description"])}</p>
    </DivAbility>
  );
};

export default HeroSkills;
