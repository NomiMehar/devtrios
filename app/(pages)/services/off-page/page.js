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

export default function OffPageSeo() {
  const bannerData = ServiceBannerList.off_page_seo;
  const ctaData = CtaList.off_page_seo;

  return (
    <React.Fragment>
      <Head>
        <title>
          Off Page SEO Services | Off-Page SEO That Builds Authority, Not Risk | Devtrios
        </title>
        <meta
          name="description"
          content="Off-page SEO services that build authority, trust, and credibility beyond your website. Sustainable link building and digital PR with no shortcuts or link farms."
        />
        <link rel="canonical" href="https://devtrios.com/services/seo/off-page/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="Off Page SEO Services | Off-Page SEO That Builds Authority, Not Risk | Devtrios"
        />
        <meta
          property="og:description"
          content="Off-page SEO services that build authority, trust, and credibility beyond your website. Sustainable link building and digital PR with no shortcuts or link farms."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="Off Page SEO Services | Off-Page SEO That Builds Authority, Not Risk | Devtrios"
        />
        <meta
          name="twitter:description"
          content="Off-page SEO services that build authority, trust, and credibility beyond your website. Sustainable link building and digital PR with no shortcuts or link farms."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SeoServices sectionKey="off_page_seo_services" />
      <SeoApproach sectionKey="off_page_seo" />
      <CaseStudies type="seo_services" />
      <TechnicalSeoFor sectionKey="off_page_seo" />
      <BlogsSlider />
      <WhyChooseSeo sectionKey="off_page_seo" />
      <Cta data={ctaData} />
      <Faqs type="off_page_seo" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
