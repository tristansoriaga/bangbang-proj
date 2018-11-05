import React from "react";
import { ScaleLoader } from "react-spinners";
import "./loadingscreen.css";

const LoadingScreen = props => {
  return (
    <div className="loadingscreen grid-container">
      <div className="grid-item">
        <ScaleLoader
          sizeUnit={"px"}
          size={50}
          color={"black"}
          loading={props.isLoading}
        />
      </div>
      <div className="grid-item">
        <p>Loading</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
