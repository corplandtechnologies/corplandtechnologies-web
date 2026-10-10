import React from "react";
import Contact from "../../free/Contact/Contact";
import Corpland from "../../free/Corpland/Corpland";
import Faq from "../../components/Faq/Faq";
import Fit from "../../components/Fit/Fit";
import Founders from "../../components/Founders/Founders";
import Hero from "../../free/Hero/Hero";
import Manifest from "../../free/Manifest/Manifest";
import NavBar from "../../free/NavBar/NavBar";
import Offer from "../../components/Offer/Offer";
import Process from "../../components/Process/Process";
import { company, forms, freeNav } from "../../data/site";
import usePage from "../../hooks/usePage";

export default function Free() {
  usePage(company.freePath as "/free");

  return (
    <>
      <NavBar nav={freeNav} />
      <main className="App__main">
        <Hero />
        <Founders />
        <Corpland />
        <Offer />
        <Manifest />
        <Process />
        <Fit />
        <Faq />
        <Contact id="contact" form={forms.application} />
      </main>
    </>
  );
}
