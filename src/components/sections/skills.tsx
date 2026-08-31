import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Brain, Wrench } from "lucide-react";
import { SplitText } from "../ui/split-text";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "C", "C++", "Java", "JavaScript"],
  },
  {
    title: "Frontend & UI",
    icon: Layout,
    skills: ["React.js", "Bootstrap", "Flutter", "HTML5 & CSS3"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "PHP"],
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    skills: ["MySQL", "Firebase", "MongoDB"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["NumPy", "Pandas", "scikit-learn", "Google Gemini API", "TensorFlow"],
  },
  {
    title: "Tools & Ecosystem",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vite", "Netlify"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.65, 0, 0.35, 1] as const,
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 px-6 md:px-10 noise-overlay bg-background">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 md:mb-14 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            <span className="h-px w-8 bg-primary" />
            Skills & Expertise
          </div>
          <SplitText
            as="h2"
            text="A toolkit built over real projects."
            className="font-display font-bold text-4xl md:text-5xl leading-[1.05]"
          />
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-xl">
            The languages, frameworks, and tools I reach for to build scalable frontends,
            backends, mobile apps, and machine-learning models.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {skillCategories.map((category, ci) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="group relative rounded-2xl glass p-5 md:p-6 hover-lift border border-border hover:border-primary/30 text-left overflow-hidden"
              >
                {/* Top accent line that grows on hover */}
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500 ease-out" />
                {/* Ambient card glow */}
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-[15px] md:text-base font-bold text-foreground leading-tight">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-muted-foreground/60 tabular-nums">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-surface-elevated/45 text-[11px] font-medium text-foreground/85 border border-border/70 hover:border-primary/35 hover:text-foreground transition-colors duration-300 select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
