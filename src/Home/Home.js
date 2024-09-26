import { Container } from "react-bootstrap";
import Intro from "./Intro/Intro";
import Experience from "./Experience/Experience";

function Home() {
    return (
      <Container>
        <Intro />
        <Experience />
        <div className="high text-center mt-20">
                <p>more content coming soon...</p>
                <p>for now, check out the <a href="https://adamd.fyi">legacy site</a></p></div>
      </Container>
    );
  }
  
  export default Home;