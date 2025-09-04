"use client";

import React, { useEffect, useState } from "react";

export default function TypingLogo() {
  const firstText = "Azka."; // teks pertama
  const finalText = "Azka.Hartami"; // teks akhir

  const [displayText, setDisplayText] = useState(""); // apa yg ditampilkan
  const [phase, setPhase] = useState<
    "typing1" | "deleting" | "typing2" | "done"
  >("typing1"); // fase animasi
  const [index, setIndex] = useState(0); // posisi huruf sekarang

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // fase ketik teks pertama
    if (phase === "typing1") {
      if (index < firstText.length) {
        timeout = setTimeout(() => {
          setDisplayText(firstText.slice(0, index + 1)); // tambah huruf
          setIndex(index + 1);
        }, 200);
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting"); // lanjut ke hapus
          setIndex(firstText.length);
        }, 800); // jeda sebentar
      }
    }

    // fase hapus teks pertama
    if (phase === "deleting") {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayText(firstText.slice(0, index - 1)); // hapus huruf
          setIndex(index - 1);
        }, 100);
      } else {
        setPhase("typing2"); // lanjut ketik teks kedua
        setIndex(0);
      }
    }

    // fase ketik teks kedua (final)
    if (phase === "typing2") {
      if (index < finalText.length) {
        timeout = setTimeout(() => {
          setDisplayText(finalText.slice(0, index + 1));
          setIndex(index + 1);
        }, 200);
      } else {
        setPhase("done"); // selesai
      }
    }

    return () => clearTimeout(timeout); // bersihin timeout tiap update
  }, [index, phase]);

  return (
    <span className="text-white text-2xl md:text-4xl font-extrabold tracking-wide">
      {displayText}
      <span className="animate-blink">|</span> {/* cursor blink */}
    </span>
  );
}
