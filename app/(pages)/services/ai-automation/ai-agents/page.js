import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import AiAutomationServices from "@/app/(components)/ai-automation-services/AiAutomationServices";
import AiAutomationServicesList from "@/app/(components)/ai-automation-services/AiAutomationServicesList.json";
import AiAutomationProcess from "@/app/(components)/ai-automation-process/AiAutomationProcess";
import AiAutomationProcessList from "@/app/(components)/ai-automation-process/AiAutomationProcessList.json";
import AiAutomationServiceFor from "@/app/(components)/ai-automation-service-for/AiAutomationServiceFor";
import AiAutomationServiceForList from "@/app/(components)/ai-automation-service-for/AiAutomationServiceForList.json";
import WhyChooseDevtriosAutomation from "@/app/(components)/why-choose-devtrios-automation/WhyChooseDevtriosAutomation";
import WhyChooseDevtriosAutomationList from "@/app/(components)/why-choose-devtrios-automation/WhyChooseDevtriosAutomationList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";

export default function AiAgents() {
  const bannerData = ServiceBannerList.ai_agents;
  const ctaData = CtaList.ai_agents;
  const servicesData = AiAutomationServicesList.ai_agents;
  const processData = AiAutomationProcessList.ai_agents;
  const serviceForData = AiAutomationServiceForList.ai_agents;
  const whyChooseData = WhyChooseDevtriosAutomationList.ai_agents;

  return (
    <React.Fragment>
      <Head>
        <title>
          AI Agent Development Services | Task-Driven AI Agents | Devtrios
        </title>
        <meta
          name="description"
          content="AI agent development services. We build reliable, production-grade AI agents that assist, execute tasks, and integrate into your business systems."
        />
        <link rel="canonical" href="https://devtrios.com/services/ai-automation/ai-agents/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="AI Agent Development Services | Task-Driven AI Agents | Devtrios" />
        <meta
          property="og:description"
          content="AI agent development services. We build reliable, production-grade AI agents that assist, execute tasks, and integrate into your business systems."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="AI Agent Development Services | Task-Driven AI Agents | Devtrios" />
        <meta
          name="twitter:description"
          content="AI agent development services. We build reliable, production-grade AI agents that assist, execute tasks, and integrate into your business systems."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <AiAutomationServices data={servicesData} />
      <AiAutomationProcess data={processData} />
      <AiAutomationServiceFor data={serviceForData} />
      <WhyChooseDevtriosAutomation data={whyChooseData} />
      <CaseStudies type="ai_agents" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="ai_agents" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
