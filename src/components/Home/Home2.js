import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Passionate 
            <i>
                <b className="purple"> data enthusiast </b>
              </i>
              &nbsp; with a flair for 
              <i>
                <b className="purple"> analysis and visualization </b>
              </i>
              &nbsp;, seeking to leverage my skills in transforming raw data into meaningful insights.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> SQL, Java, Power BI, Operations, Excel. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Technologies and Data Analysis </b> and
                also in areas related to{" "}
                <b className="purple">
                  Database Management System .
                </b>
              </i>
              <br />
              <br />
              Beyond the world of data, I find creative expression through 
              <i>
                <b className="purple">
                  {" "}
                  video editing
                </b>
              </i>
              &nbsp;,strumming melodies on the
              <i>
                <b className="purple"> guitar</b>
              </i>
              &nbsp;,and tapping rhythmic beats on the
              <i>
                <b className="purple"> cajon.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
            <li className="social-icons">
                <a
                  href="mailto:gourabdeb1619@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/Gourabdeb1619"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/gourabd14590200?t=Ly-suMMzhOZoj4MtvKsPKA&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gourab-deb-b77843142"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/gourabdeb_1619?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
