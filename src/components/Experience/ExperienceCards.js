import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function ProjectCards(props) {
  const renderButton = () => {
    if (props.ghLink && props.liLink) {
      return (
        <>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
          &nbsp; {/* Add spacing */}
          <Button variant="primary" href={props.liLink} target="_blank">
            <FaLinkedinIn /> &nbsp; LinkedIn
          </Button>
        </>
      );
    } else if (props.ghLink) {
      return (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp; GitHub
        </Button>
      );
    } else if (props.liLink) {
      return (
        <Button variant="primary" href={props.liLink} target="_blank">
          <FaLinkedinIn /> &nbsp; LinkedIn
        </Button>
      );
    } else {
      return null;
    }
  };


  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {renderButton()}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
