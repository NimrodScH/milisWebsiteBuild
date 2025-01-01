import SpeakerCard from "../components/project-card";
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
      if (window.innerWidth > 991) {
        activeTextRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [activeCardIndex]);

  return (
    <>
      {window.innerWidth > 991 && (
        <div className="text-50-side">
          {activeCardIndex !== null && (
            <>
              <div className="home-hero section-container-projects">
                <div className="home-max-width1 max-content-container">
                  <div
                    className="home-content-container1-projects project-details-container"
                    ref={activeTextRef}
                  >
                    <h1 className="home-text19 Heading2 project-details-title">
                      {cards[activeCardIndex]?.firstName}
                    </h1>
                    <h2 className="speaker-card-last-name Heading2 project-details-title">
                      {cards[activeCardIndex]?.lastName}
                    </h2>
                  </div>
                  <div className="home-heading-container1">
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="project-details-description">
                {cards[activeCardIndex]?.text}
              </div>
            </>
          )}
        </div>
      )}

      {window.innerWidth < 991 && (
        <>
          {activeCardIndex !== null && (
            <>
              <div className="home-hero section-container" ref={activeTextRef}>
                <div className="home-max-width1 max-content-container">
                  <div className="home-content-container1">
                    <h1 className="home-text19 Heading2 project-details-title">
                      {cards[activeCardIndex]?.firstName}
                    </h1>
                    <h2 className="speaker-card-last-name Heading2 project-details-title">
                      {cards[activeCardIndex]?.lastName}
                    </h2>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "justify" }}>
                {cards[activeCardIndex]?.text}
              </div>
            </>
          )}
        </>
      )}

      <div className="projects-container">
        <div className="home-speakers section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-heading-container1">
              <span className="home-text18">
                עשינו הרבה פרוייקטים אבל אי אפשר להראות את כולם
              </span>
              <h1 className="home-text19 Heading2">פרוייקטים לדוגמא</h1>
            </div>
            <div className="home-speakers-container-projects">
              {cards.map((card, index) => (
                <SpeakerCard
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
      </div>
    </>
  );
  
}

export default Projects;
