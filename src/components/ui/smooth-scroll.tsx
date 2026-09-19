import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    let tickerFn: ((t: number) => void) | null = null;
    let mounted = true;

    if (!mounted) return;

    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    activeLenis = lenis;

    gsap.registerPlugin(ScrollTrigger);
    lenis.on("scroll", ScrollTrigger.update);
    
    tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      mounted = false;
      if (tickerFn) {
        gsap.ticker.remove(tickerFn);
      }
      if (lenis) lenis.destroy();
      activeLenis = null;
    };
  }, []);

  return <>{children}</>;
}
