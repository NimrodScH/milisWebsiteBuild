import "./project-card.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProjectCard = (props: {
  imageAlt: string;
  imageSrc: string;
  hintLabel: "קרא עוד";
  firstName: string;
  lastName: string;
  role: string;
  text: string;
  isClicked: boolean;
  index: number;
  isMouseHover: boolean;
  onCardClick: () => void;
}) => {
  const location = useLocation();
  const [isMouseHover, setMouseHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="project-card-project-card">
      <div
        onMouseEnter={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
        onClick={props.onCardClick}
        className={
          location.pathname === "/projects"
            ? "project-card-image-container"
            : "project-card-image-container-home"
        }
      >
        {isMouseHover && location.pathname === "/" ? (
          <>
            <div
              className="project-card-text"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                height: "100%",
                padding: "1rem",
                textAlign: "right",
              }}
            >
              {props.text}
            </div>
            <div
              className="project-card-read-more-container-hovering"
              onClick={() => {
                props.onCardClick();
                navigate("/projects", {
                  state: { activeCardIndex: props.index },
                });
              }}
            >
              <span className="project-card-hint">{props.hintLabel}</span>
              <img src="left arrow.png" className="project-card-icon1" />
            </div>
          </>
        ) : (
          <>
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className={
                props.isClicked && location.pathname === "/projects"
                  ? "project-card-image project-card-image-container-selected"
                  : "project-card-image"
              }
            />
          </>
        )}
      </div>
      <span className="project-card-first-name">{props.firstName}</span>
      <span className="project-card-last-name">{props.lastName}</span>
    </div>
  );
};

export default ProjectCard;
