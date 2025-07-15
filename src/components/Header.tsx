"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // feather icons for hamburger / close

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="text-yellow-300 bg-gradient-to-r from-purple-900 via-black to-gray-900 border-b border-white/10 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* -------- LOGO -------- */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={50}
            height={50}
            className="w-12 rounded-full ring-2 ring-offset-2 ring-primary shadow-neonBlue"
          />
          <h1 className="text-4xl font-serif font-bold text-neonPink hover:text-white transition animate-glow">
            <span className="text-pink-600 text-5xl hover:text-white">P</span>
            ortFolio
          </h1>
        </Link>

        {/* -------- DESKTOP NAV -------- */}
        <nav className="hidden md:flex items-center gap-7 text-2xl font-sans font-semibold animate-pulse transition  ">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transform hover:scale-110 hover:text-neonPink transition duration-300"
            >
              {label}
            </Link>
          ))}

          <button className="bg-pink-500 border-2 border-pink-500 text-white px-4 py-1 rounded-full hover:bg-pink-600 hover:border-white transition ml-8">
            Download&nbsp;CV
          </button>
        </nav>

        {/* -------- MOBILE HAMBURGER -------- */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden text-3xl text-pink-500 hover:text-white transition"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* -------- MOBILE DRAWER -------- */}
      {open && (
        <div className="md:hidden  bg-gradient-to-r from-purple-800 via-slate-800 to-pink-400/20 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-6 text-xl">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="hover:text-neonPink transition"
              >
                {label}
              </Link>
            ))}
            <button className="bg-pink-500 border-2 border-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 hover:border-white transition hover:scale-105">
              Download&nbsp;CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
