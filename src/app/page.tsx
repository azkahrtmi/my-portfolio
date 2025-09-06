import AboutMe from "@/pages/AboutMe";
import Navbar from "@/components/Navbar";
import Skills from "@/pages/Skills";
import React from "react";
import Education from "@/pages/Education";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <AboutMe />
        <Skills />
        <Education />
      </div>
    </div>
  );
}
