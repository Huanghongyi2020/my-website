/**
 * Professional Certifications Detail Page
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { Award, Check, Clock, DollarSign, TrendingUp } from "lucide-react";

export default function Professional() {
  const { t, language } = useLanguage();

  const features = language === "en" 
    ? [
        "Industry-recognized certifications and qualifications",
        "Executive education and leadership programs",
        "Flexible part-time and weekend schedules",
        "Practical, career-focused curriculum",
        "Networking with industry professionals",
        "Continuing professional development (CPD) credits"
      ]
    : [
        "行业认可的证书和资格",
        "高管教育和领导力课程",
        "灵活的兼职和周末时间表",
        "实用的职业导向课程",
        "与行业专业人士建立网络",
        "持续专业发展（CPD）学分"
      ];

  const requirements = language === "en"
    ? [
        "Varies by program - some require work experience",
        "Diploma or degree (for advanced certifications)",
        "English proficiency for international students",
        "Professional background in relevant field (for specialized programs)",
        "Some programs open to fresh graduates"
      ]
    : [
        "因课程而异 - 部分需要工作经验",
        "文凭或学位（高级认证需要）",
        "国际学生需要英语能力",
        "相关领域的专业背景（专业课程需要）",
        "部分课程对应届毕业生开放"
      ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rotate-12"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white -rotate-12"></div>
        </div>
        
        <div className="container relative z-10">
          <Link href="/#programs">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              {t("detail.back")}
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-4 rounded-xl">
              <Award className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t("programs.professional")}
            </h1>
          </div>
          
          <p className="text-xl text-white/90 max-w-3xl">
            {t("programs.professional.desc")}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-primary"></div>
                  {t("detail.overview")}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    {language === "en" 
                      ? "Professional certifications and executive education programs in Singapore provide working professionals and career changers with industry-recognized credentials and advanced skills. These programs are designed to enhance career prospects, deepen expertise, and meet continuing professional development requirements."
                      : "新加坡的专业认证和高管教育课程为在职专业人士和转行者提供行业认可的证书和高级技能。这些课程旨在提升职业前景、深化专业知识并满足持续专业发展要求。"
                    }
                  </p>
                  <p>
                    {language === "en"
                      ? "From finance and accounting to project management, data analytics, and leadership development, Singapore's institutions offer a wide range of professional programs that combine academic rigor with practical application, often taught by industry practitioners."
                      : "从金融和会计到项目管理、数据分析和领导力发展，新加坡的机构提供广泛的专业课程，将学术严谨性与实际应用相结合，通常由行业从业者授课。"
                    }
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-primary"></div>
                  {t("detail.features")}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-primary"></div>
                  {t("detail.requirements")}
                </h2>
                <div className="space-y-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 border-l-4 border-primary pl-4 py-2">
                      <span className="text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-primary"></div>
                  {language === "en" ? "Popular Certifications" : "热门认证"}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {(language === "en" ? [
                    { name: "CFA (Chartered Financial Analyst)", field: "Finance" },
                    { name: "PMP (Project Management Professional)", field: "Project Management" },
                    { name: "ACCA (Chartered Certified Accountant)", field: "Accounting" },
                    { name: "Executive MBA", field: "Business Leadership" },
                    { name: "Data Science & Analytics Certifications", field: "Technology" },
                    { name: "Digital Marketing Certifications", field: "Marketing" }
                  ] : [
                    { name: "CFA（特许金融分析师）", field: "金融" },
                    { name: "PMP（项目管理专业人士）", field: "项目管理" },
                    { name: "ACCA（特许公认会计师）", field: "会计" },
                    { name: "高管MBA", field: "商业领导力" },
                    { name: "数据科学与分析认证", field: "技术" },
                    { name: "数字营销认证", field: "营销" }
                  ]).map((cert, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4">
                      <h4 className="font-bold text-card-foreground mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.field}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border-2 border-border rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-card-foreground">{language === "en" ? "Quick Info" : "快速信息"}</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <DollarSign className="h-5 w-5" />
                      <span className="font-semibold">{t("detail.tuition")}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {language === "en" 
                        ? "SGD $3,000-$80,000"
                        : "SGD $3,000-$80,000"
                      }
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {language === "en"
                        ? "Varies widely by certification type"
                        : "因认证类型差异很大"
                      }
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-semibold">{t("detail.duration")}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {language === "en"
                        ? "3 months - 2 years (part-time)"
                        : "3个月 - 2年（兼职）"
                      }
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-semibold">{t("detail.career")}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {language === "en"
                        ? "Career advancement, salary increases, and professional recognition in specialized fields"
                        : "职业晋升、加薪和专业领域的专业认可"
                      }
                    </p>
                  </div>
                </div>

                <Button className="w-full mt-8 bg-accent hover:bg-accent/90 text-white">
                  {t("detail.cta")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
