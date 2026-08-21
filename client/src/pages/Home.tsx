/**
 * Home Page
 * Design: Singapore Futurism - Complete landing page with all sections
 */

import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import WhySingapore from "@/components/sections/WhySingapore";
import Programs from "@/components/sections/Programs";
import ApplicationProcess from "@/components/sections/ApplicationProcess";
import SuccessStories from "@/components/sections/SuccessStories";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      // Wait for all sections to render
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <WhySingapore />
        <Programs />
        <ApplicationProcess />
        <SuccessStories />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
