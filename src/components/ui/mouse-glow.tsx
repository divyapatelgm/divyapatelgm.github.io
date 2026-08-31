import { useEffect, useState } from "react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    // Disable on touch screens
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block transition-opacity duration-300"
      style={{
        background: `radial-gradient(800px circle at ${pos.x}px ${pos.y}px, oklch(0.72 0.22 45 / 0.08), transparent 45%)`,
      }}
    />
  );
}
