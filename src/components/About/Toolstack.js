import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiMicrosoftexcel,
  SiMysql,
  SiPowerbi,
  SiPowershell
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel/>
      </Col>
    </Row>
  );
}

export default Toolstack;
