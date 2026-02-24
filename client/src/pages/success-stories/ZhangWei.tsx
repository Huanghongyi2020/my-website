/**
 * Success Story Detail Page - Zhang Wei
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { ArrowLeft, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function ZhangWeiStory() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="container relative z-10">
          <Link href="/#success">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === "en" ? "Back to Success Stories" : "返回成功案例"}
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {language === "en" ? "Zhang Wei's Journey" : "张伟的留学之旅"}
            </h1>
            <p className="text-xl text-white/90 mb-4">
              {language === "en" 
                ? "From Beijing to NUS: A Computer Science Success Story"
                : "从北京到新加坡国立大学：计算机科学成功案例"
              }
            </p>
            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <span>{language === "en" ? "Master's in Computer Science, NUS" : "新加坡国立大学计算机科学硕士"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{language === "en" ? "Graduated 2024" : "2024年毕业"}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{language === "en" ? "From Beijing, China" : "来自中国北京"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {/* Quote */}
            <div className="bg-muted/50 border-l-4 border-accent p-8 rounded-r-lg">
              <p className="text-xl italic text-foreground">
                "{language === "en" 
                  ? "SIEGLOBE made my dream of studying at NUS a reality. Their expert guidance through every step of the application process was invaluable."
                  : "SIEGLOBE让我在新加坡国立大学学习的梦想成为现实。他们在申请过程的每一步都提供了宝贵的专业指导。"
                }"
              </p>
              <p className="mt-4 font-semibold text-foreground">- {language === "en" ? "Zhang Wei" : "张伟"}</p>
            </div>

            {/* Background */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <div className="h-1 w-12 bg-accent"></div>
                {language === "en" ? "Background" : "背景"}
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  {language === "en"
                    ? "Zhang Wei graduated with a Bachelor's degree in Software Engineering from Beijing Institute of Technology in 2022. With a strong academic record and a passion for artificial intelligence, he aspired to pursue advanced studies at a world-renowned institution. However, he faced challenges navigating the complex application process for international universities."
                    : "张伟于2022年从北京理工大学软件工程专业本科毕业。凭借优异的学业成绩和对人工智能的热情，他渴望在世界知名学府深造。然而，他在应对国际大学复杂的申请流程时遇到了挑战。"
                  }
                </p>
              </div>
            </div>

            {/* The Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <div className="h-1 w-12 bg-accent"></div>
                {language === "en" ? "The Challenge" : "面临的挑战"}
              </h2>
              <div className="space-y-4">
                {(language === "en" ? [
                  "Limited knowledge of Singapore's university system and application requirements",
                  "Uncertainty about which program would best align with his career goals in AI",
                  "Concerns about preparing a competitive application package",
                  "Tight deadlines for multiple university applications",
                  "Need for strong letters of recommendation and a compelling statement of purpose"
                ] : [
                  "对新加坡大学系统和申请要求了解有限",
                  "不确定哪个课程最符合他在人工智能领域的职业目标",
                  "担心如何准备有竞争力的申请材料",
                  "多所大学申请的紧迫截止日期",
                  "需要强有力的推荐信和令人信服的目的陈述"
                ]).map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SIEGLOBE's Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <div className="h-1 w-12 bg-accent"></div>
                {language === "en" ? "SIEGLOBE's Solution" : "SIEGLOBE的解决方案"}
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  {language === "en"
                    ? "SIEGLOBE's education consultants conducted a comprehensive assessment of Zhang Wei's academic background, research interests, and career aspirations. They recommended NUS's Master of Computing program with a specialization in Artificial Intelligence, which perfectly aligned with his goals."
                    : "SIEGLOBE的教育顾问对张伟的学术背景、研究兴趣和职业抱负进行了全面评估。他们推荐了新加坡国立大学的计算机硕士课程，专攻人工智能方向，完美契合他的目标。"
                  }
                </p>
                <p>
                  {language === "en"
                    ? "The team provided step-by-step guidance on crafting a compelling statement of purpose that highlighted Zhang Wei's unique strengths and research potential. They also helped him secure strong recommendation letters from his professors and coordinated the entire application timeline to ensure all deadlines were met."
                    : "团队提供了逐步指导，帮助张伟撰写令人信服的目的陈述，突出他的独特优势和研究潜力。他们还帮助他获得教授的强有力推荐信，并协调整个申请时间表，确保满足所有截止日期。"
                  }
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <div className="h-1 w-12 bg-accent"></div>
                {language === "en" ? "Application Timeline" : "申请时间线"}
              </h2>
              <div className="space-y-4">
                {(language === "en" ? [
                  { month: "July 2022", event: "Initial consultation with SIEGLOBE" },
                  { month: "August 2022", event: "Program selection and application strategy finalized" },
                  { month: "September 2022", event: "Statement of purpose drafting and refinement" },
                  { month: "October 2022", event: "Application submitted to NUS" },
                  { month: "December 2022", event: "Received admission offer from NUS" },
                  { month: "January 2023", event: "Student visa application and approval" },
                  { month: "August 2023", event: "Arrived in Singapore and began studies" }
                ] : [
                  { month: "2022年7月", event: "与SIEGLOBE进行初步咨询" },
                  { month: "2022年8月", event: "确定课程选择和申请策略" },
                  { month: "2022年9月", event: "目的陈述起草和完善" },
                  { month: "2022年10月", event: "向新加坡国立大学提交申请" },
                  { month: "2022年12月", event: "收到新加坡国立大学录取通知" },
                  { month: "2023年1月", event: "学生签证申请和批准" },
                  { month: "2023年8月", event: "抵达新加坡并开始学习" }
                ]).map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-accent"></div>
                      {index < 6 && <div className="w-0.5 h-full bg-accent/30 mt-1"></div>}
                    </div>
                    <div className="pb-8">
                      <div className="font-semibold text-foreground">{item.month}</div>
                      <div className="text-muted-foreground">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Outcome */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <div className="h-1 w-12 bg-accent"></div>
                {language === "en" ? "The Outcome" : "结果"}
              </h2>
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-8">
                <div className="prose prose-lg max-w-none text-foreground">
                  <p>
                    {language === "en"
                      ? "Zhang Wei successfully completed his Master's degree in 2024 with distinction. During his studies, he published two research papers on machine learning applications and secured a position as an AI Research Engineer at a leading tech company in Singapore. He credits SIEGLOBE's comprehensive support for making his journey smooth and successful."
                      : "张伟于2024年以优异成绩成功完成硕士学位。在学习期间，他发表了两篇关于机器学习应用的研究论文，并在新加坡一家领先的科技公司获得了人工智能研究工程师的职位。他将自己顺利成功的留学之旅归功于SIEGLOBE的全面支持。"
                    }
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-accent font-semibold">
                  <Briefcase className="h-5 w-5" />
                  <span>{language === "en" ? "Current Position: AI Research Engineer, Singapore" : "当前职位：人工智能研究工程师，新加坡"}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-card border-2 border-border rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                {language === "en" ? "Ready to Start Your Journey?" : "准备开始您的留学之旅？"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === "en"
                  ? "Let SIEGLOBE help you achieve your education goals in Singapore, just like Zhang Wei."
                  : "让SIEGLOBE帮助您实现在新加坡的教育目标，就像张伟一样。"
                }
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-white">
                {language === "en" ? "Book Free Consultation" : "预约免费咨询"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
