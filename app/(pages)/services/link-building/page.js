import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import SeoServices from "@/app/(components)/seo-services/SeoServices";
import SeoApproach from "@/app/(components)/seo-approach/SeoApproach";
import TechnicalSeoFor from "@/app/(components)/technical-seo-for/TechnicalSeoFor";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import WhyChooseSeo from "@/app/(components)/why-choose-seo/WhyChooseSeo";
import Faqs from "@/app/(components)/faqs/Faqs";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";

export default function LinkBuilding() {
  const bannerData = ServiceBannerList.link_building;
  const ctaData = CtaList.link_building;

  return (
    <React.Fragment>
      <Head>
        <title>
          Link Building Services | Link Building That Grows Authority, Rankings and Trust | Devtrios
        </title>
        <meta
          name="description"
          content="Link building services that earn trust signals search engines respect. We build links that strengthen domain authority, support ranking pages, and compound over time."
        />
        <link rel="canonical" href="https://devtrios.com/services/seo/link-building/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="Link Building Services | Link Building That Grows Authority, Rankings and Trust | Devtrios"
        />
        <meta
          property="og:description"
          content="Link building services that earn trust signals search engines respect. We build links that strengthen domain authority, support ranking pages, and compound over time."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="Link Building Services | Link Building That Grows Authority, Rankings and Trust | Devtrios"
        />
        <meta
          name="twitter:description"
          content="Link building services that earn trust signals search engines respect. We build links that strengthen domain authority, support ranking pages, and compound over time."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SeoServices sectionKey="link_building_services" />
      <SeoApproach sectionKey="link_building" />
      <CaseStudies type="seo_services" />
      <TechnicalSeoFor sectionKey="link_building" />
      <BlogsSlider />
      <WhyChooseSeo sectionKey="link_building" />
      <Cta data={ctaData} />
      <Faqs type="link_building" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
