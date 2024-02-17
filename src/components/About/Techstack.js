import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
  DiMysql,
  DiCss3,
} from "react-icons/di";
import {
  FaJava,
  FaBootstrap,
  FaPython
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
