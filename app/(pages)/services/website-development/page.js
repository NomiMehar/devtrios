import React from "react";
import Head from "next/head";
import CustomBanner from "@/app/(components)/custom-banner/CustomBanner";
import bannerData from "@/app/(components)/custom-banner/CustomBannerList.json";
import WebsiteFeatures from "@/app/(components)/website-features/WebsiteFeatures";
import WebsiteServices from "@/app/(components)/website-services/WebsiteServices";
import WebsiteWhyChoose from "@/app/(components)/website-why-choose/WebsiteWhyChoose";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";

export default function websiteDevelopment() {
  const customBannerData = bannerData.website_development;
  const ctaData = CtaList.website_development;
  return (
    <React.Fragment>
      <Head>
        <title>
          Website Development Services | High-Performance Websites That Convert
        </title>
        <meta
          name="description"
          content="We design and develop fast, secure, and conversion-focused websites that help businesses attract traffic, engage users, and turn visitors into customers."
        />
        <link rel="canonical" href="https://devtrios.com/services/website-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Website Development Services | High-Performance Websites That Convert" />
        <meta
          property="og:description"
          content="We design and develop fast, secure, and conversion-focused websites that help businesses attract traffic, engage users, and turn visitors into customers."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Website Development Services | High-Performance Websites That Convert" />
        <meta
          name="twitter:description"
          content="We design and develop fast, secure, and conversion-focused websites that help businesses attract traffic, engage users, and turn visitors into customers."
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
      <WebsiteFeatures />
      <WebsiteServices />
      <WebsiteWhyChoose />
        <Cta data={ctaData} />
    </React.Fragment>
  );
}
