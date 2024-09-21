import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Facebook, Github, Linkedin } from "lucide-react";

export default function SocialMediaDock() {
  return (
    <div className="relative">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <Facebook className="size-full" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <Github className="size-full" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <Linkedin className="size-full" />
        </DockIcon>
      </Dock>
    </div>
  );
}
