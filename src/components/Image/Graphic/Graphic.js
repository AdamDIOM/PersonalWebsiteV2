import { Col, Row } from "react-bootstrap";
import './Graphic.css';

export default function Graphic(props) {
    var padding = props.padding === undefined || props.padding === "" ? 3 : props.padding;
    return (
        <Col  md={{span: 8, offset: 2}} className={"graphic-box rounded shadow-sm dm-sans-500 mt-10 p-" + padding} style={{ background: props.background }}>
            <Row className="align-middle">
                <Col sm={12}>
                    <img src={props.img_url} alt={props.img_alt_text} className="img-fluid"/>
                </Col>
            </Row>
        </Col>
    );
  }