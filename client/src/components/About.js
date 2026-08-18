import React from "react";

const certifications = [
  {
    name: "GUVI Frontend Development Training",
    href: "https://www.zenclass.in/certificateDownload/g4A0LyPtIml4slZE",
  },
];

const About = () => {
  return (
    <section id="about" className="px-6 py-20 text-slate-100 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">About Me</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A developer who enjoys solving real problems with clean code.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            I bring together frontend craftsmanship, backend reliability, and product thinking to deliver web experiences that feel modern, scalable, and dependable.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="section-shell rounded-3xl bg-slate-900/70 p-8">
            <p className="text-lg leading-8 text-slate-300">
              I’m a Frontend Developer with 3.6 years of experience creating responsive interfaces, interactive dashboards, and user-centric web applications using React, Angular, TypeScript, and modern UI tools.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I care deeply about clean design, performance, accessibility, and smooth user experiences that make product interactions feel natural and effective.
            </p>
          </div>
          <div className="section-shell rounded-3xl bg-slate-900/70 p-8">
            <h3 className="text-xl font-semibold text-white">Quick facts</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li><span className="font-semibold text-white">Location:</span> Chennai, India</li>
              <li><span className="font-semibold text-white">Experience:</span> 3.6 years</li>
              <li><span className="font-semibold text-white">Role:</span> Frontend Developer</li>
              <li><span className="font-semibold text-white">Email:</span> nelavaihema31128@gmail.com</li>
              <li>
                <span className="font-semibold text-white">GitHub:</span>
                <a href="https://github.com/nelavaihema" target="_blank" rel="noopener noreferrer" className="ml-2 text-cyan-300 hover:underline">GitHub Profile</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="section-shell rounded-3xl bg-slate-900/70 p-8">
            <h3 className="text-xl font-semibold text-white">Certifications</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              {certifications.map((item) => (
                <li key={item.name} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 transition hover:text-cyan-300"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-slate-400">
              <p className="mb-2">Certificate links:</p>
              <ul className="space-y-2">
                {certifications.map((c, index) => (
                  <li key={`link-${c.name}`}>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">Certificate {index + 1}</a>
                    ) : (
                      <span className="text-slate-500">{c.name}: Link not available</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="section-shell rounded-3xl bg-slate-900/70 p-8">
            <h3 className="text-xl font-semibold text-white">Education</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li><span className="font-semibold text-white">Degree:</span> Bachelor of Engineering in Computer Science</li>
              <li><span className="font-semibold text-white">College:</span> Siddharth Institute of Engineering and Technology</li>
              <li><span className="font-semibold text-white">Years:</span> 2018 – 2022</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
