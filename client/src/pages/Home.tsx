/**
 * Home Page
 * Design: Singapore Futurism - Complete landing page with all sections
 */

import Navigation from "@/components/Navigation";
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
