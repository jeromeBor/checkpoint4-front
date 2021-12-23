import { Row, Col } from "react-bootstrap";

const Title = ({text}) =>{
    return (
    <Row>
        <Col className="mx-auto ">
          <h1 className="page-title fw-bold text-center bg-transparent mx-auto mt-3">
          {text}
          </h1>
        </Col>
      </Row>
    )
}
export default Title;
