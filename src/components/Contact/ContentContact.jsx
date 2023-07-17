import React from "react";
import Navigation from "../Navigation/Navigation";
import "./_contentcontact.scss";
import ContactForm from "./MailFunction";

export default function ContentContact() {
  return (
    <main className="fond-contact">
      <Navigation />
      <ContactForm />
    </main>
  );
}
