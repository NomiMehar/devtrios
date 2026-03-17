import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";
import Faqs from "@/app/(components)/faqs/Faqs";
import DevelopmentServices from "@/app/(components)/development-services/DevelopmentServices";
import DevelopmentProcess from "@/app/(components)/development-process/DevelopmentProcess";
import DevelopmentProcessList from "@/app/(components)/development-process/DevelopmentProcessData.json";
import ProcessShowcase from "@/app/(components)/process-showcase/ProcessShowcase";
import ProcessShowcaseList from "@/app/(components)/process-showcase/ProcessShowcaseList.json";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";

export default function ShopifyDevelopment() {
  const serviceBannerData = ServiceBannerList.shopify_development;
  const ctaData = CtaList.shopify_development;
  return (
    <React.Fragment>
      <Head>
        <title>
          Trusted Shopify Development Company | Custom Shopify Development Services
        </title>
        <meta
          name="description"
          content="Partner with a leading Shopify development company for custom, scalable, and conversion-focused eCommerce stores. Hire expert Shopify developers to boost your ROI today."
        />
        <link rel="canonical" href="https://devtrios.com/services/website-development/shopify-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Trusted Shopify Development Company | Custom Shopify Development Services" />
        <meta
          property="og:description"
          content="Partner with a leading Shopify development company for custom, scalable, and conversion-focused eCommerce stores. Hire expert Shopify developers to boost your ROI today."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Trusted Shopify Development Company | Custom Shopify Development Services" />
        <meta
          name="twitter:description"
          content="Partner with a leading Shopify development company for custom, scalable, and conversion-focused eCommerce stores. Hire expert Shopify developers to boost your ROI today."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={serviceBannerData} />
      <DevelopmentServices type="shopify_development" />
      <DevelopmentProcess
        appName="Our Shopify Development Process"
        description="Our Shopify development process is designed to reduce risk and maximise commercial outcomes."
        classes="ios_development_process"
        DevelopmentProcessList={DevelopmentProcessList.shopify_development}
      />
      <CaseStudies type="shopify_development" />
      <ProcessShowcase data={ProcessShowcaseList.shopify_development} />
      <Testimonials list={TestimonialList.shopify_development} />
      <BlogsSlider />
      <Cta data={ctaData} />
      <Faqs type="shopify_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
