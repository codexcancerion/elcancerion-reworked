"use client"
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export default function Footer() {
    return (
        <>
        
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                "[mask-image:linear-gradient(to_top,white,transparent,transparent)] ",
                )}
            />

            <div className="w-full lg:px-20 mt-10 py-10">
                <div className="flex flex-col lg:flex-row justify-center">
                    <div className="west flex flex-auto justify-center gap-5">
                        <Avatar>
                            <AvatarImage src="https://avatar.vercel.sh/jack" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://avatar.vercel.sh/jack" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://avatar.vercel.sh/jack" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="mid flex flex-auto justify-center text-center">
                        Copyright © Melbert Marafo 2024. All Rights Reserved
                    </div>
                    <div className="east flex flex-auto justify-center gap-5">
                        <Avatar>
                            <AvatarImage src="https://avatar.vercel.sh/jack" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://avatar.vercel.sh/jenny" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://avatar.vercel.sh/john" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </>
    );
}