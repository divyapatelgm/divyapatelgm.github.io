import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    let mx = -100, my = -100; // Mouse coords
    let rx = -100, ry = -100; // Ring follower coords

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
    };

    let rafId: number;
    const tick = () => {
      // Lerp (Linear Interpolation) to make the outer ring drag smoothly behind the cursor
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      
      if (ringRef.current) {
        // Adjust for ring offset (size varies, so we center based on hovering status)
        const size = hovering ? 60 : 40;
        ringRef.current.style.transform = `translate3d(${rx - size / 2}px, ${ry - size / 2}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    
    rafId = requestAnimationFrame(tick);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest("a, button, input, textarea, [data-cursor='hover']")) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest("a, button, input, textarea, [data-cursor='hover']")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [hovering]);

  return (
    <>
      {/* Precision Inner Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary mix-blend-difference hidden md:block"
      />
      {/* Springy Glow Follower Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-primary/60 transition-[width,height,border-color,background-color] duration-300 ease-out hidden md:block"
        style={{
          width: hovering ? "60px" : "40px",
          height: hovering ? "60px" : "40px",
          backgroundColor: hovering ? "oklch(0.72 0.22 45 / 0.15)" : "transparent",
        }}
      />
    </>
  );
}
