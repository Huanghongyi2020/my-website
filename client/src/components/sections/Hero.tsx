/**
 * Hero Section
 * Design: Singapore Futurism - Diagonal cut with bold typography and asymmetric layout
 * Image: Custom Singapore skyline with international students
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center diagonal-cut-bottom overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #4c1d95 50%, #6b21a8 100%)' }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663351537160/BIpUDKLDuEYPQGwl.webp"
          alt="Singapore Education"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/95 via-[#4c1d95]/85 to-[#6b21a8]/70"></div>
      </div>

      {/* Geometric Accent Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-secondary/30 rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent/20 rotate-45 hidden lg:block"></div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-secondary/30">
            <BookOpen className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              Singapore International Education
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            {t("hero.title")}
            <br />
            <span className="text-gradient-gold">
              {t("hero.title.highlight")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-strong hover:shadow-glow text-lg px-8 py-6 group"
            >
              {t("hero.cta.primary")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("programs")}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-primary-foreground/20">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                500+
              </div>
              <div className="text-sm text-primary-foreground/80">
                {t("stats.students")}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                98%
              </div>
              <div className="text-sm text-primary-foreground/80">
                {t("stats.success")}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                15+
              </div>
              <div className="text-sm text-primary-foreground/80">
                {t("stats.universities")}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                12
              </div>
              <div className="text-sm text-primary-foreground/80">
                {t("stats.experience")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
