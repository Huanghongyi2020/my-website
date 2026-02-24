/**
 * Success Story Detail Page - Zixian (UWC Singapore)
 * Design: Singapore Futurism - Professional case study layout
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Calendar, Award, Target, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ZixianStory() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: "From Shanghai to UWC: Zixian's Journey",
        subtitle: "Grade 7 Student, UWC South East Asia (Dover Campus)",
        quote: "SIEGLOBE's expert guidance helped us navigate the competitive UWC admission process. Their support with interview preparation and English enhancement was invaluable."
      },
      background: {
        title: "Background",
        content: "Zixian, a bright and motivated student from Shanghai, dreamed of studying at one of Singapore's most prestigious international schools - UWC South East Asia (UWCSEA). Her parents, Grace and her husband, sought expert guidance to navigate the highly competitive admission process for this top-tier IB school."
      },
      challenge: {
        title: "The Challenge",
        items: [
          "Highly competitive admission to UWCSEA Dover Campus (acceptance rate <15%)",
          "English language proficiency requirements for academic success",
          "Virtual interview preparation during COVID-19 period",
          "Understanding the IB curriculum and school culture",
          "Meeting UNP (Universal Need-based Programme) criteria"
        ]
      },
      solution: {
        title: "How SIEGLOBE Helped",
        items: [
          {
            title: "Comprehensive School Selection",
            desc: "Analyzed Zixian's academic profile and matched her with UWCSEA's educational philosophy"
          },
          {
            title: "Application Strategy",
            desc: "Crafted a compelling application highlighting Zixian's strengths and potential"
          },
          {
            title: "Interview Coaching",
            desc: "Arranged and prepared Zixian for virtual interview with EAL coordinator on December 10, 2024"
          },
          {
            title: "English Enhancement Plan",
            desc: "Developed strategy for Additional English (AE) programme participation to strengthen language skills"
          },
          {
            title: "Family Support",
            desc: "Guided parents through UNP application and financial planning process"
          }
        ]
      },
      timeline: {
        title: "Application Timeline",
        events: [
          { date: "September 2024", event: "Initial consultation and school selection" },
          { date: "October 2024", event: "Application submission and document preparation" },
          { date: "November 2024", event: "Interview preparation and coaching sessions" },
          { date: "December 10, 2024", event: "Virtual interview with EAL coordinator" },
          { date: "December 2024", event: "Conditional offer received - met UNP entry criteria" },
          { date: "January 2025", event: "Enrolled in Additional English Programme" }
        ]
      },
      result: {
        title: "The Result",
        items: [
          "Successfully admitted to UWCSEA Dover Campus for Grade 7",
          "Met UNP (Universal Need-based Programme) entry criteria",
          "Received conditional offer with English enhancement pathway",
          "Enrolled in Additional English (AE) programme for language development",
          "Formal offer of placement confirmed within weeks"
        ]
      },
      current: {
        title: "Current Status",
        content: "Zixian is now preparing to start her journey at UWCSEA Dover Campus, one of Asia's leading IB schools. She is actively participating in the Additional English Programme to strengthen her academic language skills before the main curriculum begins. Her family is grateful for SIEGLOBE's comprehensive support throughout the admission process."
      },
      testimonial: {
        quote: "Thank you for arranging Zixian's virtual interview and guiding us through the entire process. Your expertise in understanding UWCSEA's requirements and preparing Zixian for success was exceptional. We couldn't have done this without SIEGLOBE.",
        author: "Grace (Zixian's Mother)",
        location: "Shanghai, China"
      }
    },
    zh: {
      hero: {
        title: "从上海到UWC：子贤的求学之路",
        subtitle: "7年级学生，新加坡UWC东南亚校区（多佛校区）",
        quote: "得贤教育的专业指导帮助我们顺利通过了竞争激烈的UWC录取流程。他们在面试准备和英语提升方面的支持非常宝贵。"
      },
      background: {
        title: "背景介绍",
        content: "子贤是一位来自上海的聪明且积极上进的学生，她梦想进入新加坡最负盛名的国际学校之一——UWC东南亚学校（UWCSEA）就读。她的父母Grace和先生寻求专业指导，以应对这所顶尖IB学校极具竞争力的录取流程。"
      },
      challenge: {
        title: "面临的挑战",
        items: [
          "UWCSEA多佛校区录取竞争激烈（录取率<15%）",
          "学术成功所需的英语语言能力要求",
          "疫情期间的线上面试准备",
          "理解IB课程体系和学校文化",
          "满足UNP（基于需求的普遍资助计划）标准"
        ]
      },
      solution: {
        title: "得贤教育如何帮助",
        items: [
          {
            title: "全面的学校选择",
            desc: "分析子贤的学术档案，将她与UWCSEA的教育理念进行匹配"
          },
          {
            title: "申请策略",
            desc: "精心打造突出子贤优势和潜力的申请材料"
          },
          {
            title: "面试辅导",
            desc: "安排并准备子贤于2024年12月10日与EAL协调员的线上面试"
          },
          {
            title: "英语提升计划",
            desc: "制定参加额外英语（AE）课程的策略，以加强语言技能"
          },
          {
            title: "家庭支持",
            desc: "指导家长完成UNP申请和财务规划流程"
          }
        ]
      },
      timeline: {
        title: "申请时间线",
        events: [
          { date: "2024年9月", event: "初次咨询和学校选择" },
          { date: "2024年10月", event: "提交申请和准备文件" },
          { date: "2024年11月", event: "面试准备和辅导课程" },
          { date: "2024年12月10日", event: "与EAL协调员进行线上面试" },
          { date: "2024年12月", event: "收到有条件录取通知 - 满足UNP入学标准" },
          { date: "2025年1月", event: "注册额外英语课程" }
        ]
      },
      result: {
        title: "录取结果",
        items: [
          "成功被UWCSEA多佛校区7年级录取",
          "满足UNP（基于需求的普遍资助计划）入学标准",
          "收到附带英语提升路径的有条件录取通知",
          "注册额外英语（AE）课程以提升语言能力",
          "数周内确认正式录取名额"
        ]
      },
      current: {
        title: "当前状态",
        content: "子贤现在正准备开始她在UWCSEA多佛校区的学习之旅，这是亚洲领先的IB学校之一。她正在积极参加额外英语课程，以在正式课程开始前加强学术语言技能。她的家人非常感谢得贤教育在整个录取过程中提供的全面支持。"
      },
      testimonial: {
        quote: "感谢你们安排子贤的线上面试，并在整个过程中给予我们指导。你们对UWCSEA要求的深入理解以及为子贤成功所做的准备都非常出色。没有得贤教育，我们无法做到这一切。",
        author: "Grace（子贤的母亲）",
        location: "中国上海"
      }
    }
  };

  const t_content = language === "zh" ? content.zh : content.en;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-[#2d1b69] to-[#6b21a8] text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200')] opacity-10 bg-cover bg-center" />
        
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
              {language === "zh" ? "K-12 国际学校录取" : "K-12 International School Admission"}
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
                👩
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
