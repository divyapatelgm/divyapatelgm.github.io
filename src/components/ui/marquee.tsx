import type { ReactNode } from "react";

/**
 * Infinite, seamless horizontal marquee. Renders its children twice and
 * translates by -50% so the loop is invisible. Pauses on hover and
 * respects prefers-reduced-motion (handled globally in index.css).
 */
export function Marquee({
  children,
  reverse = false,
  slow = false,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  slow?: boolean;
  className?: string;
}) {
  return (
    <div className={`mask-fade-x overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${slow ? "animate-marquee-slow" : "animate-marquee"} pause-on-hover`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
