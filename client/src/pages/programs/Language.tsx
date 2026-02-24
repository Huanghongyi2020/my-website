/**
 * Language Courses Detail Page
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { Languages, Check, Clock, DollarSign, TrendingUp } from "lucide-react";

export default function Language() {
  const { t, language } = useLanguage();

  const features = language === "en" 
    ? [
        "English proficiency preparation (IELTS, TOEFL)",
        "Academic English for university preparation",
        "Business English communication skills",
        "Small class sizes with personalized attention",
        "Experienced native and bilingual instructors",
        "Flexible schedules including intensive courses"
      ]
    : [
        "英语能力准备（雅思、托福）",
        "大学预备学术英语",
        "商务英语沟通技巧",
        "小班授课，个性化关注",
        "经验丰富的母语和双语教师",
        "灵活的时间表，包括强化课程"
      ];

  const requirements = language === "en"
    ? [
        "Minimum age: 16 years old (varies by program)",
        "Basic English proficiency (for intermediate/advanced courses)",
        "Valid student pass or dependent pass",
        "Placement test to determine appropriate level",
        "No prior English knowledge required for beginner courses"
      ]
    : [
        "最低年龄：16岁（因课程而异）",
        "基本英语能力（中级/高级课程需要）",
        "有效的学生准证或家属准证",
        "分级测试以确定适当水平",
        "初级课程无需英语基础"
      ];

  return (
    <div className="min-h-screen bg-background">
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
              <Languages className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t("programs.language")}
            </h1>
          </div>
          
          <p className="text-xl text-white/90 max-w-3xl">
            {t("programs.language.desc")}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-accent"></div>
                  {t("detail.overview")}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    {language === "en" 
                      ? "English language proficiency is essential for success in Singapore's education system and professional environment. Our language courses are designed to help international students achieve the English skills needed for academic success and daily communication."
                      : "英语能力对于在新加坡的教育系统和专业环境中取得成功至关重要。我们的语言课程旨在帮助国际学生获得学术成功和日常交流所需的英语技能。"
                    }
                  </p>
                  <p>
                    {language === "en"
                      ? "From beginner to advanced levels, our courses cover general English, academic English, test preparation, and specialized business communication. Students benefit from interactive learning methods, modern facilities, and experienced instructors who understand the challenges of learning English as a second language."
                      : "从初级到高级，我们的课程涵盖通用英语、学术英语、考试准备和专业商务沟通。学生受益于互动学习方法、现代化设施以及了解英语作为第二语言学习挑战的经验丰富的教师。"
                    }
                  </p>
                </div>
              </div>

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

              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-accent"></div>
                  {language === "en" ? "Course Types" : "课程类型"}
                </h2>
                <div className="space-y-4">
                  {(language === "en" ? [
                    { name: "General English", desc: "Foundation skills in reading, writing, speaking, and listening" },
                    { name: "IELTS Preparation", desc: "Targeted training for IELTS Academic test" },
                    { name: "TOEFL Preparation", desc: "Comprehensive TOEFL iBT exam preparation" },
                    { name: "Academic English", desc: "University-level English for academic success" },
                    { name: "Business English", desc: "Professional communication for workplace" },
                    { name: "Conversation & Pronunciation", desc: "Focus on speaking fluency and accent reduction" }
                  ] : [
                    { name: "通用英语", desc: "阅读、写作、口语和听力的基础技能" },
                    { name: "雅思准备", desc: "雅思学术考试的针对性培训" },
                    { name: "托福准备", desc: "全面的托福iBT考试准备" },
                    { name: "学术英语", desc: "大学水平的英语学术成功" },
                    { name: "商务英语", desc: "职场专业沟通" },
                    { name: "会话与发音", desc: "专注于口语流利度和口音改善" }
                  ]).map((course, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4">
                      <h4 className="font-bold text-card-foreground mb-1">{course.name}</h4>
                      <p className="text-sm text-muted-foreground">{course.desc}</p>
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
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <DollarSign className="h-5 w-5" />
                      <span className="font-semibold">{t("detail.tuition")}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {language === "en" 
                        ? "SGD $500-$2,000/month"
                        : "SGD $500-$2,000/月"
                      }
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {language === "en"
                        ? "Varies by course intensity and duration"
                        : "因课程强度和时长而异"
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
                        ? "1-12 months (flexible)"
                        : "1-12个月（灵活）"
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
                        ? "Gateway to university admission and professional opportunities in English-speaking environments"
                        : "进入大学和英语环境专业机会的门户"
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
