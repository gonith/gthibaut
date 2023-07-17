import Navigation from "../Navigation/Navigation";
import "./_banner.scss";
import portrait from "./portrait.png";
import CV from "./CV_Thibaut_Gonzalez.pdf";

export default function Banner() {
  return (
    <div className="container-banner">
      <title>gthibaut - Accueil</title>
      <Navigation />
      <div className="container-circuit-title-head">
        <div className="circuit-bas"></div>
        <div className="title-head">
          <div className="text">
            {" "}
            <h1 className="frontdev">Développeur Front-End</h1>
            <h2 className="name">Thibaut Gonzalez</h2>
          </div>

          <img src={portrait} alt="Portrait de Thibaut Gonzalez" />
        </div>
        <div className="colonne-droite">
          <div className="circuit-droite"></div>
          <div className="container-btn">
            <a
              href={CV}
              className="cv-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
