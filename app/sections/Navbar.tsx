"use client"
import React, { useState, useEffect } from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = (id: string) => {
    if (isClient) {
      const element = document.getElementById(id);
      if (element) {
        // element.scrollIntoView({ behavior: "smooth" });
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      <div className="sticky top-10 bottom-30 mt-0 z-50">
        <Dock magnification={50} distance={20} direction="middle" className="">
          <DockIcon
            className="dark:bg-white/10 p-3 mx-5 font-bold"
            onClick={() => scrollToSection("home")} // Fix here
          >
            HOME
          </DockIcon>

          <DockIcon
            className="dark:bg-white/10 p-3 mx-5 font-bold"
            onClick={() => scrollToSection("about")} // Fix here
          >
            ABOUT
          </DockIcon>

          <DockIcon
            className="dark:bg-white/10 p-3 mx-5 font-bold"
            onClick={() => scrollToSection("skills")} // Fix here
          >
            SKILLS
          </DockIcon>
          
          <DockIcon
            className="dark:bg-white/10 p-3 mx-10 font-bold"
            onClick={() => scrollToSection("projects")} // Fix here
          >
            PROJECTS
          </DockIcon>
        </Dock>
      </div>
    </>
  );
}
