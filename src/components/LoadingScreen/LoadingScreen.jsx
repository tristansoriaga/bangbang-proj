import React from "react";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";

const DivLoadingScreen = styled.div`
  font-family: fantasy;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
  color: white;
  display: grid;
  height: 100vh;
  align-content: center;
  grid-template-columns: auto;
`;
const DivLoadingScreenItem = styled.div`
  text-align: center;
  font-size: 1em;
`;

const LoadingScreen = props => {
  return (
    <DivLoadingScreen>
      <DivLoadingScreenItem>
        <ScaleLoader
          sizeUnit={"px"}
          size={50}
          color={"white"}
          loading={props.isLoading}
        />
      </DivLoadingScreenItem>
      <DivLoadingScreenItem>
        <p>Loading</p>
      </DivLoadingScreenItem>
    </DivLoadingScreen>
  );
};

export default LoadingScreen;
