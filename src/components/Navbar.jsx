import { useState } from "react";
import Resume from "../assets/Mohd-Saif.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openResume = () => {
    window.open(Resume, "_blank");
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="bg-black text-white px-6 md:px-16 lg:px-24 relative z-50">
        <div className="py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">MOHD SAIF</div>

          {/* Hamburger */}
          <button className="md:hidden text-3xl" onClick={() => setOpen(true)}>
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About Me
            </a>
            <a href="#service" className="hover:text-gray-400">
              Services
            </a>
            <a href="#project" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Desktop Button */}
          <button
            onClick={openResume}
            className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500
            px-4 py-2 rounded-full hover:scale-105 transition"
          >
            Connect Me
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        {/* Close Button */}
        <button
          className="text-3xl absolute top-4 right-4"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* Menu Items */}
        <div className="mt-20 flex flex-col items-center space-y-6">
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About Me
          </a>
          <a href="#service" onClick={() => setOpen(false)}>
            Services
          </a>
          <a href="#project" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <button
            onClick={openResume}
            className="bg-gradient-to-r from-green-400 to-blue-500
            px-4 py-2 rounded-full"
          >
            Connect Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
