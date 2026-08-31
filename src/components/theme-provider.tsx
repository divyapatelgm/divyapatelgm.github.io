import { useEffect } from "react";

/**
 * The portfolio is designed dark-first. The theme toggle has been removed,
 * so this provider simply locks the document to the dark palette on mount.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
    root.classList.remove("light");
  }, []);

  return <>{children}</>;
}
