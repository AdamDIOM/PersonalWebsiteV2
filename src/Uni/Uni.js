import { Container } from "react-bootstrap";
import Snippet from "./Snippet";
import React from "react";
import Home from "../Home/Home";

function Uni() {
    return (
      <Container>
        <Snippet />
        <Home />
      </Container>
    );
  }
  
  export default Uni;