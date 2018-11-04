import React from "react";

const HeroStats = props => {
  return (
    <div>
      <h1>Stats</h1>
      <p>HP: {props.stats.hp}</p>
      <p>Mana: {props.stats.mana}</p>
      <p>Attack Speed: {props.stats.attack_speed}</p>
      <p>Movement Speed: {props.stats.movement_speed}</p>
      <p>Physical Attack: {props.stats.movement_speed}</p>
      <p>Magic Power: {props.stats.magic_power}</p>
      <p>HP Regen: {props.stats.hp_regen}</p>
      <p>Mana Regen: {props.stats.mana_regen}</p>
      <p>Armor: {props.stats.armor}</p>
      <p>Magic Resistance: {props.stats.magic_resistance}</p>
      <p>Basic Attack Crit Rate: {props.stats.basic_attack_crit_rate}</p>
      <p>Ability Crit Rate: {props.stats.ability_crit_rate}</p>
    </div>
  );
};

export default HeroStats;
