/**
 * Why Singapore Section
 * Design: Singapore Futurism - Grid layout with floating cards and icons
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Users, Briefcase, Heart } from "lucide-react";

export default function WhySingapore() {
  const { t } = useLanguage();

  const features = [
    {
      icon: GraduationCap,
      title: t("why.worldclass.title"),
      description: t("why.worldclass.desc"),
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: t("why.multicultural.title"),
      description: t("why.multicultural.desc"),
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Briefcase,
      title: t("why.career.title"),
      description: t("why.career.desc"),
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Heart,
      title: t("why.quality.title"),
      description: t("why.quality.desc"),
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t("why.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("why.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 shadow-strong hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
