import React from "react";

export default function About() {

    const d1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur accumsan lacus in libero sagittis, a hendrerit ipsum commodo.`;
    const d2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur, a hendrerit ipsum commodo.`;

    return (
        <>
            <div id="about" className="overflow-hidden flex flex-col items-center px-20 pt-10 min-h-screen font-[family-name:var(--font-geist-sans)]  supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md">

                <div className="relative z-1 flex min-h-[500px] p-10 w-full flex-col m-20 items-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <div className="w-full px-20 flex flex-col items-center justify-center">
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            About Me</span>
                        <p className="text-md mx-40 pt-4 text-center">test</p>
                        <p className="text-md mx-40 pt-4 text-center">test</p>
                    </div>

                    <div className="w-full px-20 mt-20 grid grid-cols-4 gap-5 items-start justify-center">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">12+</h1>
                            <p className="text-lg pt-5">consectetur adipiscing elit</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Star</h1>
                            <p className="text-lg pt-5">lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">100</h1>
                            <p className="text-lg pt-5">curabitur dolor ipsum</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">+13</h1>
                            <p className="text-lg pt-5">hendrerit ipsum commodo</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}