/**
 * Chen Jing Success Story Detail Page
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "wouter";

export default function ChenJingStory() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      backButton: "← Back to Success Stories",
      title: "Chen Jing's Engineering Journey at SMU",
      subtitle: "From Shanghai to Singapore: Building a Tech Career",
      quote: "From application to arrival, SIEGLOBE supported me completely. I felt confident every step of the way.",
      
      background: {
        title: "Background",
        content: "Chen Jing, a high-achieving student from Shanghai, China, had always dreamed of studying engineering at a world-class university. With strong academic performance in mathematics and physics, she was looking for a program that combined rigorous technical training with international exposure. Singapore's reputation for innovation and technology made it her top choice."
      },
      
      challenge: {
        title: "The Challenge",
        items: [
          "Navigating the complex application process for international students",
          "Understanding the differences between Singapore's top engineering programs",
          "Preparing for English proficiency requirements and entrance assessments",
          "Managing visa documentation and student pass procedures",
          "Arranging accommodation and understanding Singapore's education system",
          "Securing financial support and exploring scholarship options"
        ]
      },
      
      solution: {
        title: "How SIEGLOBE Helped",
        items: [
          "Provided comprehensive comparison of engineering programs at NUS, NTU, and SMU",
          "Guided Chen Jing through SMU's application requirements and deadlines",
          "Offered English language preparation resources and practice tests",
          "Assisted with compiling and organizing all required documentation",
          "Facilitated student pass application with step-by-step guidance",
          "Connected her with current SMU engineering students for peer insights",
          "Helped arrange on-campus accommodation and pre-arrival orientation"
        ]
      },
      
      timeline: {
        title: "Application Timeline",
        steps: [
          { month: "September 2023", event: "Initial consultation and program research" },
          { month: "October 2023", event: "Application preparation and document collection" },
          { month: "November 2023", event: "Submitted application to SMU Engineering" },
          { month: "December 2023", event: "English proficiency test completed" },
          { month: "January 2024", event: "Admission offer received from SMU" },
          { month: "February 2024", event: "Student pass approved" },
          { month: "March 2024", event: "Accommodation secured and pre-departure prep" },
          { month: "August 2024", event: "Arrived in Singapore and started program" }
        ]
      },
      
      outcome: {
        title: "The Outcome",
        content: "Chen Jing successfully enrolled in SMU's Bachelor of Engineering program and is now thriving in Singapore's vibrant tech ecosystem. She has adapted well to the multicultural environment, joined the university's robotics club, and is already exploring internship opportunities with Singapore's leading tech companies. Her confidence has grown tremendously, and she's building a strong foundation for a career in engineering and technology."
      },
      
      impact: {
        title: "Current Status",
        items: [
          "Enrolled in Bachelor's in Engineering at SMU (Class of 2028)",
          "Active member of SMU Robotics Club",
          "Participating in university's innovation challenge program",
          "Networking with industry professionals through SMU career events",
          "Exploring internship opportunities with tech startups in Singapore"
        ]
      },
      
      testimonial: {
        title: "In Her Words",
        quote: "SIEGLOBE made my dream of studying in Singapore a reality. From the very first consultation, they understood my goals and guided me through every single step. The application process seemed overwhelming at first, but their team broke it down into manageable tasks. They were always available to answer my questions, helped me prepare all my documents perfectly, and even connected me with current students so I knew what to expect. When I arrived in Singapore, I felt prepared and confident because of their support. I'm so grateful for their help in starting this incredible journey."
      },
      
      cta: "Start Your Journey",
      
      quickInfo: {
        program: "Bachelor's in Engineering, Singapore Management University (SMU)",
        duration: "2024 - 2028",
        location: "Singapore",
        achievement: "Successful Admission & Student Pass"
      }
    },
    zh: {
      backButton: "← 返回成功案例",
      title: "陈静在SMU的工程学之旅",
      subtitle: "从上海到新加坡：构建科技职业生涯",
      quote: "从申请到抵达，SIEGLOBE全程支持我。我在每一步都感到自信。",
      
      background: {
        title: "背景",
        content: "陈静是一位来自中国上海的优秀学生，一直梦想在世界一流大学学习工程学。凭借在数学和物理方面的优异学术表现，她寻找一个结合严格技术培训和国际视野的项目。新加坡在创新和技术方面的声誉使其成为她的首选。"
      },
      
      challenge: {
        title: "面临的挑战",
        items: [
          "应对国际学生复杂的申请流程",
          "了解新加坡顶尖工程项目之间的差异",
          "准备英语能力要求和入学评估",
          "管理签证文件和学生准证程序",
          "安排住宿并了解新加坡的教育体系",
          "获得经济支持并探索奖学金机会"
        ]
      },
      
      solution: {
        title: "SIEGLOBE如何帮助",
        items: [
          "提供NUS、NTU和SMU工程项目的全面比较",
          "指导陈静完成SMU的申请要求和截止日期",
          "提供英语语言准备资源和练习测试",
          "协助编制和整理所有必需文件",
          "通过逐步指导促进学生准证申请",
          "联系SMU在读工程学生获取同行见解",
          "帮助安排校内住宿和行前指导"
        ]
      },
      
      timeline: {
        title: "申请时间线",
        steps: [
          { month: "2023年9月", event: "初次咨询和项目研究" },
          { month: "2023年10月", event: "申请准备和文件收集" },
          { month: "2023年11月", event: "提交SMU工程学申请" },
          { month: "2023年12月", event: "完成英语能力测试" },
          { month: "2024年1月", event: "收到SMU录取通知" },
          { month: "2024年2月", event: "学生准证获批" },
          { month: "2024年3月", event: "确保住宿和行前准备" },
          { month: "2024年8月", event: "抵达新加坡并开始课程" }
        ]
      },
      
      outcome: {
        title: "结果",
        content: "陈静成功入读SMU工程学学士项目，现在在新加坡充满活力的科技生态系统中蓬勃发展。她很好地适应了多元文化环境，加入了大学的机器人俱乐部，并已经在探索新加坡领先科技公司的实习机会。她的信心大大增强，正在为工程和技术职业生涯打下坚实基础。"
      },
      
      impact: {
        title: "当前状态",
        items: [
          "就读于SMU工程学学士项目（2028届）",
          "SMU机器人俱乐部活跃成员",
          "参与大学创新挑战项目",
          "通过SMU职业活动与行业专业人士建立联系",
          "探索新加坡科技初创公司的实习机会"
        ]
      },
      
      testimonial: {
        title: "她的话",
        quote: "SIEGLOBE让我在新加坡学习的梦想成为现实。从第一次咨询开始，他们就理解我的目标，并指导我完成每一步。申请过程起初似乎令人不知所措，但他们的团队将其分解为可管理的任务。他们总是随时回答我的问题，帮助我完美准备所有文件，甚至让我与在读学生联系，这样我就知道会发生什么。当我抵达新加坡时，由于他们的支持，我感到准备充分且充满信心。我非常感谢他们帮助我开始这段不可思议的旅程。"
      },
      
      cta: "开始您的旅程",
      
      quickInfo: {
        program: "工程学学士，新加坡管理大学（SMU）",
        duration: "2024 - 2028",
        location: "新加坡",
        achievement: "成功录取并获得学生准证"
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
                  <div className="font-bold text-foreground">Chen Jing</div>
                  <div className="text-muted-foreground">{language === "en" ? "Bachelor's in Engineering, SMU" : "工程学学士，SMU"}</div>
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
