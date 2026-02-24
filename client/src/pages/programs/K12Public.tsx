/**
 * K-12 Public Schools Detail Page
 * Design: Singapore Futurism - Detailed program information
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { School, Check, Clock, DollarSign, TrendingUp } from "lucide-react";

export default function K12Public() {
  const { t, language } = useLanguage();

  const features = language === "en" 
    ? [
        "Ministry of Education (MOE) curriculum",
        "Affordable government-subsidized tuition",
        "Integration with local Singaporean students",
        "Strong academic foundation and discipline",
        "Bilingual education (English + Mother Tongue)",
        "Comprehensive co-curricular activities"
      ]
    : [
        "教育部（MOE）课程",
        "政府补贴的实惠学费",
        "与新加坡本地学生融合",
        "扎实的学术基础和纪律",
        "双语教育（英语+母语）",
        "全面的课外活动"
      ];

  const requirements = language === "en"
    ? [
        "AEIS (Admissions Exercise for International Students) exam for Primary 2-5 and Secondary 1-3",
        "Age requirements: Must meet MOE age criteria for grade level",
        "English proficiency test as part of AEIS",
        "Valid student pass and guardian arrangements for younger students"
      ]
    : [
        "小学2-5年级和中学1-3年级需通过AEIS（国际学生入学考试）",
        "年龄要求：必须符合教育部对年级的年龄标准",
        "AEIS考试包含英语能力测试",
        "年幼学生需要有效的学生准证和监护人安排"
      ];

  const primarySchools = [
    { name: "Rosyth School", cn: "乐赛学校", note: language === "en" ? "Consistently top-ranked" : "持续排名第一" },
    { name: "Nan Hua Primary School", cn: "南华小学", note: language === "en" ? "Excellent PSLE results" : "卓越的PSLE成绩" },
    { name: "CHIJ St. Nicholas Girls' School", cn: "圣婴女子小学", note: language === "en" ? "Top girls' school" : "顶尖女校" },
    { name: "Catholic High School (Primary)", cn: "公教中学（小学部）", note: language === "en" ? "Strong SAP school" : "优秀的特选学校" },
    { name: "Ai Tong School", cn: "爱同学校", note: language === "en" ? "Popular SAP school" : "热门特选学校" },
    { name: "Henry Park Primary School", cn: "亨利园小学", note: language === "en" ? "Bukit Timah area" : "武吉知马区" }
  ];

  const secondarySchools = [
    { name: "Hwa Chong Institution", cn: "华侨中学", note: language === "en" ? "Cut-off: 6M (IP, SAP)" : "录取分数：6M（直通车、特选）" },
    { name: "Raffles Institution", cn: "莱佛士书院", note: language === "en" ? "Cut-off: 6-7 (IP)" : "录取分数：6-7（直通车）" },
    { name: "Nanyang Girls' High School", cn: "南洋女子中学校", note: language === "en" ? "Cut-off: 6M-8M (IP, SAP)" : "录取分数：6M-8M（直通车、特选）" },
    { name: "Methodist Girls' School", cn: "美以美女子中学", note: language === "en" ? "Cut-off: 6M (IP)" : "录取分数：6M（直通车）" },
    { name: "St. Andrew's Secondary School", cn: "圣安德烈中学", note: language === "en" ? "Cut-off: 10" : "录取分数：10" },
    { name: "Victoria School", cn: "维多利亚学校", note: language === "en" ? "Strong academic tradition" : "悠久学术传统" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
              <School className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {t("programs.k12public")}
              </h1>
            </div>
          </div>
          
          <p className="text-xl text-white/90 max-w-3xl">
            {t("programs.k12public.desc")}
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
                  <div className="h-1 w-12 bg-primary"></div>
                  {t("detail.overview")}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    {language === "en" 
                      ? "Singapore's public school system is renowned globally for its academic excellence and rigorous curriculum. Government schools follow the Ministry of Education (MOE) curriculum, which emphasizes strong foundations in mathematics, sciences, and languages. International students can join public schools through the AEIS examination system."
                      : "新加坡的公立学校系统以其卓越的学术水平和严格的课程而闻名全球。政府学校遵循教育部（MOE）课程，强调数学、科学和语言的扎实基础。国际学生可以通过AEIS考试系统进入公立学校。"
                    }
                  </p>
                  <p>
                    {language === "en"
                      ? "Public schools offer a unique opportunity for international students to integrate into Singapore's multicultural society while receiving world-class education at affordable rates. Students benefit from experienced teachers, modern facilities, and a holistic education approach that includes character development and co-curricular activities."
                      : "公立学校为国际学生提供了独特的机会，以实惠的价格融入新加坡多元文化社会，同时接受世界一流的教育。学生受益于经验丰富的教师、现代化设施以及包括品格培养和课外活动的全面教育方法。"
                    }
                  </p>
                </div>
              </div>

              {/* Key Features */}
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

              {/* Featured Schools */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-primary"></div>
                  {language === "en" ? "Featured Public Schools" : "特色公立学校"}
                </h2>
                <div className="space-y-6">
                  {/* Primary Schools */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {language === "en" ? "Top Primary Schools" : "顶尖小学"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {primarySchools.map((school, index) => (
                        <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                          <h4 className="font-semibold text-foreground mb-1">{school.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{school.cn}</p>
                          <p className="text-xs text-primary">{school.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Schools */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {language === "en" ? "Top Secondary Schools" : "顶尖中学"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {secondarySchools.map((school, index) => (
                        <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                          <h4 className="font-semibold text-foreground mb-1">{school.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{school.cn}</p>
                          <p className="text-xs text-primary">{school.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 border-l-4 border-primary p-4 rounded">
                    <p className="text-sm text-muted-foreground">
                      {language === "en"
                        ? "Note: School placement is determined by AEIS exam results and availability. SIEGLOBE will guide you through the entire application process."
                        : "注意：学校分配取决于AEIS考试成绩和学位空缺情况。SIEGLOBE将指导您完成整个申请流程。"
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Admission Requirements */}
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

              {/* How to Apply */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="h-1 w-12 bg-primary"></div>
                  {t("detail.apply")}
                </h2>
                <div className="bg-card border-2 border-border rounded-xl p-6 space-y-4">
                  {(language === "en" ? [
                    "Register for AEIS exam through MOE website",
                    "Prepare for English and Mathematics tests",
                    "Take AEIS exam (held in September/October)",
                    "Await results and school placement",
                    "Complete student pass application",
                    "Arrange guardian/accommodation if required"
                  ] : [
                    "通过教育部网站注册AEIS考试",
                    "准备英语和数学测试",
                    "参加AEIS考试（9月/10月举行）",
                    "等待结果和学校分配",
                    "完成学生准证申请",
                    "如需要，安排监护人/住宿"
                  ]).map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <DollarSign className="h-5 w-5" />
                      <span className="font-semibold">{t("detail.tuition")}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {language === "en" 
                        ? "SGD $500-$800/month (ASEAN citizens)"
                        : "SGD $500-$800/月（东盟公民）"
                      }
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {language === "en"
                        ? "SGD $800-$1,600/month (Non-ASEAN)"
                        : "SGD $800-$1,600/月（非东盟）"
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
                        ? "6 years (Primary) + 4-5 years (Secondary)"
                        : "6年（小学）+ 4-5年（中学）"
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
                        ? "Strong foundation for local polytechnics, junior colleges, and universities"
                        : "为本地理工学院、初级学院和大学打下坚实基础"
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
