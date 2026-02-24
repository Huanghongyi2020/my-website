/**
 * Success Story Detail Page - Li Yishan (CHIJ Our Lady of Good Counsel)
 * Design: Singapore Futurism - Professional case study layout
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Calendar, Award, Target, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function LiYishanStory() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: "Securing a Place at CHIJ: Li Yishan's P1 Journey",
        subtitle: "Primary 1 Student, CHIJ Our Lady of Good Counsel (Toa Payoh)",
        quote: "SIEGLOBE helped us understand the complex P1 registration process for international students. Our daughter secured a place at our top choice school!"
      },
      background: {
        title: "Background",
        content: "Li Yishan's parents, international residents in Singapore, wanted to secure a place for their daughter at one of Singapore's prestigious CHIJ (Convent of the Holy Infant Jesus) schools. As international students face limited vacancies in the Primary One Registration Exercise, they needed expert guidance to navigate this highly competitive process and maximize their chances of admission."
      },
      challenge: {
        title: "The Challenge",
        items: [
          "Limited P1 vacancies for international students (IS) in national schools",
          "Understanding the complex multi-phase P1 Registration Exercise",
          "Competing with Singapore Citizens and Permanent Residents who have priority",
          "Meeting school-specific requirements and deadlines",
          "No option to appeal or change posted school once offer is received",
          "Navigating the online Indication of Interest (IOI) system"
        ]
      },
      solution: {
        title: "How SIEGLOBE Helped",
        items: [
          {
            title: "Strategic School Selection",
            desc: "Identified CHIJ Our Lady of Good Counsel as an excellent fit based on location, academic reputation, and values alignment"
          },
          {
            title: "Registration Process Guidance",
            desc: "Provided step-by-step guidance through the P1 Registration Exercise phases and online IOI submission"
          },
          {
            title: "Application Optimization",
            desc: "Ensured all documentation was complete and submitted correctly to maximize chances in the limited IS quota"
          },
          {
            title: "Timeline Management",
            desc: "Tracked all critical deadlines and ensured timely submission at each phase"
          },
          {
            title: "Family Support",
            desc: "Prepared the family for the competitive nature of P1 admission and managed expectations realistically"
          }
        ]
      },
      timeline: {
        title: "Application Timeline",
        events: [
          { date: "May 2025", event: "Initial consultation and school selection strategy" },
          { date: "June 2025", event: "P1 Registration Exercise opens - Phase 1 begins" },
          { date: "July 2025", event: "Online Indication of Interest (IOI) submission" },
          { date: "August 2025", event: "Application review and document verification" },
          { date: "October 13, 2025", event: "Offer received via email from Ministry of Education" },
          { date: "November 2025", event: "Acceptance confirmed and enrollment completed" }
        ]
      },
      result: {
        title: "The Result",
        items: [
          "Successfully offered a place at CHIJ Our Lady of Good Counsel for P1 2026",
          "Secured admission despite limited international student vacancies",
          "Received official offer letter from Ministry of Education (MOE)",
          "Confirmed placement at family's first-choice school",
          "Li Yishan will begin her education at a prestigious Catholic mission school with strong academic reputation"
        ]
      },
      current: {
        title: "Current Status",
        content: "Li Yishan is preparing to start Primary 1 at CHIJ Our Lady of Good Counsel in January 2026. The family is thrilled to have secured a place at their top-choice school, known for its holistic education approach, strong moral values, and excellent academic track record. SIEGLOBE continues to support the family with pre-enrollment preparation and orientation guidance."
      },
      testimonial: {
        quote: "We were overwhelmed by the P1 registration process as international parents. SIEGLOBE's expertise made all the difference - they explained every step clearly and helped us navigate the competitive system. When we received the offer letter from MOE, we were overjoyed! Thank you for making our daughter's dream school a reality.",
        author: "Li Yishan's Parents",
        location: "Singapore"
      }
    },
    zh: {
      hero: {
        title: "成功获得CHIJ学位：李怡珊的小一之路",
        subtitle: "小学一年级学生，CHIJ圣婴女校（淡滨尼）",
        quote: "得贤教育帮助我们理解了国际学生复杂的小一报名流程。我们的女儿成功获得了首选学校的学位！"
      },
      background: {
        title: "背景介绍",
        content: "李怡珊的父母是新加坡的国际居民，他们希望为女儿在新加坡最负盛名的CHIJ（圣婴耶稣修女会）学校之一获得一个学位。由于国际学生在小一报名活动中面临有限的学额，他们需要专业指导来应对这一竞争激烈的过程，并最大化录取机会。"
      },
      challenge: {
        title: "面临的挑战",
        items: [
          "国立学校为国际学生（IS）提供的小一学额有限",
          "理解复杂的多阶段小一报名活动",
          "与拥有优先权的新加坡公民和永久居民竞争",
          "满足学校特定的要求和截止日期",
          "一旦收到录取通知，无法申诉或更改指定学校",
          "熟悉在线意向表达（IOI）系统"
        ]
      },
      solution: {
        title: "得贤教育如何帮助",
        items: [
          {
            title: "战略性学校选择",
            desc: "根据地理位置、学术声誉和价值观匹配，确定CHIJ圣婴女校（淡滨尼）为最佳选择"
          },
          {
            title: "报名流程指导",
            desc: "提供小一报名活动各阶段和在线IOI提交的逐步指导"
          },
          {
            title: "申请优化",
            desc: "确保所有文件完整且正确提交，以最大化在有限国际学生配额中的机会"
          },
          {
            title: "时间管理",
            desc: "跟踪所有关键截止日期，确保每个阶段及时提交"
          },
          {
            title: "家庭支持",
            desc: "让家庭了解小一录取的竞争性质，并现实地管理期望"
          }
        ]
      },
      timeline: {
        title: "申请时间线",
        events: [
          { date: "2025年5月", event: "初次咨询和学校选择策略" },
          { date: "2025年6月", event: "小一报名活动开始 - 第一阶段" },
          { date: "2025年7月", event: "在线意向表达（IOI）提交" },
          { date: "2025年8月", event: "申请审核和文件验证" },
          { date: "2025年10月13日", event: "通过教育部邮件收到录取通知" },
          { date: "2025年11月", event: "确认接受并完成注册" }
        ]
      },
      result: {
        title: "录取结果",
        items: [
          "成功获得CHIJ圣婴女校（淡滨尼）2026年小一学位",
          "尽管国际学生学额有限，仍成功获得录取",
          "收到教育部（MOE）官方录取通知书",
          "确认在家庭首选学校的学位",
          "李怡珊将在一所具有强大学术声誉的著名天主教会学校开始她的教育之旅"
        ]
      },
      current: {
        title: "当前状态",
        content: "李怡珊正准备于2026年1月在CHIJ圣婴女校（淡滨尼）开始小学一年级的学习。家人非常高兴能够在他们的首选学校获得学位，该校以其全人教育方法、强大的道德价值观和卓越的学术记录而闻名。得贤教育继续为家庭提供入学前准备和迎新指导支持。"
      },
      testimonial: {
        quote: "作为国际家长，我们对小一报名流程感到不知所措。得贤教育的专业知识起到了决定性作用——他们清楚地解释了每一步，帮助我们应对竞争激烈的系统。当我们收到教育部的录取通知书时，我们欣喜若狂！感谢你们让我们女儿的梦想学校成为现实。",
        author: "李怡珊的父母",
        location: "新加坡"
      }
    }
  };

  const t_content = language === "zh" ? content.zh : content.en;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-[#2d1b69] to-[#6b21a8] text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200')] opacity-10 bg-cover bg-center" />
        
        <div className="container relative">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-primary-foreground hover:text-secondary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "zh" ? "返回首页" : "Back to Home"}
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-secondary mb-6">
              <Award className="inline-block w-4 h-4 mr-2" />
              {language === "zh" ? "K-12 公立学校录取" : "K-12 Public School Admission"}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t_content.hero.title}
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8">
              {t_content.hero.subtitle}
            </p>

            <blockquote className="border-l-4 border-secondary pl-6 py-4 text-lg italic">
              "{t_content.hero.quote}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {/* Background */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <Target className="w-8 h-8 mr-3 text-secondary" />
              {t_content.background.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t_content.background.content}
            </p>
          </div>

          {/* Challenge */}
          <div className="mb-12 bg-card p-8 rounded-xl border-2 border-border">
            <h2 className="text-3xl font-bold mb-6">{t_content.challenge.title}</h2>
            <ul className="space-y-3">
              {t_content.challenge.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-destructive mr-3 mt-1">⚠️</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">{t_content.solution.title}</h2>
            <div className="grid gap-6">
              {t_content.solution.items.map((item, index) => (
                <div key={index} className="bg-secondary/5 p-6 rounded-lg border-l-4 border-secondary">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Calendar className="w-8 h-8 mr-3 text-secondary" />
              {t_content.timeline.title}
            </h2>
            <div className="space-y-4">
              {t_content.timeline.events.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold min-w-[140px] mr-6">
                    {event.date}
                  </div>
                  <div className="flex-1 bg-card p-4 rounded-lg border border-border">
                    {event.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="mb-12 bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <CheckCircle2 className="w-8 h-8 mr-3 text-secondary" />
              {t_content.result.title}
            </h2>
            <ul className="space-y-3">
              {t_content.result.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Status */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t_content.current.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t_content.current.content}
            </p>
          </div>

          {/* Testimonial */}
          <div className="bg-primary text-primary-foreground p-8 rounded-xl">
            <blockquote className="text-xl italic mb-6">
              "{t_content.testimonial.quote}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-2xl mr-4">
                👨‍👩‍👧
              </div>
              <div>
                <div className="font-bold text-lg">{t_content.testimonial.author}</div>
                <div className="text-primary-foreground/80">{t_content.testimonial.location}</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                {language === "zh" ? "开始您的申请之旅" : "Start Your Application Journey"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
