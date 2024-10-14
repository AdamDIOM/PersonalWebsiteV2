import { Container } from "react-bootstrap";
import React from "react";
import LeftGraphic from "../components/Image/LeftGraphic/LeftGraphic";
import Graphic from "../components/Image/Graphic/Graphic";
import RightGraphic from "../components/Image/RightGraphic/RightGraphic";

function Campaign() {
    return (
      <Container>
      <Graphic
        padding="3"
        img_url="/img/Adam.png"
        img_alt_text="Adam stood by the quay"
        background="#ff0000" />
        <LeftGraphic
          padding=""
          img_url="/img/Adam.png"
          img_alt_text="Adam stood by the quay"
          caption="Adam living the dream" />
          <RightGraphic
            padding="3"
            img_url="/img/Adam.png"
            img_alt_text="Adam stood by the quay"
            caption="Adam living the dream" />

      <Graphic
        padding="3"
        img_url="/img/Adam.png"
        img_alt_text="Adam stood by the quay" />
      </Container>
    );
  }
  
  export default Campaign;