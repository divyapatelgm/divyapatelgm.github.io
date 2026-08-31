import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#top");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  // Scroll-spy: highlight the section currently in view for a smooth, guided feel.
  useEffect(() => {
    const ids = ["top", ...links.map((l) => l.href.replace("#", ""))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-4 pointer-events-none"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full pointer-events-auto transition-all duration-500 ${
            scrolled
              ? "glass-strong px-6 py-2.5 shadow-[0_10px_40px_-20px_oklch(0_0_0/0.8)]"
              : "glass px-6 py-3"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="font-display font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-gradient font-extrabold">Divya</span>
            <span className="text-foreground ml-1">Patel G M</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-surface-elevated/60 border border-border"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {/* Availability Status Badge */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:shadow-[0_0_30px_-5px_var(--primary)] transition-shadow"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground" />
              </span>
              Available
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2.5 lg:hidden rounded-full border border-border text-foreground hover:bg-surface-elevated transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[84px] z-40 mx-4 glass-strong rounded-3xl p-6 shadow-2xl lg:hidden flex flex-col gap-4 border border-border"
          >
            <div className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center w-full px-4 py-3 rounded-2xl text-base font-medium text-foreground hover:bg-surface-elevated/60 hover:text-primary transition-all"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>

            <div className="h-px bg-border my-2" />

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-primary-foreground animate-pulse" />
              Let's Build Something
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
