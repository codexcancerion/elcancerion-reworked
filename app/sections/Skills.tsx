"use client"
import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "vercel",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "mongodb",
];

export function SkillsIconCloud() {
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-start justify-center overflow-hidden rounded-lg bg-background px-5 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}



export default function Skills() {
    const [skills, setSkills] = useState([
        {
            title: "Next.js",
            description: "I do this, yes."
        },
        {
            title: "React.js",
            description: "I do this, yes."
        },
        {
            title: "Tailwind",
            description: "I do this, yes."
        },
        {
            title: "Magic UI",
            description: "I do this, yes."
        },
    ])
    const [softSkills, setSoftSkills] = useState([
        {
            title: "Kasjay",
            description: "I do this, yes."
        },
        {
            title: "Kastoy",
            description: "I do this, yes."
        },
        {
            title: "Basta",
            description: "I do this, yes."
        },
        {
            title: "Kasjay",
            description: "I do this, yes."
        },
        {
            title: "Kastoy",
            description: "I do this, yes."
        },
    ])

    const d1 = `The days shall come that I shall master`;

    return (
        <>
            <div id="skills" className="overflow-hidden flex flex-col items-center lg:px-20 md:px-20 px-2 pt-10 min-h-screen font-[family-name:var(--font-geist-sans)]  supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md">

                <div className="relative z-1 flex min-h-[500px] p-10 w-full flex-col m-20 items-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <div className="w-full lg:px-20 md:px-20 px-4 lg:mt-0 md:mt-0 mt-5 flex flex-col items-center justify-center">
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            Skills</span>
                        <p className="text-md lg:mx-40 md:mx-40 mx-5 pt-4 text-center">{d1}</p>
                    </div>

                    <div className="w-full lg:px-20 md:px-20 px-5 flex flex-wrap items-start justify-center">
                        <div className="w-full">
                            <SkillsIconCloud />
                        </div>

                        <div className="w-full lg:px-5 md:px-5 lg:my-10 md:my-10 my-3">
                            <h3 className="text-xl font-bold my-5 mt-9">Web Development</h3>
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 items-start justify-center mb-3">
                                {
                                    skills.map((skill, i) => {
                                        return (
                                            <Card key={i} className="w-full">
                                                <CardHeader>
                                                    <CardTitle>{skill.title}</CardTitle>
                                                    <CardDescription>{skill.description}</CardDescription>
                                                </CardHeader>
                                            </Card>
                                        );
                                    })
                                }
                            </div>

                            <h3 className="text-xl font-bold my-5 mt-9">Graphic Designs</h3>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-5 items-start justify-center mb-3">
                                {
                                    skills.map((skill, i) => {
                                        return (
                                            <Card key={i} className="w-full">
                                                <CardHeader>
                                                    <CardTitle className="text-xl">{skill.title}</CardTitle>
                                                    <CardDescription>{skill.description}</CardDescription>
                                                </CardHeader>
                                            </Card>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold my-5 ">Soft Skills</h3>
                    <div className="flex flex-wrap gap-5 items-start justify-center mb-3">
                        {
                            softSkills.map((skill, i) => {
                                return (
                                    <Card key={i} className="w-full">
                                        <CardHeader className="p-2 text-center">
                                            <CardTitle className="text-lg text-slate-700">{skill.title}</CardTitle>
                                        </CardHeader>
                                    </Card>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}