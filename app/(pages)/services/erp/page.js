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

export default function ErpPage() {
  const bannerData = ServiceBannerList.erp;
  const ctaData = CtaList.erp;
  const platformData = CrmPlatformList.erp_platform;

  return (
    <React.Fragment>
      <Head>
        <title>
          ERP Development Services | ERP Systems That Run the Business | Devtrios
        </title>
        <meta
          name="description"
          content="ERP systems that simplify operations: strategy, implementation, integration, and optimisation. Practical, scalable, and grounded in real workflows."
        />
        <link
          rel="canonical"
          href="https://devtrios.com/services/crm-development/erp/"
        />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <CrmServices sectionKey="erp" />
      <WhyCrm sectionKey="erp" />
      <CaseStudies type="website_development" />
      <CrmProcess sectionKey="erp_process" />
      <BlogsSlider />
      <CrmPlatform data={platformData} />
      <CrmWhoService sectionKey="erp_who_service" />
      <WhyChooseCrmImplementation sectionKey="why_choose_erp" />
      <Cta data={ctaData} />
      <Faqs type="erp" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
