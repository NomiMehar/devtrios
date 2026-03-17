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

export default function OnPageSeo() {
  const bannerData = ServiceBannerList.on_page_seo;
  const ctaData = CtaList.on_page_seo;

  return (
    <React.Fragment>
      <Head>
        <title>
          On Page SEO Services | On-Page SEO That Turns Pages Into Ranking Assets | Devtrios
        </title>
        <meta
          name="description"
          content="On-page SEO services that make every page work harder. We optimise content, structure, and relevance for search engines and conversions."
        />
        <link rel="canonical" href="https://devtrios.com/services/seo/on-page-seo/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="On Page SEO Services | On-Page SEO That Turns Pages Into Ranking Assets | Devtrios"
        />
        <meta
          property="og:description"
          content="On-page SEO services that make every page work harder. We optimise content, structure, and relevance for search engines and conversions."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="On Page SEO Services | On-Page SEO That Turns Pages Into Ranking Assets | Devtrios"
        />
        <meta
          name="twitter:description"
          content="On-page SEO services that make every page work harder. We optimise content, structure, and relevance for search engines and conversions."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SeoServices sectionKey="on_page_seo_services" />
      <SeoApproach sectionKey="on_page_seo" />
      <CaseStudies type="seo_services" />
      <TechnicalSeoFor sectionKey="on_page_seo" />
      <BlogsSlider />
      <WhyChooseSeo sectionKey="on_page_seo" />
      <Cta data={ctaData} />
      <Faqs type="on_page_seo" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
