import React, { useEffect, useRef, useState } from "react";
import "./_cards.scss";

export default function Cards({
  id,
  githublink,
  formation,
  title,
  content,
  languages,
  aclass,
  name,
  cover,
  alt,
  formtitle,
  formdescription,
  rightside,
  formleftside,
}) {
  const containerRef = useRef(null);
  const [isAnimationVisible, setAnimationVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = bottom - top;
      const visibleThreshold = containerHeight * 0.5; // 50% de la hauteur du conteneur

      if (top < windowHeight - visibleThreshold && bottom > visibleThreshold) {
        setAnimationVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Vérifier l'état initial lors du montage du composant
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerClassName = `${name} ${isAnimationVisible ? "animation" : ""}`;

  return (
    <div className={containerClassName} ref={containerRef}>
      <div className="leftside">
        <a
          className={aclass}
          href={githublink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cover} alt={alt} />
        </a>
      </div>

      <div className={rightside}>
        <div className={formtitle}>
          <h3>{formation}</h3>
          <h2>{title}</h2>
        </div>

        <div className={formdescription}>{content}</div>
        <div className="languages">
          <ul>
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
