import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import SoftwareDevelopmentSolutions from "@/app/(components)/software-development-solutions/SoftwareDevelopmentSolutions";
import SoftwareDevelopmentProcess from "@/app/(components)/software-development-process/SoftwareDevelopmentProcess";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import WhoWeBuildFor from "@/app/(components)/who-we-build-for/WhoWeBuildFor";
import WhoWeBuildForList from "@/app/(components)/who-we-build-for/WhoWeBuildForList.json";

export default function ApiDevelopment() {
  const bannerData = ServiceBannerList.api_development;
  const ctaData = CtaList.api_development;
  const modernizationData = WhoWeBuildForList.api_modernization;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          API Development Services | Seamless Connectivity Solutions
        </title>
        <meta
          name="description"
          content="Premier API development services for seamless connectivity. Custom API development, third-party integrations, and secure enterprise API solutions built to scale."
        />
        <link rel="canonical" href="https://devtrios.com/services/software-development/api-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="API Development Services | Seamless Connectivity Solutions" />
        <meta
          property="og:description"
          content="Premier API development services for seamless connectivity. Custom API development, third-party integrations, and secure enterprise API solutions built to scale."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="API Development Services | Seamless Connectivity Solutions" />
        <meta
          name="twitter:description"
          content="Premier API development services for seamless connectivity. Custom API development, third-party integrations, and secure enterprise API solutions built to scale."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SoftwareDevelopmentSolutions type="api_solutions" />
      <SoftwareDevelopmentProcess type="api_development" />
      <WhoWeBuildFor data={modernizationData} />
      <CaseStudies type="api_development" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="api_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
