import { Col, Row } from "react-bootstrap";
import './RightGraphic.css';
import '../Image.css';
import { Parallax } from "react-scroll-parallax";


export default function RightGraphic(props) {
    var padding = props.padding === undefined || props.padding === "" ? 3 : props.padding;
    return (
        <Col  md={{span: 8, offset: 2}} className={"graphic-box rounded shadow-sm dm-sans-500 mt-20 p-" + padding} style={{ background: props.background }}>
            <Row className="align-middle">
                <Col lg={6} sm={12} className="f-xl text-center d-none d-lg-flex justify-content-center">
                    <Parallax speed={100} className="d-flex align-items-center parallax-intro">
                        <span>{props.caption}</span>
                    </Parallax>
                </Col>
                <Col sm={12} className="d-block d-lg-none f-xl text-center">
                    <span>{props.caption}</span>
                </Col>
                <Col lg={6} sm={12}>
                    <img src={props.img_url} alt={props.img_alt_text} className="img-fluid"/>
                </Col>
            </Row>
        </Col>
    );
  }