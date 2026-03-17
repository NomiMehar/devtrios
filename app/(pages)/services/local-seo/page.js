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

export default function LocalSeo() {
  const bannerData = ServiceBannerList.local_seo;
  const ctaData = CtaList.local_seo;

  return (
    <React.Fragment>
      <Head>
        <title>
          Local SEO Services | Local SEO That Puts Your Business Where Customers Search | Devtrios
        </title>
        <meta
          name="description"
          content="Local SEO that drives phone calls, direction requests, bookings, and footfall. We build local SEO strategies that dominate map results and convert local intent into revenue."
        />
        <link rel="canonical" href="https://devtrios.com/services/seo/local-seo/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="Local SEO Services | Local SEO That Puts Your Business Where Customers Search | Devtrios"
        />
        <meta
          property="og:description"
          content="Local SEO that drives phone calls, direction requests, bookings, and footfall. We build local SEO strategies that dominate map results and convert local intent into revenue."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="Local SEO Services | Local SEO That Puts Your Business Where Customers Search | Devtrios"
        />
        <meta
          name="twitter:description"
          content="Local SEO that drives phone calls, direction requests, bookings, and footfall. We build local SEO strategies that dominate map results and convert local intent into revenue."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SeoServices sectionKey="local_seo_services" />
      <SeoApproach sectionKey="local_seo" />
      <CaseStudies type="seo_services" />
      <TechnicalSeoFor sectionKey="local_seo" />
      <BlogsSlider />
      <WhyChooseSeo sectionKey="local_seo" />
      <Cta data={ctaData} />
      <Faqs type="local_seo" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
