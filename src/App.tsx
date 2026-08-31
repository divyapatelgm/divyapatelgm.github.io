import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./components/theme-provider";
import { SmoothScroll } from "./components/ui/smooth-scroll";
import { MouseGlow } from "./components/ui/mouse-glow";
import { Cursor } from "./components/ui/cursor";
import { ScrollProgress } from "./components/ui/scroll-progress";
import { Marquee } from "./components/ui/marquee";
import { Nav } from "./components/sections/nav";
import { Hero } from "./components/sections/hero";
import { About } from "./components/sections/about";
import { Skills } from "./components/sections/skills";
import { Projects } from "./components/sections/projects";
import { Experience } from "./components/sections/experience";
import { Education } from "./components/sections/education";
import { Certifications } from "./components/sections/certifications";
import { Contact } from "./components/sections/contact";
import { Footer } from "./components/sections/footer";

const marqueeItems = [
  "Flutter",
  "React.js",
  "Node.js",
  "Python",
  "Machine Learning",
  "TypeScript",
  "MongoDB",
  "Firebase",
  "Gemini API",
  "REST APIs",
  "PHP",
  "MySQL",
  "TensorFlow",
  "Express.js",
];

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <SmoothScroll>
          <div className="relative min-h-screen bg-background text-foreground">
            <ScrollProgress />
            <Cursor />
            <MouseGlow />
            <Nav />
            <main>
              <Hero />
              <About />

              {/* Tech-stack marquee — a moving band that bridges About → Skills */}
              <div className="relative border-y border-border/60 bg-surface/30 py-5 md:py-6">
                <Marquee>
                  {marqueeItems.map((item) => (
                    <span
                      key={item}
                      className="mx-8 inline-flex items-center gap-8 font-display text-lg md:text-2xl font-semibold text-foreground/35 hover:text-primary transition-colors duration-300"
                    >
                      {item}
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                    </span>
                  ))}
                </Marquee>
              </div>

              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
