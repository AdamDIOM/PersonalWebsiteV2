import { Col, Row } from "react-bootstrap";
import './Intro.css';
import { Parallax } from "react-scroll-parallax";


function Intro() {
    return (
        <Col  md={{span: 8, offset: 2}} className="intro p-3 rounded shadow-sm dm-sans-500 mt-20">
            <Row className="align-middle">
                <Col lg={6} sm={12} className="f-xl text-center d-none d-lg-flex justify-content-center">
                    <Parallax speed={100} className="d-flex align-items-center parallax-intro">
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
    );
  }
  
  export default Intro;