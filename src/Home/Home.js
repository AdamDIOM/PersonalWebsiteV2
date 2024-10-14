import { Container, Row } from "react-bootstrap";
import RightGraphic from "../components/Image/RightGraphic/RightGraphic";
import RightContent from "../components/ListInfo/RightContent/RightContent";
import Social from "../components/Social/Social";
import LeftContent from "../components/ListInfo/LeftContent/LeftContent";



function Home() {
    const endpoint = "https://script.google.com/macros/s/AKfycby2Fks3RMIW_JEhN25o5NdI84BFCb7W8k0wkzNsz85XKJrypbjGJsFz3gHArSiBQ_Ue/exec"
    return (
      <Container>
        <Row>
            <RightGraphic
                img_url="/img/Adam.png"
                img_alt_text="Adam stood in front of a quay with boats and a lifting bridge"
                caption="Hey, I'm Adam!"
            />
            <RightContent 
                title="Experience"
                filter="exp"
                background="#e4ceff"
                md_span="8"
                endpoint={endpoint}
            />
            <Social 
                type = "LinkedIn"
                url = "https://linkedin.com/in/adam-drummond"
                logo = "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            />
            <Social
                type = "Instagram"
                url = "https://instagram.com/mista_koo1"
                logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                md_offset="0"
            />
            <LeftContent 
                title="Education"
                filter="edu"
                background="#ccffcc"
                md_offset="1"
                endpoint={endpoint}
            />
            <RightContent
                title="Certifications"
                filter="certs"
                background="#ffffaa"
                md_offset="2"
                endpoint={endpoint}
            />
            <RightContent
                title="Projects"
                filter="proj"
                background="#ffdddd"
                endpoint={endpoint}
            />
            <Social
                type="GitHub"
                url = "https://github.com/AdamDIOM"
                logo = "https://cdn-icons-png.flaticon.com/512/25/25231.png"
                background="#ffffff"
            />
            <div className="high text-center text-light mt-20">
                    <p>more content coming soon...</p>
                    <p>for now, check out the <a href="https://adamd.fyi" className="text-light">legacy site</a></p></div>
        </Row>
      </Container>
    );
  }
  
  export default Home;