import React, { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export function MagneticButton({
  children,
  variant = "primary",
  className = "",
  as = "button",
  href,
  target,
  rel,
  download,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    // Translate the element slightly towards cursor (30% horizontal, 40% vertical pull)
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
  };

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px)";
    }
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-xs sm:text-sm tracking-wide transition-[background,color,box-shadow,border-color] duration-500 will-change-transform cursor-pointer select-none";
  
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:shadow-[0_0_50px_-5px_oklch(0.72_0.22_45/0.7)]"
      : variant === "secondary"
      ? "bg-surface-elevated border border-border text-foreground hover:border-primary/40 hover:bg-surface"
      : "border border-border text-foreground hover:bg-surface-elevated hover:border-primary/50";

  if (as === "a") {
    return (
      <a
        ref={ref as any}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as any}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
