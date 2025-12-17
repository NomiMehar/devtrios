import React from "react";
import Head from "next/head";
import CustomBanner from "@/app/(components)/custom-banner/CustomBanner";
import bannerData from "@/app/(components)/custom-banner/CustomBannerList.json";
import CompaniesSlider from "@/app/(components)/companies-slider/CompaniesSlider";
import CompaniesList from "@/app/(components)/companies-slider/CompaniesList.json";
import OurServices from "@/app/(pages)/services/OurServices/OurServices";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import Blogs from "@/app/(components)/blogs/Blogs";
import Faqs from "@/app/(components)/faqs/Faqs";
import AppFeaturedCase from "@/app/(components)/app-featured-case/AppFeaturedCase";

export default function Services() {
  const customBannerData = bannerData.services;
  const companiesData = CompaniesList.services;
  const ctaData = CtaList.services;

  return (
    <React.Fragment>
      <Head>
        <title>Devtrios Services – Complete Digital Transformation</title>
        <meta
          name="description"
          content="Discover Devtrios’ full suite of services from software, AI, SEO, to cloud & blockchain. Drive growth with expert digital solutions."
        />
        <link rel="canonical" href="https://devtrios.com/services/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Devtrios" />
        <meta
          property="og:description"
          content="Discover Devtrios’ full suite of services from software, AI, SEO, to cloud & blockchain. Drive growth with expert digital solutions."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Devtrios" />
        <meta
          name="twitter:description"
          content="Discover Devtrios’ full suite of services from software, AI, SEO, to cloud & blockchain. Drive growth with expert digital solutions."
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
      />
      <CompaniesSlider
        title={companiesData.title}
        images={companiesData.images}
        basePath={companiesData.basePath}
        description={companiesData.description}
      />
      <OurServices />
      <AppFeaturedCase/>
      <Testimonials list={TestimonialList.about_us} />
      <Cta data={ctaData} />
      <Blogs />
      <Faqs type="services" />
    </React.Fragment>
  );
}
