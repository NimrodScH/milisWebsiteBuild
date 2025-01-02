import ProjectCard from "../components/project-card";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../components/project-card.css";
import cards from "../Data/Projects-Cards-Page";

function Projects() {
  const location = useLocation();
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(
    location.state?.activeCardIndex ?? null
  );
  const activeTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCardIndex !== null && activeTextRef.current) {
      activeTextRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeCardIndex]);

  return (
    <div className="projects-page-container">
      {activeCardIndex !== null && (
        <div className="project-text-section" ref={activeTextRef}>
          <h1 className="project-title">
            {cards[activeCardIndex]?.firstName}
          </h1>
          <h2 className="project-subtitle">
            {cards[activeCardIndex]?.lastName}
          </h2>
          <p className="project-description">
            {cards[activeCardIndex]?.text}
          </p>
        </div>
      )}

      <div className="project-cards-section">
      <div className="home-heading-container1">
          <h1 className="home-text19 Heading2">פרוייקטים</h1>
        </div>
        <div className="project-cards-container">
          {cards.map((card, index) => (
            <ProjectCard
              key={index}
              index={index}
              imageAlt={card.firstName}
              imageSrc={card.imageSrc}
              hintLabel="קרא עוד"
              firstName={card.firstName}
              lastName={card.lastName}
              role=""
              isMouseHover={false}
              text={card.text}
              isClicked={activeCardIndex === index}
              onCardClick={() => setActiveCardIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

