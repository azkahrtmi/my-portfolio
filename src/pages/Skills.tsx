import LeftItem from "@/components/Skills/LeftItem";
import RightItem from "@/components/Skills/RightItem";
import React from "react";

export default function Skills() {
  return (
    <div className="mt-20 px-4 md:px-8">
      {/* Title */}
      <h1 className="text-white text-2xl md:text-4xl font-extrabold hover:translate-x-2 transition-transform duration-300 ease-in-out">
        <span>__</span>&nbsp;SKILLS & EXPERTISE
      </h1>

      {/* Container utama */}
      <div className="max-w-6xl w-full mx-auto rounded-2xl bg-gradient-to-r from-[#121212] to-[#262626] text-white shadow-lg flex flex-col md:flex-row mt-10 p-5 md:p-8 gap-10">
        {/* Bagian kiri */}
        <LeftItem />

        {/* Bagian kanan */}
        <RightItem />
      </div>
    </div>
  );
}
