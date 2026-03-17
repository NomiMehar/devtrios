import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import MobileServiceListPreview from "@/app/(components)/mobile-service-list-preview/MobileServiceListPreview";
import MobileServiceListPreviewList from "@/app/(components)/mobile-service-list-preview/MobileServiceListPreviewList.json";
import MobileProcessTimeline from "@/app/(components)/mobile-process-timeline/MobileProcessTimeline";
import MobileProcessTimelineList from "@/app/(components)/mobile-process-timeline/MobileProcessTimelineList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import WhoWeBuildForMobile from "@/app/(components)/who-we-build-for-mobile/WhoWeBuildForMobile";
import WhoWeBuildForMobileList from "@/app/(components)/who-we-build-for-mobile/WhoWeBuildForMobileList.json";
import WhyTrustForMobile from "@/app/(components)/why-trust-for-mobile/WhyTrustForMobile";
import WhyTrustForMobileList from "@/app/(components)/why-trust-for-mobile/WhyTrustForMobileList.json";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";

export default function IosAppDevelopment() {
  const bannerData = ServiceBannerList.ios_app_development;
  const serviceListData = MobileServiceListPreviewList.ios_app_development;
  const processData = MobileProcessTimelineList.ios_app_development;
  const whoWeBuildForData = WhoWeBuildForMobileList.ios_app_development;
  const whyTrustData = WhyTrustForMobileList.ios_app_development;
  const ctaData = CtaList.ios_app_development;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          iOS App Development Services | Scalable, High-Performance Applications
        </title>
        <meta
          name="description"
          content="Professional iOS app development services for businesses building consumer and enterprise-grade applications. We design and develop native iPhone and iPad apps focused on usability, performance, security, and long-term growth."
        />
        <link rel="canonical" href="https://devtrios.com/services/mobile-app-development/ios-app-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="iOS App Development Services | Scalable, High-Performance Applications" />
        <meta
          property="og:description"
          content="Professional iOS app development services for businesses building consumer and enterprise-grade applications. We design and develop native iPhone and iPad apps focused on usability, performance, security, and long-term growth."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="iOS App Development Services | Scalable, High-Performance Applications" />
        <meta
          name="twitter:description"
          content="Professional iOS app development services for businesses building consumer and enterprise-grade applications. We design and develop native iPhone and iPad apps focused on usability, performance, security, and long-term growth."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <MobileServiceListPreview data={serviceListData} />
      <MobileProcessTimeline data={processData} />
      <CaseStudies type="ios_app_development" />
      <WhoWeBuildForMobile data={whoWeBuildForData} />
      <WhyTrustForMobile data={whyTrustData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="ios_app_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
