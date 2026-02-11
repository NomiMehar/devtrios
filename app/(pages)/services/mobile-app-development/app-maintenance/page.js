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

export default function AppMaintenance() {
  const bannerData = ServiceBannerList.app_maintenance;
  const serviceListData = MobileServiceListPreviewList.app_maintenance;
  const processData = MobileProcessTimelineList.app_maintenance;
  const whoWeBuildForData = WhoWeBuildForMobileList.app_maintenance;
  const whyTrustData = WhyTrustForMobileList.app_maintenance;
  const ctaData = CtaList.app_maintenance;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          Mobile App Maintenance Services | Secure, Stable, and Scalable
        </title>
        <meta
          name="description"
          content="Professional mobile app maintenance services to keep your applications secure, stable, and scalable. We handle monitoring, updates, optimisation, and support so your app continues to deliver value long after launch."
        />
        <link rel="canonical" href="https://devtrios.com/services/mobile-app-development/app-maintenance/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Mobile App Maintenance Services | Secure, Stable, and Scalable" />
        <meta
          property="og:description"
          content="Professional mobile app maintenance services to keep your applications secure, stable, and scalable. We handle monitoring, updates, optimisation, and support so your app continues to deliver value long after launch."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Mobile App Maintenance Services | Secure, Stable, and Scalable" />
        <meta
          name="twitter:description"
          content="Professional mobile app maintenance services to keep your applications secure, stable, and scalable. We handle monitoring, updates, optimisation, and support so your app continues to deliver value long after launch."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <MobileServiceListPreview data={serviceListData} />
      <MobileProcessTimeline data={processData} />
      <CaseStudies type="app_maintenance" />
      <WhoWeBuildForMobile data={whoWeBuildForData} />
      <WhyTrustForMobile data={whyTrustData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="app_maintenance" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}

