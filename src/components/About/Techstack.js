import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiMongodb,
  DiFirebase,
  DiHtml5,
  DiGit,
  DiPython,
  DiCss3,
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
        <div className="flex justify-center items-center group relative">
          <CgCPlusPlus />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px]">C++</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <DiPython />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Python</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <DiJavascript1 />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Javascript</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiTypescript />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Typescript</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <DiHtml5 />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">HTML</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <DiCss3 />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">CSS</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <DiReact />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">React</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <RiNextjsFill />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Nextjs</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <RiTailwindCssFill />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Tailwind</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <TbBrandThreejs />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">React Three Fiber</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <DiNodejs />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Nodejs</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <SiExpress />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Express</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <DiMongodb />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">MongoDB</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <DiMysql />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">MySQL</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <DiFirebase />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Firebase</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <TbBrandSocketIo />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">WebSocket</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center group relative">
          <DiGit />
          <p className="hidden group-hover:block absolute bottom-[-26px] left-0 text-[14px] ">Git</p>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
