import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SplitText } from "../ui/split-text";
import { TiltCard } from "../ui/tilt-card";

export function Certifications() {
  return (
    <section id="achievements" className="relative py-16 md:py-24 px-6 md:px-10 noise-overlay bg-background">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 md:mb-14 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            <span className="h-px w-8 bg-primary" />
            Certifications & Recognition
          </div>
          <SplitText
            as="h2"
            text="Milestones worth celebrating."
            className="mt-2 font-display font-semibold text-4xl md:text-5xl leading-[1.05]"
          />
        </div>

        {/* Unified Award Card */}
        <div className="relative z-10">
          <TiltCard>
            <div className="group relative flex flex-col lg:flex-row gap-8 rounded-[2rem] glass-strong p-6 md:p-8 border border-border hover:border-primary/30 text-left overflow-hidden">
              {/* Accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {/* Ambient glow */}
              <div
                className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                style={{ background: "var(--gradient-primary)" }}
              />

              {/* Content Left */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-wide uppercase text-foreground">
                    Runner-up <span className="text-primary">—</span> Poster Presentation
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm md:text-base font-semibold text-primary">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    National Level Tech Fest · 2025
                  </div>
                  <div className="flex items-center gap-3 text-sm md:text-base font-semibold text-primary">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    State Level Tech Fest · 2024
                  </div>
                </div>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Recognized for project presentation and engineering execution at both national and state-level events.
                </p>
              </div>

              {/* Images Right - Creative Offset Layout */}
              <div className="shrink-0 relative w-full lg:w-[420px] h-[280px] md:h-[320px] mt-8 lg:mt-0 flex items-center justify-center">
                {/* Connecting dashed line SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 80 100 C 80 250, 320 50, 320 200" stroke="var(--primary)" strokeOpacity="0.4" strokeWidth="3" strokeDasharray="8 8" />
                </svg>

                {/* Image 1 (2025 - Top Left) */}
                <motion.div
                  initial={{ opacity: 0, x: -20, rotate: -8 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: -2, zIndex: 30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute left-0 top-0 md:left-4 md:top-4 w-[60%] sm:w-[55%] rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border-2 border-border/50 glass z-10 flex items-center justify-center cursor-pointer"
                >
                  <img
                    src="/poster-2K25.jpg"
                    alt="National Level Tech Fest 2025 Poster"
                    loading="lazy"
                    className="w-full h-auto object-contain pointer-events-none"
                  />
                </motion.div>

                {/* Image 2 (2024 - Bottom Right) */}
                <motion.div
                  initial={{ opacity: 0, x: 20, rotate: 8 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2, zIndex: 30 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="absolute right-0 bottom-0 md:right-4 md:bottom-4 w-[60%] sm:w-[55%] rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border-2 border-border/50 glass z-20 flex items-center justify-center cursor-pointer"
                >
                  <img
                    src="/poster-2K24.jpg"
                    alt="State Level Tech Fest 2024 Poster"
                    loading="lazy"
                    className="w-full h-auto object-contain pointer-events-none"
                  />
                </motion.div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
