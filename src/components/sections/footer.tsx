import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "../ui/magnetic-button";
import { lenisScrollTo } from "../ui/smooth-scroll";

const EMAIL = "divyapatelgm220604@gmail.com";

export function Footer() {
  const scrollToTop = () => {
    // Drive the smooth-scroll engine if it's live; otherwise fall back to native.
    if (!lenisScrollTo(0, { duration: 1.4 })) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-background border-t border-border pt-14 pb-8 px-6 md:px-10 overflow-hidden">
      <div className="relative mx-auto max-w-7xl z-10">
        {/* Top row: availability + socials */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for roles & collaborations
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="block font-display text-2xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors duration-300 break-all"
            >
              {EMAIL}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <SocialIcon icon={Github} href="https://github.com/divyapatelgm" label="GitHub" />
            <SocialIcon icon={Linkedin} href="https://linkedin.com/in/divyapatelgm" label="LinkedIn" />
            <SocialIcon icon={Mail} href={`mailto:${EMAIL}`} label="Email" />
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-10 mb-6 select-none overflow-hidden text-center" aria-hidden>
          <div
            className="font-display font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent whitespace-nowrap"
            style={{ fontSize: "clamp(2.75rem, 11vw, 9rem)" }}
          >
            Divya Patel G M
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/60 text-left">
          <div className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Divya Patel G M · Designed & built from scratch with React,
            Tailwind & Framer Motion.
          </div>
          <MagneticButton
            onClick={scrollToTop}
            variant="secondary"
            className="group h-11 w-11 rounded-full p-0 flex items-center justify-center cursor-pointer shrink-0"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" />
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon, href, label }: { icon: any; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="p-3 rounded-xl border border-border bg-surface-elevated/20 text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
    >
      <Icon className="h-4.5 w-4.5" />
    </a>
  );
}
