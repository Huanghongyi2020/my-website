/**
 * Footer Component
 * Design: Singapore Futurism - Bold footer with gradient accent
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary-foreground">SIEGLOBE</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t("footer.about.text")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.quicklinks")}</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                {t("nav.programs")}
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                {t("nav.process")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                {t("nav.contact")}
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.contact.title")}</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Email: info@sieglobe.com</p>
              <p>Phone: +65 92967501</p>
              <p>WeChat: 得贤教育dx</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © {currentYear} SIEGLOBE. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
