import { motion } from "framer-motion";
import { Target, Cpu } from "lucide-react";
import { SplitText } from "../ui/split-text";

const tags = [
  "AI & ML Undergraduate",
  "Software Developer Intern",
  "Full-Stack Developer",
  "Problem Solver",
  "Mobile App Enthusiast",
  "Continuous Learner",
];

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-primary"
            >
              <span className="h-px w-8 bg-primary" />
              About Me
            </motion.div>
            <SplitText
              as="h2"
              text="Engineer at heart, designer in spirit."
              className="mt-6 font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground"
            />

            {/* Signature quick-facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex items-center gap-6 border-l-2 border-primary/40 pl-5"
            >
              <div>
                <div className="font-display text-3xl font-black text-gradient leading-none">5+</div>
                <div className="mt-1 text-[11px] text-muted-foreground leading-snug">
                  Shipped projects
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-black text-gradient leading-none">
                  5,000+
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground leading-snug">
                  Users reached
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <SplitText
              as="p"
              text="I am an Artificial Intelligence & Machine Learning engineering student with a strong foundation in full-stack development, mobile applications, and AI-powered web applications. I love building scalable, user-centric systems and solving real-world challenges using modern technologies."
              className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium"
              stagger={0.015}
            />
            <SplitText
              as="p"
              text="From developing high-uptime mobile hostel portals in Flutter to engineering code translation modules with LLM integrations, I pay close attention to code quality, system efficiency, and premium interactive user experiences."
              className="text-base md:text-lg leading-relaxed text-muted-foreground"
              stagger={0.012}
            />

            {/* Sub-cards / Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group glass rounded-2xl p-6 hover-lift border border-border hover:border-primary/30"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 mb-4">
                  <Target className="h-5 w-5" />
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground">Academic Goal</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Completing my B.E. in Artificial Intelligence & Machine Learning (graduating June
                  2027) with a strong academic standing.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group glass rounded-2xl p-6 hover-lift border border-border hover:border-primary/30"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 mb-4">
                  <Cpu className="h-5 w-5" />
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground">
                  Professional Focus
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Combining full-stack architectures (React, Node, Express) with intelligent,
                  model-driven features.
                </p>
              </motion.div>
            </div>

            {/* Badges / Tags */}
            <div className="flex flex-wrap gap-2.5 pt-6">
              {tags.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="glass rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:border-primary/45 transition-colors duration-300"
                >
                  {t}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
