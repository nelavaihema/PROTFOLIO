import React from "react";
import holidayImg from "../assets/project-holiday.svg";
import movieImg from "../assets/project-movie.svg";
import recipeImg from "../assets/project-recipe.svg";
import fitnessImg from "../assets/project-fitness.svg";

const projects = [
  {
    title: "Public Holiday Finder",
    image: holidayImg,
    description:
      "A responsive React app that fetches public holiday data from the Nager.Date API. Users can select a country and year to view holidays, filter results, and manage previous searches.",
    techStack: ["React.js", "Tailwind CSS", "Fetch API", "Nager.Date API"],
    highlights: [
      "Search holidays by country and year with a loading indicator and error handling.",
      "Country dropdown, year input, search history with re-fetch, and clear history button.",
      "Responsive UI with optional filters (month/type), CSV export, and upcoming holiday highlights.",
    ],
    ctaLabel: "Live demo",
    ctaHref: "https://public-holiday-finder.netlify.app/",
    repoHref: "https://github.com/nelavaihema/mini-project",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "Movie Review App",
    image: movieImg,
    description:
      "A responsive React app for browsing, searching, and rating movies. Uses OMDb (or mock data) to display details, with a star-based rating UI and filters by genre and year.",
    techStack: ["React.js", "Tailwind CSS", "OMDb API", "React Hooks"],
    highlights: [
      "Search and filter movies by title, genre, year, and rating.",
      "Detailed movie view with poster, synopsis, cast (when available), and release info.",
      "Star-based rating system with average rating display and responsive layout.",
    ],
    ctaLabel: "Live demo",
    ctaHref: "https://movie-app-omdb-project.netlify.app/",
    repoHref: "https://github.com/nelavaihema/Movie-react",
    accent: "from-violet-500 to-pink-500",
  },
  {
    title: "Recipe App",
    image: recipeImg,
    description:
      "Dynamic recipe explorer built with React and Tailwind that fetches meals from TheMealDB. Browse, search, filter by category or ingredient, and view full recipe details.",
    techStack: ["React.js", "Tailwind CSS", "Axios", "TheMealDB API"],
    highlights: [
      "Search recipes by name or keyword and filter by category or ingredient.",
      "Full recipe detail view with instructions, ingredients list, and video link when available.",
      "Optional favorites persisted to localStorage for quick access.",
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
      "Built a full-stack booking platform with secure auth, class scheduling, trainer profiles, payments, and booking management.",
    techStack: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    highlights: [
      "Implemented class scheduling, booking, rescheduling, and availability management.",
      "Built recommendations, dashboards, reviews, and email notifications.",
      "Deployed the live project to Netlify for user access.",
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
