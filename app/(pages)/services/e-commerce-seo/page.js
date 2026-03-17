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

export default function EcommerceSeo() {
  const bannerData = ServiceBannerList.e_commerce_seo;
  const ctaData = CtaList.e_commerce_seo;

  return (
    <React.Fragment>
      <Head>
        <title>
          E-Commerce SEO Services | E-Commerce SEO That Turns Traffic Into Revenue | Devtrios
        </title>
        <meta
          name="description"
          content="E-commerce SEO services that focus on commercial performance. We optimise your store so products rank when buyers are ready and categories dominate competitive terms."
        />
        <link rel="canonical" href="https://devtrios.com/services/seo/e-commerce-seo/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="E-Commerce SEO Services | E-Commerce SEO That Turns Traffic Into Revenue | Devtrios"
        />
        <meta
          property="og:description"
          content="E-commerce SEO services that focus on commercial performance. We optimise your store so products rank when buyers are ready and categories dominate competitive terms."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="E-Commerce SEO Services | E-Commerce SEO That Turns Traffic Into Revenue | Devtrios"
        />
        <meta
          name="twitter:description"
          content="E-commerce SEO services that focus on commercial performance. We optimise your store so products rank when buyers are ready and categories dominate competitive terms."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SeoServices sectionKey="e_commerce_seo_services" />
      <SeoApproach sectionKey="e_commerce_seo" />
      <CaseStudies type="seo_services" />
      <TechnicalSeoFor sectionKey="e_commerce_seo" />
      <BlogsSlider />
      <WhyChooseSeo sectionKey="e_commerce_seo" />
      <Cta data={ctaData} />
      <Faqs type="e_commerce_seo" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
