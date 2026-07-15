import React from "react";

const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-slate-400 md:px-12">
    <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
      <p>Designed and built by Nelavai Hema.</p>
      <p>© {new Date().getFullYear()} | Chennai, India</p>
    </div>
  </footer>
);

export default Footer;
