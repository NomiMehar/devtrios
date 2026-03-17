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

export default function WireframingPrototyping() {
  const bannerData = ServiceBannerList.wireframing_prototyping;
  const ctaData = CtaList.wireframing_prototyping;

  return (
    <React.Fragment>
      <Head>
        <title>
          Wireframing & Prototyping Services | Turn Ideas Into Testable Product Blueprints | Devtrios
        </title>
        <meta
          name="description"
          content="Wireframing and prototyping services that turn ideas into clear, testable product blueprints. Visualise, validate, and refine products before development to reduce risk and move faster."
        />
        <link rel="canonical" href="https://devtrios.com/services/ui-ux-design/wireframes-prototypes/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="Wireframing & Prototyping Services | Turn Ideas Into Testable Product Blueprints | Devtrios"
        />
        <meta
          property="og:description"
          content="Wireframing and prototyping services that turn ideas into clear, testable product blueprints. Visualise, validate, and refine products before development to reduce risk and move faster."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="Wireframing & Prototyping Services | Turn Ideas Into Testable Product Blueprints | Devtrios"
        />
        <meta
          name="twitter:description"
          content="Wireframing and prototyping services that turn ideas into clear, testable product blueprints. Visualise, validate, and refine products before development to reduce risk and move faster."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <UiuxBusiness type="wireframing_prototyping" />
      <UiuxServices type="wireframing_prototyping" />
      <CaseStudies type="wireframing_prototyping" />
      <WhyChooseUiux type="wireframing_prototyping" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="wireframing_prototyping" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}

