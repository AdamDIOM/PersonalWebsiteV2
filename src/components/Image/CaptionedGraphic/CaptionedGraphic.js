import { Col, Row } from "react-bootstrap";
import './CaptionedGraphic.css';

export default function CaptionedGraphic(props) {
    var padding = props.padding === undefined || props.padding === "" ? 3 : props.padding;
    return (
        <Col  md={{span: 8, offset: 2}} className={"graphic-box rounded shadow-sm dm-sans-500 mt-10 p-" + padding} style={{ background: props.background }}>
            <Row className="align-middle">
                <Col sm={12}>
                    <img src={props.img_url} alt={props.img_alt_text} className="img-fluid"/>
                </Col>

                <Col sm={12} className="d-block f-xl text-center">
                    <span>{props.caption}</span>
                </Col>
            </Row>
        </Col>
    );
  }