import React from "react";
import styled from "styled-components";
import "../../styles.css";

const HeroBackground = props => {
  const ParaType = styled.p`
    color: #c40501;
    margin: 0;
    padding-top: 5em;
  `;

  const DivStory = styled.div`
    overflow-y: scroll;
    height: 270px;
    padding-bottom: 20px;
  `;

  const DivHeroBackground = styled.div`
    text-align: left;
    background-position: center 0;
    background-size: cover;
    height: 525px;
    background-image: url(${props => props.theme});
  `;

  const DivMain = styled.div`
    width: 500px;
    padding: 0em 7em 0em 7em;
    height: 100%;
    background: ${props =>
      props.theme === "dark"
        ? "linear-gradient(to right, black, transparent)"
        : "linear-gradient(to right, #F8FFFF, transparent)"};
  `;

  const H1Name = styled.h1`
    color: ${props => (props.theme === "dark" ? "white" : "black")};
    margin: 0;
  `;

  const ParaStory = styled.p`
    color: ${props => (props.theme === "dark" ? "#c6c6c6" : "black")};
    margin: 0;
    fontsize: 1em;
  `;

  return (
    <DivHeroBackground theme={props.state.background_image}>
      <DivMain theme={props.state.theme}>
        <ParaType>{props.state.type}</ParaType>
        <H1Name theme={props.state.theme}>{props.state.name.toUpperCase()}</H1Name>
        <DivStory className="hidescroll">
          <ParaStory theme={props.state.theme}>{props.state.background_story}</ParaStory>
        </DivStory>
      </DivMain>
    </DivHeroBackground>
  );
};

export default HeroBackground;
