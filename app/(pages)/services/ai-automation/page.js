import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import ServiceList from "@/app/(components)/service-list/ServiceList";
import ServiceListList from "@/app/(components)/service-list/ServiceListList.json";
import ProcessSection from "@/app/(components)/process-section/ProcessSection";
import ProcessSectionList from "@/app/(components)/process-section/ProcessSectionList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import OurExpertise from "@/app/(components)/our-expertise/OurExpertise";
import WebsiteTechStack from "@/app/(components)/website-tech-stack/WebsiteTechStack";
import WhoWeBuildFor from "@/app/(components)/who-we-build-for/WhoWeBuildFor";
import WhoWeBuildForList from "@/app/(components)/who-we-build-for/WhoWeBuildForList.json";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";


export default function AiAutomation() {
  const bannerData = ServiceBannerList.ai_automation;
  const serviceListData = ServiceListList.ai_automation;
  const ctaData = CtaList.ai_automation;
  const processData = ProcessSectionList.ai_automation;
  const whoWeBuildForData = WhoWeBuildForList.ai_automation;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          AI & Automation Services | Engineering Intelligent Systems
        </title>
        <meta
          name="description"
          content="AI and automation services that reduce cost, increase speed, and scale execution. From AI agents and large language models to workflow automation and generative AI."
        />
        <link rel="canonical" href="https://devtrios.com/services/ai-automation/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="AI & Automation Services | Engineering Intelligent Systems" />
        <meta
          property="og:description"
          content="AI and automation services that reduce cost, increase speed, and scale execution. From AI agents and large language models to workflow automation and generative AI."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="AI & Automation Services | Engineering Intelligent Systems" />
        <meta
          name="twitter:description"
          content="AI and automation services that reduce cost, increase speed, and scale execution. From AI agents and large language models to workflow automation and generative AI."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <ServiceList data={serviceListData} />
      <CaseStudies type="ai_automation" />
      <ProcessSection data={processData} />
      <OurExpertise />
      <WebsiteTechStack type="ai_automation" />
      <WhoWeBuildFor data={whoWeBuildForData} />
      <Testimonials list={TestimonialList.ai_automation} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="ai_automation" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
