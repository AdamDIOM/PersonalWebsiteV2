import { Container } from "react-bootstrap";
import Snippet from "./Snippet";
import React from "react";
import Home from "../Home/Home";

function Uni() {
    return (
      <React.Fragment>
        <Snippet />
        <Home />
      </React.Fragment>
    );
  }
  
  export default Uni;