import React from "react";
import "./herostats.css";
const HeroStats = props => {
  const {
    hp,
    mana,
    attack_speed,
    movement_speed,
    physical_attack,
    magic_power,
    hp_regen,
    mana_regen,
    armor,
    magic_resistance,
    basic_attack_crit_rate,
    ability_crit_rate
  } = props.stats;
  return (
    <React.Fragment>
      <h1>Stats</h1>
      <div className="herostats">
        <div className="herostats-col">
          <p>HP: {hp}</p>
          <p>Mana: {mana}</p>
          <p>Attack Speed: {attack_speed}</p>
          <p>Movement Speed: {movement_speed}</p>
          <p>Physical Attack: {physical_attack}</p>
          <p>Magic Power: {magic_power}</p>
        </div>
        <div className="herostats-col">
          <p>HP Regen: {hp_regen}</p>
          <p>Mana Regen: {mana_regen}</p>
          <p>Armor: {armor}</p>
          <p>Magic Resistance: {magic_resistance}</p>
          <p>Basic Attack Crit Rate: {basic_attack_crit_rate}</p>
          <p>Ability Crit Rate: {ability_crit_rate}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroStats;
