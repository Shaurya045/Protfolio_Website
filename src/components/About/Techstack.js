import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNextjs,
  DiNodejs,
  DiMysql,
  DiMongodb,
  DiFirebase,
  DiHtml5,
  DiGit,
  DiPython,
  DiCss3,
  DiIllustrator,
  DiPhotoshop,
} from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <CgCPlusPlus />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiPython />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiJavascript1 />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiTypescript />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiHtml5 />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiCss3 />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiReact />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <RiNextjsFill />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <RiTailwindCssFill />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <TbBrandThreejs />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiNodejs />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiExpress />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiMongodb />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiMysql />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiFirebase />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <TbBrandSocketIo />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiGit />
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
