import React from "react";

export default function About() {

    const d1 = `I'm a BSIT student passionate about crafting awesome websites and bringing creative ideas to life through graphic design. 
    Currently diving deep into web technologies, learning, and growing with every line of code.`;
    const d2 = `Let's build something amazing together—where tech meets creativity!`;

    const highlights = [
        {
            highlight: "Baguio City",
            description: "I live here",
        },
        {
            highlight: "Next JS",
            description: "My Favorite Web Dev Framework",
        },
        {
            highlight: "BSIT",
            description: "Current enrolled course",
        }
    ];

    return (
        <>
            <div id="about" className="overflow-hidden flex flex-col items-center lg:px-20 md:px-20 px-2 pt-10 min-h-screen font-[family-name:var(--font-geist-sans)]  supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md">

                <div className="relative z-1 flex min-h-[500px] lg:p-10 md:p-10 py-5 px-4 w-full flex-col m-20 items-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <div className="w-full lg:px-20 md:px-20 px-4 lg:mt-0 md:mt-0 mt-5 flex flex-col items-center justify-center">
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            About Me</span>
                        <p className="text-md lg:mx-40 md:mx-40 mx-5 pt-4 text-center">{d1}</p>
                        <p className="text-md lg:mx-40 md:mx-40 mx-5 pt-4 text-center">{d2}</p>
                    </div>

                    <div className="w-full lg:px-20 md:px-20 mt-20 flex gap-5 flex-wrap items-start justify-center">
                        {
                            highlights.map((i, idx) => {
                                return (<div className="text-center" key={idx}>
                                    <h1 className="text-3xl font-bold">{i.highlight}</h1>
                                    <p className="text-md pt-5 text-color-slate-600">{i.description}</p>
                                </div>)
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </>
    );
}