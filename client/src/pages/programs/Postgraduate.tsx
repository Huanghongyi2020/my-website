/**
 * Postgraduate Programs Detail Page
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { GraduationCap, Check, Clock, DollarSign, TrendingUp } from "lucide-react";

export default function Postgraduate() {
  const { t, language } = useLanguage();

  const features = language === "en" 
    ? [
        "Master's and PhD programs in diverse fields",
        "Research-intensive curriculum with world-class faculty",
        "Industry collaboration and networking opportunities",
        "Scholarship and funding options available",
        "Flexible full-time and part-time study modes",
        "Global alumni network and career support"
      ]
    : [
        "多元化领域的硕士和博士课程",
        "与世界一流教师的研究密集型课程",
        "行业合作和网络机会",
        "提供奖学金和资助选项",
        "灵活的全日制和非全日制学习模式",
        "全球校友网络和职业支持"
      ];

  const requirements = language === "en"
    ? [
        "Bachelor's degree with good honors (typically Second Upper or equivalent)",
        "Relevant work experience (for MBA and some professional programs)",
        "English proficiency: IELTS 6.5-7.0+ or TOEFL 100+",
        "GMAT/GRE scores (required for business and some programs)",
        "Research proposal (for PhD and research-based programs)",
        "Letters of recommendation and statement of purpose"
      ]
    : [
        "良好荣誉的学士学位（通常为二等上荣誉或同等学历）",
        "相关工作经验（MBA和某些专业课程需要）",
        "英语能力：雅思6.5-7.0+或托福100+",
        "GMAT/GRE成绩（商业和某些课程需要）",
        "研究计划（博士和研究型课程需要）",
        "推荐信和目的陈述"
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
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t("programs.postgraduate")}
            </h1>
          </div>
          
          <p className="text-xl text-white/90 max-w-3xl">
            {t("programs.postgraduate.desc")}
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
                      ? "Singapore's postgraduate programs offer cutting-edge research opportunities and advanced professional training. With NUS and NTU consistently ranked among the world's top universities for graduate studies, students gain access to state-of-the-art facilities, renowned faculty, and extensive industry partnerships."
                      : "新加坡的研究生课程提供尖端的研究机会和高级专业培训。NUS和NTU始终位居世界顶尖研究生院之列，学生可以使用最先进的设施、著名的教师和广泛的行业合作伙伴关系。"
                    }
                  </p>
                  <p>
                    {language === "en"
                      ? "Whether pursuing a coursework-based Master's, research Master's, or PhD, students benefit from Singapore's position as a global research hub, particularly in areas like engineering, business, biomedical sciences, and technology."
                      : "无论是攻读课程型硕士、研究型硕士还是博士学位，学生都受益于新加坡作为全球研究中心的地位，特别是在工程、商业、生物医学科学和技术等领域。"
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
                  {language === "en" ? "Popular Programs" : "热门课程"}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {(language === "en" ? [
                    { name: "MBA", type: "Coursework" },
                    { name: "Master of Science (Engineering)", type: "Research/Coursework" },
                    { name: "Master of Computing", type: "Coursework" },
                    { name: "PhD in Biomedical Sciences", type: "Research" },
                    { name: "Master of Public Policy", type: "Coursework" },
                    { name: "Master of Finance", type: "Coursework" }
                  ] : [
                    { name: "工商管理硕士", type: "课程型" },
                    { name: "理学硕士（工程）", type: "研究/课程型" },
                    { name: "计算机硕士", type: "课程型" },
                    { name: "生物医学科学博士", type: "研究型" },
                    { name: "公共政策硕士", type: "课程型" },
                    { name: "金融硕士", type: "课程型" }
                  ]).map((program, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4">
                      <h4 className="font-bold text-card-foreground mb-1">{program.name}</h4>
                      <p className="text-sm text-muted-foreground">{program.type}</p>
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
                        ? "SGD $25,000-$60,000/year (Master's)"
                        : "SGD $25,000-$60,000/年（硕士）"
                      }
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {language === "en"
                        ? "Varies by program; PhD often funded"
                        : "因课程而异；博士通常有资助"
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
                        ? "1-2 years (Master's), 3-5 years (PhD)"
                        : "1-2年（硕士），3-5年（博士）"
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
                        ? "Leadership roles, research positions, academia, and specialized industry careers"
                        : "领导职位、研究岗位、学术界和专业行业职业"
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
