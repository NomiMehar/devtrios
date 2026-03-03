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

export default function ProductDesign() {
  const bannerData = ServiceBannerList.product_design;
  const ctaData = CtaList.product_design;

  return (
    <React.Fragment>
      <Head>
        <title>
          Product Design Services | Design Products That Scale, Convert, and Endure | Devtrios
        </title>
        <meta
          name="description"
          content="Product design services that build digital products users understand, adopt, and keep using. User-led, outcome-driven design from MVPs to mature SaaS platforms."
        />
        <link rel="canonical" href="https://devtrios.com/services/ui-ux-design/product-design/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta
          property="og:title"
          content="Product Design Services | Design Products That Scale, Convert, and Endure | Devtrios"
        />
        <meta
          property="og:description"
          content="Product design services that build digital products users understand, adopt, and keep using. User-led, outcome-driven design from MVPs to mature SaaS platforms."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta
          name="twitter:title"
          content="Product Design Services | Design Products That Scale, Convert, and Endure | Devtrios"
        />
        <meta
          name="twitter:description"
          content="Product design services that build digital products users understand, adopt, and keep using. User-led, outcome-driven design from MVPs to mature SaaS platforms."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <ServiceBanner data={bannerData} />
      <UiuxBusiness type="product_design" />
      <UiuxServices type="product_design" />
      <CaseStudies type="product_design" />
      <WhyChooseUiux type="product_design" />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="product_design" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
