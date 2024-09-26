"use client"
import React, { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import { Badge } from "@/components/ui/badge";
import ShinyButton from "@/components/magicui/shiny-button";
import SecretMessage from "./SecretMessage";
import ReviewCard from "@/components/original/ReviewCard";
import { AnimatedList } from "@/components/magicui/animated-list";

const reviews = [
    {
        secretName: "Jack",
        secretEmail: "@jack",
        secretMessage: "I've never seen anything like this before. It's amazing. I love it.",
        display: true
    },
    {
        secretName: "Jill",
        secretEmail: "@jill",
        secretMessage: "I don't know what to say. I'm speechless. This is amazing.",
        display: true
    },
    {
        secretName: "John",
        secretEmail: "@john",
        secretMessage: "I'm at a loss for words. This is amazing. I love it.",
        display: true
    },
    {
        secretName: "Jane",
        secretEmail: "@jane",
        secretMessage: "I'm at a loss for words. This is amazing. I love it.",
        display: true
    },
    {
        secretName: "Jenny",
        secretEmail: "@jenny",
        secretMessage: "I'm at a loss for words. This is amazing. I love it.",
        display: true
    },
    {
        secretName: "James",
        secretEmail: "@james",
        secretMessage: "I'm at a loss for words. This is amazing. I love it.",
        display: true
    },
];

export default function ContactMe() {
    const { theme } = useTheme();
    const [contacts, setContacts] = useState([{
        contact: "melbertmarafo2022@gmail.com",
        type: "Email",
        primary: true,
        primaryTags: ["Personal"],
    },
    {
        contact: "+63-935-135-5782",
        type: "Phone",
        primary: true,
        primaryTags: ["Personal"],
    },
    {
        contact: "2023-01-0162@kcp.edu.ph",
        type: "Email",
        primary: false,
        primaryTags: ["KCP Institutional Email"],
    },
    ])

    const review = [];

    const d1 = `And the day shall come that I shall receive your message`;

    return (
        <>
            <div id="contact" className="overflow-hidden flex flex-col items-center lg:px-20 md:px-20 px-2 pt-10 min-h-screen font-[family-name:var(--font-geist-sans)]  supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md">

                <div className="relative z-1 flex min-h-[500px] p-10 w-full flex-col m-20 items-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <div className="w-full lg:px-20 md:px-20 px-4 lg:mt-0 md:mt-0 mt-5 flex flex-col items-center justify-center">
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            Contact Me</span>
                        <p className="text-md lg:mx-40 md:mx-40 mx-5 pt-4 text-center">{d1}</p>
                    </div>

                    <div className="w-full lg:px-5 md:px-5 my-10 ">
                        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 items-start justify-center mb-3 mt-8">
                            {
                                contacts.map((e, i) => {
                                    return (
                                        <MagicCard
                                            className="cursor-pointer flex flex-col shadow-md hover:shadow-lg transition ease-in-out whitespace-nowrap w-full bg-slate-20"
                                            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                                            key={i}
                                        >
                                            <CardHeader>
                                                <CardDescription>{e.type}</CardDescription>
                                                <CardTitle className="text-md lg:text-lg md:text-lg">{e.contact}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="w-full flex flex-wrap gap-2">
                                                    {e.primary && (
                                                        <Badge className="w-fit">Primary</Badge>
                                                    )}
                                                    {
                                                        e.primaryTags.map((t, i) => {
                                                            return (
                                                                <Badge key={i} className="w-fit" variant={"secondary"}>{t}</Badge>
                                                            )
                                                        }
                                                        )
                                                    }
                                                </div>
                                            </CardContent>
                                            <CardFooter className="flex self-end justify-end">
                                                <ShinyButton className="">Copy</ShinyButton>
                                            </CardFooter>
                                        </MagicCard>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div className="w-full lg:px-5 md:px-5 my-10 ">
                        <div className="w-full lg:px-20 md:px-20 flex flex-col items-center justify-center">
                            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                                What's on your mind?</span>
                            <p className="text-md mb-10 pt-4 text-center">Share me a secret message!</p>
                        </div>

                        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                            <SecretMessage />

                            <div
                                className={cn(
                                    "relative flex h-[500px] max-h-[500px] w-full flex-col p-6 items-center overflow-hidden rounded-lg bg-transparent",
                                )}
                            >

                                {reviews.length !== 0 ? (
                                    <AnimatedList delay={3000}>
                                        {reviews.map((item, idx) => (
                                            item.display && <ReviewCard {...item} key={idx} />
                                        ))
                                        }
                                    </AnimatedList>
                                ) :
                                    (<p>Currently, there's no comment here yet. Send me one!</p>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}