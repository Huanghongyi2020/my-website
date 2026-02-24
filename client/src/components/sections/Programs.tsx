/**
 * Programs Section
 * Design: Singapore Futurism - Diagonal cut with program cards over custom image
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, GraduationCap, Languages, Award, School, Globe2 } from "lucide-react";
import { Link } from "wouter";

export default function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      icon: School,
      title: t("programs.k12public"),
      description: t("programs.k12public.desc"),
      link: "/programs/k12-public",
    },
    {
      icon: Globe2,
      title: t("programs.k12international"),
      description: t("programs.k12international.desc"),
      link: "/programs/k12-international",
    },
    {
      icon: BookOpen,
      title: t("programs.undergraduate"),
      description: t("programs.undergraduate.desc"),
      link: "/programs/undergraduate",
    },
    {
      icon: GraduationCap,
      title: t("programs.postgraduate"),
      description: t("programs.postgraduate.desc"),
      link: "/programs/postgraduate",
    },
    {
      icon: Languages,
      title: t("programs.language"),
      description: t("programs.language.desc"),
      link: "/programs/language",
    },
    {
      icon: Award,
      title: t("programs.professional"),
      description: t("programs.professional.desc"),
      link: "/programs/professional",
    },
  ];

  return (
    <section
      id="programs"
      className="relative py-24 diagonal-cut-top diagonal-cut-bottom bg-muted overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663351537160/YfipoUPybrJrcVEb.webp"
          alt="Study Programs"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t("programs.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("programs.subtitle")}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-xl p-6 shadow-strong hover:shadow-xl hover:border-primary transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-primary/10 text-primary w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <Link href={program.link}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0"
                  >
                    {t("programs.cta")} →
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Partner Universities */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-card-foreground">
            Partner Universities
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">NUS</div>
              <div className="text-xs text-muted-foreground">
                National University
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">NTU</div>
              <div className="text-xs text-muted-foreground">
                Nanyang Technological
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">SMU</div>
              <div className="text-xs text-muted-foreground">
                Singapore Management
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">SUTD</div>
              <div className="text-xs text-muted-foreground">
                Design & Technology
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">SIT</div>
              <div className="text-xs text-muted-foreground">
                Singapore Institute
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
