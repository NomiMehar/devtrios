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

export default function UxAudit() {
  const bannerData = ServiceBannerList.ux_audit;
  const ctaData = CtaList.ux_audit;

  return (
    <React.Fragment>
      <Head>
        <title>
          UX Audit Services | Find and Fix UX Friction | Devtrios
        </title>
        <meta
          name="description"
          content="UX audit services that reveal what’s blocking conversions, adoption, and growth. We identify where users get stuck and provide a clear, prioritised roadmap for improvement."
        />
        <link rel="canonical" href="https://devtrios.com/services/ui-ux-design/ux-audit/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="UX Audit Services | Find and Fix UX Friction | Devtrios"
        />
        <meta
          property="og:description"
          content="UX audit services that reveal what’s blocking conversions, adoption, and growth. We identify where users get stuck and provide a clear, prioritised roadmap for improvement."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="UX Audit Services | Find and Fix UX Friction | Devtrios"
        />
        <meta
          name="twitter:description"
          content="UX audit services that reveal what’s blocking conversions, adoption, and growth. We identify where users get stuck and provide a clear, prioritised roadmap for improvement."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <UiuxBusiness type="ux_audit" />
      <UiuxServices type="ux_audit" />
      <CaseStudies type="ux_audit" />
      <WhyChooseUiux type="ux_audit" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="ux_audit" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}

