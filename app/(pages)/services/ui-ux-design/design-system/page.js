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

export default function DesignSystem() {
  const bannerData = ServiceBannerList.design_system;
  const ctaData = CtaList.design_system;

  return (
    <React.Fragment>
      <Head>
        <title>
          Design System Services | Build Consistent, Scalable Products | Devtrios
        </title>
        <meta
          name="description"
          content="Design system services that build consistent, scalable products without design debt. A single source of truth for UI components, patterns, and rules."
        />
        <link rel="canonical" href="https://devtrios.com/services/ui-ux-design/design-system/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="Design System Services | Build Consistent, Scalable Products | Devtrios"
        />
        <meta
          property="og:description"
          content="Design system services that build consistent, scalable products without design debt. A single source of truth for UI components, patterns, and rules."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="Design System Services | Build Consistent, Scalable Products | Devtrios"
        />
        <meta
          name="twitter:description"
          content="Design system services that build consistent, scalable products without design debt. A single source of truth for UI components, patterns, and rules."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <UiuxBusiness type="design_system" />
      <UiuxServices type="design_system" />
      <CaseStudies type="design_system" />
      <WhyChooseUiux type="design_system" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="design_system" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
