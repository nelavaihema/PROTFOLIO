import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white px-6 py-16 text-slate-700 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-semibold text-slate-800">About Me</h2>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="space-y-6 text-slate-600">
            <p>
              I’m a results-driven Full Stack Developer with 3.6+ years of experience building scalable web applications using React.js, Angular, TypeScript, Node.js, Express, MongoDB, SQL, and AWS.
            </p>
            <p>
              I specialize in enterprise automation platforms, GraphQL integrations, GenAI experiences, and cloud-native systems. I enjoy improving application performance, user experience, and team collaboration.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-200/60">
            <h3 className="mb-4 text-xl font-semibold text-slate-800">Quick facts</h3>
            <ul className="space-y-3 text-slate-600">
              <li><span className="font-semibold text-slate-800">Location:</span> Chennai, India</li>
              <li><span className="font-semibold text-slate-800">Experience:</span> 3.6+ years</li>
              <li><span className="font-semibold text-slate-800">Role:</span> Full Stack Developer</li>
              <li><span className="font-semibold text-slate-800">Email:</span> nelavaihema31128@gmail.com</li>
              <li><span className="font-semibold text-slate-800">GitHub:</span> github.com/nelavaihema</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
