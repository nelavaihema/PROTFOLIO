import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-slate-800 md:px-12 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_30%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-cyan-600">Full Stack Developer</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Building polished MERN experiences that feel effortless.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            I craft scalable web applications with React, Node.js, Express, MongoDB, and cloud tools, turning product ideas into beautiful, high-performing digital products.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-cyan-500 hover:text-cyan-600">
              Contact Me
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Focus</p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>• End-to-end web apps with clean architecture</p>
            <p>• Responsive UI design and smooth user flows</p>
            <p>• Scalable APIs, authentication, and deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
