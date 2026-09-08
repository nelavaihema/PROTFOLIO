import React from "react";

const resumeFileId = "1tP82cxHz5tq23wUUoZhmOuzKxJoQ2NcS";
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}&confirm=t`;
const resumePreviewUrl = `https://drive.google.com/file/d/${resumeFileId}/view?usp=sharing`;

const Resume = () => {
  return (
    <section id="resume" className="px-6 py-20 text-slate-100 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="section-shell flex flex-col gap-6 rounded-3xl bg-slate-900/70 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Resume</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A concise view of my experience and skills.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">View my resume online or download a copy for a closer look at my professional background.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={resumePreviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">View Resume</a>
            <a href={resumeDownloadUrl} download="Nelavai-Hema-MERN-Stack-Developer-Resume.pdf" className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;