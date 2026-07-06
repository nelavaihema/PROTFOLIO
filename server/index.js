const path = require("path");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const sendMail = async ({ name, email, subject, message }) => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("Contact request received:", { name, email, subject, message });
    return null;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mail = {
    from: `Portfolio Contact <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
    subject: subject || "New portfolio contact request",
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "Portfolio message"}\n\nMessage:\n${message}`,
  };

  return transporter.sendMail(mail);
};

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ status: "error", message: "Please provide name, email, and message." });
    }

    await sendMail({ name, email, subject, message });
    return res.json({ status: "success", message: "Message received. I’ll reply soon." });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ status: "error", message: "Unable to submit message right now." });
  }
});

const clientBuildPath = path.join(__dirname, "..", "client", "build");
app.use(express.static(clientBuildPath));

app.get("*", (req, res) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ status: "error", message: "API route not found." });
  }
  return res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
