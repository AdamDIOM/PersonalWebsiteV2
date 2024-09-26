import { Col, Container, Row } from "react-bootstrap";
import './Intro.css';
import { Parallax } from "react-scroll-parallax";


function Intro() {
    return (
        <Container  className="intro-container dm-sans-500 mt-20">
            <Row>
                <Col  md={{span: 8, offset: 2}} className="intro p-3 rounded shadow-sm">
                    <Row className="align-middle">
                        <Col lg={6} sm={12} className="f-xl text-center d-none d-lg-flex justify-content-center">
                            <Parallax speed={100} className="d-flex align-items-end parallax-intro">
                                <span>Hey, I'm Adam!</span>
                            </Parallax>
                        </Col>
                        <Col sm={12} className="d-block d-lg-none f-xl text-center">
                            <span>Hey, I'm Adam!</span>
                        </Col>
                        <Col lg={6} sm={12}>
                            <img src="/img/Adam.png" alt="Adam stood in front of a quay with boats and a lifting bridge" className="img-fluid"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="high text-center mt-20">
                <p>more content coming soon...</p>
                <p>for now, check out the <a href="https://adamd.fyi">legacy site</a></p></div>
        </Container>
    );
  }
  
  export default Intro;