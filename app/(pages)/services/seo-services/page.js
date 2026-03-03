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
import WhyChoose from "@/app/(components)/why-choose/WhyChoose";
import WhyChooseList from "@/app/(components)/why-choose/WhyChooseList.json";

export default function SeoServices() {
  const bannerData = ServiceBannerList.seo_services;
  const serviceListData = ServiceListList.seo_services;
  const ctaData = CtaList.seo_services;
  const processData = ProcessSectionList.seo_services;
  const whoWeBuildForData = WhoWeBuildForList.seo_services;
  const whyChooseData = WhyChooseList.seo_services;

  return (
    <React.Fragment>
      <Head>
        <title>
          SEO Services | SEO That Drives Visibility, Demand, and Revenue | Devtrios
        </title>
        <meta
          name="description"
          content="Performance-driven SEO built around search intent, technical precision, and measurable outcomes. We build SEO systems that compound over time and support real business growth."
        />
        <link rel="canonical" href="https://devtrios.com/services/seo-services/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="SEO Services | SEO That Drives Visibility, Demand, and Revenue | Devtrios" />
        <meta
          property="og:description"
          content="Performance-driven SEO built around search intent, technical precision, and measurable outcomes. We build SEO systems that compound over time and support real business growth."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="SEO Services | SEO That Drives Visibility, Demand, and Revenue | Devtrios" />
        <meta
          name="twitter:description"
          content="Performance-driven SEO built around search intent, technical precision, and measurable outcomes. We build SEO systems that compound over time and support real business growth."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <ServiceList data={serviceListData} />
      <CaseStudies type="seo_services" />
      <ProcessSection data={processData} />
      <OurExpertise />
      <WhyChoose data={whyChooseData} />
      <WebsiteTechStack type="seo_services" />
      <WhoWeBuildFor data={whoWeBuildForData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="seo_services" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
