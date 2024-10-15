import { Container, Row } from "react-bootstrap";
import React from "react";
import LeftGraphic from "../components/Image/LeftGraphic/LeftGraphic";
import Graphic from "../components/Image/Graphic/Graphic";
import RightGraphic from "../components/Image/RightGraphic/RightGraphic";
import Caption from "../components/Image/Caption/Caption";
import Social from "../components/Social/Social";
import LeftContent from "../components/ListInfo/LeftContent/LeftContent";
import CaptionedGraphic from "../components/Image/CaptionedGraphic/CaptionedGraphic";

function Campaign() {
  const endpoint = "https://script.google.com/macros/s/AKfycby2Fks3RMIW_JEhN25o5NdI84BFCb7W8k0wkzNsz85XKJrypbjGJsFz3gHArSiBQ_Ue/exec"

  return (
    <Container>
      <Row>
        <Graphic
          padding="0"
          img_url="/img/campaign/poster.png"
          img_alt_text="Adam's election poster"
          background="#ff0000" />
        <a href="https://sheffieldsu.com/vote">
          <Caption
            caption="Vote here!"
            color="#ffffff"
            background="#030100"
            noscroll
          />
        
        </a>
        <LeftGraphic
          padding=""
          img_url="/img/Adam.png"
          img_alt_text="Adam stood by the quay"
          caption="Hey, I'm Adam,"
          background="#f45f00"
          color="#ffffff" />
        <RightGraphic
          padding="3"
          img_url="/img/campaign/torch.png"
          img_alt_text="Adam holding a flaming marshmallow"
          caption="and I'm running in the SU Election."
          background="#47555d"
          color="#ffffff" />
        <Caption 
          caption="Check out my background below."
          overflow
          color="#ffffff"
          background="#030100" />
        <Social
          type = "Instagram"
          url = "https://instagram.com/adamcdrummond"
          logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
          md_offset="0" />
        <LeftContent 
            title="Education"
            filter="edu"
            background="#ccffcc"
            md_offset="1"
            endpoint={endpoint} />
        <CaptionedGraphic
          padding="3"
          img_url="/img/campaign/haveyoursay.jpeg"
          caption="Make sure to have your say and vote in the Election!"
          img_alt_text="Adam stood by the quay" />

<div className="high text-center text-light mt-20">
                    <p>to learn more about me</p>
                    <p>check out the <a href="https://adamd.im" className="text-light">main site</a></p></div>
      </Row>
    </Container>
  );
}
  
  export default Campaign;