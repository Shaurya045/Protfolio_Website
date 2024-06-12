import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Thanks for dropping by my portolio website, its a great pleasure to have you here.
            <br />
            Hi! I am <b className="purple">Swarn Pratap Singh</b> hailing from Patna, Bihar and based in <span className="purple">Pune, Maharashtra.</span>
            <br />
            I am a young <b className="purple">tech enthusiast</b> hoping serve the world with my skillset and abilities. 
            <br />
            I have recently been working on a tech product which is a <b className="purple">casual academic exploration app</b>. And also working in the field of <b className="purple">Quantum Engineering</b>, researching about <span className="purple">the use of photons to enable Quantum Communications</span>.
            <br />Hit my DMs in case you would like to know more or collaborate.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "He who conquers himself is the mightiest warrior" {" "}
          </p>
          <footer className="blockquote-footer">Confucious</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
