import React from "react";

const experience = [
  {
    title: "Software Engineer",
    company: "HCL Technologies — Verizon Client",
    period: "Jan 2024 – Feb 2026",
    bullets: [
      "Developed enterprise Full Stack applications using React.js, TypeScript, GraphQL and REST APIs.",
      "Built reusable frontend components and integrated backend services.",
      "Worked with cloud-based applications using AWS services.",
      "Developed interactive dashboards and reporting modules.",
      "Collaborated with backend, AI and DevOps teams.",
    ],
  },
  {
    title: "Graduate Engineer Trainee",
    company: "HCL Technologies",
    period: "Oct 2022 – Dec 2023",
    bullets: [
      "Developed responsive web applications using React.js, JavaScript and TypeScript.",
      "Integrated REST APIs and managed application state.",
      "Worked on cloud automation using AWS Lambda and Python.",
      "Participated in code reviews and Agile development.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-20 text-slate-100 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Professional milestones that shaped my growth.</h2>
        </div>
        <div className="space-y-6">
          {experience.map((item) => (
            <div key={item.title} className="section-shell rounded-3xl bg-slate-900/70 p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-cyan-300">{item.company}</p>
                </div>
                <p className="text-sm text-slate-400">{item.period}</p>
              </div>
              <ul className="mt-5 space-y-3 text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="list-disc pl-5">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
