import Image from "next/image";
import TypingLogo from "./TypingLogo";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function AboutMe() {
  return (
    <div className="max-w-6xl w-full mx-auto rounded-2xl bg-gradient-to-r from-[#121212] to-[#262626] text-white p-6 md:p-8 shadow-lg flex flex-col gap-6 md:mt-34 mt-22">
      {/* Profile + Info */}
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        {/* Foto profile */}
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
          <Image
            src="/profile.jpg"
            alt="profile"
            width={128}
            height={128}
            className="rounded-xl object-top border"
          />
        </div>

        {/* Info utama */}
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <span className="text-green-400 text-sm font-semibold">
            ● AVAILABLE FOR HIRE
          </span>
          <TypingLogo firstText="Azka" finalText="Azka Hartami" />
        </div>
      </div>

      {/* Info tambahan */}
      <div className="flex sm:flex-row flex-wrap gap-16 justify-center items-center">
        <div className="group flex items-center gap-2 cursor-pointer text-gray-400">
          <div className="bg-black rounded-sm p-1 w-6 h-6 flex items-center justify-center transition-colors group-hover:bg-white">
            🌏
          </div>
          <span className="transition-colors group-hover:text-white">
            Riau, Indonesia
          </span>
        </div>
        <div className="group flex items-center gap-2 cursor-pointer text-gray-400">
          <div className="bg-black rounded-sm p-1 w-6 h-6 flex items-center justify-center transition-colors group-hover:bg-white">
            💬
          </div>
          <span className="transition-colors group-hover:text-white">
            Bahasa, English
          </span>
        </div>
        <div className="group flex items-center gap-2 cursor-pointer text-gray-400">
          <div className="bg-black rounded-sm p-1 w-6 h-6 flex items-center justify-center transition-colors group-hover:bg-white">
            💻
          </div>
          <span className="transition-colors group-hover:text-white">
            Software Engineer
          </span>
        </div>
      </div>

      {/* Garis */}
      <hr className="my-4 border-gray-700" />

      {/* About Me + Connect */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* About Me */}
        <div className="flex-1 text-left">
          <h2 className="font-bold mb-3 text-2xl md:text-3xl bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
            ABOUT ME
          </h2>
          <p className="text-gray-300 leading-relaxed text-justify text-base md:text-lg">
            I recently graduated with a degree in Computer Science. I am
            passionate about working as a full-stack developer, mainly using
            Next.js, React, Vite, Node.js, and PostgreSQL. I am also expanding
            my skills by learning Express, Python, Golang, .NET, and MySQL to
            strengthen my understanding of modern application development.
            Outside of programming, I enjoy working out and playing Dota in my
            free time, which helps me balance productivity and leisure.
          </p>
        </div>

        {/* Connect */}
        <div className="flex-1">
          <h2 className="font-bold mb-3 text-2xl md:text-3xl bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
            CONNECT
          </h2>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.facebook.com/fhioioaf/"
              target="_blank"
              className="bg-[#1a1a1a] p-4 rounded-lg flex items-center justify-between hover:bg-black text-xl md:text-2xl w-full transition-all duration-200 hover:translate-x-2"
            >
              <div className="flex items-center gap-3">
                <FaFacebook className="text-2xl md:text-3xl" />
                <span className="font-medium">Facebook</span>
              </div>
              <span className="text-sm md:text-lg text-gray-300">
                Azka Hartami
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/azka-hartami/"
              target="_blank"
              className="bg-[#1a1a1a] p-4 rounded-lg flex items-center justify-between hover:bg-black text-xl md:text-2xl w-full transition-all duration-200 hover:translate-x-2"
            >
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-2xl md:text-3xl" />
                <span className="font-medium">LinkedIn</span>
              </div>
              <span className="text-sm md:text-lg text-gray-300">
                Azka Hartami
              </span>
            </a>
            <a
              href="https://github.com/azkahrtmi"
              target="_blank"
              className="bg-[#1a1a1a] p-4 rounded-lg flex items-center justify-between hover:bg-black text-xl md:text-2xl w-full transition-all duration-200 hover:translate-x-2"
            >
              <div className="flex items-center gap-3">
                <FaGithub className="text-2xl md:text-3xl" />
                <span className="font-medium">GitHub</span>
              </div>
              <span className="text-sm md:text-lg text-gray-300">
                azkahrtmi
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
