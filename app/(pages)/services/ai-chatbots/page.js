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


export default function AiChatbots() {
  const bannerData = ServiceBannerList.ai_chatbots;
  const ctaData = CtaList.ai_chatbots;
  const chatbotServicesData = AiAutomationServicesList.ai_chatbots;
  const processData = AiAutomationProcessList.ai_chatbots;
  const serviceForData = AiAutomationServiceForList.ai_chatbots;
  const whyChooseData = WhyChooseDevtriosAutomationList.ai_chatbots;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          AI Chatbot Development Services | Automation, Sales, and Scalable Support
        </title>
        <meta
          name="description"
          content="AI chatbot development services for automation, sales, and scalable support. Production-grade chatbots designed to integrate into real business workflows."
        />
        <link rel="canonical" href="https://devtrios.com/services/ai-automation/ai-chatbots/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="AI Chatbot Development Services | Automation, Sales, and Scalable Support" />
        <meta
          property="og:description"
          content="AI chatbot development services for automation, sales, and scalable support. Production-grade chatbots designed to integrate into real business workflows."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="AI Chatbot Development Services | Automation, Sales, and Scalable Support" />
        <meta
          name="twitter:description"
          content="AI chatbot development services for automation, sales, and scalable support. Production-grade chatbots designed to integrate into real business workflows."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <AiAutomationServices data={chatbotServicesData} />
      <AiAutomationProcess data={processData} />
      <CaseStudies type="ai_chatbots" />
      <AiAutomationServiceFor data={serviceForData} />
      <WhyChooseDevtriosAutomation data={whyChooseData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="ai_chatbots" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
