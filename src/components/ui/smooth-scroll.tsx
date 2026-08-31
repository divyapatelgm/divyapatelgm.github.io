import { useEffect, type ReactNode } from "react";

// Module-level handle to the live Lenis instance so imperative scrolls
// (e.g. footer "back to top") can drive the same smooth-scroll engine
// instead of fighting it with a native window.scrollTo.
let activeLenis: any = null;

export function lenisScrollTo(target: number | string, opts?: Record<string, unknown>) {
  if (activeLenis) {
    activeLenis.scrollTo(target, opts);
    return true;
  }
  return false;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: any;
    let rafId = 0;
    let tickerFn: ((t: number) => void) | null = null;
    let mounted = true;

    (async () => {
      const Lenis = (await import("lenis")).default;
      if (!mounted) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      activeLenis = lenis;

      // Prefer driving Lenis from the GSAP ticker so ScrollTrigger and the
      // smooth scroll advance on the exact same clock (no double-stepping / jitter).
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        lenis.on("scroll", ScrollTrigger.update);
        tickerFn = (t: number) => lenis?.raf(t * 1000);
        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);
      } catch (err) {
        // Fallback: no GSAP available — drive Lenis with a plain RAF loop.
        console.warn("GSAP synchronization failed; using RAF fallback", err);
        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      }
    })();

    return () => {
      mounted = false;
      if (rafId) cancelAnimationFrame(rafId);
      if (tickerFn) {
        import("gsap").then(({ gsap }) => gsap.ticker.remove(tickerFn!)).catch(() => {});
      }
      if (lenis) lenis.destroy();
      activeLenis = null;
    };
  }, []);

  return <>{children}</>;
}
