import React from "react";
import profilePhoto from "../assets/profile-photo.jpeg";

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
            I bring together frontend craftsmanship, backend reliability, and product thinking to deliver web experiences that feel modern, scalable, and dependable.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="section-shell rounded-3xl bg-slate-900/70 p-8">
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,220px)_1fr]">
              <div className="mx-auto w-full max-w-[220px]">
                <img
                  src={profilePhoto}
                  alt="Professional portrait of Nelavai Hema"
                  className="aspect-square w-full rounded-2xl border border-cyan-400/20 object-cover object-center shadow-xl shadow-cyan-950/30"
                />
              </div>
              <div>
                <p className="text-lg leading-8 text-slate-300">
                  I’m a MERN Stack Developer with 3.6 years of experience creating responsive interfaces, interactive dashboards, and user-centric web applications using MongoDB, Express.js, React, and Node.js.
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  I care deeply about clean design, performance, accessibility, and smooth user experiences that make product interactions feel natural and effective.
                </p>
              </div>
            </div>
          </div>
          <div className="section-shell rounded-3xl bg-slate-900/70 p-8">
            <h3 className="text-xl font-semibold text-white">Quick facts</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li><span className="font-semibold text-white">Location:</span> Chennai, India</li>
              <li><span className="font-semibold text-white">Experience:</span> 3.6 years</li>
              <li><span className="font-semibold text-white">Role:</span> MERN Stack Developer</li>
              <li><span className="font-semibold text-white">Email:</span> nelavaihema31128@gmail.com</li>
              <li>
                <span className="font-semibold text-white">GitHub:</span>
                <a href="https://github.com/nelavaihema" target="_blank" rel="noopener noreferrer" className="ml-2 text-cyan-300 hover:underline">GitHub Profile</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <div className="section-shell rounded-3xl bg-slate-900/70 p-8">
            <h3 className="text-xl font-semibold text-white">Education</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li><span className="font-semibold text-white">Degree:</span> Bachelor of Engineering in Computer Science</li>
              <li><span className="font-semibold text-white">College:</span> Siddharth Institute of Engineering and Technology</li>
              <li><span className="font-semibold text-white">Years:</span> 2018 – 2022</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
