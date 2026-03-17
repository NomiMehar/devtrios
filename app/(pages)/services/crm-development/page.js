import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import ServiceList from "@/app/(components)/service-list/ServiceList";
import ServiceListList from "@/app/(components)/service-list/ServiceListList.json";
import WhyChoose from "@/app/(components)/why-choose/WhyChoose";
import WhyChooseList from "@/app/(components)/why-choose/WhyChooseList.json";
import ProcessSection from "@/app/(components)/process-section/ProcessSection";
import ProcessSectionList from "@/app/(components)/process-section/ProcessSectionList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import WhoWeBuildFor from "@/app/(components)/who-we-build-for/WhoWeBuildFor";
import WhoWeBuildForList from "@/app/(components)/who-we-build-for/WhoWeBuildForList.json";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";

export default function CrmDevelopment() {
  const bannerData = ServiceBannerList.crm_development;
  const serviceListData = ServiceListList.crm_development;
  const whyChooseData = WhyChooseList.crm_development;
  const processData = ProcessSectionList.crm_development;
  const whoWeBuildForData = WhoWeBuildForList.crm_development;
  const ctaData = CtaList.crm_development;

  return (
    <React.Fragment>
      <Head>
        <title>
          CRM Development Services | CRM Systems That Drive Sales & Operational Clarity
        </title>
        <meta
          name="description"
          content="CRM development services focused on usability, automation, data integrity, and long-term scalability—so your teams spend less time managing systems and more time closing deals and serving customers."
        />
        <link rel="canonical" href="https://devtrios.com/services/crm-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="CRM Development Services | CRM Systems That Drive Sales & Operational Clarity"
        />
        <meta
          property="og:description"
          content="Custom CRM development, customisation, automation, and integrations designed around how your business actually operates."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="CRM Development Services | CRM Systems That Drive Sales & Operational Clarity"
        />
        <meta
          name="twitter:description"
          content="Custom CRM development, customisation, automation, and integrations designed around how your business actually operates."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <ServiceList data={serviceListData} />
      <WhyChoose data={whyChooseData} />
      <ProcessSection data={processData} />
      <CaseStudies type="website_development" />
      <WhoWeBuildFor data={whoWeBuildForData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="crm_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}

