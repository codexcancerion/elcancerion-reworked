import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Intersection from "@/components/original/Intersection";
import Footer from "./sections/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Intersection /> */}
      <About />
      <Intersection />
      <Skills />
      <Intersection />
      <Projects />
      <Intersection />
      <ContactMe />
      <Footer />
    </>
  );
}
