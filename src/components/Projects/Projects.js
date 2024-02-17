import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import laughter from "../../Assets/Projects/laughter.png"
import bitsOfCode from "../../Assets/Projects/blog.png";
import reportanalysis from "../../Assets/Projects/1690635319933.jpg";
import socialbuzzdashboard from "../../Assets/Projects/1689838924211.jpg";
import Salesanalytics from "../../Assets/Projects/Screenshot 2023-07-24 225916.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={reportanalysis}
              isBlog={false}
              title="Report Analysis"
              description="Sales Analysis report which includes various sales attributes to get a better understanding about growth , audience and other aspects of the company. "
              ghLink="https://github.com/Gourabdeb1619/Report-Analysis"
              liLink="https://www.linkedin.com/posts/gourab-deb-b77843142_datadrivendecisions-businessgrowth-salesinsights-activity-7091038489642725376-0Gqp?utm_source=share&utm_medium=member_desktop"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialbuzzdashboard}
              isBlog={false}
              title="Social Buzz Dasboard"
              description="Project-key points
              Data collection
              Data cleaning and wrangling
              Data modelling
              Data visualization
              Dashboard Design"
              liLink="https://www.linkedin.com/posts/gourab-deb-b77843142_powerbi-dataanalysis-datavisualization-activity-7087698161820966912-EF6k?utm_source=share&utm_medium=member_desktop"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Salesanalytics}
              isBlog={false}
              title="Sales Dashboard Veiw"
              description="A meticulously crafted Dashboard view showcasing detailed order summaries for the past few months of a company. Created with professionalism using PowerBI.bg."
              liLink="https://www.linkedin.com/posts/gourab-deb-b77843142_datavisualization-powerbi-businessintelligence-activity-7089614800711819265-MgG0?utm_source=share&utm_medium=member_desktop"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Gourabdeb1619/OnlyTxt"
              demoLink="https://onlytxt.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laughter}
              isBlog={false}
              title="Laughter Club"
              description="The website is hosted on Netlify and built using HTML, CSS, and JavaScript. It has a responsive design, adapting to different devices. The website utilizes a content delivery network (CDN) for efficient delivery of multimedia content. Users can interact with the website to explore a collection of entertaining videos, jokes, and humorous content."
              ghLink="https://github.com/Gourabdeb1619/LaughterClub"
              demoLink="https://laughterclub.netlify.app/"              
            />
          </Col>

        

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
