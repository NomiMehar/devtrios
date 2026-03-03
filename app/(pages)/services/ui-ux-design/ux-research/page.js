import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Faqs from "@/app/(components)/faqs/Faqs";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import UiuxBusiness from "@/app/(components)/uiux-business/UiuxBusiness";
import UiuxServices from "@/app/(components)/uiux-services/UiuxServices";
import WhyChooseUiux from "@/app/(components)/why-choose-uiux/WhyChooseUiux";

export default function UxResearch() {
  const bannerData = ServiceBannerList.ux_research;
  const ctaData = CtaList.ux_research;

  return (
    <React.Fragment>
      <Head>
        <title>
          UX Research Services | Evidence-Led Product Decisions | Devtrios
        </title>
        <meta
          name="description"
          content="UX research services that remove guesswork from product decisions. We help teams understand how users behave, where they struggle, and turn insight into clear direction for better outcomes."
        />
        <link rel="canonical" href="https://devtrios.com/services/ui-ux-design/ux-research/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="UX Research Services | Evidence-Led Product Decisions | Devtrios"
        />
        <meta
          property="og:description"
          content="UX research services that remove guesswork from product decisions. We help teams understand how users behave, where they struggle, and turn insight into clear direction for better outcomes."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="UX Research Services | Evidence-Led Product Decisions | Devtrios"
        />
        <meta
          name="twitter:description"
          content="UX research services that remove guesswork from product decisions. We help teams understand how users behave, where they struggle, and turn insight into clear direction for better outcomes."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <UiuxBusiness type="ux_research" />
      <UiuxServices type="ux_research" />
      <CaseStudies type="ux_research" />
      <WhyChooseUiux type="ux_research" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="ux_research" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
