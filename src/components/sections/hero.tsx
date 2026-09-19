import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImg from "../../assets/hero-portrait.jpeg";
import { MagneticButton } from "../ui/magnetic-button";

const ROLES = [
  "Full-Stack Developer",
  "AI / ML Engineer",
  "Flutter App Developer",
  "Problem Solver",
];

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.5em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          className="inline-block whitespace-nowrap font-semibold text-primary"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Scroll animations for parallax and fade effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Floating particles background effect
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = prefersReduced ? 0 : 25;
    el.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1.5;

      p.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 9999px;
        background: oklch(0.72 0.22 45 / ${0.2 + Math.random() * 0.4});
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 ${size * 3}px oklch(0.72 0.22 45 / 0.5);
        animation: float ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 4}s infinite;
      `;
      el.appendChild(p);
    }
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen w-full overflow-hidden noise-overlay flex items-center pt-20"
    >
      {/* Animated gradient bg */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{ background: "var(--gradient-hero)" }}
      />
      {/* Subtle dot grid for depth, faded toward the edges */}
      <div
        className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0" />

      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-12 gap-12 px-6 md:px-10 pt-4 pb-20 items-center"
      >
        <div className="lg:col-span-7 space-y-7 text-left">
          {/* Subheading Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Software Engineer · AI/ML Specialist
          </motion.div>

          {/* Heading with word-by-word entry reveal */}
          <h1
            className="font-display font-extrabold leading-[0.95] tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)" }}
          >
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                className="inline-block text-foreground"
              >
                Hi, I'm
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.65, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                className="inline-block text-shimmer italic font-bold pr-4"
              >
                Divya Patel G M
              </motion.span>
            </span>
          </h1>

          {/* Rotating role line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="font-display text-lg md:text-2xl font-medium text-foreground/70"
          >
            <span className="text-muted-foreground">I build as a </span>
            <RotatingRole />
          </motion.div>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            An Artificial Intelligence & Machine Learning engineer blending robust, full-stack architectures with intelligent models. I build scalable mobile apps and web products that turn data insights into seamless user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton as="a" href="#work" variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton as="a" href="#contact" variant="secondary">
              Contact Me
            </MagneticButton>
            <a
              href="#about"
              className="px-4 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Profile Image Column */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="lg:col-span-5 relative justify-self-center lg:justify-self-end w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong shadow-2xl">
            <img
              src={heroImg}
              alt="Divya Patel G M"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
              loading="eager"
            />
            {/* Ambient Shadow glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute -inset-1.5 -z-10 rounded-3xl bg-primary/30 blur-3xl animate-pulse-glow" />
          </div>

          {/* Floating Badge (Opportunity Status) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 bottom-10 glass rounded-2xl p-4 shadow-xl z-20 border border-border"
          >
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Current Status
            </div>
            <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Open to Roles
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[9px] font-bold tracking-[0.4em] text-muted-foreground uppercase z-10"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-scroll-indicator text-primary" />
      </motion.div>
    </section>
  );
}
