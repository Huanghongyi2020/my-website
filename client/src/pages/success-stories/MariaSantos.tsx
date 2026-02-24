/**
 * Priya Sharma Success Story Detail Page
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "wouter";

export default function PriyaSharmaStory() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      backButton: "← Back to Success Stories",
      title: "Priya Sharma's Journey to NTU MBA",
      subtitle: "From Career Professional to Business Leader",
      quote: "The personalized consultation helped me choose the perfect program. Now I'm thriving in Singapore's business scene.",
      
      background: {
        title: "Background",
        content: "Priya Sharma, a marketing professional from India with 5 years of experience in the tech industry, was looking to advance her career through a prestigious MBA program. She wanted to transition into strategic business leadership roles and saw Singapore as the perfect gateway to Asia's dynamic business landscape."
      },
      
      challenge: {
        title: "The Challenge",
        items: [
          "Choosing between multiple MBA programs across different universities",
          "Understanding the unique value proposition of Singapore's business schools",
          "Balancing full-time work while preparing applications",
          "Crafting compelling essays that highlighted her unique background",
          "Navigating scholarship opportunities and financial planning"
        ]
      },
      
      solution: {
        title: "How SIEGLOBE Helped",
        items: [
          "Conducted in-depth career assessment to identify the best-fit MBA program at NTU",
          "Provided personalized guidance on crafting impactful application essays",
          "Connected Priya with NTU alumni for insider perspectives",
          "Assisted with scholarship applications, resulting in 40% tuition coverage",
          "Offered interview preparation sessions with mock interviews",
          "Supported visa processing and pre-departure planning"
        ]
      },
      
      timeline: {
        title: "Application Timeline",
        steps: [
          { month: "January 2024", event: "Initial consultation with SIEGLOBE" },
          { month: "February 2024", event: "Program selection and application strategy finalized" },
          { month: "March 2024", event: "Application submitted to NTU MBA program" },
          { month: "April 2024", event: "Interview invitation and preparation" },
          { month: "May 2024", event: "Admission offer received with scholarship" },
          { month: "June 2024", event: "Visa approved and pre-departure orientation" },
          { month: "August 2024", event: "Started MBA program at NTU" }
        ]
      },
      
      outcome: {
        title: "The Outcome",
        content: "Priya is now thriving in NTU's MBA program, where she's developing advanced business acumen and building a powerful network across Asia. She secured a 40% scholarship and has already participated in consulting projects with Singapore-based multinational corporations. Her career trajectory has shifted from marketing specialist to strategic business consultant, with multiple internship offers from top firms in Singapore's financial district."
      },
      
      impact: {
        title: "Current Status",
        items: [
          "Enrolled in NTU MBA program (Class of 2026)",
          "Received 40% merit-based scholarship",
          "Completed consulting project with Fortune 500 company",
          "Active member of NTU Business School's Women in Leadership club",
          "Secured summer internship at leading management consulting firm"
        ]
      },
      
      testimonial: {
        title: "In Her Words",
        quote: "SIEGLOBE didn't just help me get into NTU—they helped me understand why it was the right choice for my career goals. The personalized consultation process was invaluable. They knew exactly how to position my application to stand out, and their scholarship guidance made the program financially feasible. Now I'm not just studying business; I'm living it in one of Asia's most dynamic economies."
      },
      
      cta: "Start Your Journey",
      
      quickInfo: {
        program: "MBA, Nanyang Technological University (NTU)",
        duration: "2024 - 2026",
        location: "Singapore",
        achievement: "40% Merit Scholarship"
      }
    },
    zh: {
      backButton: "← 返回成功案例",
      title: "Priya Sharma的NTU MBA之旅",
      subtitle: "从职场专业人士到商业领袖",
      quote: "个性化咨询帮助我选择了完美的项目。现在我在新加坡的商业领域蓬勃发展。",
      
      background: {
        title: "背景",
        content: "Priya Sharma是一位来自印度的市场营销专业人士，在科技行业拥有5年经验。她希望通过攻读知名MBA项目来提升职业发展，转型进入战略商业领导角色，并将新加坡视为进入亚洲充满活力的商业环境的完美门户。"
      },
      
      challenge: {
        title: "面临的挑战",
        items: [
          "在不同大学的多个MBA项目中做出选择",
          "了解新加坡商学院的独特价值主张",
          "在全职工作的同时准备申请材料",
          "撰写能突出个人独特背景的有说服力的文书",
          "了解奖学金机会和财务规划"
        ]
      },
      
      solution: {
        title: "SIEGLOBE如何帮助",
        items: [
          "进行深入的职业评估，确定NTU最适合的MBA项目",
          "提供个性化指导，撰写有影响力的申请文书",
          "联系NTU校友，获得内部视角",
          "协助申请奖学金，最终获得40%学费减免",
          "提供面试准备课程和模拟面试",
          "支持签证办理和行前准备"
        ]
      },
      
      timeline: {
        title: "申请时间线",
        steps: [
          { month: "2024年1月", event: "与SIEGLOBE初次咨询" },
          { month: "2024年2月", event: "确定项目选择和申请策略" },
          { month: "2024年3月", event: "提交NTU MBA项目申请" },
          { month: "2024年4月", event: "收到面试邀请并准备" },
          { month: "2024年5月", event: "收到录取通知和奖学金" },
          { month: "2024年6月", event: "签证获批和行前指导" },
          { month: "2024年8月", event: "开始NTU MBA课程" }
        ]
      },
      
      outcome: {
        title: "结果",
        content: "Priya现在在NTU的MBA项目中蓬勃发展，她正在培养高级商业敏锐度，并在整个亚洲建立强大的人脉网络。她获得了40%的奖学金，并已经参与了与新加坡跨国公司的咨询项目。她的职业轨迹从营销专员转变为战略商业顾问，并收到了新加坡金融区顶级公司的多个实习邀请。"
      },
      
      impact: {
        title: "当前状态",
        items: [
          "就读于NTU MBA项目（2026届）",
          "获得40%优秀奖学金",
          "完成与财富500强公司的咨询项目",
          "NTU商学院女性领导力俱乐部活跃成员",
          "获得领先管理咨询公司的暑期实习机会"
        ]
      },
      
      testimonial: {
        title: "她的话",
        quote: "SIEGLOBE不仅帮助我进入NTU，还帮助我理解为什么这是我职业目标的正确选择。个性化咨询过程非常宝贵。他们确切知道如何定位我的申请以脱颖而出，他们的奖学金指导使该项目在经济上可行。现在我不仅在学习商业，还在亚洲最具活力的经济体之一中实践它。"
      },
      
      cta: "开始您的旅程",
      
      quickInfo: {
        program: "MBA，南洋理工大学（NTU）",
        duration: "2024 - 2026",
        location: "新加坡",
        achievement: "40%优秀奖学金"
      }
    }
  };

  const c = language === "zh" ? content.zh : content.en;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#4c1d95] to-[#6b21a8] text-white py-20">
        <div className="container">
          <Link href="/#success">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 mb-8">
              {c.backButton}
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {c.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {c.subtitle}
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8">
              <div className="text-[#00d4aa] text-6xl mb-4">"</div>
              <p className="text-lg md:text-xl italic leading-relaxed">
                {c.quote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Story */}
            <div className="lg:col-span-2 space-y-12">
              {/* Background */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  {c.background.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {c.background.content}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  {c.challenge.title}
                </h2>
                <ul className="space-y-3">
                  {c.challenge.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  {c.solution.title}
                </h2>
                <ul className="space-y-3">
                  {c.solution.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  {c.timeline.title}
                </h2>
                <div className="space-y-4">
                  {c.timeline.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                        {index < c.timeline.steps.length - 1 && (
                          <div className="w-0.5 h-full bg-border mt-2"></div>
                        )}
                      </div>
                      <div className="pb-8">
                        <div className="text-primary font-semibold mb-1">{step.month}</div>
                        <div className="text-muted-foreground">{step.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  {c.outcome.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {c.outcome.content}
                </p>
              </div>

              {/* Impact */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  {c.impact.title}
                </h2>
                <ul className="space-y-3">
                  {c.impact.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-muted rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">{c.testimonial.title}</h2>
                <div className="text-[#00d4aa] text-5xl mb-4">"</div>
                <p className="text-lg italic text-foreground leading-relaxed">
                  {c.testimonial.quote}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-bold text-foreground">Priya Sharma</div>
                  <div className="text-muted-foreground">MBA, NTU</div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="bg-card border-2 border-border rounded-xl p-6 sticky top-6">
                <h3 className="text-xl font-bold text-card-foreground mb-6">Quick Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Program</div>
                      <div className="font-semibold text-card-foreground">{c.quickInfo.program}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Duration</div>
                      <div className="font-semibold text-card-foreground">{c.quickInfo.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Location</div>
                      <div className="font-semibold text-card-foreground">{c.quickInfo.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Achievement</div>
                      <div className="font-semibold text-card-foreground">{c.quickInfo.achievement}</div>
                    </div>
                  </div>
                </div>

                <Link href="/#contact">
                  <Button className="w-full mt-6 bg-[#ff6b6b] hover:bg-[#ff5252] text-white">
                    {c.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
