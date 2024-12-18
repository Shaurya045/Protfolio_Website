import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ppf from "./shaurya_photo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import About from "../About/About";

function Home2() {
  return (
    <>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am a final-year B.Tech student in Computer Science and
                Engineering at
                <i>
                  <b className="purple">
                    {" "}
                    Rajiv Gandhi Institue of Petroleum Technology.{" "}
                  </b>
                </i>
                with a strong passion for web development, app development and
                problem-solving. My expertise lies in React.js, Node.js,
                MongoDB, React Native and Docker.
                <br />
                <br />
                I recently completed a Web Developer Internship at Deep Scan,
                where I developed production-ready websites and built a
                data-processing platform to automate CSV-to-JSON conversions for
                real-time API processing. Prior to this, during my internship at
                Dumbledore Media, I worked on creating and deploying dynamic
                websites for diverse industries like travel and education. My
                work included integrating 3D effects using React Three Fiber,
                ensuring responsiveness, and managing backend uptime using tools
                like UptimeRobot. I deployed projects seamlessly on platforms
                like Vercel and Render.
                <br />
                <br />
                My portfolio highlights impactful projects, including a
                logistics platform for food recycling, real-time review systems,
                and facial recognition tools. I’m passionate about solving
                problems, learning new technologies, and contributing to
                innovative solutions.
                {/* <i>
                  <b className="purple">BMC Design Media, </b>
                  <b className="purple">and Pratap Library.</b>
                </i> */}
                <br />
                {/* <br />I find time to work on my passion of building things by
                using technologies like
                <i>
                  <b className="purple"> Node JS, React JS, Java etc.</b>
                </i> */}
              </p>
            </Col>
            <Col md={3} className="myAvtar">
              <Tilt>
                <img src={ppf} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons ">
                  <a
                    href="https://github.com/shaurya045"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons "
                  >
                    <div className="w-full h-full flex flex-row justify-center items-center">
                      <AiFillGithub />
                    </div>
                  </a>
                </li>
                {/* <li className="social-icons">
                  <a
                    href="https://twitter.com/PratapSwarn"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li> */}
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/shauryapratapsingh01/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <div className="w-full h-full flex flex-row justify-center items-center">
                      <FaLinkedinIn />
                    </div>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/_shaurya_psingh08/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <div className="w-full h-full flex flex-row justify-center items-center">
                      <AiFillInstagram />
                    </div>
                  </a>
                </li>
                {/* <li className="social-icons">
                  <a
                    href="https://swarn.hashnode.dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <SiHashnode />
                  </a>
                </li> */}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Home2;
