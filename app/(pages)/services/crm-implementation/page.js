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

export default function CrmImplementation() {
  const bannerData = ServiceBannerList.crm_implementation;
  const ctaData = CtaList.crm_implementation;
  const crmPlatformData = CrmPlatformList.crm_platform;
  return (
    <React.Fragment>
      <Head>
        <title>
          CRM Implementation Services | CRM Implementation That Teams Actually Use | Devtrios
        </title>
        <meta
          name="description"
          content="CRM implementation services focused on real workflows, adoption, clean data, and automation—so your CRM becomes an asset, not a burden."
        />
        <link rel="canonical" href="https://devtrios.com/services/crm-development/crm-implementation/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <CrmServices />
      <WhyCrm />
      <CaseStudies type="website_development" />
      <CrmProcess />
      <BlogsSlider />
      <CrmPlatform data={crmPlatformData} />
      <CrmWhoService />
      <WhyChooseCrmImplementation />
      <Cta data={ctaData} />
      <Faqs type="crm_implementation" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}

