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

export default function UiDesign() {
  const bannerData = ServiceBannerList.ui_design;
  const ctaData = CtaList.ui_design;

  return (
    <React.Fragment>
      <Head>
        <title>
          UI Design Services | Interfaces That Drive Confident User Actions | Devtrios
        </title>
        <meta
          name="description"
          content="UI design services that turn interfaces into confident user actions. We focus on clarity, consistency, and usability so your product feels reliable, intuitive, and professional."
        />
        <link rel="canonical" href="https://devtrios.com/services/ui-ux-design/ui-design/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="UI Design Services | Interfaces That Drive Confident User Actions | Devtrios"
        />
        <meta
          property="og:description"
          content="UI design services that turn interfaces into confident user actions. We focus on clarity, consistency, and usability so your product feels reliable, intuitive, and professional."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="UI Design Services | Interfaces That Drive Confident User Actions | Devtrios"
        />
        <meta
          name="twitter:description"
          content="UI design services that turn interfaces into confident user actions. We focus on clarity, consistency, and usability so your product feels reliable, intuitive, and professional."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <UiuxBusiness type="ui_design" />
      <UiuxServices type="ui_design" />
      <CaseStudies type="ui_design" />
      <WhyChooseUiux type="ui_design" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="ui_design" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
