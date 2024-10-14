import { Col, Row } from "react-bootstrap";
import './LeftGraphic.css';

import { Parallax } from "react-scroll-parallax";


export default function LeftGraphic(props) {
    var padding = props.padding === undefined || props.padding === "" ? 3 : props.padding;
    return (
        <Col  md={{span: 8, offset: 2}} className={"graphic-box rounded shadow-sm dm-sans-500 mt-10 p-" + padding} style={{ background: props.background, color: props.color }}>
            <Row className="align-middle">
                <Col lg={{span: 6, order: 1}} sm={{span: 12, order: 2}}>
                    <img src={props.img_url} alt={props.img_alt_text} className="img-fluid"/>
                </Col>
                <Col lg={{span: 6, order: 2}} sm={12} className="f-xl text-center d-none d-lg-flex justify-content-center">
                    <Parallax speed={100} className="d-flex align-items-center parallax-intro">
                        <span>{props.caption}</span>
                    </Parallax>
                </Col>
                <Col sm={{span: 12, order: 1}} className="d-block d-lg-none f-xl text-center">
                    <span>{props.caption}</span>
                </Col>
            </Row>
        </Col>
    );
  }