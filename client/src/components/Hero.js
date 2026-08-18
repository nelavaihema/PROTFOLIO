import React from "react";

const resumeFileId = "1tP82cxHz5tq23wUUoZhmOuzKxJoQ2NcS";
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}&confirm=t`;
const resumePreviewUrl = `https://drive.google.com/file/d/${resumeFileId}/view?usp=sharing`;

const handleDownloadResume = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(resumeDownloadUrl);
    if (!response.ok) {
      throw new Error("Unable to fetch resume");
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Nelavai-Hema-Frontend-Developer-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    window.location.href = resumeDownloadUrl;
  }
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-slate-100 md:px-12 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_30%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-cyan-300">Frontend Developer</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            I build responsive web experiences that feel polished, intuitive, and user-first.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            I design and develop modern frontend interfaces using React.js, Angular, TypeScript, Tailwind CSS, and API-driven experiences that prioritize usability and performance.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
              View Projects
            </a>
            <a href={resumeDownloadUrl} onClick={handleDownloadResume} download="Nelavai-Hema-Frontend-Developer-Resume.pdf" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
              Download Resume
            </a>
            <a href={resumePreviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100">
              Open Resume PDF
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-visual section-shell rounded-3xl bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">What I bring</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>• End-to-end web apps with clean architecture</p>
            <p>• Polished frontends and smooth user flows</p>
            <p>• Scalable APIs, auth, deployment, and performance</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-center">
              <p className="text-2xl font-semibold text-cyan-300">3.6</p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Years</p>
            </div>
            <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-3 text-center">
              <p className="text-2xl font-semibold text-violet-300">4+</p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
