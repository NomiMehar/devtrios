import React from "react";
import Head from "next/head";
import Banner from "@/app/(pages)/home/Banner/Banner";
import CompaniesSlider from "@/app/(components)/companies-slider/CompaniesSlider";
import CompaniesList from "@/app/(components)/companies-slider/CompaniesList.json";
import AboutDevtrios from "@/app/(components)/about-devtrios/AboutDevtrios";
import AboutHomeList from "@/app/(components)/about-devtrios/AboutHomeList.json";
import DigitalServices from "@/app/(pages)/home/DigitalServices/DigitalServices";
import FeaturedCase from "@/app/(components)/featuredCase/FeaturedCase";
import KeyMetrics from "@/app/(components)/key-metrics/KeyMetrics";
import OurExpertise from "@/app/(components)/our-expertise/OurExpertise";
import TechnologyStack from "@/app/(components)/technology-stack/TechnologyStack";
import Testimonials from "@/app/(components)/testimonials/Testimonials";
import TestimonialList from "@/app/(components)/testimonials/TestimonialList.json";
import OurClients from "@/app/(components)/our-clients/OurClients";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import Awards from "@/app/(components)/awards/Awards";
import Blogs from "@/app/(components)/blogs/Blogs";
import Faqs from "@/app/(components)/faqs/Faqs";

export default function Home() {
  const companiesData = CompaniesList.home;
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
      <Banner />
      <CompaniesSlider
        title={companiesData.title}
        images={companiesData.images}
        basePath={companiesData.basePath}
      />
      <AboutDevtrios
        title={AboutHomeList.title}
        description={AboutHomeList.description}
      />
      <DigitalServices />
      <FeaturedCase />
      <OurExpertise />
      <KeyMetrics />
      <TechnologyStack />
      <Testimonials list={TestimonialList.home} />
      <OurClients />
      <Cta data={ctaData} />
      <Awards noPadding={false} />
      <Blogs noPadding={true} />
      <Faqs type="home" />
    </React.Fragment>
  );
}
