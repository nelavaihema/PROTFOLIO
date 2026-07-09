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
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#top" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-slate-800 shadow-sm">
          N H
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-cyan-600">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
