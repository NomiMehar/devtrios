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


export default function AutomationWorkflows() {
  const bannerData = ServiceBannerList.automation_workflows;
  const ctaData = CtaList.automation_workflows;
  const servicesData = AiAutomationServicesList.automation_workflows;
  const processData = AiAutomationProcessList.automation_workflows;
  const serviceForData = AiAutomationServiceForList.automation_workflows;
  const whyChooseData = WhyChooseDevtriosAutomationList.automation_workflows;

  return (
    <React.Fragment>
      <Head>
        <title>
          Automation & Workflow Engineering | Scale and Control | Devtrios
        </title>
        <meta
          name="description"
          content="Design and engineer automation workflows that connect systems, remove repetitive tasks, and create predictable, scalable operations. Built for measurable operational impact."
        />
        <link rel="canonical" href="https://devtrios.com/services/ai-automation/automation-workflows/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Automation & Workflow Engineering | Scale and Control | Devtrios" />
        <meta
          property="og:description"
          content="Design and engineer automation workflows that connect systems, remove repetitive tasks, and create predictable, scalable operations. Built for measurable operational impact."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Automation & Workflow Engineering | Scale and Control | Devtrios" />
        <meta
          name="twitter:description"
          content="Design and engineer automation workflows that connect systems, remove repetitive tasks, and create predictable, scalable operations. Built for measurable operational impact."
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
      <CaseStudies type="automation_workflows" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="automation_workflows" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
