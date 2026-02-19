import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import SoftwareDevelopmentSolutions from "@/app/(components)/software-development-solutions/SoftwareDevelopmentSolutions";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import WhoWeBuildFor from "@/app/(components)/who-we-build-for/WhoWeBuildFor";
import WhoWeBuildForList from "@/app/(components)/who-we-build-for/WhoWeBuildForList.json";

export default function MvpDevelopment() {
  const bannerData = ServiceBannerList.mvp_development;
  const ctaData = CtaList.mvp_development;
  const speedToMarketData = WhoWeBuildForList.mvp_speed_to_market;
  const buildingForFutureData = WhoWeBuildForList.mvp_building_for_future;
  const whyFoundersTrustData = WhoWeBuildForList.mvp_why_founders_trust;
  const successStoriesData = WhoWeBuildForList.mvp_success_stories;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          MVP Development Services | Launch Your Startup Faster
        </title>
        <meta
          name="description"
          content="Expert MVP development services to turn your groundbreaking idea into a market-ready product. Rapid prototyping, SaaS and mobile app development, and product validation services."
        />
        <link rel="canonical" href="https://devtrios.com/services/software-development/mvp-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="MVP Development Services | Launch Your Startup Faster" />
        <meta
          property="og:description"
          content="Expert MVP development services to turn your groundbreaking idea into a market-ready product. Rapid prototyping, SaaS and mobile app development, and product validation services."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="MVP Development Services | Launch Your Startup Faster" />
        <meta
          name="twitter:description"
          content="Expert MVP development services to turn your groundbreaking idea into a market-ready product. Rapid prototyping, SaaS and mobile app development, and product validation services."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <SoftwareDevelopmentSolutions type="mvp_solutions" />
      <WhoWeBuildFor data={speedToMarketData} />
      <WhoWeBuildFor data={buildingForFutureData} reverse={true} />
      <WhoWeBuildFor data={whyFoundersTrustData} />
      <WhoWeBuildFor data={successStoriesData} reverse={true} />
      <CaseStudies type="mvp_development" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="mvp_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
