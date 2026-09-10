"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight"
        >
          AKSHAY <span className="text-zinc-500">GODHE</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="/#work" className="transition hover:text-white">
            Work
          </a>

          <a href="/#experience" className="transition hover:text-white">
            Experience
          </a>

          <a href="/#skills" className="transition hover:text-white">
            Skills
          </a>

          <a href="/resume" className="transition hover:text-white">
            Resume
          </a>

          <a href="/#awards" className="transition hover:text-white">
            Awards
          </a>

          <a href="/#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        {/* Desktop actions + mobile controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="https://github.com/AkshVert"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-zinc-700 px-4 py-2 text-sm transition hover:bg-white hover:text-black sm:block"
          >
            GitHub ↗
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-lg md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-6 py-5 backdrop-blur md:hidden">
          <div className="flex flex-col gap-5 text-sm text-zinc-400">
            <a href="/#work" onClick={closeMenu}>
              Work
            </a>

            <a href="/#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="/#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="/resume" onClick={closeMenu}>
              Resume
            </a>

            <a href="/#awards" onClick={closeMenu}>
              Awards
            </a>

            <a href="/#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              href="https://github.com/AkshVert"
              target="_blank"
              rel="noopener noreferrer"
              className="border-t border-zinc-800 pt-5"
              onClick={closeMenu}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}