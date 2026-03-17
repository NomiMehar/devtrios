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

export default function CrmIntegrationPage() {
  const bannerData = ServiceBannerList.crm_integration;
  const ctaData = CtaList.crm_integration;
  const platformData = CrmPlatformList.crm_integration_platform;

  return (
    <React.Fragment>
      <Head>
        <title>
          CRM Integration Services | Connect Your Systems and Teams | Devtrios
        </title>
        <meta
          name="description"
          content="CRM integration that connects your CRM to marketing, finance, support, and internal systems. Single source of truth, cleaner data, and automation that works."
        />
        <link
          rel="canonical"
          href="https://devtrios.com/services/crm-development/crm-integration/"
        />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <CrmServices sectionKey="crm_integration" />
      <WhyCrm sectionKey="crm_integration" />
      <CaseStudies type="website_development" />
      <CrmProcess sectionKey="crm_integration_process" />
      <BlogsSlider />
      <CrmPlatform data={platformData} />
      <CrmWhoService sectionKey="crm_integration_who_service" />
      <WhyChooseCrmImplementation sectionKey="why_choose_crm_integration" />
      <Cta data={ctaData} />
      <Faqs type="crm_integration" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
