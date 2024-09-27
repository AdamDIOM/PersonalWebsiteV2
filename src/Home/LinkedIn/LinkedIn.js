import { Col, Row } from "react-bootstrap";
import './LinkedIn.css';
import { Parallax } from "react-scroll-parallax";


function LinkedIn() {

    return (
        <Col  md={{span:2, offset:1}} className="d-flex align-items-center">
            <Parallax speed={100} className="d-none d-md-flex parallax-experience">
                <a href="https://linkedin.com/in/adam-drummond">
                <Row className="linkedin p-3 rounded shadow-sm mt-10 mb-2 dm-sans-500 h-25 d-flex align-items-center justify-content-center h-auto">
                    <img src="/img/Linkedin Logo.png" alt="LinkedIn Logo" className="w-md-100 shadow-white rounded-30 p-0"/>
                </Row>
                </a>
            </Parallax>
            <div className="d-block d-md-none">
                <a href="https://linkedin.com/in/adam-drummond">
                <Row className="linkedin p-3 rounded shadow-sm mt-10 mb-2 dm-sans-500 h-25 d-flex align-items-center justify-content-center h-auto">
                    <img src="/img/Linkedin Logo.png" alt="LinkedIn Logo" className="w-25 shadow-white rounded-30 p-0"/>
                </Row>
                </a>
            </div>
        </Col>
            
    );
  }
  
  export default LinkedIn;