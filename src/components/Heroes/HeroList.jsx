import React from "react";
import _ from "underscore.string";
import FlipMove from "react-flip-move";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DivHeroList = {
  display: "grid",
  gridAutoFlow: "row dense",
  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
  gridGap: "1em",
  gridAutoRows: "150px",
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 1em"
};

const DivHeroBox = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  min-width: 150px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
    display: block;
  }

  &:hover > .hero-caption {
    opacity: 1;
    display: block;
    font-size: 1.2em;
    margin: 0 auto;
    text-align: center;
  }
`;

const DivHeroImage = styled.div`
  height: 70px;
`;

const HeroImage = styled.img`
  border-radius: 5%;
  width: 156px;
  height: 150px;
`;

const HeroCaption = styled.div`
  display: none;
  align-self: center;
  text-decoration: none;
`;

const HeroList = props => {
  return (
    <FlipMove style={DivHeroList}>
      {props.heroes.map(val => (
        <div key={val.id}>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to={{
              pathname: `/hero/${val.name}`,
              heroid: val.id,
              heroname: val.name
            }}
          >
            <DivHeroBox>
              <DivHeroImage>
                <HeroImage src={val.profile_image} alt={val.name} />
              </DivHeroImage>
              <HeroCaption className="hero-caption">
                <h2>{_.capitalize(val.name)}</h2>
              </HeroCaption>
            </DivHeroBox>
          </NavLink>
        </div>
      ))}
    </FlipMove>
  );
};

export default HeroList;
