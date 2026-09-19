import { motion } from "framer-motion";
import { Award, Database, Code, Trophy, ExternalLink } from "lucide-react";
import { SplitText } from "../ui/split-text";

const items = [
  {
    icon: Trophy,
    title: "Runner-up - Poster Presentation",
    subtitle: "National Level Tech Fest 2025",
    type: "Award",
    desc: "Recognized at a national tech symposium for outstanding project presentation and engineering execution.",
    link: "#",
  },
  {
    icon: Award,
    title: "Runner-up - Poster Presentation",
    subtitle: "State Level Tech Fest 2024",
    type: "Award",
    desc: "Awarded at a state-level convention for presenting a dynamic software deployment project.",
    link: "#",
  },
  {
    icon: Database,
    title: "Introduction to Databases",
    subtitle: "NxtWave Certification",
    type: "Credential",
    desc: "Relational database modeling, optimized SQL queries, and normalization techniques.",
    link: "https://www.nxtwave.in/",
  },
  {
    icon: Code,
    title: "Programming Foundations with Python",
    subtitle: "NxtWave Certification",
    type: "Credential",
    desc: "OOP principles, complexity analysis, and core algorithms in Python.",
    link: "https://www.nxtwave.in/",
  },
];

export function Certifications() {
  return (
    <section id="achievements" className="relative py-16 md:py-24 px-6 md:px-10 noise-overlay bg-background">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 md:mb-14 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            <span className="h-px w-8 bg-primary" />
            Certifications & Recognition
          </div>
          <SplitText
            as="h2"
            text="Milestones worth celebrating."
            className="font-display font-semibold text-4xl md:text-5xl leading-[1.05]"
          />
        </div>

        {/* Compact card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            const verifiable = item.link !== "#";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                className="group relative flex gap-4 rounded-2xl glass p-5 md:p-6 hover-lift overflow-hidden border border-border hover:border-primary/30 text-left"
              >
                {/* Accent glow on hover */}
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="shrink-0 h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9px] font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full px-2.5 py-0.5 border border-primary/15">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-0.5 font-semibold text-primary text-xs">
                    {item.subtitle}
                  </div>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>

                  {verifiable && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      Verify Certificate <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
