import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
// ============================================================
// 1. YOUR DATA — edit everything in this block to customize
// ============================================================
const DATA = {
  name: "Anish Yalavarthi",
  tagline: "CS Student @ SJSU & Aspiring Software Engineer",
  about:
    "I'm a junior pursuing Computer Science at San Jose State University. I have experience from implementing database systems to building web servers, and am passionate about software development. In the future, I am eager to contribute to innovative projects.",
  skills: [
    "Python", "Java", "HTML/CSS", "Linux", "SQL", "React", "Node.js",
    "Git", "Claude",
  ],
  projects: [
    {
      title: "Project One",
      desc: "A short, punchy description of what this project does and why it's cool.",
      tags: ["React", "Node.js"],
      link: "#",
    },
    {
      title: "Project Two",
      desc: "Another project — maybe an algorithm visualizer, a game, or a useful tool.",
      tags: ["Python", "Flask"],
      link: "#",
    },
    {
      title: "Project Three",
      desc: "Show off your range. A data project, a mobile app, anything you're proud of.",
      tags: ["Java", "SQL"],
      link: "#",
    },
  ],
  contact: {
    email: "anish.yalavarthi@gmail.com",
    github: "https://github.com/AnishYalavarthi",
    linkedin: "https://linkedin.com/in/anish-yalavarthi",
  },
};

// ============================================================
// 2. SECTIONS — each is its own component
// ============================================================

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["about", "skills", "projects", "contact"];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-black tracking-tighter text-white">
          {DATA.name.split(" ")[0]}<span className="text-fuchsia-500">.</span>
        </span>
        <div className="hidden sm:flex gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l}`}
              className="text-sm font-medium text-white/70 hover:text-fuchsia-400 transition-colors uppercase tracking-wide">
              {l}
            </a>
          ))}
        </div>
        <button className="sm:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {open && (
        <div className="sm:hidden flex flex-col gap-4 px-6 pb-4">
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}
              className="text-white/70 hover:text-fuchsia-400 uppercase tracking-wide text-sm">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20">
      <p className="text-fuchsia-500 font-mono mb-4 text-lg">Hi, my name is</p>
      <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-white leading-none mb-4">
        {DATA.name}
      </h1>
      <h2 className="text-3xl sm:text-5xl font-black tracking-tighter bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-8">
        {DATA.tagline}
      </h2>
      <div className="flex gap-4">
        <a href="#projects"
          className="px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-full transition-all hover:scale-105">
          View my work
        </a>
        <a href="#contact"
          className="px-8 py-4 border border-white/20 hover:border-fuchsia-500 text-white font-bold rounded-full transition-all hover:scale-105">
          Get in touch
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 max-w-5xl mx-auto py-24">
      <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-8">
        <span className="text-fuchsia-500 font-mono text-2xl mr-2">01.</span>About
      </h2>
      <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
        {DATA.about}
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 max-w-5xl mx-auto py-24">
      <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-12">
        <span className="text-fuchsia-500 font-mono text-2xl mr-2">02.</span>Skills
      </h2>
      <div className="flex flex-wrap gap-4">
        {DATA.skills.map((skill) => (
          <span key={skill}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:border-fuchsia-500 hover:bg-fuchsia-500/10 hover:scale-105 transition-all cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 max-w-5xl mx-auto py-24">
      <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-12">
        <span className="text-fuchsia-500 font-mono text-2xl mr-2">03.</span>Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer"
            className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-fuchsia-500 hover:bg-white/10 transition-all hover:-translate-y-2">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
              <FiArrowUpRight className="text-white/40 group-hover:text-fuchsia-400 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-mono text-fuchsia-400">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 max-w-5xl mx-auto py-24 text-center">
      <p className="text-fuchsia-500 font-mono mb-4">04. What's next?</p>
      <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-white mb-6">
        Let's connect.
      </h2>
      <p className="text-xl text-white/60 max-w-md mx-auto mb-10">
        I'm always open to new opportunities, collaborations, or any queries.
      </p>
      <a href={`mailto:${DATA.contact.email}`}
        className="inline-block px-10 py-5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-full transition-all hover:scale-105 mb-12">
        Say hello
      </a>
      <div className="flex justify-center gap-8">
        <a href={DATA.contact.github} target="_blank" rel="noopener noreferrer"
          className="text-white/50 hover:text-fuchsia-400 hover:scale-110 transition-all">
          <FiGithub size={28} />
        </a>
        <a href={DATA.contact.linkedin} target="_blank" rel="noopener noreferrer"
          className="text-white/50 hover:text-fuchsia-400 hover:scale-110 transition-all">
          <FiLinkedin size={28} />
        </a>
        <a href={`mailto:${DATA.contact.email}`}
          className="text-white/50 hover:text-fuchsia-400 hover:scale-110 transition-all">
          <FiMail size={28} />
        </a>
      </div>
    </section>
  );
}

// ============================================================
// 3. APP — assembles all the sections together
// ============================================================
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-fuchsia-500 selection:text-white">
      {/* Glowing background accents */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="relative">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className="text-center text-white/30 text-sm py-8">
          Built by {DATA.name}
        </footer>
      </div>
    </div>
  );
}
