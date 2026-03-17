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

export default function WordPressDevelopment() {
  const serviceBannerData = ServiceBannerList.wordpress_development;
  const ctaData = CtaList.wordpress_development;
  return (
    <React.Fragment>
      <Head>
        <title>
          Trusted WordPress Development Company | Custom WordPress Development Services
        </title>
        <meta
          name="description"
          content="Partner with a leading WordPress development company for custom, secure, and scalable websites. Hire expert developers to boost your ROI today."
        />
        <link rel="canonical" href="https://devtrios.com/services/website-development/wordpress-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Trusted WordPress Development Company | Custom WordPress Development Services" />
        <meta
          property="og:description"
          content="Partner with a leading WordPress development company for custom, secure, and scalable websites. Hire expert developers to boost your ROI today."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Trusted WordPress Development Company | Custom WordPress Development Services" />
        <meta
          name="twitter:description"
          content="Partner with a leading WordPress development company for custom, secure, and scalable websites. Hire expert developers to boost your ROI today."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={serviceBannerData} />
      <DevelopmentServices type="wordpress_development" />
      <DevelopmentProcess
        appName={["Our ", <span>Proven Process,</span>, " Products Results"]}
        description="Our structured WordPress development process reduces risk and ensures consistent, high-quality outcomes."
        classes="ios_development_process"
        DevelopmentProcessList={DevelopmentProcessList.wordpress_development}
      />
      <CaseStudies type="wordpress_development" />
      <ProcessShowcase data={ProcessShowcaseList.wordpress_development} />
      <Testimonials list={TestimonialList.wordpress_development} />
      <BlogsSlider />
      <Cta data={ctaData} />
      <Faqs type="wordpress_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
