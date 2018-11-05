import React from "react";
import "./heroskills.css";
import _ from "underscore.string";

const HeroSkills = props => {
  return props.ability_num === "passive" ? (
    <div className="ability">
      <h2>
        <u>Skill Passive</u>
      </h2>
      <h1>{_.capitalize(props.ability["name"])}</h1>
      <p>{_.capitalize(props.ability["description"])}</p>
    </div>
  ) : (
    <div className="ability">
      <h2>
        <u>Skill {props.ability_num}</u>
      </h2>
      <h1>{_.capitalize(props.ability["name"])}</h1>
      <p>{_.capitalize(props.ability["description"])}</p>
      <span style={{ marginRight: "20px" }}>
        Cooldown: {props.ability["cooldown"]}
      </span>
      <span>Manacost: {props.ability["manacost"]}</span>
    </div>
  );
};

export default HeroSkills;
