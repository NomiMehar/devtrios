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


export default function LLMDevelopment() {
  const bannerData = ServiceBannerList.llm_development;
  const ctaData = CtaList.llm_development;
  const servicesData = AiAutomationServicesList.llm_development;
  const processData = AiAutomationProcessList.llm_development;
  const serviceForData = AiAutomationServiceForList.llm_development;
  const whyChooseData = WhyChooseDevtriosAutomationList.llm_development;

  return (
    <React.Fragment>
      <Head>
        <title>
          LLM Development Services | Secure, Scalable Enterprise AI Solutions
        </title>
        <meta
          name="description"
          content="Professional LLM development services for organisations that need reliable, production-ready AI. Custom large language model solutions that automate operations and scale safely."
        />
        <link rel="canonical" href="https://devtrios.com/services/ai-automation/llm-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="LLM Development Services | Secure, Scalable Enterprise AI Solutions" />
        <meta
          property="og:description"
          content="Professional LLM development services for organisations that need reliable, production-ready AI. Custom large language model solutions that automate operations and scale safely."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="LLM Development Services | Secure, Scalable Enterprise AI Solutions" />
        <meta
          name="twitter:description"
          content="Professional LLM development services for organisations that need reliable, production-ready AI. Custom large language model solutions that automate operations and scale safely."
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
      <CaseStudies type="llm_development" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="llm_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
