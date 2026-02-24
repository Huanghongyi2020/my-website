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

  const ibSchools = [
    { name: "United World College (UWCSEA)", cn: "东南亚世界联合书院", curriculum: "IB", note: language === "en" ? "IB avg: 40.7, Top 3" : "IB平均分：40.7，前三名" },
    { name: "Tanglin Trust School", cn: "东陵信托学校", curriculum: "IB/British", note: language === "en" ? "IB avg: 40.7, British curriculum" : "IB平均分：40.7，英式课程" },
    { name: "Chatsworth International", cn: "查茨沃斯国际学校", curriculum: "IB/IGCSE", note: language === "en" ? "Award-winning K-13" : "获奖K-13学校" },
    { name: "Canadian International School", cn: "加拿大国际学校", curriculum: "IB", note: language === "en" ? "IB PYP to DP" : "IB小学到文凭课程" },
    { name: "Overseas Family School", cn: "海外家庭学校", curriculum: "IB/IPC", note: language === "en" ? "IPC and IB curriculum" : "IPC和IB课程" },
    { name: "NIST International School", cn: "NIST国际学校", curriculum: "IB", note: language === "en" ? "IB avg: 36.5" : "IB平均分：36.5" }
  ];

  const otherSchools = [
    { name: "Singapore American School", cn: "新加坡美国学校", curriculum: "American", note: language === "en" ? "Best American curriculum" : "最佳美式课程" },
    { name: "Dulwich College Singapore", cn: "德威国际学校", curriculum: "British", note: language === "en" ? "Prestigious British school" : "著名英式学校" },
    { name: "Stamford American International", cn: "斯坦福美国国际学校", curriculum: "American/IB", note: language === "en" ? "American + IB options" : "美式+IB选择" },
    { name: "GESS German European School", cn: "德国欧洲学校", curriculum: "European", note: language === "en" ? "German/European curriculum" : "德国/欧洲课程" },
    { name: "North London Collegiate School", cn: "北伦敦学院学校", curriculum: "British", note: language === "en" ? "IB avg: 36.5, British" : "IB平均分：36.5，英式" },
    { name: "Hwa Chong International School", cn: "华中国际学校", curriculum: "IB", note: language === "en" ? "Affiliated with top local school" : "与顶尖本地学校关联" }
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
                      ? "Singapore is home to over 40 world-class international schools offering diverse curricula including IB, IGCSE, American, British, and European programs. These schools provide globally recognized education with state-of-the-art facilities and experienced international faculty."
                      : "新加坡拥有40多所世界一流的国际学校，提供包括IB、IGCSE、美国、英国和欧洲课程在内的多元化课程。这些学校提供全球认可的教育，配备最先进的设施和经验丰富的国际教师团队。"
                    }
                  </p>
                  <p>
                    {language === "en"
                      ? "International schools in Singapore attract students from over 50 countries, creating a truly multicultural learning environment. Many schools achieve exceptional IB scores (averaging 36-40+, well above the global average of 30) and have strong university placement records at top institutions worldwide."
                      : "新加坡的国际学校吸引了来自50多个国家的学生，创造了真正的多元文化学习环境。许多学校取得了优异的IB成绩（平均36-40+分，远高于全球平均30分），并在全球顶尖大学中拥有出色的录取记录。"
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

              {/* Featured Schools */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-accent"></div>
                  {language === "en" ? "Featured International Schools" : "特色国际学校"}
                </h2>
                <div className="space-y-6">
                  {/* IB Schools */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {language === "en" ? "Top IB Schools" : "顶尖IB学校"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {ibSchools.map((school, index) => (
                        <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                          <h4 className="font-semibold text-foreground mb-1">{school.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{school.cn}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{school.curriculum}</span>
                            <p className="text-xs text-primary">{school.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Other Curricula Schools */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {language === "en" ? "Other Leading International Schools" : "其他领先国际学校"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {otherSchools.map((school, index) => (
                        <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                          <h4 className="font-semibold text-foreground mb-1">{school.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{school.cn}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">{school.curriculum}</span>
                            <p className="text-xs text-primary">{school.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 border-l-4 border-accent p-4 rounded">
                    <p className="text-sm text-muted-foreground">
                      {language === "en"
                        ? "Note: Each school has unique admission processes and requirements. SIEGLOBE will help you identify the best-fit schools and guide you through applications."
                        : "注意：每所学校都有独特的入学流程和要求。SIEGLOBE将帮助您找到最适合的学校并指导您完成申请。"
                      }
                    </p>
                  </div>
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

              {/* How to Apply */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-accent"></div>
                  {t("detail.apply")}
                </h2>
                <div className="bg-card border-2 border-border rounded-xl p-6 space-y-4">
                  {(language === "en" ? [
                    "Research and shortlist schools based on curriculum and fit",
                    "Submit application with transcripts and documents",
                    "Prepare for entrance assessments (English, Math, etc.)",
                    "Attend student and parent interviews",
                    "Receive admission decision and accept offer",
                    "Complete student pass application and enrollment"
                  ] : [
                    "根据课程和适配性研究并筛选学校",
                    "提交申请及成绩单和文件",
                    "准备入学评估（英语、数学等）",
                    "参加学生和家长面试",
                    "收到录取决定并接受录取",
                    "完成学生准证申请和注册"
                  ]).map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
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
                    <p className="text-muted-foreground text-xs mt-1">
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
                        ? "K-12 (Kindergarten to Grade 12)"
                        : "K-12（幼儿园到12年级）"
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
                        ? "Pathway to top universities worldwide (US, UK, Europe, Asia)"
                        : "通往全球顶尖大学的途径（美国、英国、欧洲、亚洲）"
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
