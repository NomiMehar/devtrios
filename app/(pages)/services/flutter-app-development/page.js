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

export default function FlutterAppDevelopment() {
  const bannerData = ServiceBannerList.flutter_app_development;
  const serviceListData = MobileServiceListPreviewList.flutter_app_development;
  const processData = MobileProcessTimelineList.flutter_app_development;
  const whoWeBuildForData = WhoWeBuildForMobileList.flutter_app_development;
  const whyTrustData = WhyTrustForMobileList.flutter_app_development;
  const ctaData = CtaList.flutter_app_development;
  
  return (
    <React.Fragment>
      <Head>
        <title>
          Flutter App Development Services | Scalable, Cross-Platform Applications
        </title>
        <meta
          name="description"
          content="Professional Flutter app development services for businesses that need speed, scalability, and consistency across iOS and Android. We build cross-platform mobile applications that perform reliably in real-world conditions."
        />
        <link rel="canonical" href="https://devtrios.com/services/mobile-app-development/flutter-app-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Flutter App Development Services | Scalable, Cross-Platform Applications" />
        <meta
          property="og:description"
          content="Professional Flutter app development services for businesses that need speed, scalability, and consistency across iOS and Android. We build cross-platform mobile applications that perform reliably in real-world conditions."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Flutter App Development Services | Scalable, Cross-Platform Applications" />
        <meta
          name="twitter:description"
          content="Professional Flutter app development services for businesses that need speed, scalability, and consistency across iOS and Android. We build cross-platform mobile applications that perform reliably in real-world conditions."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <MobileServiceListPreview data={serviceListData} />
      <MobileProcessTimeline data={processData} />
      <CaseStudies type="flutter_app_development" />
      <WhoWeBuildForMobile data={whoWeBuildForData} />
      <WhyTrustForMobile data={whyTrustData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="flutter_app_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
