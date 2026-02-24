/**
 * Services Section
 * Design: Singapore Futurism - Service cards with consultation image background
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { School, FileCheck, Plane as PlaneIcon, Home, Compass, HeartHandshake } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: School,
      title: t("services.selection"),
      description: t("services.selection.desc"),
    },
    {
      icon: FileCheck,
      title: t("services.application"),
      description: t("services.application.desc"),
    },
    {
      icon: PlaneIcon,
      title: t("services.visa"),
      description: t("services.visa.desc"),
    },
    {
      icon: Home,
      title: t("services.accommodation"),
      description: t("services.accommodation.desc"),
    },
    {
      icon: Compass,
      title: t("services.orientation"),
      description: t("services.orientation.desc"),
    },
    {
      icon: HeartHandshake,
      title: t("services.postarrival"),
      description: t("services.postarrival.desc"),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t("services.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Two Column Layout: Image + Services */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Consultation Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663351537160/GSuDtFNBQatusxYu.webp"
                alt="Consultation Services"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="order-1 lg:order-2 grid gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 bg-card border border-border rounded-lg p-5 hover:shadow-strong hover:border-primary transition-all duration-300 group"
                >
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
