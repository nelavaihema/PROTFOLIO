import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "Unable to send message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Unable to send message. Please try again." });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="px-6 py-20 text-slate-100 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let’s create something meaningful together.</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-shell rounded-3xl bg-slate-900/70 p-8">
            <p className="text-lg leading-8 text-slate-300">
              I’m available for new opportunities, freelance projects, and creative collaborations. Send a note and I’ll get back to you soon.
            </p>
            <div className="mt-6 space-y-4 text-slate-300">
              <p><span className="font-semibold text-white">Email:</span> nelavaihema31128@gmail.com</p>
              <p><span className="font-semibold text-white">Location:</span> Chennai, India</p>
              <p><span className="font-semibold text-white">LinkedIn:</span> linkedin.com/in/nelavai-hema-20527920a</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="section-shell rounded-3xl bg-slate-900/70 p-8">
            {status && (
              <div className={`rounded-2xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-500/10 text-emerald-300" : "bg-rose-500/10 text-rose-300"}`}>
                {status.message}
              </div>
            )}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
                />
              </label>
            </div>
            <label className="mt-4 block space-y-2 text-sm text-slate-300">
              <span>Subject</span>
              <input
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
              />
            </label>
            <label className="mt-4 block space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
