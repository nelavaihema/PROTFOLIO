import React from "react";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Angular",
  "Next.js",
  "Node.js",
  "Express.js",
  "GraphQL",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "AWS Lambda",
  "AWS ECS",
  "Tailwind CSS",
  "Material UI",
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-50 px-6 py-16 text-slate-700 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-semibold text-slate-800">Technical Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill} className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm shadow-slate-100/80">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
