import React from "react";

const HeroSkills = props => {
  return props.ability_num === "passive" ? (
    <div className="ability">
      <h1>Skill Passive</h1>
      <h2>{props.ability["name"]}</h2>
      <p>{props.ability["description"]}</p>
      <p>{props.ability["type"]}</p>
    </div>
  ) : (
    <div className="ability">
      <h1>Skill {props.ability_num}</h1>
      <h2>{props.ability["name"]}</h2>
      <p>Description: {props.ability["description"]}</p>
      <p>Cooldown: {props.ability["cooldown"]}</p>
      <p>Manacost: {props.ability["manacost"]}</p>
    </div>
  );
};

export default HeroSkills;
