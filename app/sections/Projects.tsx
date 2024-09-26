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
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/magicui/border-beam";


export default function Projects() {
    const { theme } = useTheme();

    const [featuredProjects, setFeaturedProjects] = useState([
        {
            title: "AuthZebra",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan lacus in libero sagittis.",
            duration: "September, 2024",
            primaryTags: ["Next.js", "Tailwind"],
            secondaryTags: ["School Project"],
        },
        {
            title: "Woodcraftify",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan lacus in libero sagittis.",
            duration: "September, 2024",
            primaryTags: ["HTML", "CSS", "Javascript"],
            secondaryTags: ["School Project"],
        },
    ]);
    const [projects, setProjects] = useState([
        {
            title: "Woodcraftify",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan lacus in libero sagittis.",
            duration: "September, 2024",
            primaryTags: ["HTML", "CSS", "Javascript"],
            secondaryTags: ["School Project"],
        },
        {
            title: "AuthZebra",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan lacus in libero sagittis.",
            duration: "September, 2024",
            primaryTags: ["Next.js", "Tailwind"],
            secondaryTags: ["School Project"],
        },
        {
            title: "Balay",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan lacus in libero sagittis.",
            duration: "September, 2024",
            primaryTags: ["Next.js", "Tailwind"],
            secondaryTags: ["School Project"],
        },
        {
            title: "Origatune",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan lacus in libero sagittis.",
            duration: "September, 2024",
            primaryTags: ["Next.js", "Material UI"],
            secondaryTags: ["School Project"],
        },
    ])

    const d1 = `And the day shall come that I shall build great projects`;

    return (
        <>

            <div id="projects" className="overflow-hidden flex flex-col items-center lg:px-20 md:px-20 px-2 pt-10 min-h-screen font-[family-name:var(--font-geist-sans)]  supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md">

                <div className="relative z-1 flex min-h-[500px] p-10 w-full flex-col m-20 items-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <div className="w-full lg:px-20 md:px-20 px-4 lg:mt-0 md:mt-0 mt-5 flex flex-col items-center justify-center">
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            Projects</span>
                        <p className="text-md lg:mx-40 md:mx-40 mx-5 pt-4 text-center">{d1}</p>
                    </div>

                    <div className="w-full lg:px-5 md:px-5 my-10 ">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 items-start justify-center mb-3">
                            {
                                featuredProjects.map((e, i) => {
                                    return (
                                        <MagicCard
                                            key={i}
                                            className="relative cursor-pointer flex flex-col shadow-md rounded-xl hover:shadow-lg transition ease-in-out whitespace-nowrap w-full bg-slate-20"
                                            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                                        >

                                            <BorderBeam size={300} duration={12} delay={9} borderWidth={3} />
                                            <CardHeader>
                                                <CardDescription>{e.duration}</CardDescription>
                                                <CardTitle>{e.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-wrap">{e.description}</p>
                                                <div className="w-full flex flex-wrap gap-2 mt-3">
                                                    {
                                                        e.primaryTags.map((t, i) => {
                                                            return (
                                                                <Badge key={i} className="w-fit">{t}</Badge>
                                                            )
                                                        }
                                                        )
                                                    }
                                                    {
                                                        e.secondaryTags.map((t, i) => {
                                                            return (
                                                                <Badge key={i} className="w-fit" variant={"secondary"}>{t}</Badge>
                                                            )
                                                        }
                                                        )
                                                    }
                                                </div>
                                            </CardContent>
                                            <CardFooter className="self-end"><Link href={"#"} className="decoration-solid">View this site</Link></CardFooter>

                                        </MagicCard>
                                    );
                                })
                            }

                        </div>

                        {/* <h3 className="text-xl font-bold my-5 mt-9">Graphic Designs</h3> */}
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-start justify-center mb-3 mt-8">
                            {
                                projects.map((e, i) => {
                                    return (
                                        <MagicCard
                                            key={i}
                                            className="cursor-pointer flex flex-col shadow-md hover:shadow-lg transition ease-in-out whitespace-nowrap w-full bg-slate-20"
                                            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                                        >
                                            <CardHeader>
                                                <CardDescription>{e.duration}</CardDescription>
                                                <CardTitle className="text-xl">{e.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-wrap">{e.description}</p>
                                                <div className="w-full flex flex-wrap gap-2 mt-3">
                                                    {
                                                        e.primaryTags.map((t, i) => {
                                                            return (
                                                                <Badge key={i} className="w-fit">{t}</Badge>
                                                            )
                                                        }
                                                        )
                                                    }
                                                    {
                                                        e.secondaryTags.map((t, i) => {
                                                            return (
                                                                <Badge key={i} className="w-fit" variant={"secondary"}>{t}</Badge>
                                                            )
                                                        }
                                                        )
                                                    }
                                                </div>
                                            </CardContent>
                                            <CardFooter className="self-end"><Link href={"#"} className="decoration-solid">View this site</Link></CardFooter>
                                        </MagicCard>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}