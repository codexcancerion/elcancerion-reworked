"use client";
import React, { useState, useEffect } from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { HomeIcon, InfoIcon, Pickaxe, FolderIcon, MailIcon } from "lucide-react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if screen width <= 768px
    };

    // Initial check
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="sticky top-10 mt-0 z-50">
        <div className="mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md">
          <div className="flex aspect-square cursor-pointer items-center lg:px-3 md:px-3 px-2 justify-center rounded-full lg:font-xl md:font-xl font-sm font-bold lg:gap-5 md:gap-5">
            <a href="#home" className="hover:text-blue-800 lg:font-xl md:font-xl font-sm">
              {isMobile ? <HomeIcon className="w-6 h-6" /> : "HOME"}
            </a>
          </div>

          <div className="flex aspect-square cursor-pointer items-center lg:px-3 md:px-3 px-2 justify-center rounded-full lg:font-xl md:font-xl font-sm font-bold lg:gap-5 md:gap-5">
            <a href="#about" className="hover:text-blue-800 lg:font-xl md:font-xl font-sm">
              {isMobile ? <InfoIcon className="w-6 h-6" /> : "ABOUT"}
            </a>
          </div>

          <div className="flex aspect-square cursor-pointer items-center lg:px-3 md:px-3 px-2 justify-center rounded-full lg:font-xl md:font-xl font-sm font-bold lg:gap-5 md:gap-5">
            <a href="#skills" className="hover:text-blue-800 lg:font-xl md:font-xl font-sm">
              {isMobile ? <Pickaxe className="w-6 h-6" /> : "SKILLS"}
            </a>
          </div>

          <div className="flex aspect-square cursor-pointer items-center lg:px-3 md:px-3 px-2 justify-center rounded-full lg:font-xl md:font-xl font-sm font-bold lg:gap-5 md:gap-5">
            <a href="#projects" className="hover:text-blue-800 lg:font-xl md:font-xl font-sm">
              {isMobile ? <FolderIcon className="w-6 h-6" /> : "PROJECTS"}
            </a>
          </div>

          <div className="flex aspect-square cursor-pointer items-center lg:px-3 md:px-3 px-2 justify-center rounded-full lg:font-xl md:font-xl font-sm font-bold lg:gap-5 md:gap-5">
            <a href="#contact" className="hover:text-blue-800 lg:font-xl md:font-xl font-sm">
              {isMobile ? <MailIcon className="w-6 h-6" /> : "CONTACT"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
