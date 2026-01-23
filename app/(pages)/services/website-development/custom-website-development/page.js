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

export default function CustomWebsiteDevelopment() {
  const serviceBannerData = ServiceBannerList.custom_website_development;
  const ctaData = CtaList.custom_website_development;
  return (
    <React.Fragment>
      <Head>
        <title>
          Custom Website Development Company | Professional Custom Website Development Services
        </title>
        <meta
          name="description"
          content="Partner with a leading custom website development company for bespoke websites engineered around your workflows, integrations, and growth plans. Build scalable, high-performance digital platforms."
        />
        <link rel="canonical" href="https://devtrios.com/services/website-development/custom-website-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Custom Website Development Company | Professional Custom Website Development Services" />
        <meta
          property="og:description"
          content="Partner with a leading custom website development company for bespoke websites engineered around your workflows, integrations, and growth plans. Build scalable, high-performance digital platforms."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Custom Website Development Company | Professional Custom Website Development Services" />
        <meta
          name="twitter:description"
          content="Partner with a leading custom website development company for bespoke websites engineered around your workflows, integrations, and growth plans. Build scalable, high-performance digital platforms."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={serviceBannerData} />
      <DevelopmentServices type="custom_website_development" />
      <DevelopmentProcess
        appName="Our Custom Website Development Process"
        description="Our process is designed to reduce technical risk and ensure long-term scalability."
        classes="ios_development_process"
        DevelopmentProcessList={DevelopmentProcessList.custom_website_development}
      />
      <CaseStudies type="custom_website_development" />
      <ProcessShowcase data={ProcessShowcaseList.custom_website_development} />
      <Testimonials list={TestimonialList.custom_website_development} />
      <BlogsSlider />
      <Cta data={ctaData} />
      <Faqs type="custom_website_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
