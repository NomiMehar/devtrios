import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import SoftwareDevelopmentSolutions from "@/app/(components)/software-development-solutions/SoftwareDevelopmentSolutions";
import SoftwareDevelopmentServicesFor from "@/app/(components)/software-development-services-for/SoftwareDevelopmentServicesFor";
import SoftwareDevelopmentProcess from "@/app/(components)/software-development-process/SoftwareDevelopmentProcess";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";

export default function SaasDevelopment() {
  const bannerData = ServiceBannerList.saas_development;
  const ctaData = CtaList.saas_development;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          SaaS Development Services | Scalable, High-Performance Solutions
        </title>
        <meta
          name="description"
          content="Custom SaaS development services built to scale, secure, and perform reliably. High-performance SaaS solutions designed to solve unique business challenges and drive efficiency, growth, and user engagement."
        />
        <link rel="canonical" href="https://devtrios.com/services/software-development/saas-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="SaaS Development Services | Scalable, High-Performance Solutions" />
        <meta
          property="og:description"
          content="Custom SaaS development services built to scale, secure, and perform reliably. High-performance SaaS solutions designed to solve unique business challenges and drive efficiency, growth, and user engagement."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="SaaS Development Services | Scalable, High-Performance Solutions" />
        <meta
          name="twitter:description"
          content="Custom SaaS development services built to scale, secure, and perform reliably. High-performance SaaS solutions designed to solve unique business challenges and drive efficiency, growth, and user engagement."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SoftwareDevelopmentSolutions type="saas_solutions" />
      <SoftwareDevelopmentProcess type="saas_development" />
      <SoftwareDevelopmentServicesFor type="saas_development" />
      <CaseStudies type="saas_development" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="saas_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
