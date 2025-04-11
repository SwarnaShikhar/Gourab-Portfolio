import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ExperienceCards";
import Particle from "../Particle";
import accenture from "../../Assets/Projects/acc.jpeg";
// import hyperbola from "../../Assets/Projects/Instagram post 19.png";
import dimensionlabs from "../../Assets/Projects/Social Media logo.png";
import flytrail from "../../Assets/Projects/1630650340300.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experiences </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few organisations I've worked with recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hyperbola}
              isBlog={false}
              title="Operations Manager"
              description=" In this internship, I was into Statistical Data Analysis , Operations Administration , Search Engine Optimization. "
              // ghLink="https://github.com/Gourabdeb1619/Report-Analysis"
              liLink="https://www.linkedin.com/posts/gourab-deb-b77843142_im-happy-to-share-that-im-starting-a-new-activity-7151439338709409792-DgIT?utm_source=share&utm_medium=member_desktop"
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dimensionlabs}
              isBlog={false}
              title="Operations Head"
              description="Here I manage all the operations of the company including , managing inventories, handling the printing technologies , analysis of the databases etc."
              liLink="https://www.linkedin.com/company/dimensionlabs/"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flytrail}
              isBlog={false}
              title="Data Analyst & Video Editor"
              description="Analysed reports and made visual dashboards with details in various entities along with editing videos for social media "
              liLink="https://www.linkedin.com/company/flytrail/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accenture}
              isBlog={false}
              title="Data Analyst"
              description="Real time work experience in Accenture as data analyst . Learned data modelling, data cleaning , visualization , presented the analytical report to clients and communicate with them , allotted with team and team work and many more."
              liLink="https://www.linkedin.com/posts/gourab-deb-b77843142_internship-data-visualization-activity-7083739843058372609-ohRm?utm_source=share&utm_medium=member_desktop"
              // demoLink="https://laughterclub.netlify.app/"
            />
          </Col>{" "}
          */
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
