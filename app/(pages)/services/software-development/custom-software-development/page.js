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

export default function CustomSoftwareDevelopment() {
  const bannerData = ServiceBannerList.custom_software_development;
  const ctaData = CtaList.custom_software_development;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          Custom Software Development Services | Tailored for Your Business Success
        </title>
        <meta
          name="description"
          content="Custom software development services built to scale, secure, and perform reliably. Tailored digital solutions that unlock growth, efficiency, and opportunity for businesses of all sizes."
        />
        <link rel="canonical" href="https://devtrios.com/services/software-development/custom-software-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Custom Software Development Services | Tailored for Your Business Success" />
        <meta
          property="og:description"
          content="Custom software development services built to scale, secure, and perform reliably. Tailored digital solutions that unlock growth, efficiency, and opportunity for businesses of all sizes."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Custom Software Development Services | Tailored for Your Business Success" />
        <meta
          name="twitter:description"
          content="Custom software development services built to scale, secure, and perform reliably. Tailored digital solutions that unlock growth, efficiency, and opportunity for businesses of all sizes."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SoftwareDevelopmentSolutions type="custom_software_solutions" />
      <SoftwareDevelopmentProcess type="custom_software_development" />
      <SoftwareDevelopmentServicesFor type="custom_software_development" />
      <CaseStudies type="custom_software_development" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="custom_software_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
