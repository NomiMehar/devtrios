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

export default function TechnicalSeo() {
  const bannerData = ServiceBannerList.technical_seo;
  const ctaData = CtaList.technical_seo;

  return (
    <React.Fragment>
      <Head>
        <title>
          Technical SEO Services | Fix the Foundation of Your SEO | Devtrios
        </title>
        <meta
          name="description"
          content="Technical SEO that fixes what is holding your rankings back. Improve crawlability, performance, and indexation so search engines can confidently rank your site."
        />
        <link rel="canonical" href="https://devtrios.com/services/seo/technical-seo/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="Technical SEO Services | Fix the Foundation of Your SEO | Devtrios"
        />
        <meta
          property="og:description"
          content="Technical SEO that fixes what is holding your rankings back. Improve crawlability, performance, and indexation so search engines can confidently rank your site."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="Technical SEO Services | Fix the Foundation of Your SEO | Devtrios"
        />
        <meta
          name="twitter:description"
          content="Technical SEO that fixes what is holding your rankings back. Improve crawlability, performance, and indexation so search engines can confidently rank your site."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SeoServices />
      <SeoApproach />
      <CaseStudies type="seo_services" />
      <TechnicalSeoFor />
      <BlogsSlider />
      <WhyChooseSeo />
      <Cta data={ctaData} />
      <Faqs type="technical_seo" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
