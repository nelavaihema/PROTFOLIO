import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-50 text-slate-800 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-600">Full Stack Developer</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">Hello, I’m Nelavai Hema.</h1>
        <p className="max-w-3xl text-lg text-slate-600 sm:text-xl">
          I build scalable web applications with React, TypeScript, Node.js, AWS, and GraphQL. I help enterprises deliver polished products and seamless user experiences.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
