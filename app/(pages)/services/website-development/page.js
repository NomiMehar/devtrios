import React from "react";
import Head from "next/head";
import CustomBanner from "@/app/(components)/custom-banner/CustomBanner";
import bannerData from "@/app/(components)/custom-banner/CustomBannerList.json";
import CompaniesSlider from "@/app/(components)/companies-slider/CompaniesSlider";
import CompaniesList from "@/app/(components)/companies-slider/CompaniesList.json";
import AboutDevtrios from "@/app/(components)/about-devtrios/AboutDevtrios";
import AboutList from "@/app/(components)/about-devtrios/AboutList.json";
import FeaturedCase from "@/app/(components)/featuredCase/FeaturedCase";
import KeyMetrics from "@/app/(components)/key-metrics/KeyMetrics";
import OurExpertise from "@/app/(components)/our-expertise/OurExpertise";
import TechnologyStack from "@/app/(components)/technology-stack/TechnologyStack";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";
import OurClients from "@/app/(components)/our-clients/OurClients";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import Blogs from "@/app/(components)/blogs/Blogs";
import Faqs from "@/app/(components)/faqs/Faqs";

export default function websiteDevelopment() {
  const customBannerData = bannerData.website_development;
  const companiesData = CompaniesList.website_development;
  const aboutData = AboutList.website_development;
  const ctaData = CtaList.home;

  return (
    <React.Fragment>
      <Head>
        <title>
          Devtrios | Expert Web & App Development, UI/UX Design & Digital
          Marketing
        </title>
        <meta
          name="description"
          content="From modern websites to powerful apps and marketing Devtrios helps businesses scale with innovative design, technology, and performance-focused solutions."
        />
        <link rel="canonical" href="https://devtrios.com/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Devtrios" />
        <meta
          property="og:description"
          content="From modern websites to powerful apps and marketing Devtrios helps businesses scale with innovative design, technology, and performance-focused solutions."
        />
        <meta
          property="og:image"
          content="/assets/images/header/favicon.webp"
        />
        <meta name="twitter:title" content="Devtrios" />
        <meta
          name="twitter:description"
          content="From modern websites to powerful apps and marketing Devtrios helps businesses scale with innovative design, technology, and performance-focused solutions."
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
        description={companiesData.description}
        basePath={companiesData.basePath}
      />
      <AboutDevtrios
        title={aboutData.title}
        description={aboutData.description}
      />
      <FeaturedCase />
      <OurExpertise />
      <KeyMetrics />
      <TechnologyStack />
      <Testimonials list={TestimonialList.home} />
      <OurClients />
      <Cta data={ctaData} />
      <Blogs noPadding={true} />
      <Faqs type="home" />
    </React.Fragment>
  );
}
