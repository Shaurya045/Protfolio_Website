import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiLinux,
  SiGithub,
  SiDocker,
  SiUbuntu,
  SiWindows,
  SiRender,
  SiJest,
  SiAdobepremierepro,
  SiAdobeillustrator,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiWindows />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiVisualstudiocode />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiGithub />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiDocker />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiJest />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiLinux />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiUbuntu />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiVercel />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiRender />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiPostman />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiAdobepremierepro />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiAdobeillustrator />
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
