import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
  as: Tag = "h2",
}: Props) {
  const words = text.split(" ");
  const MotionTag = motion[Tag] as any;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((w, wi) => (
        <span key={wi} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
