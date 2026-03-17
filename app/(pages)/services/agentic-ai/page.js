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

export default function AgenticAi() {
  const bannerData = ServiceBannerList.agentic_ai;
  const ctaData = CtaList.agentic_ai;
  const servicesData = AiAutomationServicesList.agentic_ai;
  const processData = AiAutomationProcessList.agentic_ai;
  const serviceForData = AiAutomationServiceForList.agentic_ai;
  const whyChooseData = WhyChooseDevtriosAutomationList.agentic_ai;

  return (
    <React.Fragment>
      <Head>
        <title>
          Agentic AI Development Services | Autonomous AI Agents | Devtrios
        </title>
        <meta
          name="description"
          content="Agentic AI development services. We design and build autonomous AI agents that plan, decide, and execute across your systems—reliable, auditable, and aligned with your business logic."
        />
        <link rel="canonical" href="https://devtrios.com/services/ai-automation/agentic-ai/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Agentic AI Development Services | Autonomous AI Agents | Devtrios" />
        <meta
          property="og:description"
          content="Agentic AI development services. We design and build autonomous AI agents that plan, decide, and execute across your systems—reliable, auditable, and aligned with your business logic."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Agentic AI Development Services | Autonomous AI Agents | Devtrios" />
        <meta
          name="twitter:description"
          content="Agentic AI development services. We design and build autonomous AI agents that plan, decide, and execute across your systems—reliable, auditable, and aligned with your business logic."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <AiAutomationServices data={servicesData} />
      <AiAutomationProcess data={processData} />
      <CaseStudies type="agentic_ai" />
      <AiAutomationServiceFor data={serviceForData} />
      <WhyChooseDevtriosAutomation data={whyChooseData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="agentic_ai" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
