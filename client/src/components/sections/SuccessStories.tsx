/**
 * Success Stories Section
 * Design: Singapore Futurism - Carousel with testimonial cards
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function SuccessStories() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      id: "zhang-wei",
      name: t("success.student1.name"),
      program: t("success.student1.program"),
      quote: t("success.student1.quote"),
    },
    {
      id: "maria-santos",
      name: t("success.student2.name"),
      program: t("success.student2.program"),
      quote: t("success.student2.quote"),
    },
    {
      id: "raj-patel",
      name: t("success.student3.name"),
      program: t("success.student3.program"),
      quote: t("success.student3.quote"),
    },
    {
      id: "zixian",
      name: t("success.student4.name"),
      program: t("success.student4.program"),
      quote: t("success.student4.quote"),
    },
    {
      id: "li-yishan",
      name: t("success.student5.name"),
      program: t("success.student5.program"),
      quote: t("success.student5.quote"),
    },
  ];

  return (
    <section className="relative py-24 diagonal-cut-top diagonal-cut-bottom overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663351537160/XZSpljkgqEDknsRZ.webp"
          alt="Success Stories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t("success.title")}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            {t("success.subtitle")}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-card/90 backdrop-blur-sm hover:bg-card text-card-foreground rounded-full p-3 shadow-strong hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-card/90 backdrop-blur-sm hover:bg-card text-card-foreground rounded-full p-3 shadow-strong hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="bg-card/95 backdrop-blur-sm rounded-xl p-8 shadow-strong hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-secondary/20 h-full">
                    <Quote className="h-10 w-10 text-secondary mb-4" />
                    <p className="text-card-foreground mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <div className="font-bold text-card-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {testimonial.program}
                      </div>
                      <Link href={`/success-stories/${testimonial.id}`}>
                        <button className="mt-4 text-accent hover:text-accent/80 font-semibold text-sm flex items-center gap-1 transition-colors">
                          {t("success.readmore")}
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
