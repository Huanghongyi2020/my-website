/**
 * Application Process Section
 * Design: Singapore Futurism - Visual timeline with custom infographic
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { Search, FileText, Send, MessageSquare, CheckCircle, Plane } from "lucide-react";

export default function ApplicationProcess() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t("process.step1"),
      description: t("process.step1.desc"),
    },
    {
      icon: FileText,
      title: t("process.step2"),
      description: t("process.step2.desc"),
    },
    {
      icon: Send,
      title: t("process.step3"),
      description: t("process.step3.desc"),
    },
    {
      icon: MessageSquare,
      title: t("process.step4"),
      description: t("process.step4.desc"),
    },
    {
      icon: CheckCircle,
      title: t("process.step5"),
      description: t("process.step5.desc"),
    },
    {
      icon: Plane,
      title: t("process.step6"),
      description: t("process.step6.desc"),
    },
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t("process.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("process.subtitle")}
          </p>
        </div>

        {/* Infographic Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-strong max-w-5xl mx-auto">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663351537160/eQwXJSLuForfIIUd.webp"
            alt="Application Journey"
            className="w-full h-auto"
          />
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-card border border-border rounded-xl p-6 hover:shadow-strong transition-all duration-300 group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {index + 1}
                </div>

                <div className="bg-accent/10 text-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4 ml-8 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
