import React from "react";
import Navigation from "../Navigation/Navigation";
import "./_contentprojets.scss";
import datas from "../Cards/dataprojets";
import Cards from "../Cards/Cards";

export default function ContentProjets() {
  return (
    <main className="fond-projets">
      <Navigation />
      <div className="title">
        <h1>Mes Projets</h1>
        <div className="bar"></div>
      </div>
      <div className="container-projets">
        {datas.map((data) => {
          console.log(data);
          return (
            <Cards
              key={data.id}
              id={data.id}
              name={data.name}
              githublink={data.githublink}
              formation={data.formation}
              title={data.title}
              content={data.content}
              languages={data.languages}
              aclass={data.aclass}
              cover={data.cover}
              alt={data.alt}
              formtitle={data.formtitle}
              formdescription={data.formdescription}
              rightside={data.rightside}
            />
          );
        })}
      </div>
    </main>
  );
}
