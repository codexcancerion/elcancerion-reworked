"use client"
import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Facebook, Github, Linkedin } from "lucide-react";
import Meteors from "@/components/magicui/meteors";
import WordRotate from "@/components/magicui/word-rotate";
import Link from "next/link";


export default function Hero() {

    return (
        <>
            <div
                id="home"
                className="overflow-hidden flex flex-col items-center justify-center min-h-[600px] p-8 font-[family-name:var(--font-geist-sans)]"
            >
                <div className="w-50 overflow-x-hidden">
                    <Meteors number={30} />
                </div>                

                <WordRotate
                    className="text-6xl font-bold text-slate-800 dark:text-white text-left"
                    words={["Wazzup!", "I'm Melbert", "I hope you enjoy exploring"]}
                />
                <p className="text-lg pt-5">I am trying to build something cool here</p>

                {/* SOCIAL MEDIA DOCK */}
                <div className="relative">
                    <Dock magnification={60} distance={100}>
                        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                            <Link href="https://web.facebook.com/melbert.marafo"><Facebook className="size-full" /></Link>
                        </DockIcon>
                        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                            <Link href="https://github.com/codexcancerion"><Github className="size-full" /></Link>
                        </DockIcon>
                        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                            <Link href="https://www.linkedin.com/in/melbert-marafo-15372828b/"><Linkedin className="size-full" /></Link>
                        </DockIcon>
                    </Dock>
                </div>
            </div>
        </>
    );
}
