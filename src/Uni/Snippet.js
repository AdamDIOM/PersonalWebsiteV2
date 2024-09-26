import { Col, Container, Row } from "react-bootstrap";
import './Snippet.css';
import { Parallax } from "react-scroll-parallax";


function Snippet() {
    return (
        <a href="https://instagram.com/mista_koo1" className="text-decoration-none text-dark">
            <Container  className="intro-container dm-sans-500 mt-20">
                <Row>
                    <Col  md={{span: 8, offset: 2}} className="intro p-3 rounded shadow-sm">
                        <Row className="align-middle">
                            <Col lg={6} sm={12} className="f-xl text-center d-none d-lg-flex justify-content-center">
                                <Parallax speed={100} className="d-flex align-items-end parallax-intro">
                                    <span>Follow me!</span>
                                </Parallax>
                            </Col>
                            <Col sm={12} className="d-block d-lg-none f-xl text-center">
                                <span>Follow me!</span>
                            </Col>
                            <Col lg={6} sm={12}>
                                <img src="/img/Instagram QR.png" alt="QR code to Adam's Instagram" className="img-fluid rounded-extra"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </a>
    );
  }
  
  export default Snippet;