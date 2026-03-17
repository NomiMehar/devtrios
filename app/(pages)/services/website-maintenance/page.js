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

export default function WebsiteMaintenance() {
  const serviceBannerData = ServiceBannerList.website_maintenance;
  const ctaData = CtaList.website_maintenance;
  return (
    <React.Fragment>
      <Head>
        <title>
          Trusted Website Maintenance Company | Professional Website Maintenance Services
        </title>
        <meta
          name="description"
          content="Partner with a leading website maintenance company for proactive security, performance optimization, and reliable support. Keep your website secure, fast, and reliable."
        />
        <link rel="canonical" href="https://devtrios.com/services/website-development/website-maintenance/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Trusted Website Maintenance Company | Professional Website Maintenance Services" />
        <meta
          property="og:description"
          content="Partner with a leading website maintenance company for proactive security, performance optimization, and reliable support. Keep your website secure, fast, and reliable."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Trusted Website Maintenance Company | Professional Website Maintenance Services" />
        <meta
          name="twitter:description"
          content="Partner with a leading website maintenance company for proactive security, performance optimization, and reliable support. Keep your website secure, fast, and reliable."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={serviceBannerData} />
      <DevelopmentServices type="website_maintenance" />
      <DevelopmentProcess
        appName="Our Website Maintenance Process"
        description="Our maintenance process is designed to be proactive, not reactive."
        classes="ios_development_process"
        DevelopmentProcessList={DevelopmentProcessList.website_maintenance}
      />
      <CaseStudies type="website_maintenance" />
      <ProcessShowcase data={ProcessShowcaseList.website_maintenance} />
      <Testimonials list={TestimonialList.website_maintenance} />
      <BlogsSlider />
      <Cta data={ctaData} />
      <Faqs type="website_maintenance" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
