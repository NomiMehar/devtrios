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

export default function WebflowDevelopment() {
  const serviceBannerData = ServiceBannerList.webflow_development;
  const ctaData = CtaList.webflow_development;
  return (
    <React.Fragment>
      <Head>
        <title>
          Webflow Development Company | Professional Webflow Development Services
        </title>
        <meta
          name="description"
          content="Partner with a leading Webflow development company for fast, scalable, design-led websites. Transform static designs into clean, high-performance Webflow websites."
        />
        <link rel="canonical" href="https://devtrios.com/services/website-development/webflow-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Webflow Development Company | Professional Webflow Development Services" />
        <meta
          property="og:description"
          content="Partner with a leading Webflow development company for fast, scalable, design-led websites. Transform static designs into clean, high-performance Webflow websites."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Webflow Development Company | Professional Webflow Development Services" />
        <meta
          name="twitter:description"
          content="Partner with a leading Webflow development company for fast, scalable, design-led websites. Transform static designs into clean, high-performance Webflow websites."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={serviceBannerData} />
      <DevelopmentServices type="webflow_development" />
      <DevelopmentProcess
        appName="Our Webflow Development Process"
        description="Our Webflow development process ensures speed, quality, and consistency."
        classes="ios_development_process"
        DevelopmentProcessList={DevelopmentProcessList.webflow_development}
      />
      <CaseStudies type="webflow_development" />
      <ProcessShowcase data={ProcessShowcaseList.webflow_development} />
      <Testimonials list={TestimonialList.webflow_development} />
      <BlogsSlider />
      <Cta data={ctaData} />
      <Faqs type="webflow_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
