import React from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#top" className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          N H
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-medium text-slate-300 transition hover:text-cyan-300">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20">
          Let’s Talk
        </a>
      </div>
    </header>
  );
};

export default Navbar;
