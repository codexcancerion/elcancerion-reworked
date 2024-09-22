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
    "photoshop",
    "illustrator",
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
            <div id="skills" className="overflow-hidden flex flex-col items-center px-20 pt-10 min-h-screen font-[family-name:var(--font-geist-sans)]  supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md">

                <div className="relative z-1 flex min-h-[500px] p-10 w-full flex-col m-20 items-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <div className="w-full px-20 flex flex-col items-center justify-center">
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            Skills</span>
                        <p className="text-md mx-40 pt-4 text-center">{d1}</p>
                    </div>

                    <div className="w-full px-20 flex items-start justify-center">
                        <div className="w-6/12">
                            <SkillsIconCloud />
                        </div>

                        <div className="w-full px-5 my-10 ">
                            <h3 className="text-xl font-bold my-5 mt-9">Web Development</h3>
                            <div className="grid grid-cols-2 gap-5 items-start justify-center mb-3">
                                {
                                    skills.map(skill => {
                                        return (
                                            <Card className="w-full">
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
                            <div className="grid grid-cols-3 gap-5 items-start justify-center mb-3">
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
                    <div className="flex gap-5 items-start justify-center mb-3">
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