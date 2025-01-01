import { useState } from "react";
import Navigation from "../components/navigation/navigation";
import "../views/home.css";
import NumbersCard from "../components/numbers-card";
import SpeakerCard from "../components/project-card";
import Signup from "../components/contact";
import cards from "../Data/Projects-Cards-Page";
import NumberCardsData from "../Data/Numbers-Cards";

function HomePage() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  return (
    <>
      <div className="home-container1">
        <Navigation path="/contact" btn="צור קשר" />
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width1 max-content-container">
              <div className="home-content-container1">
                <h1 className="home-text10 Heading1">
                  <span>
                    מילי בן עזרא
                    <br />
                  </span>
                  <span className="home-text12 Heading2">
                    אדריכלות ובינוי ערים
                  </span>
                </h1>
                <span className="home-text14">
                  <span>מעל 25 שנים של תכנון פרוייקטים בכל סוגי התכנון</span>
                  <br />
                  <span>
                    בניינים משותפים, בתים פרטיים, מבני ציבור והתחדשות עירונית
                  </span>
                </span>
              </div>
              <div className="home-video-container">
                <img
                  alt="image"
                  src="mili.png"
                  loading="lazy"
                  className="home-image1"
                />
              </div>
            </div>
            <div className="home-orange-background"></div>
          </div>
        </main>

        <div className="home-speakers section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-heading-container1">
              <span className="home-text18">
                עשינו הרבה פרוייקטים אבל אי אפשר להראות את כולם
              </span>
              <h1 className="home-text19 Heading2">פרוייקטים לדוגמא</h1>
            </div>

            <div className="home-speakers-container">
              {cards.map((card, index) => (
                <SpeakerCard
                  key={index}
                  imageAlt={card.firstName}
                  imageSrc={card.imageSrc}
                  hintLabel="קרא עוד"
                  firstName={card.firstName}
                  lastName={card.lastName}
                  role=""
                  text={card.preText}
                  isMouseHover={true}
                  isClicked={activeCardIndex === index}
                  index={index}
                  onCardClick={() => setActiveCardIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="home-numbers-banner section-container">
          <div className="home-container3 max-content-container">
            <div className="home-heading-container2">
              <span className="home-text20">25 שנות ניסיון והישגים</span>
              <h1 className="home-text21 Heading2">
                <span>נתונים מהשנה האחרונה</span>
              </h1>
            </div>
            <div className="home-numbers-container">
              {NumberCardsData.map((NumberCards, index) => (
                <NumbersCard
                  key={index}
                  imageAlt={NumberCards.text}
                  imageSrc={NumberCards.imageSrc}
                  number={NumberCards.number}
                  text={NumberCards.text}
                />
              ))}
            </div>
          </div>
        </div>
        <Signup headline={true} />
      </div>
    </>
  );
}

export default HomePage;
