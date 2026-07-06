import React from "react";

const projects = [
  {
    title: "Cloud Hygiene Automation Platform",
    subtitle: "React.js, TypeScript, REST APIs, AWS Lambda, Grafana, Tailwind CSS, Jenkins",
    bullets: [
      "Developed an enterprise cloud compliance dashboard to monitor AWS resources.",
      "Built reusable UI components and integrated real-time compliance analytics.",
      "Implemented search, filtering, and sorting for large AWS resource datasets.",
      "Improved performance and Lighthouse scores through frontend optimization.",
    ],
  },
  {
    title: "Voice Mail to Text (VM2TXT)",
    subtitle: "AWS ECS, AWS Transcribe, DynamoDB, AWS CLI, CloudWatch",
    bullets: [
      "Built a voicemail-to-text automation pipeline for nearly one million emails daily.",
      "Converted audio messages into text using AWS Transcribe.",
      "Managed ECS services with scheduled auto-scaling and optimized CPU usage.",
      "Configured DynamoDB TTL policies and automated cleanup workflows.",
    ],
  },
  {
    title: "TDP Front Door Automation",
    subtitle: "React.js, TypeScript, GraphQL, REST APIs, Tailwind CSS",
    bullets: [
      "Developed a GenAI-powered ticket management platform with React.js.",
      "Integrated GraphQL and REST APIs for efficient data retrieval.",
      "Built chatbot-style ticket creation, listing, detail view, and comments modules.",
      "Implemented role-based access control and analytics dashboards.",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white px-6 py-16 text-slate-700 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-semibold text-slate-800">Projects</h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-100/80">
              <h3 className="text-2xl font-semibold text-slate-800">{project.title}</h3>
              <p className="mt-3 text-sm text-cyan-600">{project.subtitle}</p>
              <ul className="mt-5 space-y-3 text-slate-600">
                {project.bullets.map((bullet) => (
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

export default Projects;
