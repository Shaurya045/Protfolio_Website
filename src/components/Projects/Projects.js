import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import face from "../../assets/Projects/Face_recognition.jpeg";
import green from "../../assets/Projects/Greener_Grub.png";
import todo from "../../assets/Projects/Todo_App.png";
import ornate from "../../assets/Projects/ornate_project.png";
import madhavori from "../../assets/Projects/madhavori_project.png";
import leads from "../../assets/Projects/Leads_tracker.png";
import ProjectOverview from "./ProjectOverview";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <div style={{ width: '100%', height: '450px' }}>
        <ProjectOverview />
      </div>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={green}
              isBlog={false}
              title="Optimizing Food Recycling Website"
              description="Spearheaded the development of a platform leveraging React JS, Express JS, Node JS and Mongo DB to tackle foodwastage. Connected food suppliers with local food banks and NGOs, optimizing distribution logistics."
              ghLink="https://github.com/Shaurya045/Greener_Grub--Optimizing-Food-Recycling-Project-"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ornate}
              isBlog={false}
              title="Makeup Academy Website"
              description="Developed a full-stack website for a makeup academy using the MERN stack. Key features include a real-time customer review system with dynamic portfolio rendering optimized for desktop and mobile. The frontend is deployed on Vercel, and the backend on Render, ensuring scalability and smooth performance with real-time monitoring."
              ghLink="https://github.com/Shaurya045/Ornate_Website"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={madhavori}
              isBlog={false}
              title="Tour & Travel Website"
              description="Built a dynamic travel website using ReactJS, NodeJS, and ExpressJS. Key features include a robust tour package filtering system and a dynamic itinerary display with engaging animations. The site is fully responsive, providing a seamless user experience across both desktop and mobile platforms."
              ghLink="https://github.com/Shaurya045/TravelWebsiteforClient"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TODO App with Login and SignUp Authentication"
              description="Created a dynamic task management website using React.js, Node.js, and MongoDB. Enabled users to create, edit, delete and track the status of their tasks."
              ghLink="https://github.com/Shaurya045/TODO_App"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Recognition using Python"
              description="A face recognition system that identifies the face and add it in a csv file with date and time. Made using OpenCv and Pandas library."
              ghLink="https://github.com/Shaurya045/Face_Recognition"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leads}
              isBlog={false}
              title="Leeds Tracker Chrome Extension"
              description="It is a chrome extension which enables users to instantly jot in recent leeds and delete them if the job is done. It is more of an instant use tool, with lesser relevance."
              ghLink="https://github.com/Shaurya045/Chrome_extension"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
