import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import SocialMediaServices from "@/app/(components)/social-media-services/SocialMediaServices";
import SocialMediaPlatforms from "@/app/(components)/social-media-platforms/SocialMediaPlatforms";
import SocialMediaProcess from "@/app/(components)/social-media-process/SocialMediaProcess";
import WhySocialMedia from "@/app/(components)/why-social-media/WhySocialMedia";
import WhyTrustForMobile from "@/app/(components)/why-trust-for-mobile/WhyTrustForMobile";
import WhyTrustForMobileList from "@/app/(components)/why-trust-for-mobile/WhyTrustForMobileList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import Faqs from "@/app/(components)/faqs/Faqs";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";

export default function SocialMediaManagement() {
  const bannerData = ServiceBannerList.social_media_management;
  const ctaData = CtaList.social_media_management;
  const whoThisIsForData = WhyTrustForMobileList.social_media_management;

  return (
    <React.Fragment>
      <Head>
        <title>Social Media Management Services | Consistent, Strategic Social Media | Devtrios</title>
        <meta
          name="description"
          content="Social media management services focused on consistent, strategic execution, brand clarity, and measurable outcomes—without extra internal overhead."
        />
        <link rel="canonical" href="https://devtrios.com/services/social-media-management/" />
        <link rel="shortcut icon" href="/assets/images/header/favicon.webp" type="image/x-icon" />
      </Head>
      <ServiceBanner data={bannerData} />
      <SocialMediaServices sectionKey="social_media_management" />
      <SocialMediaPlatforms />
      <CaseStudies type="seo_services" />
      <SocialMediaProcess />
      <BlogsSlider />
      <WhySocialMedia />
      <WhyTrustForMobile data={whoThisIsForData} />
      <Cta data={ctaData} />
      <Faqs type="social_media_management" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
