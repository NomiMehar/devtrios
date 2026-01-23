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

export default function LandingPageDevelopment() {
  const serviceBannerData = ServiceBannerList.landing_page_development;
  const ctaData = CtaList.landing_page_development;
  return (
    <React.Fragment>
      <Head>
        <title>
          Trusted Landing Page Development Company | Custom Landing Page Development Services
        </title>
        <meta
          name="description"
          content="Partner with a leading landing page development company for custom, high-converting landing pages. Hire expert developers to boost your conversion rates today."
        />
        <link rel="canonical" href="https://devtrios.com/services/website-development/landing-page-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Trusted Landing Page Development Company | Custom Landing Page Development Services" />
        <meta
          property="og:description"
          content="Partner with a leading landing page development company for custom, high-converting landing pages. Hire expert developers to boost your conversion rates today."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Trusted Landing Page Development Company | Custom Landing Page Development Services" />
        <meta
          name="twitter:description"
          content="Partner with a leading landing page development company for custom, high-converting landing pages. Hire expert developers to boost your conversion rates today."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={serviceBannerData} />
      <DevelopmentServices type="landing_page_development" />
      <DevelopmentProcess
        appName="Our Landing Page Development Process"
        description="Our landing page development process is designed to maximise conversion while minimising waste."
        classes="ios_development_process"
        DevelopmentProcessList={DevelopmentProcessList.landing_page_development}
      />
      <CaseStudies type="landing_page_development" />
      <ProcessShowcase data={ProcessShowcaseList.landing_page_development} />
      <Testimonials list={TestimonialList.landing_page_development} />
      <BlogsSlider />
      <Cta data={ctaData} />
      <Faqs type="landing_page_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
