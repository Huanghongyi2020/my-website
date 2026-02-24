/**
 * K-12 International Schools Detail Page
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { Globe2, Check, Clock, DollarSign, TrendingUp } from "lucide-react";

export default function K12International() {
  const { t, language } = useLanguage();

  const features = language === "en" 
    ? [
        "IB, IGCSE, American, and other international curricula",
        "Global perspective and multicultural environment",
        "State-of-the-art facilities and resources",
        "Diverse student body from 50+ countries",
        "Extensive extracurricular and sports programs",
        "University counseling and career guidance"
      ]
    : [
        "IB、IGCSE、美国和其他国际课程",
        "全球视野和多元文化环境",
        "最先进的设施和资源",
        "来自50多个国家的多元化学生群体",
        "广泛的课外活动和体育项目",
        "大学咨询和职业指导"
      ];

  const requirements = language === "en"
    ? [
        "School-specific entrance assessments (English, Math, sometimes other subjects)",
        "Previous academic transcripts and report cards",
        "English proficiency (varies by school and grade)",
        "Interview with student and parents",
        "Valid student pass application",
        "Some schools may require standardized test scores (SSAT, ISEE)"
      ]
    : [
        "学校特定的入学评估（英语、数学，有时还有其他科目）",
        "以往的学术成绩单和报告卡",
        "英语能力（因学校和年级而异）",
        "学生和家长面试",
        "有效的学生准证申请",
        "一些学校可能需要标准化考试成绩（SSAT、ISEE）"
      ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent via-accent/90 to-primary overflow-hidden">
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
              <Globe2 className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {t("programs.k12international")}
              </h1>
            </div>
          </div>
          
          <p className="text-xl text-white/90 max-w-3xl">
            {t("programs.k12international.desc")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-accent"></div>
                  {t("detail.overview")}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    {language === "en" 
                      ? "Singapore hosts over 30 international schools offering world-class education with globally recognized curricula. These schools provide a seamless transition for expatriate families and prepare students for universities worldwide. International schools in Singapore are known for their excellent facilities, diverse student populations, and comprehensive programs."
                      : "新加坡拥有30多所国际学校，提供世界一流的教育和全球认可的课程。这些学校为外籍家庭提供无缝过渡，并为学生进入全球大学做准备。新加坡的国际学校以其卓越的设施、多元化的学生群体和全面的课程而闻名。"
                    }
                  </p>
                  <p>
                    {language === "en"
                      ? "Students can choose from various curricula including the International Baccalaureate (IB), Cambridge IGCSE/A-Levels, American curriculum, Australian curriculum, and more. Many schools offer the full continuum from early years through high school, ensuring consistency in educational philosophy and approach."
                      : "学生可以选择各种课程，包括国际文凭（IB）、剑桥IGCSE/A-Level、美国课程、澳大利亚课程等。许多学校提供从幼儿到高中的完整连续课程，确保教育理念和方法的一致性。"
                    }
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-accent"></div>
                  {t("detail.features")}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
                      <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admission Requirements */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-accent"></div>
                  {t("detail.requirements")}
                </h2>
                <div className="space-y-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 border-l-4 border-accent pl-4 py-2">
                      <span className="text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Schools */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-accent"></div>
                  {language === "en" ? "Popular International Schools" : "热门国际学校"}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {(language === "en" ? [
                    { name: "United World College", curriculum: "IB Diploma" },
                    { name: "Tanglin Trust School", curriculum: "British Curriculum" },
                    { name: "Singapore American School", curriculum: "American Curriculum" },
                    { name: "Dulwich College", curriculum: "IB & IGCSE" },
                    { name: "Australian International School", curriculum: "Australian Curriculum" },
                    { name: "Canadian International School", curriculum: "IB Programme" }
                  ] : [
                    { name: "世界联合书院", curriculum: "IB文凭" },
                    { name: "东陵信托学校", curriculum: "英国课程" },
                    { name: "新加坡美国学校", curriculum: "美国课程" },
                    { name: "德威国际学校", curriculum: "IB & IGCSE" },
                    { name: "澳洲国际学校", curriculum: "澳大利亚课程" },
                    { name: "加拿大国际学校", curriculum: "IB课程" }
                  ]).map((school, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4">
                      <h4 className="font-bold text-card-foreground mb-1">{school.name}</h4>
                      <p className="text-sm text-muted-foreground">{school.curriculum}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-card border-2 border-border rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-card-foreground">{language === "en" ? "Quick Info" : "快速信息"}</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <DollarSign className="h-5 w-5" />
                      <span className="font-semibold">{t("detail.tuition")}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {language === "en" 
                        ? "SGD $20,000-$45,000/year"
                        : "SGD $20,000-$45,000/年"
                      }
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {language === "en"
                        ? "Varies by school and grade level"
                        : "因学校和年级而异"
                      }
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-semibold">{t("detail.duration")}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {language === "en"
                        ? "Kindergarten through Grade 12"
                        : "幼儿园至12年级"
                      }
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-semibold">{t("detail.career")}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {language === "en"
                        ? "Admission to top universities worldwide including Ivy League, Oxbridge, and more"
                        : "进入全球顶尖大学，包括常春藤盟校、牛津剑桥等"
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
