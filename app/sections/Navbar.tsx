"use client";
import React, { useState} from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";

export default function Navbar() {

  return (
    <>
      <div className="sticky top-10 mt-0 z-50 " >
        <Dock magnification={50} distance={20} direction="middle">
          <DockIcon className="dark:bg-white/10 p-3 mx-5 font-bold text-sm" data-scrollto="home">
            <a href="#home">HOME</a>
          </DockIcon>

          <DockIcon className="dark:bg-white/10 p-3 mx-5 font-bold text-sm" data-scrollto="about">
            <a href="#about">ABOUT</a>
          </DockIcon>

          <DockIcon className="dark:bg-white/10 p-3 mx-5 font-bold text-sm" data-scrollto="skills">
            <a href="#skills">SKILLS</a>
          </DockIcon>

          <DockIcon className="dark:bg-white/10 p-3 mx-10 font-bold text-sm" data-scrollto="projects">
            <a href="#projects">PROJECTS</a>
          </DockIcon>

          <DockIcon className="dark:bg-white/10 p-3 mx-10 font-bold text-sm" data-scrollto="contactme">
            <a href="#contact">CONTACT</a>
          </DockIcon>
        </Dock>
      </div>
    </>
  );
}
