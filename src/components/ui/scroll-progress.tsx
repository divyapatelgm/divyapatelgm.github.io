import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Slim gradient bar pinned to the very top of the viewport that fills
 * as the visitor scrolls the page - a premium, low-cost "alive" cue.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-primary via-primary-glow to-primary"
      aria-hidden
    />
  );
}
