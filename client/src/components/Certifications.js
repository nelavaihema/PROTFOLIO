import React from "react";

const certifications = [
  {
    name: "GUVI Frontend Development Training",
    issuer: "GUVI",
    href: "https://www.zenclass.in/certificateDownload/g4A0LyPtIml4slZE",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="px-6 py-20 text-slate-100 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Certifications</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Credentials that support my practical experience.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <article key={certification.name} className="section-shell rounded-3xl bg-slate-900/70 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{certification.issuer}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{certification.name}</h3>
              <a href={certification.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200">View certificate</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
