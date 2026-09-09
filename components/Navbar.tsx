import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-lg font-bold tracking-tight"
        >
          AKSHAY <span className="text-zinc-500">GODHE</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#work" className="transition hover:text-white">
            Work
          </a>

          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>

          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>

          <a href="#awards" className="transition hover:text-white">
            Awards
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
        >
          GitHub ↗
        </a>

      </div>
    </nav>
  );
}