import React from "react";

import FlickeringGrid from "@/components/magicui/flickering-grid";

export default function Fan() {
  return (
    <>
      <div className="w-full">
        <FlickeringGrid
          className="z-0 inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={100}
          width={1500}
        />
      </div>
    </>
  );
}
