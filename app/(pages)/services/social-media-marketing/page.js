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
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import Faqs from "@/app/(components)/faqs/Faqs";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";

export default function SocialMediaMarketing() {
  const bannerData = ServiceBannerList.social_media_marketing;
  const ctaData = CtaList.social_media_marketing;
  const whoThisIsForData = WhyTrustForMobileList.social_media_marketing;

  return (
    <React.Fragment>
      <Head>
        <title>Social Media Marketing Services | Social Media That Builds Demand | Devtrios</title>
        <meta name="description" content="Social media marketing services that strengthen positioning, create demand, and support revenue with purposeful content." />
        <link rel="canonical" href="https://devtrios.com/services/social-media-marketing/" />
        <link rel="shortcut icon" href="/assets/images/header/favicon.webp" type="image/x-icon" />
      </Head>
      <ServiceBanner data={bannerData} />
      <SocialMediaServices sectionKey="social_media_marketing" />
      <SocialMediaPlatforms />
      <CaseStudies type="seo_services" />
      <SocialMediaProcess />
      <BlogsSlider />
      <WhySocialMedia />
      <WhyTrustForMobile data={whoThisIsForData} />
      <Testimonials list={TestimonialList.social_media_marketing} />
      <Cta data={ctaData} />
      <Faqs type="social_media_marketing" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
