import { motion } from "framer-motion";
import { Smartphone, Library, LayoutDashboard } from "lucide-react";
import { SplitText } from "../ui/split-text";

const role = {
  title: "Software Developer Intern",
  org: "GEM Ventures, Davangere",
  period: "Feb 2026 — Present",
  summary:
    "Shipping production software end-to-end — from Flutter mobile apps on the Play Store & App Store to internal tooling that keeps teams in sync. I own features from design through deployment for products serving thousands of daily users.",
  tags: ["Flutter", "PHP", "MySQL", "Firebase", "REST APIs", "JavaScript"],
};

const stats = [
  { value: "5,000+", label: "GMU Connect users served" },
  { value: "2", label: "Stores shipped to — Play & App" },
  { value: "60%", label: "Faster gate-pass workflow" },
];

const highlights = [
  {
    icon: Smartphone,
    title: "Flutter Hostel Management System",
    text: "Led development from design through deployment on the Play Store and App Store — role-based access, QR gate passes, and grievance workflows.",
  },
  {
    icon: Library,
    title: "Extended the GMU Connect app",
    text: "Added an OPAC, a Library book-reservation module, and an appointment-booking system to a live app used by 5,000+ people.",
  },
  {
    icon: LayoutDashboard,
    title: "Internal task & project tracker",
    text: "Building a web app that supports unlimited concurrent projects per user, with an executive dashboard of per-employee task and project statistics.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 px-6 md:px-10 bg-background overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 md:mb-20 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            <span className="h-px w-8 bg-primary" />
            Experience
          </div>
          <SplitText
            as="h2"
            text="Building, learning, shipping."
            className="font-display font-bold text-4xl md:text-6xl leading-[1.02]"
          />
        </div>

        {/* Featured role card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="relative rounded-[2rem] glass-strong border border-border overflow-hidden"
        >
          {/* accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          <div
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "var(--gradient-primary)" }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-7 md:p-12">
            {/* Left: role identity */}
            <div className="lg:col-span-5 text-left">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {role.period}
              </span>
              <h3 className="mt-5 font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {role.title}
              </h3>
              <div className="mt-2 font-semibold text-primary">{role.org}</div>
              <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                {role.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-1.5">
                {role.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold px-2.5 py-1.5 rounded-lg border border-border bg-surface-elevated/40 text-foreground/85"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-9 grid grid-cols-3 gap-3 border-t border-border pt-7">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl md:text-3xl font-black text-gradient leading-none">
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-[10px] md:text-[11px] text-muted-foreground leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: highlights */}
            <div className="lg:col-span-7 lg:border-l lg:border-border lg:pl-10 space-y-3">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                    className="group flex gap-4 rounded-2xl p-4 md:p-5 border border-transparent hover:border-border hover:bg-surface-elevated/30 transition-all duration-400"
                  >
                    <div className="shrink-0 h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-display font-bold text-base md:text-lg text-foreground">
                        {h.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {h.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
