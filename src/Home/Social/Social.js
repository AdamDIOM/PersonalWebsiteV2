import { Col, Row } from "react-bootstrap";
import './Social.css';
import { Parallax } from "react-scroll-parallax";


function Social(props) {

    return (
        <Col  md={{span:3, offset: props.md_offset ?? 1}} lg={{span:2, offset:1}} className="d-flex align-items-center">
            <Parallax speed={100} className="d-none d-md-flex parallax-experience">
                <a href={props.url}>
                <Row className="social-background p-3 rounded shadow-sm mt-10 mb-2 dm-sans-500 h-25 d-flex align-items-center justify-content-center h-auto" style={{background: props.background}}>
                    <img src={props.logo} alt={props.type + " logo"} className="w-md-100 shadow-white rounded-30 p-0"/>
                </Row>
                </a>
            </Parallax>
            <div className="d-block d-md-none">
                <a href={props.url}>
                <Row className="linkedin p-3 rounded shadow-sm mt-10 mb-2 dm-sans-500 h-25 d-flex align-items-center justify-content-center h-auto">
                    <img src={props.logo} alt={props.type + " logo"} className="w-25 shadow-white rounded-30 p-0"/>
                </Row>
                </a>
            </div>
        </Col>
            
    );
  }
  
  export default Social;