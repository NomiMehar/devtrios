import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import CrmServices from "@/app/(components)/crm-services/CrmServices";
import WhyCrm from "@/app/(components)/why-crm/WhyCrm";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import CrmProcess from "@/app/(components)/crm-process/CrmProcess";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Faqs from "@/app/(components)/faqs/Faqs";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import CrmPlatform from "@/app/(components)/crm-platform/CrmPlatform";
import CrmPlatformList from "@/app/(components)/crm-platform/CrmPlatformList.json";
import CrmWhoService from "@/app/(components)/crm-who-service/CrmWhoService";
import WhyChooseCrmImplementation from "@/app/(components)/why-choose-crm-implementation/WhyChooseCrmImplementation";

export default function CrmAutomationAiPage() {
  const bannerData = ServiceBannerList.crm_automation_ai;
  const ctaData = CtaList.crm_automation_ai;
  const platformData = CrmPlatformList.crm_automation_ai_platform;

  return (
    <React.Fragment>
      <Head>
        <title>
          CRM Automation & AI Services | Remove Friction, Drive Execution | Devtrios
        </title>
        <meta
          name="description"
          content="CRM automation and AI that reduce manual work, improve data accuracy, and help teams move faster. Sales workflows, AI lead scoring, forecasting, and lifecycle automation."
        />
        <link
          rel="canonical"
          href="https://devtrios.com/services/crm-development/crm-automation-ai/"
        />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <CrmServices sectionKey="crm_automation_ai" />
      <WhyCrm sectionKey="crm_automation_ai" />
      <CaseStudies type="website_development" />
      <CrmProcess sectionKey="crm_automation_ai_process" />
      <BlogsSlider />
      <CrmPlatform data={platformData} />
      <CrmWhoService sectionKey="crm_automation_ai_who_service" />
      <WhyChooseCrmImplementation sectionKey="why_choose_crm_automation_ai" />
      <Cta data={ctaData} />
      <Faqs type="crm_automation_ai" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
