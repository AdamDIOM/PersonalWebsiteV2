import { Container, Row } from "react-bootstrap";
import Intro from "./Intro/Intro";
import Experience from "./Experience/Experience";
import LinkedIn from "./LinkedIn/LinkedIn";

function Home() {
    return (
      <Container>
        <Row>
            <Intro />
            <Experience />
            <LinkedIn />
            <div className="high text-center text-light mt-20">
                    <p>more content coming soon...</p>
                    <p>for now, check out the <a href="https://adamd.fyi" className="text-light">legacy site</a></p></div>
        </Row>
      </Container>
    );
  }
  
  export default Home;