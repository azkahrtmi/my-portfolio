import TypingLogo from "./TypingLogo";

export default function Navbar() {
  return (
    <nav className="bg-black flex h-20 md:h-24 justify-between items-center px-6 md:px-16 shadow-md fixed top-0 w-full">
      {/* Logo */}
      <TypingLogo firstText="Azka." finalText="Azka.Hartami" />

      {/* Menu - tampil di md ke atas */}
      <div className="hidden md:flex gap-9 text-gray-300 text-lg">
        <span className="cursor-pointer hover:text-white transition-colors">
          About
        </span>
        <span className="cursor-pointer hover:text-white transition-colors">
          Skills
        </span>
        <span className="cursor-pointer hover:text-white transition-colors">
          Projects
        </span>
        <span className="cursor-pointer hover:text-white transition-colors">
          Contact
        </span>
      </div>

      {/* Tombol Resume */}
      <a href="/cv_azka_hartami.pdf" target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-black font-semibold rounded-xl px-5 py-2 md:px-7 md:py-3 hover:bg-gray-300 transition-colors cursor-pointer">
          Resume
        </button>
      </a>
    </nav>
  );
}
