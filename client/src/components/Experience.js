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
    <section id="experience" className="bg-slate-50 px-6 py-16 text-slate-700 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-semibold text-slate-800">Professional Experience</h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100/80">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">{item.title}</h3>
                  <p className="text-cyan-600">{item.company}</p>
                </div>
                <p className="text-sm text-slate-500">{item.period}</p>
              </div>
              <ul className="mt-5 space-y-3 text-slate-600">
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
