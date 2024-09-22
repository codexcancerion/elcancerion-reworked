import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Intersection from "@/components/original/Intersection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intersection />
      <About />
      <Intersection />
      <Skills />
      <Intersection />
      <Projects />
    </>
  );
}
