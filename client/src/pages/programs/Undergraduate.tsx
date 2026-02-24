/**
 * Undergraduate Programs Detail Page
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { BookOpen, Check, Clock, DollarSign, TrendingUp } from "lucide-react";

export default function Undergraduate() {
  const { t, language } = useLanguage();

  const features = language === "en" 
    ? [
        "World-ranked universities (NUS, NTU, SMU, SUTD, SIT)",
        "Wide range of disciplines and specializations",
        "Industry partnerships and internship opportunities",
        "Modern campus facilities and research centers",
        "Multicultural learning environment",
        "Scholarship opportunities for outstanding students"
      ]
    : [
        "世界排名大学（NUS、NTU、SMU、SUTD、SIT）",
        "广泛的学科和专业选择",
        "行业合作和实习机会",
        "现代化校园设施和研究中心",
        "多元文化学习环境",
        "优秀学生奖学金机会"
      ];

  const requirements = language === "en"
    ? [
        "High school diploma or equivalent (A-Levels, IB, etc.)",
        "Strong academic performance (typically 3 A's for A-Levels or IB 38+)",
        "English proficiency: IELTS 6.5+ or TOEFL 90+",
        "SAT/ACT scores (for some programs)",
        "Personal statement and recommendation letters",
        "Portfolio or audition (for creative programs)"
      ]
    : [
        "高中文凭或同等学历（A-Level、IB等）",
        "优秀的学术成绩（通常A-Level需3个A或IB 38+）",
        "英语能力：雅思6.5+或托福90+",
        "SAT/ACT成绩（某些课程需要）",
        "个人陈述和推荐信",
        "作品集或试镜（创意类课程）"
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
              <BookOpen className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {t("programs.undergraduate")}
              </h1>
            </div>
          </div>
          
          <p className="text-xl text-white/90 max-w-3xl">
            {t("programs.undergraduate.desc")}
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
                      ? "Singapore's universities consistently rank among the world's best, with NUS and NTU regularly appearing in global top 20 rankings. Undergraduate programs combine rigorous academics with practical industry exposure, preparing graduates for successful careers in Asia and beyond."
                      : "新加坡的大学始终位居世界最佳之列，NUS和NTU经常出现在全球前20名排名中。本科课程将严格的学术与实际行业经验相结合，为毕业生在亚洲及其他地区的成功职业生涯做好准备。"
                    }
                  </p>
                  <p>
                    {language === "en"
                      ? "Students can choose from hundreds of programs across business, engineering, computing, sciences, humanities, and more. Most programs include internships, overseas exchanges, and research opportunities, ensuring a well-rounded education."
                      : "学生可以从商业、工程、计算机、科学、人文等数百个课程中进行选择。大多数课程包括实习、海外交流和研究机会，确保全面的教育。"
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
                  {language === "en" ? "Popular Majors" : "热门专业"}
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {(language === "en" ? [
                    "Computer Science", "Business Administration", "Engineering",
                    "Data Science", "Finance", "Medicine",
                    "Architecture", "Law", "Psychology"
                  ] : [
                    "计算机科学", "工商管理", "工程学",
                    "数据科学", "金融学", "医学",
                    "建筑学", "法学", "心理学"
                  ]).map((major, index) => (
                    <div key={index} className="bg-primary/10 text-primary px-4 py-3 rounded-lg text-center font-semibold">
                      {major}
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
                        ? "SGD $30,000-$50,000/year"
                        : "SGD $30,000-$50,000/年"
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
                        ? "3-4 years full-time"
                        : "3-4年全日制"
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
                        ? "95%+ employment rate within 6 months of graduation"
                        : "毕业后6个月内就业率95%+"
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
