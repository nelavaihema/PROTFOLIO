import React from "react";

const projects = [
  {
    title: "Cloud Hygiene Automation Platform",
    description:
      "Built a compliance dashboard for cloud operations using React.js and TypeScript with REST APIs and Grafana-based monitoring views.",
    techStack: ["React.js", "TypeScript", "AWS Lambda", "REST APIs", "Grafana"],
    highlights: [
      "Developed reusable UI components and searchable compliance policy views.",
      "Improved platform performance and supported cloud automation workflows.",
      "Delivered reporting experiences for operational visibility and compliance tracking.",
    ],
    ctaLabel: "Discuss this project",
    ctaHref: "#contact",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "Voice Mail to Text (VM2TXT)",
    description:
      "Developed an automation system for converting voicemail workloads into text through AWS-based processing and monitoring pipelines.",
    techStack: ["AWS ECS", "AWS Transcribe", "DynamoDB", "CloudWatch"],
    highlights: [
      "Implemented ECS auto-scaling and DynamoDB lifecycle management.",
      "Improved production reliability with AWS CLI automation and monitoring.",
      "Supported high-volume email and voice processing workflows.",
    ],
    ctaLabel: "Discuss this project",
    ctaHref: "#contact",
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "TDP Front Door Automation",
    description:
      "Built an enterprise ticket management platform with AI-driven workflows, RBAC controls, analytics dashboards, and admin configuration modules.",
    techStack: ["React.js", "GraphQL", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Created chatbot workflows and operational dashboards for support teams.",
      "Integrated GraphQL and REST APIs while improving responsiveness and UX.",
      "Delivered role-based access and configuration tooling for enterprise use.",
    ],
    ctaLabel: "Discuss this project",
    ctaHref: "#contact",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Online Personalized Fitness Class Booking Platform",
    description:
      "Developed a full-stack booking platform for fitness classes with secure authentication, schedules, trainer profiles, payments, and recommendations.",
    techStack: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    highlights: [
      "Implemented class scheduling, booking, rescheduling, cancellation, and availability management.",
      "Built personalized recommendations, dashboards, reviews, and email notifications.",
      "Integrated payment flows and secure REST APIs for users, classes, and bookings.",
    ],
    ctaLabel: "Discuss this project",
    ctaHref: "#contact",
    accent: "from-amber-500 to-orange-600",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-20 text-slate-100 md:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.16),_transparent_28%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Full-Stack & Cloud Projects</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              These projects reflect my experience building full-stack web applications, cloud-native automation solutions, and enterprise-grade user experiences.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
            Let’s build together
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="section-shell flex h-full flex-col rounded-3xl bg-slate-900/70 p-7">
              <div className={`mb-5 h-2 rounded-full bg-gradient-to-r ${project.accent}`} />
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Tech Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-sm leading-7 text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 pt-2">
                <a href={project.ctaHref} className="rounded-full bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  {project.ctaLabel}
                </a>
                <a href="https://github.com/nelavaihema" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
                  GitHub Profile
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
