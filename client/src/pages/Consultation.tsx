/**
 * Consultation Page
 * Design: Singapore Futurism - Two consultation options
 * Features: Free consultation form + AI Bot (paid 20 RMB)
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { 
  MessageCircle, 
  Bot, 
  Mail, 
  ArrowRight, 
  Check, 
  Shield, 
  Zap, 
  Clock,
  ArrowLeft,
  Sparkles
} from "lucide-react";

type Step = "choose" | "email" | "payment" | "access";

export default function Consultation() {
  const { language } = useLanguage();
  const [step, setStep] = useState<Step>("choose");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const content = {
    en: {
      pageTitle: "Start Your Consultation",
      pageSubtitle: "Choose the consultation method that works best for you",
      back: "← Back to Home",
      
      // Option 1: Free Consultation
      freeTitle: "Free Consultation",
      freeDesc: "Schedule a one-on-one session with our education consultant",
      freeFeatures: [
        "30-minute video call",
        "Personalized advice",
        "Program recommendations",
        "Application timeline planning"
      ],
      freeCta: "Book Free Session",
      freePrice: "Free",
      
      // Option 2: AI Bot
      botTitle: "AI Education Consultant",
      botDesc: "Get instant, professional advice from our AI-powered consultant 24/7",
      botFeatures: [
        "Instant responses anytime",
        "University recommendations",
        "Admission competitiveness analysis",
        "Personalized consulting reports",
        "Unlimited conversations"
      ],
      botCta: "Get Started - ¥20",
      botPrice: "¥20",
      botPriceNote: "One-time payment, unlimited access",
      
      // Email step
      emailTitle: "Verify Your Email",
      emailSubtitle: "Enter your email to get started with the AI consultant",
      emailPlaceholder: "your@email.com",
      sendCode: "Send Verification Code",
      codeSent: "Code sent! Check your inbox",
      codePlaceholder: "Enter 6-digit code",
      verifyCode: "Verify",
      verified: "Email Verified!",
      
      // Payment step
      paymentTitle: "Complete Payment",
      paymentSubtitle: "One-time payment of ¥20 for unlimited AI consultant access",
      payNow: "Pay ¥20 Now",
      paymentSecure: "Secure payment via Stripe",
      paymentNote: "After payment, you'll get immediate access to the AI consultant",
      
      // Access step
      accessTitle: "Welcome! Your AI Consultant is Ready",
      accessSubtitle: "Click below to start your consultation session",
      startChat: "Start AI Consultation",
      accessNote: "You can return to this page anytime to access the AI consultant",
      
      // Trust badges
      trust1: "Secure & Private",
      trust2: "Instant Access",
      trust3: "24/7 Available"
    },
    zh: {
      pageTitle: "开始您的咨询",
      pageSubtitle: "选择最适合您的咨询方式",
      back: "← 返回首页",
      
      // Option 1: Free Consultation
      freeTitle: "免费咨询",
      freeDesc: "与我们的教育顾问预约一对一咨询",
      freeFeatures: [
        "30分钟视频通话",
        "个性化建议",
        "课程推荐",
        "申请时间规划"
      ],
      freeCta: "预约免费咨询",
      freePrice: "免费",
      
      // Option 2: AI Bot
      botTitle: "AI 教育顾问",
      botDesc: "全天候获得AI驱动的专业教育咨询建议",
      botFeatures: [
        "随时即时回复",
        "大学推荐",
        "录取竞争力分析",
        "个性化咨询报告",
        "无限对话次数"
      ],
      botCta: "立即开通 - ¥20",
      botPrice: "¥20",
      botPriceNote: "一次性付费，无限使用",
      
      // Email step
      emailTitle: "验证您的邮箱",
      emailSubtitle: "输入邮箱以开始使用AI顾问",
      emailPlaceholder: "your@email.com",
      sendCode: "发送验证码",
      codeSent: "验证码已发送！请查看收件箱",
      codePlaceholder: "输入6位验证码",
      verifyCode: "验证",
      verified: "邮箱验证成功！",
      
      // Payment step
      paymentTitle: "完成支付",
      paymentSubtitle: "一次性支付¥20，即可无限使用AI顾问",
      payNow: "立即支付 ¥20",
      paymentSecure: "通过Stripe安全支付",
      paymentNote: "支付完成后，您将立即获得AI顾问的访问权限",
      
      // Access step
      accessTitle: "欢迎！您的AI顾问已就绪",
      accessSubtitle: "点击下方按钮开始咨询",
      startChat: "开始AI咨询",
      accessNote: "您可以随时返回此页面访问AI顾问",
      
      // Trust badges
      trust1: "安全私密",
      trust2: "即时访问",
      trust3: "全天候可用"
    }
  };

  const t = content[language];

  const handleSendCode = () => {
    if (!email || !email.includes("@")) return;
    setIsLoading(true);
    // Simulate sending verification code
    setTimeout(() => {
      setIsCodeSent(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleVerifyCode = () => {
    if (!verificationCode || verificationCode.length < 4) return;
    setIsLoading(true);
    // Simulate verification
    setTimeout(() => {
      setIsVerified(true);
      setIsLoading(false);
      // Move to payment step after short delay
      setTimeout(() => setStep("payment"), 1000);
    }, 1000);
  };

  const handlePayment = () => {
    // Redirect to Stripe payment link
    // This will be replaced with actual Stripe payment link
    window.open("https://buy.stripe.com/test_placeholder", "_blank");
    // For demo, move to access step
    setTimeout(() => setStep("access"), 2000);
  };

  const handleAccessBot = () => {
    // Open ChatGPT Bot in new tab
    window.open("https://chatgpt.com/g/g-6a4b37b569448191ba87fb6040886105-dxeducator-consultant", "_blank");
  };

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link href="/">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              {t.back}
            </button>
          </Link>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.pageTitle}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.pageSubtitle}
            </p>
          </div>

          {/* Step: Choose */}
          {step === "choose" && (
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Option 1: Free Consultation */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                    {t.freePrice}
                  </span>
                </div>
                
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <MessageCircle className="h-7 w-7 text-primary" />
                </div>
                
                <h2 className="text-2xl font-bold text-card-foreground mb-3">
                  {t.freeTitle}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.freeDesc}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {t.freeFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg group-hover:shadow-lg transition-all"
                >
                  {t.freeCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Option 2: AI Bot */}
              <div className="relative bg-card border-2 border-accent/50 rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-xl shadow-lg group">
                {/* Popular badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                    <Sparkles className="h-4 w-4" />
                    {language === "en" ? "Recommended" : "推荐"}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">
                    {t.botPrice}
                  </span>
                </div>
                
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Bot className="h-7 w-7 text-accent" />
                </div>
                
                <h2 className="text-2xl font-bold text-card-foreground mb-3">
                  {t.botTitle}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.botDesc}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {t.botFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={() => setStep("email")}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg group-hover:shadow-lg transition-all"
                >
                  {t.botCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-center text-sm text-muted-foreground mt-3">
                  {t.botPriceNote}
                </p>
              </div>
            </div>
          )}

          {/* Step: Email Verification */}
          {step === "email" && (
            <div className="max-w-md mx-auto">
              <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Mail className="h-7 w-7 text-accent" />
                </div>
                
                <h2 className="text-2xl font-bold text-card-foreground text-center mb-2">
                  {t.emailTitle}
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  {t.emailSubtitle}
                </p>
                
                {!isVerified ? (
                  <div className="space-y-4">
                    {/* Email input */}
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPlaceholder}
                        className="w-full px-4 py-3 border-2 border-border rounded-xl bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                        disabled={isCodeSent}
                      />
                    </div>
                    
                    {!isCodeSent ? (
                      <Button
                        onClick={handleSendCode}
                        disabled={!email || !email.includes("@") || isLoading}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-5"
                      >
                        {isLoading ? (
                          <span className="animate-pulse">{language === "en" ? "Sending..." : "发送中..."}</span>
                        ) : (
                          t.sendCode
                        )}
                      </Button>
                    ) : (
                      <>
                        <p className="text-sm text-secondary font-medium text-center">
                          ✓ {t.codeSent}
                        </p>
                        
                        {/* Verification code input */}
                        <input
                          type="text"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          placeholder={t.codePlaceholder}
                          className="w-full px-4 py-3 border-2 border-border rounded-xl bg-background text-foreground focus:border-accent focus:outline-none transition-colors text-center text-lg tracking-widest"
                          maxLength={6}
                        />
                        
                        <Button
                          onClick={handleVerifyCode}
                          disabled={!verificationCode || verificationCode.length < 4 || isLoading}
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-5"
                        >
                          {isLoading ? (
                            <span className="animate-pulse">{language === "en" ? "Verifying..." : "验证中..."}</span>
                          ) : (
                            t.verifyCode
                          )}
                        </Button>
                      </>
                    )}
                    
                    {/* Back button */}
                    <button
                      onClick={() => { setStep("choose"); setIsCodeSent(false); setEmail(""); setVerificationCode(""); }}
                      className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors mt-4"
                    >
                      {language === "en" ? "← Back to options" : "← 返回选项"}
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-secondary" />
                    </div>
                    <p className="text-lg font-bold text-secondary">{t.verified}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step: Payment */}
          {step === "payment" && (
            <div className="max-w-md mx-auto">
              <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
                
                <h2 className="text-2xl font-bold text-card-foreground text-center mb-2">
                  {t.paymentTitle}
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  {t.paymentSubtitle}
                </p>
                
                {/* Payment summary */}
                <div className="bg-muted/50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bot className="h-5 w-5 text-accent" />
                      <span className="font-medium text-card-foreground">
                        {language === "en" ? "AI Education Consultant" : "AI 教育顾问"}
                      </span>
                    </div>
                    <span className="text-xl font-bold text-accent">¥20</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 ml-8">
                    {language === "en" ? "Unlimited access • No subscription" : "无限使用 • 无需订阅"}
                  </p>
                </div>
                
                <Button
                  onClick={handlePayment}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {t.payNow}
                </Button>
                
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    {t.paymentSecure}
                  </p>
                </div>
                
                <p className="text-center text-sm text-muted-foreground mt-3">
                  {t.paymentNote}
                </p>
                
                {/* Back button */}
                <button
                  onClick={() => setStep("choose")}
                  className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors mt-6"
                >
                  {language === "en" ? "← Back to options" : "← 返回选项"}
                </button>
              </div>
            </div>
          )}

          {/* Step: Access */}
          {step === "access" && (
            <div className="max-w-md mx-auto">
              <div className="bg-card border-2 border-secondary/50 rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="h-7 w-7 text-secondary" />
                </div>
                
                <h2 className="text-2xl font-bold text-card-foreground text-center mb-2">
                  {t.accessTitle}
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  {t.accessSubtitle}
                </p>
                
                <Button
                  onClick={handleAccessBot}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Bot className="mr-2 h-5 w-5" />
                  {t.startChat}
                </Button>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  {t.accessNote}
                </p>
              </div>
            </div>
          )}

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">{t.trust1}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-medium">{t.trust2}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">{t.trust3}</span>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
