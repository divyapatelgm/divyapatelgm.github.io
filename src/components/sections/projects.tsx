import { useEffect, useRef } from "react";
import { ArrowUpRight, Github, ArrowRight, Loader } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "../ui/split-text";
import hostel from "../../assets/project-hostel.jpg";
import students from "../../assets/project-students.jpg";
import translator from "../../assets/project-translator.jpg";
import pranalyzer from "../../assets/project-pranalyzer.svg";
import aiml from "../../assets/project-aiml.jpg";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  no: string;
  title: string;
  category: string;
  status: string;
  image: string;
  tags: string[];
  description: string;
  liveLink?: string;
  liveLabel?: string;
  githubLink: string;
  ongoing?: boolean;
}

// NOTE: replace liveLink/githubLink with the real repo & demo URLs when available.
const profile = "https://github.com/divyapatelgm";

const projects: Project[] = [
  {
    no: "01",
    title: "Hostel Management App",
    category: "Flutter · Mobile",
    status: "Live · Play Store",
    image: hostel,
    tags: ["Flutter", "PHP", "MySQL", "Firebase"],
    description:
      "A full-stack hostel platform serving 1,000+ students at 99% uptime — role-based access for students, wardens and admins, QR entry/exit tracking, and automated gate-pass and grievance workflows that cut processing time by 60%.",
    liveLink: "https://play.google.com/store",
    liveLabel: "Play Store",
    githubLink: profile,
  },
  {
    no: "02",
    title: "Employee Task & Project Tracker",
    category: "Full-Stack · Web App",
    status: "Live",
    image: students,
    tags: ["PHP", "MySQL", "JavaScript"],
    description:
      "A team tracking tool that handles unlimited concurrent projects with per-developer task assignment — unlike single-project tools like Jira. An executive dashboard surfaces tasks assigned, completed and overdue for every employee.",
    liveLink: "https://erp.gmit.info/gem/jira/",
    liveLabel: "View Project",
    githubLink: profile,
  },
  {
    no: "03",
    title: "AI-Powered Smart Code Translator & Analyzer",
    category: "AI · Full-Stack Web App",
    status: "Live demo",
    image: translator,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    description:
      "An AI platform for translating, optimizing and explaining code across languages. Monaco Editor powers real-time editing, JWT and Google OAuth secure the REST APIs, and analysis is driven by the Gemini API.",
    liveLink: "https://github.com/divyapatelgm/smart-code-translater",
    liveLabel: "View Project",
    githubLink: profile,
  },
  {
    no: "04",
    title: "Smart GitHub PR Analyzer",
    category: "LLM · RAG · Ongoing",
    status: "In progress",
    image: pranalyzer,
    tags: ["Fine-tuned LLM", "RAG", "Python"],
    description:
      "A fine-tuned LLM paired with retrieval-augmented generation that writes senior-engineer-level reviews on GitHub pull requests. I own the data collection and preprocessing pipeline that feeds the model.",
    githubLink: profile,
    ongoing: true,
  },
  {
    no: "05",
    title: "AI & ML Department Site",
    category: "React · Web",
    status: "Live",
    image: aiml,
    tags: ["React.js", "Vite", "Tailwind CSS"],
    description:
      "The department's interactive home — academic programs, faculty and research presented through dynamic, fully responsive React components.",
    liveLink: "https://gmuaiml.pages.dev/",
    liveLabel: "View Project",
    githubLink: profile,
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Horizontal pin only on desktop; respect reduced-motion.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.innerWidth < 1024 || prefersReduced) return;

    const ctx = gsap.context(() => {
      const getDistance = () => track.scrollWidth - window.innerWidth + 48;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
            if (counterRef.current) {
              const idx = Math.min(
                projects.length,
                Math.max(1, Math.round(self.progress * (projects.length - 1)) + 1)
              );
              counterRef.current.textContent = String(idx).padStart(2, "0");
            }
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-background overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Ambient wash */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative lg:h-screen flex items-center py-24 lg:py-0">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-10 px-6 md:px-10 lg:pl-[7vw] lg:pr-[7vw] w-full lg:w-max will-change-transform"
        >
          {/* Intro slide */}
          <div className="flex-shrink-0 w-full lg:w-[36vw] lg:max-w-[520px] flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">
              <span className="h-px w-8 bg-primary" />
              Selected Work
            </div>
            <SplitText
              as="h2"
              text="Products that function beautifully."
              className="font-display font-bold text-4xl md:text-6xl leading-[1.02]"
            />
            <p className="mt-6 text-muted-foreground text-base leading-relaxed max-w-md">
              Five builds spanning mobile, full-stack web and applied AI — each shipped or shipping to real users.
            </p>
            <div className="mt-8 hidden lg:flex items-center gap-3 text-sm font-semibold text-foreground/70">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                <ArrowRight className="h-4 w-4 text-primary" />
              </span>
              Scroll to explore
            </div>
          </div>

          {projects.map((p, i) => (
            <ProjectCard key={p.no} project={p} index={i} />
          ))}

          {/* End CTA slide */}
          <div className="flex-shrink-0 w-full sm:w-[80vw] lg:w-[34vw] lg:max-w-[460px] lg:h-[78vh] lg:max-h-[640px] flex items-center justify-center p-8 rounded-[2rem] glass border border-border hover-lift">
            <a href="#contact" className="group flex flex-col items-center gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <ArrowUpRight className="h-7 w-7" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                Let's build the next one
              </div>
              <div className="text-sm text-muted-foreground max-w-xs">
                Have an internship, role or project in mind? I'd love to hear about it.
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Progress rail (desktop) */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-4 z-20">
        <span className="font-mono text-xs font-semibold text-muted-foreground">
          <span ref={counterRef} className="text-primary">01</span> / 0{projects.length}
        </span>
        <div className="h-[3px] w-40 rounded-full bg-border overflow-hidden">
          <div
            ref={progressRef}
            className="h-full w-full origin-left rounded-full bg-gradient-to-r from-primary to-primary-glow"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative flex-shrink-0 w-full sm:w-[80vw] lg:w-[80vw] lg:max-w-[1080px] lg:h-[78vh] lg:max-h-[640px] rounded-[2rem] glass-strong border border-border overflow-hidden hover:border-primary/25 transition-colors duration-500">
      {/* Giant index watermark */}
      <div className="pointer-events-none absolute -top-6 right-4 md:right-8 font-display text-[7rem] md:text-[11rem] font-black leading-none text-foreground/[0.04] select-none z-0">
        {project.no}
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Content column */}
        <div className="order-2 lg:order-1 flex flex-col justify-center p-7 md:p-11 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary">
              {project.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <StatusChip status={project.status} ongoing={project.ongoing} />
          </div>

          <h3 className="font-display text-2xl md:text-[2.1rem] font-bold leading-[1.1] text-foreground">
            {project.title}
          </h3>

          <p className="mt-4 text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-md">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-border bg-surface-elevated/40 text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.ongoing ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Loader className="h-4 w-4 animate-spin [animation-duration:3s]" /> In progress
              </span>
            ) : (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:shadow-[0_0_30px_-5px_var(--primary)] transition-shadow duration-300"
              >
                {project.liveLabel} <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-surface-elevated transition-colors duration-300"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          </div>
        </div>

        {/* Visual column */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center p-6 md:p-9 lg:pl-0">
          <div className="relative w-full max-w-[560px]">
            <div
              className="absolute -inset-3 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border shadow-2xl bg-surface">
              <img
                src={project.image}
                alt={project.title}
                loading={index === 0 ? "eager" : "lazy"}
                width={1280}
                height={960}
                className="h-full w-full object-cover object-top scale-[1.02] group-hover:scale-105 transition-transform duration-[1400ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function StatusChip({ status, ongoing }: { status: string; ongoing?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          ongoing ? "bg-amber-400" : "bg-emerald-400"
        } ${ongoing ? "" : "animate-pulse"}`}
      />
      {status}
    </span>
  );
}
