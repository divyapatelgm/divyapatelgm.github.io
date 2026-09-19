import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  /** Classes for the visual card that tilts (bg, border, radius, padding…). */
  className?: string;
  /** Classes for the outer wrapper - use for grid placement (col-span, h-full…). */
  wrapperClassName?: string;
  /** Max tilt in degrees. */
  max?: number;
  /** Render a cursor-following radial spotlight inside the card. */
  spotlight?: boolean;
}

/**
 * Pointer-driven 3D tilt with a spring. Tilt + spotlight are enabled only on
 * fine-pointer (mouse) devices that don't prefer reduced motion, so touch and
 * accessibility users get a clean, static card.
 */
export function TiltCard({
  children,
  className = "",
  wrapperClassName = "",
  max = 7,
  spotlight = false,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const op = useMotionValue(0);

  const srx = useSpring(rx, { stiffness: 160, damping: 18 });
  const sry = useSpring(ry, { stiffness: 160, damping: 18 });
  const sop = useSpring(op, { stiffness: 220, damping: 30 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setInteractive(fine && !reduced);
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 2 * max);
    rx.set(-(py - 0.5) * 2 * max);
    mx.set(px * 100);
    my.set(py * 100);
    op.set(1);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
    op.set(0);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(circle at ${mx}% ${my}%, oklch(0.72 0.22 45 / 0.16), transparent 55%)`;

  return (
    <div
      ref={ref}
      onMouseMove={interactive ? handleMove : undefined}
      onMouseLeave={interactive ? handleLeave : undefined}
      className={`[perspective:1100px] ${wrapperClassName}`}
    >
      <motion.div
        style={interactive ? { rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" } : undefined}
        className={`relative h-full ${className}`}
      >
        {children}
        {spotlight && interactive && (
          <motion.div
            aria-hidden
            style={{ background: spotlightBg, opacity: sop }}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
          />
        )}
      </motion.div>
    </div>
  );
}
