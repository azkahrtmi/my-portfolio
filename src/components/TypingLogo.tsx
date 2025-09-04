"use client";

import React, { useEffect, useState } from "react";

type TypingLogoProps = {
  firstText: string; // teks pertama
  finalText: string; // teks akhir
};

export default function TypingLogo({ firstText, finalText }: TypingLogoProps) {
  const [displayText, setDisplayText] = useState(""); // teks yg tampil
  const [phase, setPhase] = useState<
    "typing1" | "deleting" | "typing2" | "done"
  >("typing1");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // fase ketik teks pertama
    if (phase === "typing1") {
      if (index < firstText.length) {
        timeout = setTimeout(() => {
          setDisplayText(firstText.slice(0, index + 1));
          setIndex(index + 1);
        }, 200);
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting");
          setIndex(firstText.length);
        }, 800);
      }
    }

    // fase hapus teks pertama
    if (phase === "deleting") {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayText(firstText.slice(0, index - 1));
          setIndex(index - 1);
        }, 100);
      } else {
        setPhase("typing2");
        setIndex(0);
      }
    }

    // fase ketik teks kedua
    if (phase === "typing2") {
      if (index < finalText.length) {
        timeout = setTimeout(() => {
          setDisplayText(finalText.slice(0, index + 1));
          setIndex(index + 1);
        }, 200);
      } else {
        setPhase("done");
      }
    }

    return () => clearTimeout(timeout);
  }, [index, phase, firstText, finalText]);

  return (
    <span className="text-white text-2xl md:text-4xl font-extrabold tracking-wide">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
}
