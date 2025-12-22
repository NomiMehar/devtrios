import React from "react";
import Head from "next/head";
import CustomBanner from "@/app/(components)/custom-banner/CustomBanner";
import bannerData from "@/app/(components)/custom-banner/CustomBannerList.json";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import CoreServices from "./CoreServices/CoreServices";
import ComprehensiveServices from "./ComprehensiveServices/ComprehensiveServices";
import EnterpriseSolutions from "./EnterpriseSolutions/EnterpriseSolutions";
import MigrationServices from "./MigrationServices/MigrationServices";
import RealResults from "./RealResults/RealResults";
import ProcessSteps from "@/app/(components)/process-steps/ProcessSteps";
import SupportServices from "@/app/(components)/support-services/SupportServices";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Faqs from "@/app/(components)/faqs/Faqs";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";

export default function ShopifyDevelopment() {
  const customBannerData = bannerData.shopify_development;
  const ctaData = CtaList.shopify_development;

  return (
    <React.Fragment>
      <Head>
        <title>
          Expert Shopify Development Services | Shopify Store Development Company
        </title>
        <meta
          name="description"
          content="Partner with a leading Shopify development agency for custom stores, Shopify Plus solutions, and migration services. Hire expert Shopify developers to drive sales and growth."
        />
        <link rel="canonical" href="https://devtrios.com/services/website-development/shopify-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Expert Shopify Development Services | Shopify Store Development Company" />
        <meta
          property="og:description"
          content="Partner with a leading Shopify development agency for custom stores, Shopify Plus solutions, and migration services. Hire expert Shopify developers to drive sales and growth."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Expert Shopify Development Services | Shopify Store Development Company" />
        <meta
          name="twitter:description"
          content="Partner with a leading Shopify development agency for custom stores, Shopify Plus solutions, and migration services. Hire expert Shopify developers to drive sales and growth."
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
      <WhyChooseUs />
      <CoreServices />
      <ComprehensiveServices />
      <EnterpriseSolutions />
      <MigrationServices />
      <ProcessSteps type="shopify_development" />
      <RealResults />
      <SupportServices type="shopify_development" />
      <CaseStudies type="shopify_development" />
      <Cta data={ctaData} />
      <Faqs type="shopify_development" />
    </React.Fragment>
  );
}

