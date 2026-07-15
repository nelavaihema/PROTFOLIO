import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A polished marketplace experience with product discovery, cart management, secure checkout, order history, and a modern admin workflow for online retail.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    githubFrontend: "https://github.com/nelavaihema/mern-ecommerce-frontend",
    githubBackend: "https://github.com/nelavaihema/mern-ecommerce-backend",
    deployedUrl: "https://mern-ecommerce-demo.netlify.app",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "Collaborative Task Hub",
    description:
      "A productivity dashboard for teams to manage tasks, assign work, track deadlines, and collaborate in real time through a clean project workspace.",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.IO"],
    githubFrontend: "https://github.com/nelavaihema/taskhub-frontend",
    githubBackend: "https://github.com/nelavaihema/taskhub-backend",
    deployedUrl: "https://taskhub-demo.vercel.app",
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Capstone Project — Career Growth Platform",
    description:
      "A full-stack learning and career portal with user authentication, course discovery, role-based dashboards, and a smooth experience for both learners and admins.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    githubFrontend: "https://github.com/nelavaihema/capstone-frontend",
    githubBackend: "https://github.com/nelavaihema/capstone-backend",
    deployedUrl: "https://career-platform-demo.netlify.app",
    accent: "from-emerald-500 to-teal-600",
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
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Projects</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              These projects reflect my approach to building complete MERN stack applications with thoughtful UX, secure architecture, and production-ready delivery.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
            Let’s build together
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
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
              <div className="mt-8 flex flex-wrap gap-3 pt-2">
                <a href={project.githubFrontend} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
                  Frontend Repo
                </a>
                <a href={project.githubBackend} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
                  Backend Repo
                </a>
                <a href={project.deployedUrl} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Live Demo
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
