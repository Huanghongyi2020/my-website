import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.programs": "Programs",
    "nav.process": "Application Process",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.title": "Your Gateway to",
    "hero.title.highlight": "Singapore Education",
    "hero.subtitle": "Expert guidance for studying at world-class universities in Singapore's vibrant, multicultural environment",
    "hero.cta.primary": "Book Free Consultation",
    "hero.cta.secondary": "Explore Programs",
    
    // Stats
    "stats.students": "Students Placed",
    "stats.success": "Success Rate",
    "stats.universities": "Partner Universities",
    "stats.experience": "Years Experience",
    
    // Why Singapore
    "why.title": "Why Study in Singapore?",
    "why.subtitle": "Discover the advantages of pursuing your education in Asia's leading education hub",
    "why.worldclass.title": "World-Class Universities",
    "why.worldclass.desc": "Home to top-ranked institutions like NUS, NTU, and SMU recognized globally",
    "why.multicultural.title": "Multicultural Environment",
    "why.multicultural.desc": "Experience diverse cultures in a safe, English-speaking cosmopolitan city",
    "why.career.title": "Career Opportunities",
    "why.career.desc": "Strong industry connections and pathways to employment in Asia's business hub",
    "why.quality.title": "Quality of Life",
    "why.quality.desc": "Safe, clean, modern city with excellent infrastructure and healthcare",
    
    // Programs
    "programs.title": "Study Programs",
    "programs.subtitle": "Comprehensive education pathways tailored to your academic goals",
    "programs.undergraduate": "Undergraduate Programs",
    "programs.undergraduate.desc": "Bachelor's degrees across business, engineering, sciences, and humanities",
    "programs.postgraduate": "Postgraduate Studies",
    "programs.postgraduate.desc": "Master's and PhD programs for advanced research and specialization",
    "programs.language": "Language Courses",
    "programs.language.desc": "English proficiency and preparatory courses for international students",
    "programs.professional": "Professional Certifications",
    "programs.professional.desc": "Industry-recognized qualifications and executive education programs",
    "programs.k12public": "Public Schools (K-12)",
    "programs.k12public.desc": "Quality government schools offering Singapore's world-renowned curriculum",
    "programs.k12international": "International Schools (K-12)",
    "programs.k12international.desc": "Premium international curricula including IB, IGCSE, and American systems",
    "programs.cta": "View Details",
    
    // Program Detail Pages - Common
    "detail.overview": "Program Overview",
    "detail.features": "Key Features",
    "detail.requirements": "Admission Requirements",
    "detail.tuition": "Tuition & Fees",
    "detail.duration": "Duration",
    "detail.career": "Next Steps",
    "detail.apply": "How to Apply",
    "detail.cta": "Book Free Consultation",
    "detail.back": "← Back to Programs",
    
    // Application Process
    "process.title": "Application Journey",
    "process.subtitle": "Your step-by-step path to studying in Singapore",
    "process.step1": "Research & Planning",
    "process.step1.desc": "Explore programs and universities that match your goals",
    "process.step2": "Document Preparation",
    "process.step2.desc": "Gather transcripts, test scores, and recommendation letters",
    "process.step3": "Application Submission",
    "process.step3.desc": "Submit applications with our expert guidance",
    "process.step4": "Interview Preparation",
    "process.step4.desc": "Practice and coaching for admission interviews",
    "process.step5": "Acceptance & Visa",
    "process.step5.desc": "Receive offers and process student visa",
    "process.step6": "Arrival in Singapore",
    "process.step6.desc": "Pre-departure orientation and settling-in support",
    
    // Success Stories
    "success.title": "Success Stories",
    "success.subtitle": "Real students, real achievements",
    "success.student1.name": "Li Wei",
    "success.student1.program": "Master's in Computer Science, NUS",
    "success.student1.quote": "SIEGLOBE made my dream of studying at NUS a reality. Their guidance through every step was invaluable.",
    "success.student2.name": "Priya Sharma",
    "success.student2.program": "MBA, NTU",
    "success.student2.quote": "The personalized consultation helped me choose the perfect program. Now I'm thriving in Singapore's business scene.",
    "success.student3.name": "Chen Jing",
    "success.student3.program": "Bachelor's in Engineering, SMU",
    "success.student3.quote": "From application to arrival, SIEGLOBE supported me completely. I felt confident every step of the way.",
    "success.student4.name": "Zixian",
    "success.student4.program": "Grade 7, UWC South East Asia",
    "success.student4.quote": "SIEGLOBE's expert guidance helped us navigate the competitive UWC admission process. Their support was invaluable.",
    "success.student5.name": "Li Yishan",
    "success.student5.program": "Primary 1, CHIJ Our Lady of Good Counsel",
    "success.student5.quote": "SIEGLOBE helped us understand the complex P1 registration process for international students. Our daughter secured a place at our top choice school!",
    "success.readmore": "Read Full Story",
    
    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive support for your education journey",
    "services.selection": "University Selection",
    "services.selection.desc": "Personalized guidance to find the best-fit programs and institutions",
    "services.application": "Application Assistance",
    "services.application.desc": "Expert help with essays, documents, and submission processes",
    "services.visa": "Visa Processing",
    "services.visa.desc": "Complete support for student visa applications and documentation",
    "services.accommodation": "Accommodation Support",
    "services.accommodation.desc": "Help finding suitable housing near your university",
    "services.orientation": "Pre-Departure Orientation",
    "services.orientation.desc": "Prepare for life in Singapore with cultural and practical guidance",
    "services.postarrival": "Post-Arrival Services",
    "services.postarrival.desc": "Ongoing support after you arrive in Singapore",
    
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What are the costs of studying in Singapore?",
    "faq.a1": "Tuition fees typically range from SGD 20,000 to 50,000 per year depending on the program and university. Living expenses average SGD 1,000-2,000 monthly.",
    "faq.q2": "Are scholarships available?",
    "faq.a2": "Yes, many universities and the Singapore government offer scholarships for international students based on merit and need. We help identify and apply for suitable scholarships.",
    "faq.q3": "Can I work while studying?",
    "faq.a3": "International students on student visas can work up to 16 hours per week during term time and full-time during holidays with university approval.",
    "faq.q4": "What are the English requirements?",
    "faq.a4": "Most programs require IELTS 6.5+ or TOEFL 90+. Some universities offer English proficiency courses for students who need additional preparation.",
    
    // Contact
    "contact.title": "Start Your Journey Today",
    "contact.subtitle": "Get in touch for a free consultation",
    "contact.name": "Your Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Tell us about your education goals",
    "contact.submit": "Send Message",
    "contact.or": "Or reach us directly",
    "contact.wechat": "WeChat",
    "contact.linkedin": "LinkedIn",
    
    // Footer
    "footer.about": "About SIEGLOBE",
    "footer.about.text": "Leading Singapore education consultancy helping students achieve their dreams of studying at world-class universities.",
    "footer.quicklinks": "Quick Links",
    "footer.contact.title": "Contact Us",
    "footer.rights": "All rights reserved.",
  },
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.programs": "课程项目",
    "nav.process": "申请流程",
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    
    // Hero Section
    "hero.title": "您通往",
    "hero.title.highlight": "新加坡教育的大门",
    "hero.subtitle": "为您提供专业指导，助您在新加坡充满活力的多元文化环境中就读世界一流大学",
    "hero.cta.primary": "预约免费咨询",
    "hero.cta.secondary": "浏览课程",
    
    // Stats
    "stats.students": "成功案例",
    "stats.success": "成功率",
    "stats.universities": "合作院校",
    "stats.experience": "年经验",
    
    // Why Singapore
    "why.title": "为什么选择新加坡留学？",
    "why.subtitle": "探索在亚洲领先教育中心接受教育的优势",
    "why.worldclass.title": "世界一流大学",
    "why.worldclass.desc": "拥有全球认可的顶尖院校，如新加坡国立大学、南洋理工大学和新加坡管理大学",
    "why.multicultural.title": "多元文化环境",
    "why.multicultural.desc": "在安全、英语为主的国际化都市体验多元文化",
    "why.career.title": "职业发展机会",
    "why.career.desc": "强大的行业联系和亚洲商业中心的就业途径",
    "why.quality.title": "高品质生活",
    "why.quality.desc": "安全、清洁、现代化的城市，拥有卓越的基础设施和医疗保健",
    
    // Programs
    "programs.title": "学习项目",
    "programs.subtitle": "为您的学术目标量身定制的全面教育路径",
    "programs.undergraduate": "本科课程",
    "programs.undergraduate.desc": "涵盖商业、工程、科学和人文学科的学士学位",
    "programs.postgraduate": "研究生课程",
    "programs.postgraduate.desc": "硕士和博士课程，用于高级研究和专业化",
    "programs.language": "语言课程",
    "programs.language.desc": "为国际学生提供的英语能力和预科课程",
    "programs.professional": "专业认证",
    "programs.professional.desc": "行业认可的资格证书和高管教育课程",
    "programs.k12public": "公立学校（K-12）",
    "programs.k12public.desc": "提供新加坡世界知名课程的优质政府学校",
    "programs.k12international": "国际学校（K-12）",
    "programs.k12international.desc": "包括IB、IGCSE和美国体系的优质国际课程",
    "programs.cta": "查看详情",
    
    // Program Detail Pages - Common
    "detail.overview": "项目概述",
    "detail.features": "主要特点",
    "detail.requirements": "入学要求",
    "detail.tuition": "学费",
    "detail.duration": "时长",
    "detail.career": "下一步",
    "detail.apply": "如何申请",
    "detail.cta": "预约免费咨询",
    "detail.back": "← 返回项目列表",
    
    // Application Process
    "process.title": "申请之旅",
    "process.subtitle": "您在新加坡学习的分步指南",
    "process.step1": "研究与规划",
    "process.step1.desc": "探索符合您目标的课程和大学",
    "process.step2": "文件准备",
    "process.step2.desc": "收集成绩单、考试成绩和推荐信",
    "process.step3": "提交申请",
    "process.step3.desc": "在我们的专业指导下提交申请",
    "process.step4": "面试准备",
    "process.step4.desc": "入学面试的练习和辅导",
    "process.step5": "录取与签证",
    "process.step5.desc": "收到录取通知并办理学生签证",
    "process.step6": "抵达新加坡",
    "process.step6.desc": "行前指导和安顿支持",
    
    // Success Stories
    "success.title": "成功案例",
    "success.subtitle": "真实学生，真实成就",
    "success.student1.name": "李伟",
    "success.student1.program": "新加坡国立大学计算机科学硕士",
    "success.student1.quote": "SIEGLOBE让我在新加坡国立大学学习的梦想成真。他们在每一步的指导都非常宝贵。",
    "success.student2.name": "普里亚·夏尔马",
    "success.student2.program": "南洋理工大学工商管理硕士",
    "success.student2.quote": "个性化咨询帮助我选择了完美的课程。现在我在新加坡的商业领域蓬勃发展。",
    "success.student3.name": "陈静",
    "success.student3.program": "新加坡管理大学工程学士",
    "success.student3.quote": "从申请到抵达，SIEGLOBE全程支持我。每一步我都充满信心。",
    "success.student4.name": "子贤",
    "success.student4.program": "7年级，新加坡UWC东南亚学校",
    "success.student4.quote": "得贤教育的专业指导帮助我们顺利通过了竞争激烈的UWC录取流程。他们的支持非常宝贵。",
    "success.student5.name": "李怡珊",
    "success.student5.program": "小学一年级，CHIJ圣婴女校（淡滨尼）",
    "success.student5.quote": "得贤教育帮助我们理解了国际学生复杂的小一报名流程。我们的女儿成功获得了首选学校的学位！",
    "success.readmore": "阅读完整故事",
    
    // Services
    "services.title": "我们的服务",
    "services.subtitle": "为您的教育之旅提供全面支持",
    "services.selection": "大学选择",
    "services.selection.desc": "个性化指导，找到最适合的课程和院校",
    "services.application": "申请协助",
    "services.application.desc": "专业帮助撰写文书、准备材料和提交流程",
    "services.visa": "签证办理",
    "services.visa.desc": "学生签证申请和文件的全面支持",
    "services.accommodation": "住宿支持",
    "services.accommodation.desc": "帮助寻找大学附近的合适住房",
    "services.orientation": "行前指导",
    "services.orientation.desc": "通过文化和实用指导为新加坡生活做准备",
    "services.postarrival": "抵达后服务",
    "services.postarrival.desc": "抵达新加坡后的持续支持",
    
    // FAQ
    "faq.title": "常见问题",
    "faq.q1": "在新加坡学习的费用是多少？",
    "faq.a1": "学费通常每年在20,000至50,000新元之间，具体取决于课程和大学。生活费平均每月1,000-2,000新元。",
    "faq.q2": "有奖学金吗？",
    "faq.a2": "是的，许多大学和新加坡政府为国际学生提供基于成绩和需求的奖学金。我们帮助识别和申请合适的奖学金。",
    "faq.q3": "我可以边学习边工作吗？",
    "faq.a3": "持学生签证的国际学生在学期期间每周可工作最多16小时，假期期间可全职工作，需获得大学批准。",
    "faq.q4": "英语要求是什么？",
    "faq.a4": "大多数课程要求雅思6.5+或托福90+。一些大学为需要额外准备的学生提供英语能力课程。",
    
    // Contact
    "contact.title": "今天开始您的旅程",
    "contact.subtitle": "联系我们获取免费咨询",
    "contact.name": "您的姓名",
    "contact.email": "电子邮箱",
    "contact.phone": "电话号码",
    "contact.message": "告诉我们您的教育目标",
    "contact.submit": "发送消息",
    "contact.or": "或直接联系我们",
    "contact.wechat": "微信",
    "contact.linkedin": "领英",
    
    // Footer
    "footer.about": "关于SIEGLOBE",
    "footer.about.text": "领先的新加坡教育咨询公司，帮助学生实现在世界一流大学学习的梦想。",
    "footer.quicklinks": "快速链接",
    "footer.contact.title": "联系我们",
    "footer.rights": "版权所有。",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
