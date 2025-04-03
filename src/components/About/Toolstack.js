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
        <div className="flex justify-center items-center group relative">
          <SiWindows />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Windows</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiVisualstudiocode />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">VSCode</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiGithub />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Github</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiDocker />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Docker</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiJest />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Jest</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiLinux />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Linux</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiUbuntu />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Ubuntu</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiVercel />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Vercel</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiRender />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Render</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiPostman />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Postman</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiAdobepremierepro />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Adobe Premiere Pro</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiAdobeillustrator />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Adobe Illustrator</p>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
