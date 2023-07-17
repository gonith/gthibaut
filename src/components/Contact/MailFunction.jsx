import React, { useState } from "react";
import IMAGES from "../../images/ImagesPropos";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json(); // Ajout de cette ligne pour analyser la réponse JSON

        console.log("Email sent");
        setSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Réinitialisation des valeurs du formulaire
      } else {
        console.error("Error sending email");
        setSubmitting(false);
      }
    } catch (error) {
      console.error("Error sending email", error);
      setSubmitting(false);
    }
  };

  return (
    <div className="container-form">
      <div className="container-reseaux">
        <div className="container-logos-bar">
          <div className="logos">
            <a href="" className="insta">
              <img
                src={IMAGES.logoinsta}
                alt=""
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
            <a href="" className="twitter">
              <img
                src={IMAGES.logotwitter}
                alt=""
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
            <a
              href="https://github.com/gonith"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IMAGES.logogithub} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/thibautgonzalez/"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IMAGES.logolinkedin} alt="" />
            </a>
          </div>
          <div className="bardeco"></div>
        </div>
      </div>
      <div className="container-center">
        <p>
          Afin d'échanger au mieux sur votre projet, n'hésitez pas à remplir le
          formulaire de contact ci-dessous
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            className="formname"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre e-mail"
            className="formemail"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            className="formtext"
          ></textarea>
          <div className="container-btn">
            <button type="submit" disabled={submitting} className="btnsubmit">
              {submitting ? "Submitting..." : "Envoyer"}
            </button>
          </div>

          {submitted && <p>Merci pour votre message !</p>}
        </form>
      </div>

      <div className="container-decor">
        <div className="mails-open">Mes demandes sont ouvertes !</div>
        <div className="quotes">
          <ul>
            <li className="think">Think</li>
            <li className="design">Design</li>
            <li className="develop">Develop</li>
            <li className="together">Together</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
