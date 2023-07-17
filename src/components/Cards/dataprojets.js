import kasa from "../../images/miniatureKasa.png";
import starbucks from "../../images/ministarbucks.png";
import ohmyfood from "../../images/Ohmyfoodmini.png";
import booki2 from "../../images/bookimini2.png";
import panthère from "../../images/panthèremini.png";

const datas = [
  {
    id: "kasa",
    formation: "Projet OpenClassrooms",
    title: "Kasa responsive website",
    content:
      "Dans ce projet, j'ai pu travailler avec des API et apprendre de nouvelles choses sur JavaScript et React. C'était le dernier projet front-end de ma formation OpenClassrooms et j'ai beaucoup apprécier le réaliser.",
    languages: ["VSCode", "HTML5", "SASS", "JavaScript", "React"],
    name: "container-card",
    aclass: "kasa",
    githublink: "https://gonith.github.io/ProjetKasa/",
    cover: kasa,
    alt: "miniature Kasa",
    formtitle: "formation-title",
    formdescription: "description",
    rightside: "rightside",
    formleftside: "miniature-kasa",
  },
  {
    id: "abcd1",
    formation: "Projet Personnel",
    title: "Landing Starbucks",
    content:
      "Création d'une landing page à propos de nouveaux produits. Je me suis entraîné ici aux animations JavaScript pour la première fois. Un premier pas dans l'immensité de possibilités qu'offre ce langage.",
    languages: ["VSCode", "HTML5", "CSS", "JavaScript"],
    name: "container-card-reverse",
    aclass: "starbucks",
    githublink: "https://gonith.github.io/Portfolio/starbucks.html",
    cover: starbucks,
    formtitle: "formation-title-reverse",
    formdescription: "description-reverse",
    rightside: "rightside-reverse",
    formleftside: "",
  },
  {
    id: "kmgz3",
    formation: "Projet OpenClassrooms",
    title: "Ohmyfood Mobile First",
    content:
      "Application web mobile-first faite pour les restaurants, les clients peuvent commander leurs plats avant d'arriver. Un gain de temps énorme pour les entreprises. Je me suis entraîné ici aux animations SASS.",
    languages: ["VSCode", "HTML5", "SASS"],
    name: "container-card",
    aclass: "ohmyfood",
    githublink: "https://gonith.github.io/p3-ohmyfood/",
    cover: ohmyfood,
    formtitle: "formation-title",
    formdescription: "description",
    rightside: "rightside",
    formleftside: "",
  },
  {
    id: "azdn4",
    formation: "Projet OpenClassrooms",
    title: "Projet Booki",
    content:
      "Intégration d'une page de location de logements, un de mes premiers projets, j'ai expérimenté ici mes premières animations en CSS, nostalgie quand tu nous tiens...",
    languages: ["VSCode", "HTML5", "CSS"],
    name: "container-card-reverse",
    aclass: "booki",
    githublink: "https://gonith.github.io/Portfolio/booki.html",
    cover: booki2,
    formtitle: "formation-title-reverse",
    formdescription: "description-reverse",
    rightside: "rightside-reverse",
  },
  {
    id: "seo5",
    formation: "Projet OpenClassrooms",
    title: "Projet La Panthère",
    content:
      "Optimisation d'un site Web SEO, erreurs W3C, et prise en main des outils nécessaires à la réalisation d'une stratégie SEO optimale. Les résultats sont visionnables sur Lighthouse.",
    languages: ["VSCode", "Lighthouse", "W3C", "Google analytics"],
    name: "container-card",
    aclass: "panthère",
    githublink: "https://gonith.github.io/Projet-4---Agence-La-Panth-re/",
    cover: panthère,
    formtitle: "formation-title",
    formdescription: "description",
    rightside: "rightside",
  },
];

export default datas;
