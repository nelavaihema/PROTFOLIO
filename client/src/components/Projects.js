import React from "react";
import doctorImg from "../assets/project-doctor.svg";
import taskImg from "../assets/project-task.svg";
import recipeImg from "../assets/project-recipe.svg";
import fitnessImg from "../assets/project-fitness.svg";

const projects = [
  {
    title: "Task Management",
    image: taskImg,
    description:
      "A full-stack task management application that helps users securely organize daily work with authentication, task workflows, filtering, and dashboard statistics.",
    techStack: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Register and log in securely with JWT authentication and protected routes.",
      "Create, edit, delete, and complete tasks with status, priority, and due-date management.",
      "Filter tasks by status and view total, pending, in-progress, and completed statistics on the dashboard.",
    ],
    ctaLabel: "View project",
    ctaHref: "https://github.com/nelavaihema/Task-management",
    repoHref: "https://github.com/nelavaihema/Task-management",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "MediBook Doctor Appointment App",
    image: doctorImg,
    description:
      "A full-stack doctor appointment management application that allows patients to search and book appointments with doctors, while admins manage doctors, patients, and appointment statuses.",
    techStack: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Register and log in securely with JWT authentication and role-based patient and admin access.",
      "Search doctors by specialization, view profiles, choose available dates and time slots, and book appointments.",
      "Manage appointment history and cancellations, with admin tools for doctor CRUD and appointment status management.",
    ],
    ctaLabel: "View project",
    ctaHref: "https://github.com/nelavaihema/doctor-appointment",
    repoHref: "https://github.com/nelavaihema/doctor-appointment",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Recipe App",
    image: recipeImg,
    description:
      "A frontend recipe platform for browsing dishes, checking ingredients, and saving favorites in a clean, conversion-friendly interface.",
    techStack: ["React.js", "JavaScript", "CSS", "Tailwind CSS", "TheMealDB API", "Node.js", "Express.js", "Responsive layout"],
    highlights: [
      "Search recipes by name or ingredient and browse results with thoughtful filtering.",
      "Present recipe steps, ingredient lists, and media in a polished content layout.",
      "Support quick favorites and a mobile-first browsing experience.",
    ],
    ctaLabel: "Live demo",
    ctaHref: "https://recipe-projectreact.netlify.app/",
    repoHref: "https://github.com/nelavaihema/recipe-project",
    accent: "from-emerald-400 to-amber-500",
  },
  {
    title: "Online Personalized Fitness Class Booking Platform",
    image: fitnessImg,
    description:
      "A frontend booking dashboard that simplifies class discovery, scheduling, and trainer selection through a clear, customer-friendly experience.",
    techStack: ["React.js", "JavaScript", "CSS", "Tailwind CSS", "Booking UI", "Node.js", "Express.js", "Form validation"],
    highlights: [
      "Create a guided flow for scheduling classes, booking sessions, and checking availability.",
      "Design trainer profiles, dashboard views, and responsive layouts that improve usability.",
      "Surface booking, review, and recommendations in a modern app experience.",
    ],
    ctaLabel: "Live demo",
    ctaHref: "https://hema-fitness-new-repo.netlify.app/",
    repoHref: "https://github.com/nelavaihema/fitness-project",
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
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Frontend Projects</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              A selection of responsive applications and full-stack projects built around clear user workflows and polished interfaces.
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
              {project.image && (
                <div className="relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 shadow-2xl shadow-cyan-500/10">
                  <img src={project.image} alt={`${project.title} screenshot`} className="h-48 w-full object-cover transition duration-500 hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-4 py-3 text-sm text-slate-200">
                    {project.title}
                  </div>
                </div>
              )}
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
                <a href={project.ctaHref} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  {project.ctaLabel}
                </a>
                <a href={project.repoHref} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
                  View source
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
