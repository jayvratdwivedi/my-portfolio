import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger Plugin
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger when page is fully loaded
    ScrollTrigger.refresh();

    // Clean up ScrollTrigger on componenet unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <CustomCursor />
      <AboutSection />
      <ProjectSection />
    </>
  );
}
