import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";
import styled from "styled-components";

const rootElement = document.getElementById("root");
const DivApp = styled.div`
  margin: 0 auto;
  width: 1280px;
`;
const App = () => {
  return (
    <DivApp>
      <Router />
    </DivApp>
  );
};
ReactDOM.render(<App />, rootElement);
