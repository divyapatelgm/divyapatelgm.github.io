import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";
import { SplitText } from "../ui/split-text";

const coursework = [
  "Deep Neural Networks",
  "Machine Learning",
  "Data Mining",
  "DBMS",
  "Data Structures & Algorithms",
  "LLM Integration",
];

const facts = [
  { icon: CalendarDays, label: "Duration", value: "Sep 2023 – Jun 2027" },
  { icon: MapPin, label: "Location", value: "Davangere, Karnataka" },
  { icon: GraduationCap, label: "Degree", value: "B.E. — AI & ML" },
];

export function Education() {
  return (
    <section id="education" className="relative py-16 md:py-24 px-6 md:px-10 bg-background/50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            <span className="h-px w-8 bg-primary" />
            Education
          </div>
          <SplitText
            as="h2"
            text="Academic foundation in intelligence."
            className="font-display font-semibold text-4xl md:text-5xl leading-[1.05]"
          />
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          className="relative rounded-[2rem] glass-strong p-8 md:p-12 overflow-hidden border border-border"
        >
          {/* accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          {/* Radial ambient glow */}
          <div
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "var(--gradient-primary)" }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start text-left">
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5">
                Bachelor of Engineering · 2023 – 2027
              </span>
              <h3 className="mt-5 font-display text-2xl md:text-4xl font-extrabold leading-tight text-foreground">
                Artificial Intelligence &{" "}
                <span className="text-gradient italic font-bold">Machine Learning</span>
              </h3>
              <div className="mt-2 font-semibold text-muted-foreground">
                GM Institute of Technology, Davangere
              </div>
              <p className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                Studying the algorithms and systems that turn data into decisions — deep neural
                networks, machine-learning paradigms, data-mining structures, and LLM integration —
                reinforced by hands-on model building and full-stack web deployments.
              </p>

              {/* Coursework chips */}
              <div className="mt-7">
                <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground mb-3">
                  Key Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((c, i) => (
                    <motion.span
                      key={c}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                      className="text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-border bg-surface-elevated/40 text-foreground/85 hover:border-primary/35 transition-colors duration-300"
                    >
                      {c}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: CGPA + facts */}
            <div className="md:col-span-4 space-y-4">
              <div className="rounded-3xl border border-primary/20 bg-surface-elevated/40 px-8 py-7 text-center hover:border-primary/50 transition-colors duration-300">
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground">
                  CGPA
                </div>
                <div className="mt-2 font-display text-5xl font-black text-gradient leading-none">
                  8.26
                </div>
                <div className="mt-1 text-xs font-semibold text-muted-foreground">out of 10</div>
              </div>

              <div className="space-y-2.5">
                {facts.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.label}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-surface-elevated/20 px-4 py-3"
                    >
                      <div className="shrink-0 h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                          {f.label}
                        </div>
                        <div className="text-[13px] font-semibold text-foreground truncate">
                          {f.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
