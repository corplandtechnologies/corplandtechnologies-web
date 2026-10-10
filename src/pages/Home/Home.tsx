import React from "react";
import Constructs from "../../components/Constructs/Constructs";
import Contact from "../../components/Contact/Contact";
import ContextMenu from "../../components/ContextMenu/ContextMenu";
import Corpland from "../../components/Corpland/Corpland";
import Cubbicles from "../../components/Cubbicles/Cubbicles";
import Hero from "../../components/Hero/Hero";
import Manifest from "../../components/Manifest/Manifest";
import NavBar from "../../components/NavBar/NavBar";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import usePage from "../../hooks/usePage";

export default function Home() {
  usePage("/");

  return (
    <>
      <NavBar />
      <ThemeButton />
      <ContextMenu />
      <Hero />
      <Manifest />
      <Constructs />
      <Corpland />
      <Cubbicles />
      <Contact />
    </>
  );
}
