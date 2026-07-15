import React from "react";

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
            I bring together frontend craftsmanship, backend reliability, and product thinking to deliver web experiences that feel modern and dependable.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="section-shell rounded-3xl bg-slate-900/70 p-8">
            <p className="text-lg leading-8 text-slate-300">
              I’m a results-driven Full Stack Developer with 3.6+ years of experience building scalable web applications using React.js, Angular, TypeScript, Node.js, Express, MongoDB, SQL, and AWS.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              My work spans enterprise automation platforms, GraphQL integrations, and cloud-native systems. I focus on building intuitive interfaces and dependable APIs that help users and businesses move faster.
            </p>
          </div>
          <div className="section-shell rounded-3xl bg-slate-900/70 p-8">
            <h3 className="text-xl font-semibold text-white">Quick facts</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li><span className="font-semibold text-white">Location:</span> Chennai, India</li>
              <li><span className="font-semibold text-white">Experience:</span> 3.6 years</li>
              <li><span className="font-semibold text-white">Role:</span> Full Stack Developer</li>
              <li><span className="font-semibold text-white">Email:</span> nelavaihema31128@gmail.com</li>
              <li><span className="font-semibold text-white">GitHub:</span> github.com/nelavaihema</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
