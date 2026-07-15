import React from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT", "Socket.IO"],
  },
  {
    title: "Database & Cloud",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "AWS Lambda", "AWS ECS", "Docker"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 text-slate-100 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Technical Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Tools and technologies I use to build modern products.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="section-shell rounded-3xl bg-slate-900/70 p-7">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
