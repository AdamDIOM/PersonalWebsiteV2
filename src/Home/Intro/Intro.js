import { Col, Container, Row } from "react-bootstrap";
import './Intro.css';


function Intro() {
    return (
        <Container  className="intro-container dm-sans-500">
            <Row>
                <Col  sm={{span: 8, offset: 2}} className="intro p-3 rounded shadow-sm">
                    <Row className="align-middle">
                        <Col md={6} sm={12} className="f-xl text-center d-flex justify-content-center align-items-center">
                            <span>Hey, I'm Adam!</span>
                        </Col>
                        <Col md={6} sm={12}>
                            <img src="/img/Adam.png" alt="Adam stood in front of a quay with boats and a lifting bridge" className="img-fluid"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
  }
  
  export default Intro;