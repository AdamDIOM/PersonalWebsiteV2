import { Container, Row } from "react-bootstrap";
import Intro from "./Intro/Intro";
import Experience from "./Experience/Experience";
import Social from "./Social/Social";

function Home() {
    return (
      <Container>
        <Row>
            <Intro />
            <Experience 
                title="Experience"
                filter="exp"
                background="#e4ceff"
                md_span="8"
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
            <Experience 
                title="Education"
                filter="edu"
                background="#ccffcc"
                md_offset="1"
            />
            <div className="high text-center text-light mt-20">
                    <p>more content coming soon...</p>
                    <p>for now, check out the <a href="https://adamd.fyi" className="text-light">legacy site</a></p></div>
        </Row>
      </Container>
    );
  }
  
  export default Home;