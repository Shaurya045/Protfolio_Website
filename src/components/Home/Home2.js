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
                I am a final year student at
                <i>
                  <b className="purple">
                    {" "}
                    Rajiv Gandhi Institue of Petroleum Technology{" "}
                  </b>
                </i>
                which is located in Jais, UttarPradesh.
                <br />
                <br />Currently pursuing my B.Tech in Computer Science and Engineering. I've completed my 3rd year and am eager to showcase my skills and projects.
                <br />
                <br />I have worked on startup projects like &nbsp;
                <i>
                  <b className="purple">BMC Design Media, </b>
                  <b className="purple">and Pratap Library.</b>
                </i>
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
                <li className="social-icons">
                  <a
                    href="https://github.com/shaurya045"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
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
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/_shaurya_psingh08/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
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
