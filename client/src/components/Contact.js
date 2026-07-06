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
    <section id="contact" className="bg-white px-6 py-16 text-slate-700 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-semibold text-slate-800">Contact</h2>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-700 bg-slate-950 p-8 shadow-xl shadow-slate-950/20">
            <p className="mb-6 text-slate-300">
              I’m available for new opportunities and freelance projects. Send a note and I’ll get back to you soon.
            </p>
            <div className="space-y-4 text-slate-600">
              <p><span className="font-semibold text-slate-800">Email:</span> nelavaihema31128@gmail.com</p>
              <p><span className="font-semibold text-slate-800">Location:</span> Chennai, India</p>
              <p><span className="font-semibold text-slate-800">LinkedIn:</span> linkedin.com/in/nelavai-hema-20527920a</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-100/80">
            {status && (
              <div className={`rounded-xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-500/10 text-emerald-300" : "bg-rose-500/10 text-rose-300"}`}>
                {status.message}
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-cyan-400"
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
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-cyan-400"
                />
              </label>
            </div>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Subject</span>
              <input
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-cyan-400"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-cyan-400"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
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
