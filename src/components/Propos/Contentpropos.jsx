import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./_apropos.scss";
import IMAGES from "../../images/ImagesPropos";

export default function Contentpropos() {
  const [isHTMLHovered, setIsHTMLHovered] = useState(false);
  const [isJSHovered, setIsJSHovered] = useState(false);
  const [isReactHovered, setIsReactHovered] = useState(false);
  const [isSassHovered, setIsSassHovered] = useState(false);
  const [isTSHovered, setIsTSHovered] = useState(false);
  const [isFigmaHovered, setIsFigmaHovered] = useState(false);
  const [isViteJsHovered, setIsViteJsHovered] = useState(false);

  const handleHTMLHover = () => {
    setIsHTMLHovered(!isHTMLHovered);
  };

  const handleJSHover = () => {
    setIsJSHovered(!isJSHovered);
  };

  const handleReactHover = () => {
    setIsReactHovered(!isReactHovered);
  };

  const handleSassHover = () => {
    setIsSassHovered(!isSassHovered);
  };

  const handleTypeScriptHover = () => {
    setIsTSHovered(!isTSHovered);
  };

  const handleFigmaHover = () => {
    setIsFigmaHovered(!isFigmaHovered);
  };

  const handleViteJsHover = () => {
    setIsViteJsHovered(!isViteJsHovered);
  };

  return (
    <main className="container-fond">
      <Navigation />
      <div className="container-content">
        <div className="left-light-skills">
          <ul className="leftfade">
            <li className={isHTMLHovered ? "html-hovered" : "html"}>html5</li>
            <li className={isJSHovered ? "javascript-hovered" : "javascript"}>
              javascript
            </li>
            <li className={isReactHovered ? "react-hovered" : "react"}>
              react
            </li>
            <li className={isSassHovered ? "sass-hovered" : "sass"}>sass</li>
            <li className={isTSHovered ? "typescript-hovered" : "typescript"}>
              typescript
            </li>
            <li className={isFigmaHovered ? "figma-hovered" : "figma"}>
              figma
            </li>
            <li className={isViteJsHovered ? "vitejs-hovered" : "vitejs"}>
              vitejs
            </li>
          </ul>
        </div>
        <div className="center-content">
          <div className="centerpropos">
            <div className="aboutme">
              <h2 className="firsttitle">À propos</h2>
              <div className="bar"></div>
            </div>
            <div className="textpropos">
              <p className="paragraphe1">
                Je me forme dans le développement depuis maintenant un an et
                j'apprends actuellement les fondamentaux du <span>design</span>,
                en parallèle je me perfectionne également en{" "}
                <span>React. </span>
                Je suis aussi capable de mener une <span>
                  stratégie SEO
                </span>{" "}
                pour votre référencement.
              </p>
              <p className="paragraphe2">
                Concevant des sites web - du cahier des charges à toute la
                partie
                <span> front-end</span>. <br />
                Je possède aussi quelques notions de back-end via express et
                MongoDB.{" "}
              </p>
            </div>
            <div className="myskills">
              <h2 className="scndtitle">Compétences</h2>
              <div className="bar2"></div>
            </div>

            <div className="container-skills-icons">
              <div className="skills-icons">
                <div className="inprocess">
                  <p>in process</p>
                </div>
                <div className="inside-elements">
                  <div className="leftside-skills-icons">
                    <img
                      className="htmlogo"
                      src={IMAGES.imageHTML}
                      alt=""
                      onMouseEnter={handleHTMLHover}
                      onMouseLeave={handleHTMLHover}
                    />
                    <img
                      className="jslogo"
                      src={IMAGES.imageJavaScript}
                      alt=""
                      onMouseEnter={handleJSHover}
                      onMouseLeave={handleJSHover}
                    />
                    <img
                      className="reactlogo"
                      src={IMAGES.imagereact}
                      alt=""
                      onMouseEnter={handleReactHover}
                      onMouseLeave={handleReactHover}
                    />
                    <img
                      className="sasslogo"
                      src={IMAGES.imagesass}
                      alt=""
                      onMouseEnter={handleSassHover}
                      onMouseLeave={handleSassHover}
                    />
                  </div>
                  <div className="splitbar"></div>
                  <div className="rightside-skills-icons">
                    <img
                      className="tslogo"
                      src={IMAGES.imageTypeScript}
                      alt=""
                      onMouseEnter={handleTypeScriptHover}
                      onMouseLeave={handleTypeScriptHover}
                    />
                    <img
                      className="figmalogo"
                      src={IMAGES.imageFigma}
                      alt=""
                      onMouseEnter={handleFigmaHover}
                      onMouseLeave={handleFigmaHover}
                    />
                    <img
                      className="vitejslogo"
                      src={IMAGES.imageViteJs}
                      alt=""
                      onMouseEnter={handleViteJsHover}
                      onMouseLeave={handleViteJsHover}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-light-about">
          <ul className="rightfade">
            <li className="read">read</li>
            <li className="sport">sport</li>
            <li className="meditation">meditation</li>
            <li className="think">think</li>
            <li className="design">design</li>
            <li className="develop">develop</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
