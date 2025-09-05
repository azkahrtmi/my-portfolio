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
        <div className="flex-1 flex-col">
          <h2 className="font-extrabold text-lg md:text-xl flex items-center">
            <span className="border-l-4 border-white h-6 mr-2"></span>
            Technical Proficiency
          </h2>

          <p className="mt-2 text-justify md:pr-6 text-[13px] md:text-[14px] font-extralight text-gray-300">
            Years of dedicated practice and real-world projects have sharpened
            my technical skills. Each percentage represents my confidence and
            experience level with these technologies.
          </p>

          {/* Skill bar */}
          <div className="flex flex-col gap-3 md:gap-4 pr-0 md:pr-6 pt-8">
            {[
              { name: "React Vite", percent: 85 },
              { name: "JavaScript", percent: 85 },
              { name: "Next.js", percent: 70 },
              { name: "TypeScript", percent: 70 },
              { name: "Tailwind CSS", percent: 80 },
              { name: "Node.js", percent: 80 },
              { name: "PostgreSQL & MySQL", percent: 70 },
              { name: ".NET", percent: 50 },
              { name: "Python", percent: 60 },
              { name: "Golang", percent: 50 },
              { name: "Laravel", percent: 50 },
            ].map((skill, index) => (
              <div key={index} className="mb-1">
                <div className="flex justify-between mb-1 text-sm md:text-base">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-700 h-1 rounded">
                  <div
                    className="bg-gray-300 h-1 rounded"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian kanan */}
        <div className="flex-1 flex-col">
          <h2 className="font-extrabold text-lg md:text-xl flex items-center">
            <span className="border-l-4 border-white h-6 mr-2"></span>
            Tools & Technologies
          </h2>

          <p className="mt-2 text-justify md:pr-6 text-[13px] md:text-[14px] font-extralight text-gray-300">
            My toolkit is constantly expanding as I explore new technologies
            that enhance user experiences and streamline development workflows.
            These are my daily companions in crafting digital solutions.
          </p>

          {/* Grid Tools */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mt-6">
            {[
              { icon: "R", name: "React" },
              { icon: "T", name: "TypeScript" },
              { icon: "N", name: "Node.js" },
              { icon: "D", name: "Docker" },
              { icon: "E", name: "Express" },
              { icon: "S", name: "Styled Components" },
              { icon: "G", name: "Git" },
              { icon: "F", name: "Figma" },
              { icon: "S", name: "Supabase" },
              { icon: "P", name: "PostgreSQL" },
              { icon: "N", name: ".NET" },
              { icon: "L", name: "Laravel" },
              { icon: "G", name: "Golang" },
              { icon: "P", name: "Python" },
              { icon: "M", name: "MySQL" },
            ].map((tool, index) => (
              <div
                key={index}
                className="flex items-center bg-[#1a1a1a] rounded-lg p-3 md:p-4 shadow-md hover:translate-y-[-2px] transition-transform duration-300"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded bg-black font-bold mr-3 text-sm md:text-base">
                  {tool.icon}
                </span>
                <span className="text-xs md:text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
