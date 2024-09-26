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
    const [webSkills, setWebSkills] = useState([
        {
            title: "Next.js",
            description: "Experienced with building scalable web applications using this React framework with server-side rendering.",
            primary: true,
        },
        {
            title: "React.js",
            description: "Proficient in developing interactive and efficient UIs with React’s component-based architecture.",
            primary: true,
        },
        {
            title: "Tailwind",
            description: "Skilled in creating responsive, custom designs quickly using this utility-first CSS framework.",
            primary: true,
        },
        {
            title: "Magic UI",
            description: "Adept at implementing pre-built UI components from Magic UI to streamline development.",
            primary: true,
        },
        {
            title: "Shadcn",
            description: "Capable of integrating Shadcn's accessible and customizable design system for better UI consistency.",
            primary: true,
        },
        {
            title: "Material UI",
            description: "Experienced in building clean and responsive interfaces using Material UI's React components.",
            primary: true,
        },        
        {
            title: "Bootstrap",
            description: "Proficient in building responsive layouts with Bootstrap’s grid system and prebuilt components.",
            primary: false,
        },
        {
            title: "HTML",
            description: "Strong understanding of semantic HTML for creating well-structured, accessible web pages.",
            primary: false,
        },
        {
            title: "CSS",
            description: "Proficient in styling web pages with CSS, including layout techniques like Flexbox and Grid.",
            primary: false,
        },
        {
            title: "jQuery",
            description: "Experienced in using jQuery to simplify DOM manipulation and create dynamic user interactions.",
            primary: false,
        },
        {
            title: "PHP",
            description: "Knowledgeable in using PHP for server-side scripting and building dynamic web applications.",
            primary: false,
        },
    ])

    const [graphicSkills, setGraphicSkills] = useState([
        {
            title: "Figma",
            description: "Skilled in designing user interfaces and wireframes using Figma for collaborative design projects.",
            primary: true,
        },
        {
            title: "Illustrator",
            description: "Proficient in vector graphic creation for logos, icons, and illustrations using Adobe Illustrator.",
            primary: true,
        },
        {
            title: "Photoshop",
            description: "Experienced in editing photos and creating digital artwork with Adobe Photoshop.",
            primary: true,
        },
    ])

    const [softSkills, setSoftSkills] = useState([
        {
            title: "Team Collaboration",
            description: "Able to work effectively in teams, sharing ideas and contributing to project success."
        },
        {
            title: "Project Management",
            description: "Experienced in managing projects from planning to completion, ensuring timely delivery."
        },
        {
            title: "Time Flexibility",
            description: "Capable of adapting to changing schedules and priorities while maintaining productivity."
        },
    ])


    const d1 = `The days shall come that I shall master`;

    return (
        <>
            <div id="skills" className="overflow-hidden flex flex-col items-center lg:px-20 md:px-20 px-2 pt-10 min-h-screen font-[family-name:var(--font-geist-sans)]  supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md">

                <div className="relative z-1 flex min-h-[500px] p-10 w-full flex-col m-20 items-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <div className="w-full lg:px-20 md:px-20 px-4 lg:mt-0 md:mt-0 mt-5 flex flex-col items-center justify-center">
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-900 from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            Skills</span>
                        <p className="text-md lg:mx-40 md:mx-40 mx-5 pt-4 text-center">{d1}</p>
                    </div>

                    <div className="w-full lg:px-20 md:px-20 flex flex-wrap items-start justify-center">
                        <div className="w-full flex justify-center lg:p-0">
                            <SkillsIconCloud />
                        </div>

                        <div className="w-full lg:px-5 md:px-5 lg:my-10 md:my-10 my-3">
                            <h3 className="text-xl font-bold my-5 mt-9">Web Development</h3>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-start justify-center mb-3">
                                {
                                    webSkills.map((skill, i) => {
                                        if (skill.primary) {
                                            return (
                                                <Card key={i} className="w-full">
                                                    <CardHeader>
                                                        <CardTitle>{skill.title}</CardTitle>
                                                        <CardDescription>{skill.description}</CardDescription>
                                                    </CardHeader>
                                                </Card>
                                            )
                                        };
                                    })
                                }
                            </div>

                            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 items-start justify-center mb-3">
                                {
                                    webSkills.map((skill, i) => {
                                        if (!skill.primary) {
                                            return (
                                                <Card key={i} className="w-full">
                                                    <CardHeader className="p-2">
                                                        <CardTitle className="text-lg text-slate-700">{skill.title}</CardTitle>
                                                    </CardHeader>
                                                </Card>
                                            )
                                        };
                                    })
                                }
                            </div>

                            <h3 className="text-xl font-bold my-5 mt-9">Graphic Designs</h3>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-5 items-start justify-center mb-3">
                                {
                                    graphicSkills.map((skill, i) => {
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

                            <h3 className="text-xl font-bold my-5 ">Soft Skills</h3>
                            <div className="flex lg:flex-nowrap flex-wrap gap-5 items-start justify-left mb-3">
                                {
                                    softSkills.map((skill, i) => {
                                        return (
                                            <Card key={i} className="w-full">
                                                <CardHeader className="">
                                                    <CardTitle className="text-lg text-slate-700">{skill.title}</CardTitle>
                                                    <CardDescription>{skill.description}</CardDescription>
                                                </CardHeader>
                                            </Card>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}