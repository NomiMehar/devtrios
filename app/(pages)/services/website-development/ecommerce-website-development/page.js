import React from "react";
import Head from "next/head";
import CustomBanner from "@/app/(components)/custom-banner/CustomBanner";
import bannerData from "@/app/(components)/custom-banner/CustomBannerList.json";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import CoreServices from "./CoreServices/CoreServices";
import ProcessSteps from "@/app/(components)/process-steps/ProcessSteps";
import SupportServices from "@/app/(components)/support-services/SupportServices";
import Faqs from "@/app/(components)/faqs/Faqs";

export default function EcommerceWebsiteDevelopment() {
  const customBannerData = bannerData.ecommerce_website_development;
  const ctaData = CtaList.ecommerce_website_development;

  return (
    <React.Fragment>
      <Head>
        <title>
          E-Commerce Website Development Services | Devtrios
        </title>
        <meta
          name="description"
          content="Professional eCommerce website development services. Build high-performance online stores with custom solutions, enterprise platforms, and ongoing support."
        />
        <link rel="canonical" href="https://devtrios.com/services/website-development/ecommerce-website-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="E-Commerce Website Development Services | Devtrios" />
        <meta
          property="og:description"
          content="Professional eCommerce website development services. Build high-performance online stores with custom solutions, enterprise platforms, and ongoing support."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="E-Commerce Website Development Services | Devtrios" />
        <meta
          name="twitter:description"
          content="Professional eCommerce website development services. Build high-performance online stores with custom solutions, enterprise platforms, and ongoing support."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/favicon.webp"
        />
      </Head>
      <CustomBanner
        title={customBannerData.title}
        description={customBannerData.description}
        buttons={customBannerData.buttons}
        background={customBannerData.background}
        isLongContent={true}
      />
      <CoreServices />
      <ProcessSteps type="ecommerce_website_development" />
      <SupportServices type="ecommerce_website_development" />
      <Cta data={ctaData} />
      <Faqs type="ecommerce_website_development" />
    </React.Fragment>
  );
}
