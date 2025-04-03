import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import face from "../../assets/Projects/Face_recognition.jpeg";
import green from "../../assets/Projects/Greener_Grub.png";
import todo from "../../assets/Projects/Todo_App.png";
import ornate from "../../assets/Projects/ornate_project.png";
import madhavori from "../../assets/Projects/madhavori_project.png";
import leads from "../../assets/Projects/Leads_tracker.png";
import food from "../../assets/Projects/Food_Store.png";
import dscan from "../../assets/Projects/DScan.png";
import nabrah from "../../assets/Projects/nabrah.png";
import dumbledore from "../../assets/Projects/dumbledore.png";
import irctc from "../../assets/Projects/irctc.png";
import dashboard from "../../assets/Projects/nabrah_Dashboard.png";
import dfchecker from "../../assets/Projects/DFChecker.png";
import translator from "../../assets/Projects/translator.png";
import stock from "../../assets/Projects/stockManager.png";
import password from "../../assets/Projects/password.png";
import voiceAI from "../../assets/Projects/voiceAI.png";
import ProjectOverview from "./ProjectOverview";

function Projects() {
  const [domain, setDomain] = useState("");

  const projects = [
    {
      imgPath: food,
      title: "Food Store",
      description:
        "Developed a full-stack e-commerce platform for a food store using the MERN stack (MongoDB, Express.js, React.js,Node.js) with separate admin and customer interfaces, enabling efficient inventory and order management.",
      ghLink: "https://github.com/Shaurya045/Food-Store",
      demoLink: "https://food-store-wine-pi.vercel.app/",
      domains: ["Full-Stack", "Frontend", "Backend"],
    },
    {
      imgPath: green,
      title: "Optimizing Food Recycling Website",
      description:
        "Spearheaded the development of a platform leveraging React JS, Express JS, Node JS and Mongo DB to tackle foodwastage. Connected food suppliers with local food banks and NGOs, optimizing distribution logistics.",
      ghLink:
        "https://github.com/Shaurya045/Greener_Grub--Optimizing-Food-Recycling-Project-",
      demoLink: "https://greener-grub-amber.vercel.app/",
      domains: ["Full-Stack", "Frontend", "Backend"],
    },
    {
      imgPath: translator,
      title: "Speech to Text Multilingual App",
      description:
        "Developed a cross-platform mobile app for IOS and Android using React Native, enabling real-time speech-to-text conversion in 10+ languages, including Hindi, Japanese, Russian, and more.",
      ghLink: "https://github.com/Shaurya045/Recorded_Text_Conversion_App",
      domains: ["App"],
    },
    {
      imgPath: irctc,
      title: "IRCTC Backend",
      description:
        "Developed a backend system for IRCTC using Node.js, Express.js, and MySQL, enabling user registration, login, and secure authentication with JWT (JSON Web Tokens). Implemented role-based access control, allowing admins to add train details and users to check availability, book seats, and view booking details, ensuring a seamless booking experience.",
      ghLink: "https://github.com/Shaurya045/IRCTC_Backend",
      domains: ["Backend"],
    },
    {
      imgPath: dumbledore,
      title: "Dumbledoremedia Website",
      description:
        "Developed a website for a media agency using React for frontend. This website was used by the agency to show their projects, get clients online and also hire interns.",
      ghLink: "https://github.com/Shaurya045/Dumbledore-Media",
      demoLink: "https://dumbledore-media.vercel.app/",
      domains: ["Frontend"],
    },
    {
      imgPath: dfchecker,
      title: "Diabetic Checker Mobile App",
      description:
        "Developed a cross-platform mobile app for iOS and Android using React Native, enabling diabetic risk assessment through user inputs and AI-based foot photo analysis, serving many users. Built a robust backend with Node.js, Express.js, and MongoDB for efficient data management, report generation, and automated notification scheduling, reducing manual effort by 30%.",
      // ghLink: "https://github.com/Shaurya045/Ornate_Website",
      // demoLink: "https://www.ornatemakeup.com/",
      domains: ["Intern", "App"],
    },
    {
      imgPath: dscan,
      title: "Deep Scan Website",
      description:
        "Re-Designed and developed the company's website to show company's services, about the company and a contact service from which user can connect with the company for required service.",
      // ghLink: "https://github.com/Shaurya045/Ornate_Website",
      demoLink: "https://www.dscan.ai/",
      domains: ["Intern", "Frontend"],
    },
    {
      imgPath: nabrah,
      title: "Nabrah(Calling AI) Website",
      description:
        "Developed a website using Nextjs for a saudi company(Nabrah). This is landing page for the company showing their services, about their calling AI Agent and a demo call feature by allowing user to give the saudi phone no., this website is available in two langauges English and Arabic.",
      // ghLink: "https://github.com/Shaurya045/Ornate_Website",
      demoLink: "https://www.nabrah.ai/",
      domains: ["Intern", "Frontend"],
    },
    {
      imgPath: dashboard,
      title: "Nabrah Dashboard",
      description:
        "Developed a dashboard for the company to internally manage their functionality of sending list of phone no.s with the respective name to an API for calling. I converted the uploaded CSV file by the company on their dashboard to json format and send it to the respective API.",
      // ghLink: "https://github.com/Shaurya045/Ornate_Website",
      // demoLink: "https://www.nabrah.ai/",
      domains: ["Intern", "Full-Stack", "Frontend", "Backend"],
    },
    {
      imgPath: ornate,
      title: "Makeup Academy Website",
      description:
        "Developed a full-stack website for a makeup academy using the MERN stack. Key features include a real-time customer review system with dynamic portfolio rendering optimized for desktop and mobile.",
      ghLink: "https://github.com/Shaurya045/Ornate_Website",
      demoLink: "https://www.ornatemakeup.com/",
      domains: ["Frontend"],
    },
    {
      imgPath: voiceAI,
      title: "Voice Assistant AI App",
      description:
        "Developed a cross-platform voice assistant app for IOS and Android using React Native, enabling real-time speech recognition and response generation for 1,000+ users.",
      ghLink: "https://github.com/Shaurya045/Voice-Assistant_AI-APP",
      domains: ["App"],
    },
    {
      imgPath: madhavori,
      title: "Tour & Travel Website",
      description:
        "Built a dynamic travel website using ReactJS, NodeJS, and ExpressJS. Key features include a robust tour package filtering system and a dynamic itinerary display with engaging animations.",
      ghLink: "https://github.com/Shaurya045/TravelWebsiteforClient",
      demoLink: "https://www.madhavori.com/",
      domains: ["Frontend"],
    },
    {
      imgPath: password,
      title: "Password Generator App",
      description:
        "Developed an app using React Native, for generating random passwords and copy them to use it for easy access.",
      ghLink: "https://github.com/Shaurya045/Password-Generator-App",
      domains: ["App"],
    },
    {
      imgPath: todo,
      title: "TODO App with Login and SignUp Authentication",
      description:
        "Created a dynamic task management website using React.js, Node.js, and MongoDB. Enabled users to create, edit, delete and track the status of their tasks.",
      ghLink: "https://github.com/Shaurya045/TODO_App",
      domains: ["Full-Stack", "Frontend", "Backend"],
    },
    {
      imgPath: stock,
      title: "Stock Manager App",
      description:
        "Developed an app using React Native, to manage stocks. User can add new item, edit added item stock and can view low stocks.",
      ghLink: "https://github.com/Shaurya045/Stock-manager",
      domains: ["App"],
    },
    {
      imgPath: face,
      title: "Face Recognition using Python",
      description:
        "A face recognition system that identifies the face and add it in a csv file with date and time. Made using OpenCv and Pandas library.",
      ghLink: "https://github.com/Shaurya045/Face_Recognition",
      domains: ["Other"],
    },
    {
      imgPath: leads,
      title: "Leeds Tracker Chrome Extension",
      description:
        "It is a chrome extension which enables users to instantly jot in recent leeds and delete them if the job is done. It is more of an instant use tool, with lesser relevance.",
      ghLink: "https://github.com/Shaurya045/Chrome_extension",
      domains: ["Other"],
    },
  ];

  const filteredProjects = domain
    ? projects.filter((project) => project.domains.includes(domain))
    : projects;

  return (
    <Container fluid className="project-section">
      <Particle />
      <div style={{ width: "100%", height: "400px" }}>
        <ProjectOverview />
      </div>
      <Container>
        <h1 className="project-heading mt-[20px] ">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row
          className="justify-content-center g-1 py-3" // g-2 adds gutter spacing, py-3 for vertical padding
        >
          {["Full-Stack", "App", "Intern", "Frontend", "Backend", "Other"].map(
            (filter) => (
              <Col
                key={filter}
                xs={6} // 2 columns on extra small screens (12/6=2)
                sm={4} // 3 columns on small screens (12/4=3)
                md={3} // 4 columns on medium screens (12/3=4)
                lg={2} // 6 columns on large screens (12/2=6)
                xl={2} // 6 columns on extra large screens
                xxl={2} // 6 columns on extra extra large screens
                className="px-2" // Horizontal padding for each column
              >
                <div
                  onClick={() => setDomain(domain === filter ? "" : filter)}
                  className={`tech-icons cursor-pointer w-100 p-2 text-center ${
                    domain === filter ? "active-filter" : ""
                  }`}
                  style={{
                    minWidth: "100px", // Minimum width for each filter button
                    maxWidth: "150px", // Maximum width for each filter button
                    margin: "0 auto", // Center the button within the column
                  }}
                >
                  <p className="text-white text-[16px] md:text-[18px] font-semibold mb-0">
                    {filter}
                  </p>
                </div>
              </Col>
            )
          )}
        </Row>
        <p className="text-white text-[18px] font-semibold">
          Total Projects :{" "}
          <span className="text-[#4E9F3D] font-bold text-[20px] ">
            {filteredProjects.length}
          </span>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
