import { Col, Row } from "react-bootstrap";
import './TitledText.css';
import '../Image/Image.css';


export default function TitledText(props) {
    var padding = props.padding === undefined || props.padding === "" ? 3 : props.padding;
    console.log(props.content);
    return (
        <Col  md={{span: 8, offset: 2}} className={"graphic-box rounded shadow-sm dm-sans-500 mt-10 p-" + padding} style={{ background: props.background, color: props.color, overflow: props.overflow ? "visible" : "hidden" }}>
            <Row className="align-middle">
                <Col sm={12} className="d-block f-xl text-center">
                    <p>{props.title}</p>
                    {props.content.map((element, index) => (
                        <p className="font-std" key={index}>{element}</p>
                    ))}
                </Col>
            </Row>
        </Col>
    );
  }